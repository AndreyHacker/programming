import React, { Component }  from 'react';
import logo from './logo.svg';
import { render } from '@testing-library/react';
import './Photos.css';
import ReactDOM from 'react-dom';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

export default class Photos extends React.Component {

  constructor(props) {
    super(props)
    
    this.modalWindow = React.createRef();
    this.shadow = React.createRef();
    this.error = React.createRef();
    this.name = React.createRef();
    this.comment = React.createRef();
    this.commentsBox = React.createRef();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      skopeItems: [],
      isSelected: false
    };
  }


  async post(url,textPost){
      try{
        let response = await axios.post(url,textPost);
        console.log(response);
       }catch(e){
         console.log('Error: '+ e);
       }   
    }

  postComment= ()=>{
    let id = this.state.skopeItems.id,
    url = 'https://boiling-refuge-66454.herokuapp.com/images/'+id+'/comments',
    textPost = {
                name:this.name.current.value,
                comment:this.comment.current.value,
                id:id
               };
     if(this.name.current.value == '' || this.comment.current.value == ''){
       this.error.current.innerHTML = 'Вы оставили поле пустым';
    }else{
      
      console.log(this.state.skopeItems.comments);
      this.state.skopeItems.comments.push({name:this.name.current.value+':',text: this.comment.current.value})
      this.skopeImg();
  
    this.name.current.value = '';
    this.comment.current.value = '';
    this.error.current.innerHTML = '';
    }

    this.post(url,textPost);

  }

  async changeState() {
    await axios.get('https://boiling-refuge-66454.herokuapp.com/images/')
     .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.data
        });
      })
      .catch(error =>{
        this.setState({
          isLoaded: true,
          error: error
        })
         
    });
  }

  componentDidMount() {

    this.changeState();
  }

  renderWindow = () => {
   
    return (
      <div className="window" >
        <img src={String(this.state.skopeItems.url)}></img>
        <div className='comments' ref={this.commentsBox}>
          {            
            this.state.skopeItems.comments.map(item =>{
              if(item.name)
                return <p>{item.name+item.text}</p>
              else
                return <p>{'Неизвестный: '+item.text}</p>
            }                                              
           )
          }
        
        </div><div className='inputs'>
        <input type='text' placeholder='Имя' className="nameBox" ref={this.name} />
        <br></br>
        <input type='text' className='commentBox' placeholder='Коментарий' ref={this.comment}/>
        </div>
       
      
        <input type='submit' onClick={this.postComment} value='Отправить' />
        <p ref={this.error} className="error"></p>
      </div>
   )
   
  }
  async skopeFetch(id){
    await axios.get('https://boiling-refuge-66454.herokuapp.com/images/' + id)
     .then(
      (result) => {
        this.setState({
          isLoaded: true,
          skopeItems: result.data
        });
      })
      .catch(error =>{
        this.setState({
          isLoaded: true,
          error: error
        })
         
    });

     this.skopeImg();
  }

   skopeImg() { 
    if(document.querySelector('.window')){

    ReactDOM.hydrate(this.renderWindow(), document.querySelector('.modal_window'));
    
    this.modalWindow.current.style.display = 'block';
    this.shadow.current.style.display = 'block';
    }
  }

  breakSkope(shadow,modalWindow){
    modalWindow.current.style.display = 'none';
    shadow.current.style.display = 'none';
  }

  renderError(error){
    return <p>Error {this.state.error.message}</p>
  }
  loader(){
    return(
    <div className="loader">
       <Loader
         type="Oval"
         color="black"
         height={80}
         width={80}
         timeout={3000}
      />
    </div>
    ) 
  }
  itemsJSX = () => {
      return (
        <div className="Photos">

          <div className="modal_window" style={{display:'block'}} ref={this.modalWindow}>
            <div className='window'></div>
          </div>

          <div className='shadow' onClick={()=>{this.breakSkope(this.shadow,this.modalWindow)}} ref={this.shadow}></div>
          {
            this.state.items.map(item => (
              <img src={item.url} id={item.id} onClick={() => this.skopeFetch(item.id)} />
            )
           )
          }
        </div >
      );
    }
  

  render() {
    if(this.state.error){
      return this.renderError()
    }
    else if (!this.state.isLoaded) {
      return this.loader();
    }else{
      return this.itemsJSX()
    }
  }
}





