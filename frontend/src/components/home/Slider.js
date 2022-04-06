import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSlider } from '../../store/actions/SliderAction'
import { sliderlSelector } from '../../store/reducers/SliderReducer'


export default function Slider() {

  const dispatch = useDispatch()
  const { sliders } = useSelector(sliderlSelector)
  console.log(sliders)

  useEffect(() => {
    dispatch(getAllSlider())
  }, [dispatch])

  //==============================================================
  return (<>
    <Carousel>
      {
        sliders.map((item, index) => {
          return <Carousel.Item key={index} >
            <img style= {{ backgroundImage: `url(${item.image})`, height: '0 auto',  width: '100%' }}  src={item?.image} alt='' />
          </Carousel.Item>
        })
      }
    </Carousel>
    
  </>)
}
 