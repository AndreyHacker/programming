import React from 'react';
import logo from './logo.svg';
import { render } from '@testing-library/react';
import './Photos.css';
import ReactDOM from 'react-dom';
import axios from 'axios';


const clientWidth = String(document.body.clientWidth);
const clientHeight = String(document.body.clientHeight);
let windowWidth = String(document.body.clientWidth * 0.4);
let windowHeight = String(document.body.clientHeight * 0.4);

export default class Photos extends React.Component {

  constructor(props) {
    super(props)
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
    
    let text = document.querySelectorAll('input[type=text]'),
    comments = document.querySelector('.comments'),
    id = this.state.skopeItems.id,
    url = 'https://boiling-refuge-66454.herokuapp.com/images/'+id+'/comments',
    textPost = {
                name:text[0].value,
                comment:text[1].value,
                sid:id
               };
  
    comments.innerHTML +=text[0].value+': '+ text[1].value + '<br><br>';
    text[0].value = '';
    text[1].value = '';

    this.post(url,textPost);

  }

  changeState() {
    fetch('https://boiling-refuge-66454.herokuapp.com/images/')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          }
          )
        },
        (error) =>
          this.setState({
            isLoaded: true,
            error
          }
          )
      )
  }

  componentDidMount() {
    this.changeState();
  }

  renderWindow = () => {
    
    return (
      <div className="window" >
        <img src={String(this.state.skopeItems.url)}></img>
        <div className='comments'>
          {

            this.state.skopeItems.comments.map(item => (
              <p>{item.text}</p>

            )
           )
          }
        </div>
        <input type='text' placeholder='Имя' />
        <br></br>
        <input type='text' placeholder='Коментарий'/>
        <br></br>
        <input type='submit' onClick={this.postComment} value='Отправить' />
      </div>
   )
  }

  async skopeImg(id) {
    await fetch('https://boiling-refuge-66454.herokuapp.com/images/' + id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            skopeItems: result
          }
          )
        },
        (error) =>
          this.setState({
            isLoaded: true,
            error
          }
          )
      )

    ReactDOM.render(this.renderWindow(), document.querySelector('.modal_window'));
    document.querySelector('.modal_window').style.display = 'block';
    document.querySelector('.shadow').style.display = 'block';
  }

  breakSkope(){
    document.querySelector('.shadow').style.display = 'none';
    document.querySelector('.modal_window').style.display = 'none';
    document.querySelector('.comments').innerHTML = '';
  }

  itemsJSX = () => {
    if (this.state.error) {
      return <p>Error error.message</p>
    }
    else if (!this.state.isLoaded) {
      return <p>Loading...</p>
    } else {
      return (
        <div className="Photos">

          <div className="modal_window" ></div>

          <div className='shadow' onClick={this.breakSkope} ></div>
          {
            this.state.items.map(item => (
              <img src={item.url} id={item.id} onClick={() => this.skopeImg(item.id)} />
            )
           )
          }
        </div >
      );
    }
  }

  render() {
    return this.itemsJSX()
  }
}





