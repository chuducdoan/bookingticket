import Header from "./Layout/Header/Header";

function HomeTemplate({children}) {
    return ( 
        <div>
            <Header />
            {children}
            <div>This is footer</div>
        </div> 
    );
}

export default HomeTemplate;