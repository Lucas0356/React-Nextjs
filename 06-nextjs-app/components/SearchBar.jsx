import { IconComponent } from '../components/IconComponent'

export default function SearchBar() {
    console.log('search')
    return (
        <form className='form'>
            <input
                name='search'
                placeholder='Lorem'>
            </input>
            <button className='search-button'>
                <IconComponent icon='search' />
            </button>
        </form>
    )
}
