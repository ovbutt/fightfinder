import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from "@chakra-ui/react"

const IconBtn = ({colorScheme, icon}) => {
    return (
        <IconButton
        colorScheme = {colorScheme}
        // aria-label="Search database"
        icon={icon}
        size="sm"
        onClick={() => alert("Button clicked")}
      />
    )
}

IconBtn.propTypes = {
    colorScheme: PropTypes.string,

}

export default IconBtn
