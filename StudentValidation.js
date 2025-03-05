import { LightningElement ,api ,track} from 'lwc';
export default class StudentValidation extends LightningElement {
    @api childstuname;
    @api childphnum;
    @track validationname;
    @track validationphone;
    @api 
    handlevalidation(){
       if(this.childstuname.length >= 10)
    {
        this.validationname = "student name cannot exceed 10 characters";
        console.log("childstuname");
    }   
    if(this.childphnum >= 13){
        this.validationphone = "phone number should not exceed 13 letters";
        console.log("childphnum");
    } 
    const Event = new CustomEvent('childevent',{detail:{message1: this.validationphone ,message2 : this.validationname}});
    this.dispatchEvent(Event);
    }
}