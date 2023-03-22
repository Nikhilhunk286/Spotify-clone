console.log("Welcome to Spotify.")
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName')
let songs=[{songName:"Krishna-flute1",filePath:"songs/0.mp3",coverPath:"pics/Krish1.jpg",timeDuration:"00:24"},{songName:"Krishna-flute2",filePath:"songs/1.mp3",coverPath:"pics/Krish2.jpg",timeDuration:"00:25"},{songName:"Hanuman-chalisa",filePath:"songs/2.mp3",coverPath:"pics/Hanuman1.jpg",timeDuration:"09:46"},{songName:"Aaye-tere-Bhawan",filePath:"songs/3.mp3",coverPath:"pics/Durga-maa1.jpg",timeDuration:"05:19"},{songName:"Majhail",filePath:"songs/4.mp3",coverPath:"pics/Majhail-spotify.jpg",timeDuration:"02:55"},{songName:"Manjha",filePath:"songs/5.mp3",coverPath:"pics/Manjha1.jpg",timeDuration:"03:11"},{songName:"Kana-Yaari",filePath:"songs/6.mp3.mp3",coverPath:"pics/Kaana-yaari1.jpg",timeDuration:"03:46"},{songName:"Naatu-Naatu",filePath:"songs/7.mp3.mp3",coverPath:"pics/Naatu-Naatu1.jpg",timeDuration:"03:28"},{songName:"Parda-daari",filePath:"songs/8.mp3",coverPath:"pics/parda-dari1.jpg",timeDuration:"04:52"},{songName:"Pirates-of-the-caribbean",filePath:"songs/9.mp3",coverPath:"pics/potd1.jpg",timeDuration:"00:27"}]

songItems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
element.getElementsByClassName("timedur")[0].innerText=songs[i].timeDuration;

})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //Here we are adding an eventListener which will chekc if there is any update in time.
    //Update Sidkbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);//Here we are just getting the percentage how much time has progressed.
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;//Here we are just giving the currentTime by using the above equation  and it will automatically tkae us to that part of song.
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllplays();//It's done so that all the elements have play icon and below 2 lines will add pause will add pause button to the elem. on which click event occured.
     
      songIndex=parseInt(e.target.id);
      if((audioElement.paused)||(audioElement.currentTime<=0))
      {
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
      }
      else
      {
        audioElement.pause();
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');
        gif.style.opacity=0;
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

      }
      
    })
})
masterPlay.addEventListener('click',()=>{
   // console.log("HI ",audioElement.src);
   let songcontrol=document.getElementById(songIndex);
 // console.log("Hi ",songcontrol);
// console.log(masterPlay.classList);
console.log(masterPlay);
    if((audioElement.paused)||(audioElement.currentTime<=0))
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')//Here if our audio is being played then it will remove the play icon and add pause icon.It's done by simply changing the pause,play icon.
        gif.style.opacity=1;
        songcontrol.classList.remove('fa-circle-play');
        songcontrol.classList.add('fa-circle-pause')
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        songcontrol.classList.remove('fa-circle-pause');
        songcontrol.classList.add('fa-circle-play')
        gif.style.opacity=0;
    }
})
document.getElementById('next').addEventListener('click',()=>{
 
    
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
    }
    let songcontrol=document.getElementById(songIndex);
    console.log("song idx: ",songIndex);
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    makeAllplays();
    songcontrol.classList.remove('fa-circle-play');
   songcontrol.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex-=1;
    }
    let songcontrol=document.getElementById(songIndex);
    console.log("song idx: ",songIndex);
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    makeAllplays();
    songcontrol.classList.remove('fa-circle-play');
   songcontrol.classList.add('fa-circle-pause');
})
