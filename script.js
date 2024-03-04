function check(){
    let Fname = document.getElementById('fname').value;
    let Lname = document.getElementById('lname').value;
    let Email = document.getElementById('email').value;
    let PhonNo = document.getElementById('pno').value;
    let Pwd = document.getElementById('pwd').value;
    let CPwd = document.getElementById('cpwd').value;
    let Msg = document.getElementById('error-msg');

        if(Fname == ''){
            Msg.textContent = 'Firstname is required';
        }
        else if(Lname == 0){
            Msg.textContent = 'Lastname is required'
        }
        else if(Email == 0){
            Msg.textContent = 'Please enter Email Address'
        }
        else if(PhonNo == 0){
            Msg.textContent = 'Please enter phonenumber'
        }
        else{
            if( Pwd <= 6){
                Msg.textContent = 'Please enter a minimum 6 character'
            }else if(CPwd == ''){
                Msg.textContent = 'Please fill the confirm password'
            }
            else if(Pwd !== CPwd ){
                Msg.textContent = 'Password Not Match'
            }
            else{
                Msg.textContent = ''
            }
        }
};