import * as React from 'react';
import styled from 'styled-components';
import '../../assets/stylesheets/Home.css';
import { DonateButtonCta } from '../shared/DonateButtonCta';
import { InfoButton } from '../shared/InfoButton';

const contentHeight = 675;

const HomePageWrapper = styled.div`

`

const AboveFoldContent = styled.div`
  background-color: #D2D2D2;
  height: 675px;
`

const MissionLeftPanel = styled.div`
  width: 48%;
  background-color: #FFFFFF;
  float:left;
  height: 712px;
`

const MissionRightPanel = styled.div`
  background-color: #E6E6E6;
  margin-left: 48%;
  height: 712px;
`

const MissionLeftContent = styled.div`
  padding-top: 100px;
  padding-left: 40px;
  color: #505150;
`

const MissionTitle = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 26px;
  font-weight: bold;
  padding-bottom: 20px;
`

const MissionText = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 34px;
  font-weight: normal;
  padding-bottom: 20px;
`

const MainButtonWrapper = styled.div`
  padding-top:25px;
`

const DonateSection = styled.div`
  background-color: #4BE1DE;
  height: 396px;
  color: #000000;
`

const DonateText = styled.div`
  padding-top: 60px;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 24px;
`

const DonateButtonWrapper = styled.div`
  padding-top: 35px;
  margin: 0 auto;
  width:200px;
`

// stupid code
const ContentWrapper = styled.div`
  padding-left: 60px;
  padding-top: ${contentHeight / 4}px;
`

const ImageWrapper = styled.div`
 background-image: url("./main-2.jpg");
 height:inherit;
 background-repeat: no-repeat;
 background-size: auto 712px;
`

export class Home extends React.Component {
    public render() {
        return (
            <HomePageWrapper>
                <AboveFoldContent>
                    <ContentWrapper>
                        <div className="main-title">Inspire your students with learning<br />about new technologies.</div>
                        <MainButtonWrapper><InfoButton backgroundColor={'#FF6A58'} textColor={'#FFFFFF'} borderColor={'#FF6A58'}> Learn More </InfoButton></MainButtonWrapper>
                    </ContentWrapper>
                </AboveFoldContent>
                <MissionLeftPanel>
                    <MissionLeftContent>
                        <MissionTitle> Mission </MissionTitle>
                        <MissionText> Identifying resource gaps among underserved communities where technology can have an impact. </MissionText>
                    </MissionLeftContent>
                </MissionLeftPanel>
                <MissionRightPanel>
                    <ImageWrapper/>
                </MissionRightPanel>
                <DonateSection>
                    <DonateText>Because empowering students with knowledge is our goal!</DonateText>
                    <DonateButtonWrapper><DonateButtonCta backgroundColor={'#4BE1DE'} textColor={'#000000'}  /></DonateButtonWrapper>
                </DonateSection>
            </HomePageWrapper>
        )
    }
}