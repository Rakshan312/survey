var form;
var survey;
var submit;
var voterCount =0;
var voterResponse =0;
var voterResponse_text

var voterEmail =0;

function setup() {
  createCanvas(1000,1000);

  title =createElement('h1');
  title.html("A Survey To Bring About Change");
  title.position(300,5);

  greeting =createElement('h2');
  fill("blue");
  greeting.html("A Survey to make your school a better place.");
  greeting.position(310,80);

    question1 =createElement('h3'," Q1. Would you be willing to donate some money to help develop the school ?");
    question1.position(40,190);
    quest1 =createRadio();
    quest1.option("YES");
    quest1.option("NO");
    quest1_value =quest1.value();
    quest1.style('width','200px');
    quest1.position(100,250);


      question2 =createElement('h3',"Q2. Do you think we need to have free lunch meals in our school canteen for poor kids ?" );
      question2.position(40,290);
      quest2 =createRadio();
      quest2.option("YES");
      quest2.option("NO");
      quest2_value =quest2.value();
      quest2.position(100,340);

        question3 =createElement('h3', "Q3. How much will you be willing to donate for this program per month ?");
        question3.position(40,380);
        quest3 =createRadio();
        quest3.option("100");
        quest3.option("250");
        quest3.option("500");
        quest3.option("650");
        quest3_value =quest3.value();
        quest3.position(100,440);


        question4 =createElement('h3', "Q4. Would you like the school to start coding classes ?");
        question4.position(40,480);
        quest4 =createRadio();
        quest4.option("Yes");
        quest4.option("No");       
        quest4_value =quest4.value();
        quest4.position(100,540);

        question5 =createElement('h3', "Q5. Would you like regular quizes in the school to test your knowledge ?");
        question5.position(40,575);
        quest5 =createRadio();
        quest5.option("Yes");
        quest5.option("No");       
        quest5_value =quest4.value();
        quest5.position(100,635);
 
 
email1 = createElement("h3");
email1.html("Enter Your Email Id ");
email1.position(500,840);
email_input  = createInput();
email_input.style('width', '250px')
email_input.position(500,900);

     
  submit = createButton("Submit");
  submit.position(650,950);
  submit.style('margin-bottom', '20px');

  voterResponse_text =createElement('h3');
  voterResponse_text.html("Any Opinion to improve the school...");
  voterResponse_text.position(100,840);
  voterResponse =createInput("Enter your valued opinion here");
  voterResponse.style('width', '250px');
  voterResponse.position(140,900);
}

function draw() {
  background("lightBlue");  
  submit.mousePressed(() => {

    voter1.push(question_1.value());
    voter2.push(question_2.value());
    voter3.push(question_3.value());
    voter4.push(question_4.value());
  
    voterEmailList.push(email_input.value());
  
    question_1_vote();
    question_2_vote();
    question_3_vote();
    question_4_vote();
  
    count = count + 1;
    updateVoterCount();
  
    updateInputEmail();
    
  })
    
  }
  
    voterCount.update(console.log);
  voterEmail.update(console.log);

  drawSprites();
