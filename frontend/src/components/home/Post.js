import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllPost } from '../../store/actions/PostAction'
import { postSelector } from '../../store/reducers/PostReducer'

export default function Post() {


  const dispatch = useDispatch()
  const { posts } = useSelector(postSelector) // hoặc const {posts} =  

  useEffect(() => {
    dispatch(getAllPost())
  }, [dispatch])

//  console.log(posts)


  // const style3Images = {
  //   height: '250px',
  //   width: '100% '
  // }




  return (<>

    <Container>
      <Row>
        {
          posts.slice(0,2).map((item, index) => {
            return <Col md={4} xs={12} key={index}>
              <Card className='text-start'>
                <Card.Img 
                  style={ {backgroundImage: `url(${item.thumb})` , height: '300px', width: '100%'}} 
                  src={item.thumb} alt=''              
                />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text> {item.title} </Card.Text>
                    <Link to='/'> See more </Link>
                </Card.Body>                    
                
              </Card>


            </Col>
          })
        }
      </Row>
    </Container>
  </>)
}




// const renderImg = () => {
//   return arrImg.map((item, index) => {
//     return <div key={index}>
//       <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
//         <img src={item.hinhAnh} className="opacity-0" alt={item.hinhAnh} />
//       </div>
//     </div>
//   })
// }


{/* <Col md={4 } xs={12}>
<Card className='text-center'>
  <Card.Img 
    //style="background: url("../images/a1.jpg"); cursor: pointer;"
    //src="../images/a1.jpg" alt="First slide"
    src= {posts[2]?.thumb} alt=''
  />
  <Card.Body>
    <Card.Title>{posts[2]?.name}</Card.Title>
    <Card.Text> {posts[2]?.title} </Card.Text>
  </Card.Body>

  <Card.Body>
    <Card.Link href="#">See more</Card.Link>
  </Card.Body>
</Card>
</Col> */}
