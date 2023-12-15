function verif1()
{
    
    n=document.getElementById('n').value;
    p=document.getElementById('p').value;
    t=document.getElementById('t').value;
    e=document.getElementById('e').value;
    r1=document.getElementById('r1').value;
    r2=document.getElementById('r2').value;



    if ( n.length==0){
        alert('nom !!!')
        return false
    }
    if( p.length==0){
        alert('prenom !!!')
        return false
    }
    if(t.length!=8){
        alert('telephone!!!!')
        return false
    }
    if(r1=="" || r2==""){
        alert( 'genre !!!')
        return false
    }

    
      if( e.length==0 ){
          alert( 'email !!!!')
          return false
  
     } 
    
}