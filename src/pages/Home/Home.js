import React from 'react'
import Banner from '../../components/Banner/Banner'
import FeatureItem from '../../components/FeatureItem/FeatureItem'
import './home.css'

// Features Icon
import moneyIcon from '../../designs/img/icon-money.png'
import chatIcon from '../../designs/img/icon-chat.png'
import securityIcon from '../../designs/img/icon-security.png'

// Features title/text
const titleChat= "You are our #1 priority"
const textChat= "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."

const titleMoney= "More savings means higher rates"
const textMoney= "The more you save with us, the higher your interest rate will be!"

const titleSecurity= "Security you can trust"
const textSecurity= "We use top of the line encryption to make sure your data and money is always safe."


export default function Home() {
  return (
    <main>
      <Banner />

      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem
        iconUrl={chatIcon}
        title={titleChat}
        text={textChat}
        />
        <FeatureItem
        iconUrl={moneyIcon}
        title={titleMoney}
        text={textMoney}
        />
        <FeatureItem
        iconUrl={securityIcon}
        title={titleSecurity}
        text={textSecurity}
        />
      </section>
    </main>
    
  )
}
