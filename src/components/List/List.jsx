import Entry from '../Entry/Entry.jsx';

function List({ entryList }) {
    console.log(entryList.length)
    return (
        <>
            {entryList.map(entryItem => <Entry entryData={entryItem} />)}

        </>
    )
}

export default List;