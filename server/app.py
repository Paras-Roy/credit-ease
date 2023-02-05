from flask import Flask,jsonify,request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='credit-ease/build', static_url_path='')
CORS(app)

#stuff ---------------------------------
import pandas as pd
import numpy as np

df = pd.read_csv(r"Training Data.csv")


df1 = df[df['risk_flag']==0]
df2 = df[df['risk_flag']==1]

from sklearn.utils import shuffle
df1 = shuffle(df1)
df1=df1.reset_index()
df1 = df1.iloc[0:100000,:]

df1 = df1.drop('index',axis=1)

df = pd.concat([df1,df2],ignore_index=True)
df=shuffle(df)
df=df.reset_index()

df = df.drop('index',axis=1)

df1 = df[df['risk_flag']==1]
df = pd.concat([df,df1],ignore_index=True)

df=shuffle(df)
df=df.reset_index()
df = df.drop('index',axis=1)
df['risk_flag'].value_counts()




drop_cols = ['Id','city']
#onehot encoded columns
target_col = ['car_ownership','house_ownership','married','current_job_years','current_house_years','experience','state','profession']
#label encoded columns
object_cols=[]
df = df.drop(drop_cols,axis = 1)




from sklearn.preprocessing import OneHotEncoder
'''extracting encoded data'''
enc=OneHotEncoder(handle_unknown='ignore', sparse=False)
enc_data = pd.DataFrame(enc.fit_transform(df[target_col]))

one_hot_encoded_data = pd.get_dummies(df, columns = target_col)

'''updating our dataset without distroying our raw dataframe'''
df_new = df.join(enc_data)
df_new.columns = df_new.columns.astype('str')
df_new = df_new.drop(target_col,axis = 1)




'''our y as y_data'''
y_data = df_new['risk_flag']

'''our x as x_data'''
x_data = df_new.drop(['risk_flag'],axis = 1)




from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(x_data,y_data,random_state=47,test_size=0.20)




from sklearn.preprocessing import MinMaxScaler,StandardScaler

scaled_col= ['income','age']
scaler=StandardScaler()
X_train.loc[:,scaled_col] = scaler.fit_transform(X_train.loc[:,scaled_col])
X_test.loc[:,scaled_col] = scaler.transform(X_test.loc[:,scaled_col])





from sklearn.neighbors import KNeighborsClassifier
clasify = KNeighborsClassifier(n_neighbors=5, weights='distance',leaf_size=5)
x_help = X_train.copy()
y_help = Y_train.copy()
clasify.fit(x_help,y_help)


y_pred=clasify.predict(x_help)



import math
import random

def find_my_nearest_people_help(x_help_array , y_pred_array , data , no_people,index):
    '''this function finds the nearest neighbour in the data set and return list of 
    those people'''
  
    li = []
    count=0
    
    for i in x_help_array[y_pred_array==1]:
        actual_index = index[count]
        d = math.dist(data,i)
        count = count+1
        li.append((d,i,actual_index))
    li.sort(key=lambda a: a[0])
    return li[0:no_people]

def find_my_nearest_people(x_help , y_pred , user_data):
    '''this function finds the nearest neighbour in the data set and return indexing,
    distances of those people'''
    
    x_help_array = np.array(x_help)
    y_pred_array = y_pred
    no_people = 5
    user_data = np.array(user_data)[0]
   
    indexing = x_help.index[y_pred==1]
    li = find_my_nearest_people_help(x_help_array , y_pred_array , user_data , no_people,indexing)
    
    distances = [x[0] for x in li]
    index_list = [x[2] for x in li]
    return index_list,distances

def refine_input(data):
    '''this function takes raw dataframe and encode and scale them and return dataframe'''
    enc_data = pd.DataFrame(enc.transform(data[target_col]))
    one_hot_encoded_data = pd.get_dummies(data, columns = target_col)
    data = data.join(enc_data)
    data.columns = data.columns.astype('str')
    data.loc[:,scaled_col] = scaler.transform(data.loc[:,scaled_col])
    data = data.drop(target_col,axis = 1)
    return data

def enterred_data(info):
    '''this function takes string and return list of values'''
    li = info.split()
    li[0] = int(li[0])
    li[1] = int(li[1])
    li[2] = int(li[2])
    li[8] = int(li[8])
    li[9] = int(li[9])
    columns_li=['income','age','experience','married','house_ownership','car_ownership','profession','state','current_job_years','current_house_years']
    info_update = pd.DataFrame(np.array(li).reshape(1,-1),columns=columns_li)
    return info_update




def take_input_and_predict():
    '''take input from from user and give classification'''
    data_by_user = input()
    data1 = enterred_data(data_by_user)
    print(data1)
    data1 = refine_input(data1)
    if clasify.predict(data1)[0]==0:
        return 0
        
    else:
        return 1
    

def input_only():
    '''take input from from user and give dataFrame'''
    data_by_user = input()
    data1 = enterred_data(data_by_user)
    data1 = refine_input(data1)    
    return data1 




def _score(data):
    '''score predictor'''
    scored = clasify.predict_proba(data)[0][1]*100
    if scored<25:
        return "Below Requirements"
    elif scored>25 and scored<55:
        return "Fair"
    elif scored>55 and scored<75:
        return "Good"
    else:
        return "Great"
    

def recommend(df):
    '''recommend system'''
    target_col_median = ['income','experience']
    target_col_mode = ['married','house_ownership','car_ownership','current_job_years','current_house_years']
    ans= []
    for i in target_col_median:
        
        ans.append(df[[i]].median()[0])
    for i in target_col_mode:
        ans.append(df[i].value_counts().index[0])
    return ans





def run(inp):
    
    data_of_user = enterred_data(inp)
    data_of_user = refine_input(data_of_user) 
    value = clasify.predict(data_of_user)[0]
    scored = _score(data_of_user)
    keys,dist =find_my_nearest_people(x_help , y_pred , data_of_user)
    hh = df.loc[keys]
    if value==0:
        # return jsonify(value)
        return value,recommend(hh),scored
    else:
        # return jsonify(value)
        return value,"congo! loan approved",scored
#stuff ---------------------------------


@app.route('/api', methods=['POST'])
@cross_origin()
def index():

    rd = request.get_json()

    feat = [rd['income'], rd['age'], rd['experience'], rd['married'], rd['house_ownership'], rd['car_ownership'], rd['profession'], rd['state'], rd['current_job_years'], rd['current_house_years']]

    inp = " ".join(feat)

    result = run(inp)
    
    return{
        # "tutorial":result
        "value": int(result[0]),
        "recc": str(result[1]),
        "grade": str(result[2]),
    }

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')

