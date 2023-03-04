function Entry({entryData}) {
    const {name, date} = entryData;
    return(<p> {date} days since {name} </p>)
}

export default Entry;