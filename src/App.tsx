import { Logo } from './components/Logo';
import BackgroundSections from './Sections/BackgroundSections';
import EventOverviewSections from './Sections/EventOverviewSections';

const App = () => {
	return (
		<main className=''>
			<BackgroundSections />
			<EventOverviewSections />
			<Logo />
		</main>
	);
};

export default App;
