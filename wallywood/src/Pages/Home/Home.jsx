import { ContentWrapper } from "../../Components/App/ContentWrapper/ContentWrapper"
import SlideWrapper from "../../Components/App/SlideWrapper/SlideWrapper"
import { usePosterData } from "../../Components/App/PosterList/PosterList"
import HomeStyle from "../../Components/Styled/homemain.styled";


const Home = () => {
	const { posterList } = usePosterData()
	console.log(posterList);

  return (
	<>
		<SlideWrapper />
		<ContentWrapper 
		title="sidste nyt..."
		description="Her finder du nye og gamle film plakater">
			{posterList && posterList.slice(0,2).map(poster => {
				return (
					<HomeStyle>
						<div>
						<figure key={poster.id}>
						<img src={poster.image} alt="Poster" />
						<figcaption>
							<h2>{poster.name}</h2>
							<p>Abernes Planet: Revolutionen&#8217;, foregår i en fremtid, hvor den hyperintelligente chimpanse, Caesar, leder en voksende nation af genetisk udviklede abekatte.</p>
							<p> genre: {poster.genre}</p>
							<button type='button'>læs mere</button>
							</figcaption>
                        </figure>
						</div>
					</HomeStyle>
				)
			})}
		</ContentWrapper>
	</>
  )
}
export default Home