import MarkdownModule from '../../lib/markdown-module';

describe('MarkdownModule', function () {
	let module, optsSpy;
	beforeEach(() => {
		optsSpy = jasmine.createSpy('setOptions');
		MarkdownModule.__Rewire__('marked', {
			setOptions: optsSpy
		});
	});
	afterEach(() => {
		MarkdownModule.__ResetDependency__('marked');
	})
	it('passes default options to marked if none provided', function () {
		module = new MarkdownModule();
		module.execute([], {});
		expect(optsSpy.calls.mostRecent().args[0].smartypants).toBe(true);
		expect(optsSpy.calls.mostRecent().args[0].sanitize).toBe(false);
	});
});