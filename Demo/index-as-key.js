// 使用index为key,当发现update前和update后key值没有变化，react就会认为update前后组件是同一个，进而只会对内部的属性进行修改
// 如果key改变,则会整个li都发生重新渲染

class indexAsKey extends React.Component{
  constructor(){
    super();
    this.state = {
      list : [1,2,3,4]
    }
    
  }

  handleReverse = () => {
    this.setState({list: [...this.state.list].reverse()});
  }

  render(){
    return(
      <div>
      <ul>
        {this.state.list.map((item,index) => <li key={index}>{item} <input type="text" /></li>)}
      </ul>
      <button onClick={this.handleReverse}>反转</button>
      </div>
    )
  }
}