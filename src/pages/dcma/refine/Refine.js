import transitions from '@material-ui/core/styles/transitions'
import React from 'react'
import RefineContent from './RefineContent'
import financeicon from '../../../assets/images/Icons.png'
import departmenticon from '../../../assets/images/Icons (1).png'
import offcicon from '../../../assets/images/office-type.png'
import geoicn from '../../../assets/images/geo-location.png'
import walleticon from '../../../assets/images/Icons (2).png'
import customr from '../../../assets/images/customers1.png'
import entity from '../../../assets/images/Icons (3).png'
import industry from '../../../assets/images/Icons (4).png'
import customricon from '../../../assets/images/Icons (5).png'
import locationicon from '../../../assets/images/geo-location-2.png'
import transitionicon from '../../../assets/images/Icons (6).png'
import dateicon from '../../../assets/images/Icons (7).png'
import ageicon from '../../../assets/images/Icons (8).png'
import balanceicon from '../../../assets/images/Icons (9).png'
import swifticon from '../../../assets/images/swift-code.png'
import domesticicon from '../../../assets/images/swift-code.png'
import routingicon from '../../../assets/images/Icons (10).png'
import accicon from '../../../assets/images/Icons (11).png'
import systemicon from '../../../assets/images/settlement-system.png'

export const Refine = (props) => {
    return (
        <div>
            <RefineContent dataname="Financial Institutional Type" imgicon={financeicon}/>
            <RefineContent dataname="Department Type" imgicon={departmenticon}/>
            <RefineContent dataname="Office Type" imgicon={offcicon}/>
            <RefineContent dataname="Financial Institution Geo Location" imgicon={geoicn}/>
            <RefineContent dataname="Organitating Wallet Branch" imgicon={walleticon}/>
            <RefineContent dataname="Customer" imgicon={customr}/>
            <RefineContent dataname="Customer Entity Type" imgicon={entity}/>
            <RefineContent dataname="Customer Industry" imgicon={industry}/>
            <RefineContent dataname="Customer Transaction Type" imgicon={customricon}/>
            <RefineContent dataname="Customer Geo Location" imgicon={locationicon}/>
            <RefineContent dataname="Transaction Size" imgicon={transitionicon}/>
            <RefineContent dataname="Transaction Date" imgicon={dateicon}/>
            <RefineContent dataname="Wallet Age" imgicon={ageicon}/>
            <RefineContent dataname="Wallet balance" imgicon={balanceicon}/>
            <RefineContent dataname="International Swift Code" imgicon={swifticon}/>
            <RefineContent dataname="Domestic Swift Code" imgicon={domesticicon}/>
            <RefineContent dataname="Domestic Routing Address" imgicon={routingicon}/>
            <RefineContent dataname="Bank Account Number" imgicon={accicon}/>
            <RefineContent dataname="Settlement System" imgicon={systemicon}/>
        </div>
    )
}
