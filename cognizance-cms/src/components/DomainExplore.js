import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import userServices from '../services/userService'

export default function DomainExplore(props) {
    const { value } = useParams();
    const [domain, setDomain] = useState({
        domainName: '',
        domainLogo: '',
        domainDescription: ''
    })
    useEffect(() => {
        const getDomain = async () => {
            try {
                const res = await userServices.getDomainById({"id":value.split(':')[1]});
                if(res.data.success){
                    setDomain({
                        domainName: res.data.domain.domainName,
                        domainLogo: res.data.domain.domainLogo,
                        domainDescription: res.data.domain.domainDescription
                    })
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        getDomain();
    },[value])

    return (
        <div>
            hello explore the {domain.domainName} domain
        </div>
    )
}