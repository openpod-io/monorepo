import { html, define } from 'hybrids';
import globals from './index.css'

const render = () => html`
	<div class="w-screen font-sans py-12 background bg-indigo-900 h-screen flex justify-center items-center">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="lg:text-center">
				<h2 data-test-id="vision" class="text-base text-indigo-300 font-semibold tracking-wide uppercase">OpenPod</h2>
				<p data-test-id="why" class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">OpenPod is podcasts for freedom fighters ✊</p>
				<p data-test-id="what" class="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">Even if you are not, It is a cool decentralised app where you can create and listen to podcasts for free</p>
				<p data-test-id="who" class="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">At OpenPod you own your data. Data is encypted and stored on interplanetary file system(IPFS)</p>
				<a data-test-id="contribute" class="text-white my-8 inline-block" href="https://github.com/openpod/monorepo">github</a>
				<a data-test-id="create-podcast" class="text-white my-8 inline-block" href="/create">Create podcast</a>
				<a data-test-id="listen" class="text-white my-8 inline-block" href="/create">Listen to podcasts</a>
				<a data-test-id="login" class="text-white my-8 inline-block" href="/login">Login</a>
			</div>
		</div>
	</div>
`.style(globals)

const HomePage = define<HTMLElement>('home-page', { render })

export default HomePage;