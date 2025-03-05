import { LightningElement ,track} from 'lwc';
export default class StudentRegistration extends LightningElement {
    @track stuname;
    @track phnum;
    validatename;
    validatephone;
    handlechange(event){
        if(event.target.label == "studentname"){
            this.stuname = event.target.value;
        }
        if(event.target.label == "phonenumber"){
            this.phnum = event.target.value;
        }
    }
    handlecheck(event){
         this.validatename = event.detail.message1;
        this.validatephone = event.detail.message2;

    }
    handlesubmit(){
        this.template.querySelector('c-student-validation').handlevalidation();
       

    }


}