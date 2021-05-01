import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import {RiArrowUpSLine, RiArrowDownSLine} from "react-icons/ri"
import "../components/custom-carousel.css"

import MainImage1 from '../images/main_image_1.jpg';
import MainImage2 from '../images/main_image_2.jpg';
import MainImage3 from '../images/main_image_3.jpg';
import MainImage4 from '../images/main_image_4.jpg';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const ImageContainer = styled.div`
width: 100%;
height: 92vh;
min-height: 560px;
background-image: 
    linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.0)
    ), url(${props => props.image});
background-position: top left;
background-repeat: no-repeat;
background-size: cover;
`

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <RiArrowUpSLine
      className={'carousel-icon carousel-icon-prev'}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <RiArrowDownSLine
      className={'carousel-icon carousel-icon-next'}
      onClick={onClick}
    />
  );
}

const Title = styled.div`
font-family: 'Playfair Display', serif;
position: absolute;
margin: auto;
top: 100px;
text-align: left;
z-index: 30;
display: flex;
vertical-align: middle;
justify-content: center;
flex-direction: column;
padding: 56px;
line-height: 80px;
font-size: 80px;
max-width: 70%;
color: #107972;
`

const BookSection = styled.div`
width: 40%;
height: 180px;
position: absolute;
bottom: 0;
right: 0;
background-color: #E3E9ED;
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
justify-content: space-between;
padding: 64px;
`;

const Button = styled.button`
width: 120px;
height: 64px;
background-color: #107972;
color: white;
font-size: 20px;
font-weight: 100;
outline: none;
border: none;
border-radius: 8px;
cursor: pointer;
`

const About = styled.div`
display: flex;
flex-direction: row;
position: relative;
margin-top: 64px;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
`

const TitleSection = styled.div`
::before {
  font-family: Inconsolata,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
  content: '${props => props.title}';
  font-size: 24px;
  width: 100%;
  color: #107972;
  position: relative
}
width: 50%;
min-height: 350px;
height: 100%;
padding: 36px;
padding-left: 10%;
font-family: 'Playfair Display', serif;
font-size: 48px;
line-height: 48px;

`

const DescriptionSection = styled.div`
width: 50%;
height: 360px;
padding: 80px;
background-color: #10797235;
color: #107972;
font-size: 20px;
line-height: 32px;
display: flex;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
`

const IndexPage = () => {
  const [adults, setAdults] = React.useState(1);
  const [selectedDate, setSelectedDate] = React.useState();


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    appendDots: dots => (
      <div className={'carousel-dots'}>
        <ul>{dots}</ul>
      </div>
    )
  };

  return (
    <Layout>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <SEO title="Home" />
      <div style={{position: 'relative' }}>
        <Title>
          Book With Us!<br/>
          Enjoy The Paradise<br/>
          In Marbella
        </Title>
        <Slider {...settings}>
          <ImageContainer image={MainImage1}/>
          <ImageContainer image={MainImage2}/>
          <ImageContainer image={MainImage3}/>
          <ImageContainer image={MainImage4}/>
        </Slider>
        <BookSection>
          <div>
            <InputLabel id="visitors">Visitors</InputLabel>
            <Select
              style={{minWidth: '100px'}}
              labelId="Adults visitors"
              id="visitors"
              value={adults}
              onChange={(event) => setAdults(event.target.value)}
            >
              <MenuItem value={1}>1 Person</MenuItem>
              <MenuItem value={2}>2 People</MenuItem>
              <MenuItem value={3}>3 People</MenuItem>
              <MenuItem value={4}>4 People</MenuItem>
              <MenuItem value={5}>5 People</MenuItem>
              <MenuItem value={8}>More than 5 people</MenuItem>
            </Select>
          </div>
          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <Button>
            Book Now!
          </Button>
        </BookSection>
      </div>
      <About>
        <TitleSection title="ABOUT"><br/>Relax With Your Loves Ones<br/>At A Luxury Location</TitleSection>
        <DescriptionSection>
          Amazing place to stay with your loves ones, with many amenities around such as diferent stores, restaurants, multiple pools,
          a terrace, an amazing and conftable beach right in front of the apartment complex, and a diligent service and security staff.
          <br />
          <br />
          The apartaments come included with 3 bedrooms each with a designated bathrom, a living room, dining room and acomplete kitchen
          with all the apliances required for cooking, and a balcony with view to the Caribean Sea.
        </DescriptionSection>
      </About>
    </Layout>
  )
}

export default IndexPage
