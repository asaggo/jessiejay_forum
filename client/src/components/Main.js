import React, {Component} from 'react';
import './Main.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            contents: [
                {id: 1, title: '제목1', content: '내용1', author: '저자1', date: new Date().toISOString().slice(0,10)},
                {id: 2, title: '제목2', content: '내용2', author: '저자2', date: new Date().toISOString().slice(0,10)},
                {id: 3, title: '제목3', content: '내용3', author: '저자3', date: new Date().toISOString().slice(0,10)}
            ]
        }
    }
    renderTableData(){
        return this.state.contents.map((content, index)=>{
            const {id, title, author, date} = content
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>{date}</td>
                </tr>
            )
        })
    }

    render(){
        return(
            <div className="wrapper">
                <h2>Main Page</h2>
                <hr className="divider"/>
                <Table striped bordered hover size="sm" className="mainTable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </Table>
                <Button variant="outline-primary" className="createBtn">Create</Button>
            </div>
        );
    }
}

export default Main;