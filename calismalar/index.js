var kullanicilar=[
    {email:"emiralbayral@gmail.com",sifre:"12345"},
    {email:"emirhanalbayral@gmail.com",sifre:"1234"}


]
var tivitler=[
    {email:"emiralbayral@gmail.com",tivit:"bugün hava çok güzel"},
    {email:"emirhanalbayral@gmail.com",tivit:"bugün hava çok güzel2"},
    {email:"emiralbayral@gmail.com",tivit:"hello world"}

]
var email= prompt("e mail ?")
var sifre=prompt("sifre ?")
function giris(){
    if(email==kullanicilar[0].email&&sifre==kullanicilar[0].sifre||
        email==kullanicilar[1].email&&sifre==kullanicilar[1].sifre){
            console.log(tivitler)

    }
    else{
        console.log("hatalı giriş yaptınız")
    }
    giris(email,sifre)
}


