import React from 'react'
import GroupCard from '../GroupCard/GroupCard'
import {Row} from 'reactstrap'

const GroupList = ({groups}) => {
    const group_guis = groups.map(group => (<GroupCard key={group.id} group={group}/>))
    return (
        <div>
            {group_guis}
        </div>
    )
}

export default GroupList