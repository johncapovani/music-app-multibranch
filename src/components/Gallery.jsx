import GalleryItem from './GalleryItem'

function Gallery(props) {

    // Map loops through all of the values in the array

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
