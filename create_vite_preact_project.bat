if exist VITE_PREACT goto end
call npm create vite@latest reactor-test
pause
rename reactor-test VITE_PREACT
cd VITE_PREACT
call npm install --global yarn
call yarn install
call yarn add @preact/signals
call yarn audit
pause
call yarn run dev --open
:end
pause
