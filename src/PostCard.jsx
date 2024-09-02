import { ButtonCounter } from './ButtonCounter'
import { ButtonWithoutCounter } from './ButtonWithoutCounter'
import 'boxicons'

export function PostCard({ children, userName, name, initialRepostCounter, initialFavouriteCounter }) {
    // md:min-w-[400px] lg:min-w-[600px] xl:min-w-[900px] 
    return (
        <div className='min-h-16 min-w-[200px] flex border-l border-r border-white p-4'>
            <div className='flex-none w-10 md:w-20'>
                <img src={`https://unavatar.io/${userName}`} alt={`Avatar de ${name}`} className='rounded-full' />
            </div>
            <div className='flex-auto'>
                <div className='flex gap-2 text-start ml-4 text-base md:text-lg'>
                    <span className='text-slate-50 font-bold'>
                        {name}
                    </span>
                    <span className='text-slate-200'>
                        ·
                    </span>
                    <span className='text-slate-400'>
                        @{userName}
                    </span>
                </div>
                <div className='text-start ml-4'>
                    <span className='text-base md:text-lg whitespace-pre-line'>
                        {children}
                    </span>
                </div>
                <div className='flex justify-between ml-4 mt-4 items-center'>
                    <box-icon name='reply' color='white' size='30px'></box-icon>
                    <ButtonCounter nameIcon='repost' defaultColor='white' selectedColor='green' size='25px' initialCounter={initialRepostCounter} titleNotSelected='Republicar' titleSelected='Deshacer republicación' />
                    <ButtonCounter nameIcon='star' defaultColor='white' selectedColor='yellow' size='21px' initialCounter={initialFavouriteCounter} solidIconSelected titleNotSelected='Marcar como favorito' titleSelected='Desmarcar como favorito' />
                    <ButtonWithoutCounter nameIcon='bookmark' defaultColor='white' selectedColor='blue' size='21px' solidIconSelected titleNotSelected='Guardar publicación' titleSelected='Desguardar publicación' />
                </div>
            </div>
        </div>
    )
}