const chatClient = new StreamChat('qk4nn7rpcn75');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYmx1ZS1zZWEtNSJ9.RoUao2EL9-DwE0SHArSmxtSJDgaqViA0stIiX5F-YGY';

chatClient.setUser(
{
  id: 'blue-sea-5',
  name: 'Blue sea',
  image: 'https://getstream.io/random_svg/?id=blue-sea-5&amp;name=Blue+sea' },

userToken);


const channel = chatClient.channel('messaging', 'cncf', {
  // add as many custom fields as you'd like
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcrONo3lZ_nH08F2a6jZGaUTpP2ADpznp5uDN1yfxzAPThqPvTkkBdPmuwQlKS9KRNDA&usqp=CAU',
  name: 'Ask CNCF questions' });

const App = () => /*#__PURE__*/
React.createElement(Chat, { client: chatClient, theme: 'messaging light' }, /*#__PURE__*/
React.createElement(Channel, { channel: channel }, /*#__PURE__*/
React.createElement(Window, null, /*#__PURE__*/
React.createElement(ChannelHeader, null), /*#__PURE__*/
React.createElement(MessageList, null), /*#__PURE__*/
React.createElement(MessageInput, null)), /*#__PURE__*/

React.createElement(Thread, null)));




ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));