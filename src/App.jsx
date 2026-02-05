import React from 'react'
import  Section1 from './components/section1/section1.jsx'

export default function App() {
const carddata=[

{
  'imgs':'https://i.pinimg.com/736x/c6/9b/27/c69b27267883c3189fbe77678ccb896a.jpg',
  'tag':'Underranked',
  color:'magenta',
},
{
  'imgs':'https://i.pinimg.com/736x/5a/eb/a8/5aeba8448609dcf8d90d2f58b0b869da.jpg',
  'tag':'Satisfied',
  color:'red',
},
{
  'imgs':'https://i.pinimg.com/736x/31/9d/86/319d86f1c6eb93a75d564149beb40983.jpg',
  'tag':'Satisfied',
  color:'red',
},
{
  'imgs':'https://i.pinimg.com/736x/4f/70/0b/4f700b55ae3ce6eb40e16fa66c713f3b.jpg',
  'tag':'Underbanked',
  color:'magenta',
},
{
  'imgs':'https://i.pinimg.com/736x/e5/85/3a/e5853a296dc182579b5417b65265d9e8.jpg',
  'tag':'Underbanked',
  color:'pink',
},  


{
  'imgs':'https://i.pinimg.com/736x/1d/f1/48/1df148bff017c65474e302ce4b0d3ec5.jpg',
  'tag':'Underranked',
  color:'purple',

}

]


  return (<>
  <div>
    <Section1 user={carddata} />
  </div>
  


  </>

  )
}
