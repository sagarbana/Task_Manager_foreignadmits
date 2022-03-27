# Task_Manager_foreignadmits

Index Page API:
https://task-manager-foreignadmits.herokuapp.com/

1.New Tasks List API.     
	GET:    https://task-manager-foreignadmits.herokuapp.com/list/new

  2.Inprogress Task API:
	GET:     https://task-manager-foreignadmits.herokuapp.com/list/inprogress

  3.Completed Task API :
	GET:     https://task-manager-foreignadmits.herokuapp.com/list/completed
	   



#   Create Task API :									
POST : 		https://task-manager-foreignadmits.herokuapp.com/task/create
Body : 
{
	“title”  :  “ “ ,
	“description” : “ “ 
}


#Create Sub-Task API : 		 		

POST :      https://task-manager-foreignadmits.herokuapp.com/sub/task/create
Body: 
{
	taskid : {Object id},  			//referring to Task’s  { _id } field
	“name”  :  “ “ 
}


# Subtask's checkbox for changing status API : INPROGRESS_STATUS to COMPLETED. 		

PUT :    https://task-manager-foreignadmits.herokuapp.com/sub/task?id={ ObjectId }&taskId={ ObjectId }&checkStatus=1
{
	_id : 46156dhgd ,
       taskId : 46156dhgd ,
	“checkStatus”: 1
}


#  Get All Tasks API : 
GET:       https://task-manager-foreignadmits.herokuapp.com/task/all
