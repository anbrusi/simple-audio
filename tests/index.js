import { SimpleAudio as SimpleAudioDll, icons } from '../src';
import SimpleAudio from '../src/simpleaudio';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 SimpleAudio DLL', () => {
	it( 'exports SimpleAudio', () => {
		expect( SimpleAudioDll ).to.equal( SimpleAudio );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
