import * as React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
// @ts-ignore
import BackgroundImage from '../images/main_bg.png'
// @ts-ignore
import WeaponPmImage from '../images/pm.png'
// @ts-ignore
import CharImage from '../images/char1.png'
// @ts-ignore
import KnifeImage from '../images/knife.png'
// @ts-ignore
import KnucklesImage from '../images/knuckles.png'
// @ts-ignore
import PrisonImage from '../images/prison.png'
// @ts-ignore
import StampImage from '../images/stamp.png'
// @ts-ignore
import BagImage from '../images/bag.png'
// @ts-ignore
import KitchenImage from '../images/kitchen.png'
// @ts-ignore
import TattooImage from '../images/web.png'
// @ts-ignore
import LogoImage from '../images/logo.png'
import AvailableFeatureItem from "../components/AvailableFeatureItem"
import RoadmapItem from "../components/RoadmapItem"
import { Link } from "gatsby"
import SocialLinksRow from "../components/SocialLinksRow"
import { INVESTMENTS_EMAIL, PARTNERSHIPS_EMAIL, SUPPORT_EMAIL } from "../constants"

const AvailableFeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const RoadmapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Background = styled.div`
  background-color: black;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
`

const FeatureBlock = styled.div`
  display: flex;
  font-family: Circe, sans-serif;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 350;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ADADAD;
`

const FeatureElement = styled.div`
  width: 50%;
`

const FeatureTitle = styled.div`
  font-family: Century Gothic, sans-serif;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.125rem;
  letter-spacing: 0em;
  text-align: left;
  color: #F2F2F2;
`

const Char = styled.div`
  background-image: url(${CharImage});
  background-repeat: no-repeat;
  background-color: black;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: contain;
`

const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 15rem 2rem 0 2rem;
`

const Logo = styled.img`
  width: 11.25rem;
  height: 9rem;
`

const Copyright = styled.div`
  font-family: Circe, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  margin-top: 1rem;
`

const FooterTitle = styled.div<{capitalize?: boolean}>`
  font-family: Circe, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0em;
  text-align: left;
  text-transform: ${({ capitalize }) => !capitalize ? 'uppercase' : 'capitalize'};
  color: white;
`

const FooterLink = styled(Link)<{capitalize?: boolean}>`
  font-family: Circe, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 350;
  line-height: 1.5rem;
  letter-spacing: 0em;
  text-align: left;
  text-transform: ${({ capitalize }) => !capitalize ? 'uppercase' : 'capitalize'};
  text-decoration: none;
  color: #B0B0B0;
  &:visited {
    text-decoration: none;
    color: #B0B0B0;
  }
`

const FooterHrefLink = styled.a<{capitalize?: boolean}>`
  font-family: Circe, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 350;
  line-height: 1.5rem;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;
  color: #B0B0B0;
  &:visited {
    text-decoration: none;
    color: #B0B0B0;
  }
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  margin: 0 3.25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`

const ContentContainer = styled.div`
  max-width: 1328px;
`

const IndexPage = () => {
  return (
    <Layout>
      <Background>
        <Container>
          <Navbar />
        </Container>
      </Background>
      <Container>
        <ContentContainer>
          <FeatureBlock style={{ paddingTop: '2rem' }}>
            <FeatureElement style={{ paddingRight: '5rem', justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FeatureTitle>Convicted</FeatureTitle>
                <p>You go to prison as an ordinary kid. In order to survive in these difficult conditions, you have to fight for the right to life. Fight with other prisoners and if you win you get a well-deserved reward - a cigarette. If you are strong in cooking, go to the kitchen and cook food. Start your journey of roofing business, conquering one prison after another.</p>
                <p>But not all victories are easy, some bosses can't be defeated alone. You'll have to assemble your own team or join someone else's team to kill the most powerful boss. Do not miss the opportunity to keep your physical form at an appropriate level. A convict without a tattoo is not a convict. So put a tattoo on your body - they will increase your credibility among the prisoners.</p>
              </div>
              <SocialLinksRow />
            </FeatureElement>
            <FeatureElement
              style={{
                minHeight: '30.375rem',
                display: 'flex',
                justifyContent: 'center',
                border: '1px solid rgba(43, 43, 43, 1)',
                paddingTop: '2.375rem',
              }}
            >
              <Char />
            </FeatureElement>
          </FeatureBlock>
          <FeatureBlock>
            <FeatureElement
              style={{
                minHeight: '48rem',
                position: 'relative',
              }}
            >
            </FeatureElement>
            <FeatureElement style={{ paddingTop: '2rem' }}>
              <FeatureTitle>About the technical side of the game</FeatureTitle>
              <p>Convicted is an NFT game built on blockchain technology. We use Binance Smart Chain and we want to prove that a good crypto game can easily exist on this blockchain.</p>

              <p>We are faced with several tasks that we want to implement within the framework of this project:</p>


              <p><b>1.Blocking players who use multiple accounts</b><br />We want to create a system for tracking player data with subsequent blocking which is different from the previous ones. To solve this problem, Specialists in the field will be involved to solve this problem, Specialists in the field will be involved to solve this problem</p>

              <p><b>2. Creation of the NFT game on Binance Smart Chain with several internal game tokens</b></p>

              <p><b>3. Creating a stable game economy</b><br />Experts in the field of economics will be invited  to solve this problem</p>

              <p><b>4. Creation of the first NFT game with customization</b><br />In our game, in addition to NFT items that give bonuses, there will be regular character skins and illustrations.</p>
            </FeatureElement>
          </FeatureBlock>
          <FeatureBlock>
            <FeatureElement style={{ paddingTop: '2rem' }}>
              <FeatureTitle>Game economic</FeatureTitle>
              <p>There are three economic currencies in the game: "Rubles", "Cigarettes", "Food", as well as two resources: "Authority", "Energy" and one indicator "Level".</p>
              <p>All these parameters will interact with each other and create an economic balance. Each currency will be tied to a specific token: Ruble, Cigarettes and Food corresponds to tokens: CRUB (Ruble), CCIG (Cigarettes), CFOD (Food).</p>
              <p>Thus, you can not only mine the game currency you need using NFT, but also buy from the market.</p>
            </FeatureElement>
            <FeatureElement
              style={{
                minHeight: '48rem',
                position: 'relative',
              }}
            >
            </FeatureElement>
          </FeatureBlock>
          <FeatureBlock>
            <FeatureElement
              style={{
                minHeight: '48rem',
                position: 'relative',
              }}
            >
            </FeatureElement>
            <FeatureElement style={{ paddingTop: '2rem' }}>
              <FeatureTitle>Mining currency</FeatureTitle>
              <p>To mine tokens, you will need to purchase one or several NFTs. They are of 3 types: Weapon, Crime, Chef certificate.</p>

              <p>
                Each type of NFT produces its own specific resource:
                <br />
                Weapon - Cigarettes (CCIG)
                <br />
                Cook Certificate - Food (CFOD)
                <br />
                Crime - Rubles (CRUB)
              </p>

              <p>In our NFT game, this is like a pass to the game. Although he/she has basic production parameters, which play a large role, but ultimately the player can develop through active play and get more. In general, we encourage old and active players.</p>


            </FeatureElement>
          </FeatureBlock>
          <FeatureTitle style={{ textAlign: 'center' }}>Features available in the game</FeatureTitle>
          <AvailableFeatureContainer>
            <AvailableFeatureItem
              src={KnucklesImage}
              title="Weapon"
              description="Make single or massive attacks against prison bosses."
            />
            <AvailableFeatureItem
              src={PrisonImage}
              title="Prison"
              description="Go through prisons one by one and take over the prison business."
            />
            <AvailableFeatureItem
              src={KitchenImage}
              title="Kitchen"
              description="If you are a good cook, then send to the kitchen to get “Food”."
            />
            <AvailableFeatureItem
              src={BagImage}
              title="Bag"
              description="Improve the items in your bag at the expense of “Level” and “Authority”."
            />
            <AvailableFeatureItem
              src={TattooImage}
              title="Tattoo"
              description={`Get tattoos to gain the "Authority" in the prison and pump your character.`}
            />
            <AvailableFeatureItem
              src={StampImage}
              title="Stashes"
              description={`Collect various stashes and trade their collections for resources.`}
            />
          </AvailableFeatureContainer>
          <FeatureTitle style={{ textAlign: 'center', marginTop: '10rem' }}>Roadmap</FeatureTitle>
          <RoadmapContainer>
            <RoadmapItem
              margin="0 2rem 0 0"
              title="Stage 1 (End of Q4 2021)"
              items={[
                'Social networking',
                'Website development for the game'
              ]}
            />
            <RoadmapItem
              margin="0 2rem 0 0"
              title="Stage 2 (Q1 2022)"
              items={[
                'Marketplace launch on BSC Testnet',
                'Launching the beta version of the game on BSC Testnet',
                'Marketplace launch on BSC Mainnet',
                'Selling NFT',
                'Token pre-sale',
              ]}
            />
            <RoadmapItem
              title="Stage 3 (Q2 2022)"
              items={[
                'Launching the first application on a PC',
                '100,000 subscribers (Discord / Twitter / Telegram)',
                'Launching the first application on Android / IOS',
                'Complete redesign of the application in a realistic style, the sale of the first characters and prison cells (cosmetic items)',
              ]}
            />
          </RoadmapContainer>
          <FooterContainer>
            <FooterColumn>
              <Logo src={LogoImage} />
              <Copyright>©2021 by Metagame LLC.</Copyright>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle>Convicted</FooterTitle>
              <FooterLink to="/">{`Play & earn`}</FooterLink>
              <FooterLink to="/">Marketplace</FooterLink>
              <FooterLink to="/">Registration</FooterLink>
              <FooterLink to="/">Staking</FooterLink>
              <FooterLink to="/">Liquidity</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle>Information</FooterTitle>
              <FooterLink to="/">Whitepaper</FooterLink>
              <FooterLink to="/">Roadmap</FooterLink>
              <FooterLink to="/">Getting started</FooterLink>
              <FooterLink to="/">Faq</FooterLink>
              <FooterLink to="/">Privacy policy</FooterLink>
              <FooterLink to="/">{`Terms & conditions`}</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <SocialLinksRow />
              <FooterColumn>
                <FooterTitle capitalize style={{ marginTop: '1rem' }}>Support</FooterTitle>
                <FooterHrefLink href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</FooterHrefLink>
                <FooterTitle capitalize style={{ marginTop: '1rem' }}>Partnerships</FooterTitle>
                <FooterHrefLink href={`mailto:${PARTNERSHIPS_EMAIL}`}>{PARTNERSHIPS_EMAIL}</FooterHrefLink>
                <FooterTitle capitalize style={{ marginTop: '1rem' }}>Investments</FooterTitle>
                <FooterHrefLink href={`mailto:${INVESTMENTS_EMAIL}`}>{INVESTMENTS_EMAIL}</FooterHrefLink>
              </FooterColumn>
            </FooterColumn>
          </FooterContainer>
        </ContentContainer>
      </Container>
    </Layout>
  )
}

export default IndexPage
