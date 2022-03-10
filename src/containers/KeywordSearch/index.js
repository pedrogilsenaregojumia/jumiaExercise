import React, {useState} from "react"
import { TextField, Paper } from "@mui/material";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { FiSearch } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
    paperC: {
        
        padding: "30px"
    },
    search: {
        cursor: "pointer"
    },
	textField: {
		[`& fieldset`]: {
			borderRadius: 12,
			background: "#0000001A"
		},

		"& .MuiOutlinedInput-input": { color: "black" },
		"& . MuiInputLabel-root": {
			color: "#000000B3"
		},
		"& .MuiInputLabel-root": { color: "grey" },
		"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#00000000",
			borderWidth: "1.5px"
		},
		"&:hover .MuiOutlinedInput-input": {
			color: "black"
		},
		"&:hover .MuiInputLabel-root": { color: "grey" },
		"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#0000001A"
		},
		"&  .MuiOutlinedInput-input": {
			color: "black"
		},
		"& .MuiOutlinedInput-root.Mui-focused": {
			color: "#000000B3"
		},
		"& .MuiInputLabel-root.Mui-focused": { color: "#000000B3" },
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: "#000000B3"
		}
	}
}));

const KeywordSearch = ({endpoint, setSearch, search}) => {
    const classes = useStyles()
    const history = useHistory()
    const [searchValue, setSearchValue] = useState("")
    

    const handleClick = () => {
        const searchFor = searchValue!=="" ? `&search_by=${searchValue}` : ""
        setSearch(searchFor)
        history.push(endpoint+searchFor)
    }
    

    return (<Paper  className={classes.paperC}><TextField
        variant="outlined"
        className={classes.textField}
        name="search"
        
        autoComplete="off"
        placeholder="Search"
        value={searchValue}
        InputProps={{
            endAdornment: <FiSearch className={classes.search} onClick={handleClick} color="#00000066" size="2em"/>
        }}
        onChange={(event) => {
            
            setSearchValue(event.target.value);
        }}
    /></Paper>)
}

export default KeywordSearch