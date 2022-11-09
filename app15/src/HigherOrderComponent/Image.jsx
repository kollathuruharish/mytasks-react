import React, { PureComponent } from 'react'
import {Parent} from './Parent'

 class Image extends PureComponent {
    render() {
        return (
            <div>
                <img style={{width:"200px", height:"150px"}} src={this.props.url} alt="wildlife" />
                <br />
                <button onClick={this.props.handleImage}>Click</button>
            </div>
        )
    }
}
export default Parent(Image)
