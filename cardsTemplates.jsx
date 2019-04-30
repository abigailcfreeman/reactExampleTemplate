<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- REACT LIBRARY -->
  <script src="https://unpkg.com/react@15.5.4/dist/react.js"></script>
  <!-- REACT DOM LIBRARY -->
  <script src="https://unpkg.com/react-dom@15.5.4/dist/react-dom.js"></script>
  <!-- BABEL LIBRARY -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.25.0/babel.min.js"></script>
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>FriendLy</title>
</head>
<body>
  <div id="app">React has not rendered yet</div>

  <script type="text/babel">
    
    function FriendLy(props) {
      var friendlyStyle = {
        display: "inline-block",
        margin: 20,
        height: 300,
        width: 200,
        padding: 0,
        backgroundColor: "#FFF",
        WebkitFilter: "drop-shadow(0px 0px 5px #555)",
        filter: "drop-shadow(0px 0px 5px #555)"
      }
      return(
        <div style={friendlyStyle}>
          <Avatar img= {props.img}/>
          <UserName name= {props.name}/>
          <GetConnected/>
        </div>
      );
    }

    function Avatar(props) {
      var avatarStyle = {
        marginLeft: 20,
        marginTop: 20,
        width: 150,
        height: 150,
        borderRadius: "50%"
      }
      return(
        <img src={props.img} style={avatarStyle}/>
      );
    }
  
    function UserName(props) {
      var nameStyle = {
        fontSize: 24,
        textAlign: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
        margin: 20
      }
      return(
        <h1 style={nameStyle}>{props.name}</h1>
      );
    }
   
    function GetConnected() {
        var GetConnectedStyle = {
          marginLeft: 15
 }
      return(
        <div style = {GetConnectedStyle}>
          <Like/>
          <Share/>
          <Add/>
        </div>
      );
    }
      var iconStyle = {
        margin: 20
      }
 
      function Like() {
        return(
          <i className="fa fa-thumbs-o-up" aria-hidden="true" style={iconStyle}></i>
        );
      }
      // Share Component
      function Share() {
        return(
          <i className="fa fa-share" aria-hidden="true" style={iconStyle}></i>
        );
      }
      // Add Component
      function Add() {
        return(
          <i className="fa fa-users" aria-hidden="true" style={iconStyle}></i>
        );
      }
    ReactDOM.render(
      <div>
      <FriendLy name="Abby"
      img ="https://scontent.fmad6-1.fna.fbcdn.net/v/t31.0-8/13323421_1190001281011920_1106649329665874682_o.jpg?_nc_cat=105&_nc_ht=scontent.fmad6-1.fna&oh=992434e2527d2929ab1a2e64eab5e8a5&oe=5D4D0A73"
      />
      <FriendLy name="Kerri"
      img ="https://scontent.fmad6-1.fna.fbcdn.net/v/t1.0-9/57029154_10161705026415375_5440285879564238848_n.jpg?_nc_cat=106&_nc_ht=scontent.fmad6-1.fna&oh=cc16f54d665b16df3f911e9cf489e089&oe=5D062A29"
      />
      <FriendLy name="Julie"
      img ="https://scontent.fmad6-1.fna.fbcdn.net/v/t1.0-9/47396495_534506383682112_5790126672518840320_n.jpg?_nc_cat=103&_nc_ht=scontent.fmad6-1.fna&oh=1d63d76ec530fd98d9500aa361638e2b&oe=5D3E4A57"
      />
      <FriendLy name="Andrew"
      img ="https://scontent.fmad6-1.fna.fbcdn.net/v/t1.0-9/53046566_10219405752037156_2576385709313097728_o.jpg?_nc_cat=111&_nc_ht=scontent.fmad6-1.fna&oh=babcd122f12e42114211fa157247526b&oe=5D043753"
      />
       <FriendLy name="Josiah"
      img ="https://scontent.fmad6-1.fna.fbcdn.net/v/t1.0-9/55541972_2432804233410497_6029429812026671104_n.jpg?_nc_cat=111&_nc_ht=scontent.fmad6-1.fna&oh=50018957841032aed12120f06d654eb3&oe=5D01CC9A"
      />
       <FriendLy name="Stephen"
      img ="https://scontent.fmad6-1.fna.fbcdn.net/v/t1.0-9/55600293_2313188588966299_6615630175767887872_n.jpg?_nc_cat=110&_nc_ht=scontent.fmad6-1.fna&oh=5f0ac88dcfa3104d24513e549075650b&oe=5D05D369"
      />
      </div>,

      document.getElementById("app")
    );
  </script>

</body>
</html>
