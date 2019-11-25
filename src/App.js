import React from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Views/Candidature'
import About from './Views/Resume'
import Users from './Views/Download'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import 'antd/dist/antd.css';
import './css/candidature.css'

const {Header, Content, Footer} = Layout;

class App extends React.Component {

    render() {
        return (
            <Router>
                <Layout className="layout">
                    <Header>
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="1"><Link to="/">Anschreiben</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/resume">Lebenslauf</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/download">Download</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        <div>
                            <Route path="/" exact component={Index}/>
                            <Route path="/resume/" component={About}/>
                            <Route path="/download/" component={Users}/>
                        </div>
                    </Content>
                </Layout>
            </Router>
        );
    }
}

export default App;