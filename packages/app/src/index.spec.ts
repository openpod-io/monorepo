import index from './index'

describe('Openpod.io', () => {
	it('identify itself', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="vision"]').innerHTML).to.equal('OpenPod')
	})
	
	it('should tell why', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="why"]').innerHTML).to.equal("OpenPod is podcasts for freedom fighters ✊")
	})

	it('should tell what', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="what"]').innerText).to.equal("Even if you are not, It is a cool decentralised app where you can create and listen to podcasts for free")
	})

	it('should tell who', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="who"]').innerHTML).to.equal("At OpenPod you own your data. Data is encypted and stored on interplanetary file system(IPFS)")
	})

	it('should have github link', () => {
		const element = new index().render();
		const link = element.querySelector('[data-test-id="contribute"]');
		expect(link.getAttribute('href')).to.equal("https://github.com/openpod/monorepo")
	})

	it('Should have create podcasts link', () => {
		const element = new index().render();
		const input = element.querySelector('[data-test-id="create-podcast"]');
		expect(element.querySelector('[data-test-id="create-podcast"]').textContent).to.equal("Create podcast")
	})

	it('Should have listen podcasts link', () => {
		const element = new index().render();
		const input = element.querySelector('[data-test-id="listen"]');
		expect(element.querySelector('[data-test-id="listen"]').textContent).to.equal("Listen to podcasts")
	})

	it('Should have login link', () => {
		const element = new index().render();
		const input = element.querySelector('[data-test-id="login"]');
		expect(element.querySelector('[data-test-id="login"]').textContent).to.equal("Login")
	})
})