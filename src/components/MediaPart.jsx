import Crest from '../assets/partners/crest.svg'

const partners = [
    {
        image : Crest,
    },
    {
        image : Crest,
    },
    {
        image : Crest,
    },
    {
        image : Crest,
    },
    {
        image : Crest,
    },
]

const MediaPart = () => {
    return (
        <div>
            {partners.map((img, i)=> {
                return (
                    <div key={i}>
                        <img className='' src={img.image} alt="" />
                    </div>
                )       
            })} 
        </div>
    )
}

export default MediaPart
