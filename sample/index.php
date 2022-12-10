<?php
/**
 * PHP test file for simple-audio.
 * 
 * @package 
 */
class Dispatcher {
    private function header():string {
        $html = '';
        $html .= '<head>';
            $html .= '<meta charset="UTF-8">';
            $html .= '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
            $html .= '<script src="../build/sample-ckeditor.js"></script>';
            $html .= '<title>cke5_source</title>';
        $html .= '</head>';
        return $html;
    }
    /**
     * JS script, instantiating a CKEditor 5, as built in the sample of the simple-audio package
     * 
     * @return string 
     */
    private function editorScript():string {
        $html = '';
        $html .= '<script>';
        $html .= <<<'EOD'
        ClassicEditor
            .create( document.querySelector( '#editor' ), {
                // Configuration details.
                simpleUpload: {
                    uploadUrl: 'https://myeclipse/simple-audio/ckeditor5-simple-audio/sample/imageUpload.php'
                }
            } )
            .then( editor => {
                console.log('editor ready');
            } )
            .catch( error => {
                console.error( error );
            });
        EOD;
        $html .= '</script>';
        return $html;
    }
    private function editor():string {
        $html = '';
        // Editor placeholder
        $html .= '<div id="editor">';
        // title
        $html .= '<h1>Audio test</h1>';
        $html .= '<p>Click on the audio button and choose an mp3 file</p>';
        $html .= '<p></p>';
        $html .= '</div>'; // end editor div

        // Instantiating script
        $html .= $this->editorScript();
        return $html;
    }
    private function body():string {
        $html = '';
        $html .= '<body>';
        $html .= $this->editor();
        $html .= '</body>';
        return $html;
    }
    public function dispatch() {
        $html = '';
        $html .= '<!DOCTYPE html>';
        $html .= '<html>';
        $html .= $this->header();
        $html .= $this->body();
        $html .= '</html>';
        echo $html;
    }
}
$dispatcher = new Dispatcher();
$dispatcher->dispatch();