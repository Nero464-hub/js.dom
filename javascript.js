let body = document.querySelector('body')
console.log(body);

function handleSignUp(){
    let signupForm = document.createElement('form');
    let Nlabel1 = document.createElement('label');
    let Nlabel2 = document.createElement('label');
    let Nlabel3= document.createElement('label');
    let ninp1 = document.createElement('input');
    let ninp2 = document.createElement('input');
    let ninp3 = document.createElement('input');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span3 = document.createElement('span');
    let header1 = document.createElement('h1');
    let btn2 = document.createElement('button');
    let div2 = document.createElement('div')
    let span4 = document.createElement('span')
    let a2 = document.createElement('button')
    a2.onclick = (event) =>{
        event.preventDefault();
        handleLogin();
    }
    let spanText1 = document.createTextNode('Username');
    let spanText2 = document.createTextNode('Email');
    let spanText3 = document.createTextNode('Password');
    let h1Text = document.createTextNode('Sign-Up');
    let btnText1 = document.createTextNode('Sign-Up');
    let spanText4 = document.createTextNode('click here to');
    let aText1 = document.createTextNode('Login');
    btn2.setAttribute('class','btn2')
    ninp1.placeholder = "Enter your Username";
    ninp2.placeholder = "Enter your Email";
    ninp3.placeholder = "Enter Password";
    span1.appendChild(spanText1);
    span2.appendChild(spanText2);
    span3.appendChild(spanText3);
    span4.appendChild(spanText4);
    Nlabel1.appendChild(span1);
    Nlabel1.appendChild(ninp1);
    Nlabel2.appendChild(span2);
    Nlabel2.appendChild(ninp2);
    Nlabel3.appendChild(span3);
    Nlabel3.appendChild(ninp3);
    header1.appendChild(h1Text);
    btn2.appendChild(btnText1);
    a2.appendChild(aText1);
    div2.appendChild(span4);
    div2.appendChild(a2);
    signupForm.appendChild(header1);
    signupForm.appendChild(Nlabel1);
    signupForm.appendChild(Nlabel2);
    signupForm.appendChild(Nlabel3);
    signupForm.appendChild(btn2);
    signupForm.appendChild(div2);
    let parent = document.querySelector('body');
    let child = document.querySelector('form');
    parent.removeChild(child);
    parent.appendChild(signupForm);
}
function handleLogin(){
    let form = document.createElement('form')
    let header = document.createElement('h1')
    let label1 = document.createElement('label');
    let label2 = document.createElement('label');
    let span1 = document.createElement('span');
    let inp1 = document.createElement('input');
    let span2 = document.createElement('span');
    let inp2 = document.createElement('input');
    let btn1 = document.createElement('button');
    let span3 = document.createElement('span');
    let a1 = document.createElement("button");
    a1.onclick = (event) => {
        event.preventDefault()
        handleSignUp();
    }
    let div = document.createElement('div');
    inp1.placeholder ="Enter your Username";
    inp2.placeholder = "Enter password";
    let hText = document.createTextNode("Login");
    let paraText = document.createTextNode("Username*");
    let paraText1 = document.createTextNode("Password*");
    let spanText = document.createTextNode("Click here to");
    let aText = document.createTextNode("Sign-Up");
    let btnText = document.createTextNode("ENTER");
    header.appendChild(hText);
    span1.appendChild(paraText);
    span1.setAttribute('class','first-para');
    span2.appendChild(paraText1);
    span2.setAttribute('class','second-para');
    btn1.setAttribute('class','btn1')
    span3.appendChild(spanText);
    a1.appendChild(aText);
    label1.appendChild(span1)
    label1.appendChild(inp1)
    label2.appendChild(span2)
    label2.appendChild(inp2)
    div.appendChild(span3);
    div.appendChild(a1);
    btn1.appendChild(btnText);
    form.appendChild(header);
    form.appendChild(label1);
    form.appendChild(label2);
    form.appendChild(btn1);
    form.appendChild(div);
    let parent = document.querySelector('body');
    let child = document.querySelector('form');
    if(child){
        parent.removeChild(child);
    }
    body.appendChild(form)
}
handleLogin()