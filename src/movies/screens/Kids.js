import React, { Component } from 'react';
import { WebView } from 'react-native';

import Video from 'react-native-video';
class MyWeb extends Component {
  render() {
    return (
      <Video
    source={{uri: 'https://nonton.bioskopkeren.pro/redirector.php?id=WGRnZ1R2eHRoNklHUnUya1F6MXE5WWVWOVl3N0lGQmYyalg4UXZUOEpSSk1wMEgrUFhnOGd3UG9FeERrRzZBcEpyTVVqK0ErMTJGNE01RnhuM3RGbHJNNjBWVzRLUU1tbjJtaEdQQ0V6MzdPU1NGalEwdnJZTFJ3S2dobVlUYUZ1ZW5qSkc0OFBiVXNvWHZ4WG5HUEJrV0Y4Z2M2bTkvb2E3V2Rac3NUS3F3Mm0wYytuWHAwWnFHS09lZ1ZRWllFS0RxZWpWZGJnTU5BOUZ4N2wyeGNTclRia01scXYzOXdENnZjTFBwbXduU1Uxc3o4SHptSjVqODdGeWVCT1dmUVBxYkVpTzhsdmlNMGI5eWhPN1YzL2c9PQ=='}}        
    navigator={ this.props.navigator }
/>
    );
  }
}
export default MyWeb;