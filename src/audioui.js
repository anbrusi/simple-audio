import { Plugin } from 'ckeditor5/src/core';
import simpleAudioIcon from '../theme/icons/audio.svg';
import { FileDialogButtonView } from 'ckeditor5/src/upload';
import { logError } from 'ckeditor5/src/utils';

export default class AudioUI extends Plugin {
	static get pluginName() {
		return 'AudioUI';
	}

	init() {
		const editor = this.editor;
		const t = editor.t;
		// const model = editor.model;

		// Add the "simpleAudioButton" to feature components.
		editor.ui.componentFactory.add( 'simpleAudioButton', locale => {
			const view = new FileDialogButtonView( locale );

			view.set( {
				acceptedType: 'audio/mpeg',
				allowMultipleFiles: false
			} );

			view.buttonView.set( {
				label: t( 'Simple audio' ),
				icon: simpleAudioIcon,
				tooltip: true
			} );

			view.on( 'done', ( evt, files ) => {
				if ( files[ 0 ] ) {
					this.insertAudio( files[ 0 ] );
				} else {
					logError( 'No file available', {} );
				}
			} );

			return view;
		} );

		// console.log( 'AudioUI.init() executed' );
	}

	insertAudio( file ) {
		const editor = this.editor;
		// console.log( 'insert audio from file ', file );
		// console.log( 'plugins', editor.plugins );
		const fileRepository = editor.plugins.get( 'FileRepository' );
		const loader = fileRepository.createLoader( file );

		loader.upload().then( result => this.createAudio( result ), error => logError( 'error', error ) );
		// console.log( 'loader', loader );
		// console.log( 'Repository', fileRepository );
	}

	createAudio( uploadResult ) {
		const model = this.editor.model;

		// console.log( 'uploadResult', uploadResult );
		model.change( writer => {
			const audio = writer.createElement( 'simpleaudio', { source: uploadResult.url, controls: '' } );

			// console.log( 'audio', audio );
			model.insertContent( audio );
		} );
	}
}
