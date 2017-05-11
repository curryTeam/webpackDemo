// Greeter.js
import React, { Component } from 'react';
import config from '../config.json';
import styles from './Greeter.css'; //导入
import "./test.less";
console.log(styles);
class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
                { config.greetText }
                <div className="test">
                    测试less
                </div>
                <div>热加载</div>
                <div>热加载成功12333</div>
                <div>pppp123</div>
            </div>
        );
    }
}

export default Greeter;