```
sales-forecasting-machine-learning
├─ backend
│  ├─ main.py
│  ├─ model.py
│  ├─ models
│  │  ├─ DecisionTreeRegressor.pkl
│  │  ├─ ohe_encoder.pkl
│  │  ├─ ohe_feature_names.pkl
│  │  ├─ RandomForestRegressor.pkl
│  │  ├─ train_columns.pkl
│  │  └─ XGBRegressor.pkl
│  ├─ notebook
│  │  ├─ sales_prediction.csv
│  │  └─ Sales_Prediction_Starter.ipynb
│  ├─ requirements.txt
│  ├─ tests
│  │  ├─ test_api.py
│  │  └─ test_model.py
│  └─ __pycache__
│     ├─ main.cpython-313.pyc
│     ├─ model.cpython-313.pyc
│     └─ test_model.cpython-313.pyc
├─ frontend
│  ├─ .vite
│  │  └─ deps
│  │     ├─ package.json
│  │     └─ _metadata.json
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ App.tsx
│  │  ├─ components
│  │  │  └─ InputField.tsx
│  │  ├─ constants
│  │  │  └─ CategoricalOptions.ts
│  │  ├─ main.tsx
│  │  ├─ styles
│  │  │  └─ global.css
│  │  └─ vite-env.d.ts
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ README.md
└─ venv
   ├─ Include
   ├─ Lib
   │  └─ site-packages
   │     ├─ annotated_types
   │     │  ├─ py.typed
   │     │  ├─ test_cases.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ test_cases.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ annotated_types-0.7.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ anyio
   │     │  ├─ abc
   │     │  │  ├─ _eventloop.py
   │     │  │  ├─ _resources.py
   │     │  │  ├─ _sockets.py
   │     │  │  ├─ _streams.py
   │     │  │  ├─ _subprocesses.py
   │     │  │  ├─ _tasks.py
   │     │  │  ├─ _testing.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _eventloop.cpython-313.pyc
   │     │  │     ├─ _resources.cpython-313.pyc
   │     │  │     ├─ _sockets.cpython-313.pyc
   │     │  │     ├─ _streams.cpython-313.pyc
   │     │  │     ├─ _subprocesses.cpython-313.pyc
   │     │  │     ├─ _tasks.cpython-313.pyc
   │     │  │     ├─ _testing.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ from_thread.py
   │     │  ├─ lowlevel.py
   │     │  ├─ py.typed
   │     │  ├─ pytest_plugin.py
   │     │  ├─ streams
   │     │  │  ├─ buffered.py
   │     │  │  ├─ file.py
   │     │  │  ├─ memory.py
   │     │  │  ├─ stapled.py
   │     │  │  ├─ text.py
   │     │  │  ├─ tls.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ buffered.cpython-313.pyc
   │     │  │     ├─ file.cpython-313.pyc
   │     │  │     ├─ memory.cpython-313.pyc
   │     │  │     ├─ stapled.cpython-313.pyc
   │     │  │     ├─ text.cpython-313.pyc
   │     │  │     ├─ tls.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ to_interpreter.py
   │     │  ├─ to_process.py
   │     │  ├─ to_thread.py
   │     │  ├─ _backends
   │     │  │  ├─ _asyncio.py
   │     │  │  ├─ _trio.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _asyncio.cpython-313.pyc
   │     │  │     ├─ _trio.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _core
   │     │  │  ├─ _asyncio_selector_thread.py
   │     │  │  ├─ _eventloop.py
   │     │  │  ├─ _exceptions.py
   │     │  │  ├─ _fileio.py
   │     │  │  ├─ _resources.py
   │     │  │  ├─ _signals.py
   │     │  │  ├─ _sockets.py
   │     │  │  ├─ _streams.py
   │     │  │  ├─ _subprocesses.py
   │     │  │  ├─ _synchronization.py
   │     │  │  ├─ _tasks.py
   │     │  │  ├─ _tempfile.py
   │     │  │  ├─ _testing.py
   │     │  │  ├─ _typedattr.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _asyncio_selector_thread.cpython-313.pyc
   │     │  │     ├─ _eventloop.cpython-313.pyc
   │     │  │     ├─ _exceptions.cpython-313.pyc
   │     │  │     ├─ _fileio.cpython-313.pyc
   │     │  │     ├─ _resources.cpython-313.pyc
   │     │  │     ├─ _signals.cpython-313.pyc
   │     │  │     ├─ _sockets.cpython-313.pyc
   │     │  │     ├─ _streams.cpython-313.pyc
   │     │  │     ├─ _subprocesses.cpython-313.pyc
   │     │  │     ├─ _synchronization.cpython-313.pyc
   │     │  │     ├─ _tasks.cpython-313.pyc
   │     │  │     ├─ _tempfile.cpython-313.pyc
   │     │  │     ├─ _testing.cpython-313.pyc
   │     │  │     ├─ _typedattr.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ from_thread.cpython-313.pyc
   │     │     ├─ lowlevel.cpython-313.pyc
   │     │     ├─ pytest_plugin.cpython-313.pyc
   │     │     ├─ to_interpreter.cpython-313.pyc
   │     │     ├─ to_process.cpython-313.pyc
   │     │     ├─ to_thread.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ anyio-4.9.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ certifi
   │     │  ├─ cacert.pem
   │     │  ├─ core.py
   │     │  ├─ py.typed
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ certifi-2025.1.31.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ charset_normalizer
   │     │  ├─ api.py
   │     │  ├─ cd.py
   │     │  ├─ cli
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ constant.py
   │     │  ├─ legacy.py
   │     │  ├─ md.cp313-win_amd64.pyd
   │     │  ├─ md.py
   │     │  ├─ md__mypyc.cp313-win_amd64.pyd
   │     │  ├─ models.py
   │     │  ├─ py.typed
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ api.cpython-313.pyc
   │     │     ├─ cd.cpython-313.pyc
   │     │     ├─ constant.cpython-313.pyc
   │     │     ├─ legacy.cpython-313.pyc
   │     │     ├─ md.cpython-313.pyc
   │     │     ├─ models.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ charset_normalizer-3.4.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ click
   │     │  ├─ core.py
   │     │  ├─ decorators.py
   │     │  ├─ exceptions.py
   │     │  ├─ formatting.py
   │     │  ├─ globals.py
   │     │  ├─ parser.py
   │     │  ├─ py.typed
   │     │  ├─ shell_completion.py
   │     │  ├─ termui.py
   │     │  ├─ testing.py
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ _compat.py
   │     │  ├─ _termui_impl.py
   │     │  ├─ _textwrap.py
   │     │  ├─ _winconsole.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ decorators.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ formatting.cpython-313.pyc
   │     │     ├─ globals.cpython-313.pyc
   │     │     ├─ parser.cpython-313.pyc
   │     │     ├─ shell_completion.cpython-313.pyc
   │     │     ├─ termui.cpython-313.pyc
   │     │     ├─ testing.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ _compat.cpython-313.pyc
   │     │     ├─ _termui_impl.cpython-313.pyc
   │     │     ├─ _textwrap.cpython-313.pyc
   │     │     ├─ _winconsole.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ click-8.1.8.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ cloudpickle
   │     │  ├─ cloudpickle.py
   │     │  ├─ cloudpickle_fast.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ cloudpickle.cpython-313.pyc
   │     │     ├─ cloudpickle_fast.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ cloudpickle-3.1.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ colorama
   │     │  ├─ ansi.py
   │     │  ├─ ansitowin32.py
   │     │  ├─ initialise.py
   │     │  ├─ tests
   │     │  │  ├─ ansitowin32_test.py
   │     │  │  ├─ ansi_test.py
   │     │  │  ├─ initialise_test.py
   │     │  │  ├─ isatty_test.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ winterm_test.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ ansitowin32_test.cpython-313.pyc
   │     │  │     ├─ ansi_test.cpython-313.pyc
   │     │  │     ├─ initialise_test.cpython-313.pyc
   │     │  │     ├─ isatty_test.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ winterm_test.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ win32.py
   │     │  ├─ winterm.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ ansi.cpython-313.pyc
   │     │     ├─ ansitowin32.cpython-313.pyc
   │     │     ├─ initialise.cpython-313.pyc
   │     │     ├─ win32.cpython-313.pyc
   │     │     ├─ winterm.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ colorama-0.4.6.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ contourpy
   │     │  ├─ array.py
   │     │  ├─ chunk.py
   │     │  ├─ convert.py
   │     │  ├─ dechunk.py
   │     │  ├─ enum_util.py
   │     │  ├─ py.typed
   │     │  ├─ typecheck.py
   │     │  ├─ types.py
   │     │  ├─ util
   │     │  │  ├─ bokeh_renderer.py
   │     │  │  ├─ bokeh_util.py
   │     │  │  ├─ data.py
   │     │  │  ├─ mpl_renderer.py
   │     │  │  ├─ mpl_util.py
   │     │  │  ├─ renderer.py
   │     │  │  ├─ _build_config.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ bokeh_renderer.cpython-313.pyc
   │     │  │     ├─ bokeh_util.cpython-313.pyc
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ mpl_renderer.cpython-313.pyc
   │     │  │     ├─ mpl_util.cpython-313.pyc
   │     │  │     ├─ renderer.cpython-313.pyc
   │     │  │     ├─ _build_config.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _contourpy.cp313-win_amd64.lib
   │     │  ├─ _contourpy.cp313-win_amd64.pyd
   │     │  ├─ _contourpy.pyi
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ array.cpython-313.pyc
   │     │     ├─ chunk.cpython-313.pyc
   │     │     ├─ convert.cpython-313.pyc
   │     │     ├─ dechunk.cpython-313.pyc
   │     │     ├─ enum_util.cpython-313.pyc
   │     │     ├─ typecheck.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ contourpy-1.3.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ cycler
   │     │  ├─ py.typed
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ cycler-0.12.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ dask
   │     │  ├─ array
   │     │  │  ├─ api.py
   │     │  │  ├─ backends.py
   │     │  │  ├─ blockwise.py
   │     │  │  ├─ chunk.py
   │     │  │  ├─ chunk_types.py
   │     │  │  ├─ core.py
   │     │  │  ├─ creation.py
   │     │  │  ├─ cupy_entry_point.py
   │     │  │  ├─ dispatch.py
   │     │  │  ├─ einsumfuncs.py
   │     │  │  ├─ fft.py
   │     │  │  ├─ gufunc.py
   │     │  │  ├─ image.py
   │     │  │  ├─ lib
   │     │  │  │  ├─ stride_tricks.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ stride_tricks.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ linalg.py
   │     │  │  ├─ ma.py
   │     │  │  ├─ numpy_compat.py
   │     │  │  ├─ NUMPY_LICENSE.txt
   │     │  │  ├─ optimization.py
   │     │  │  ├─ overlap.py
   │     │  │  ├─ percentile.py
   │     │  │  ├─ random.py
   │     │  │  ├─ rechunk.py
   │     │  │  ├─ reductions.py
   │     │  │  ├─ reshape.py
   │     │  │  ├─ routines.py
   │     │  │  ├─ slicing.py
   │     │  │  ├─ stats.py
   │     │  │  ├─ svg.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_array_core.py
   │     │  │  │  ├─ test_array_expr_incompatible.py
   │     │  │  │  ├─ test_array_function.py
   │     │  │  │  ├─ test_array_utils.py
   │     │  │  │  ├─ test_atop.py
   │     │  │  │  ├─ test_chunk.py
   │     │  │  │  ├─ test_creation.py
   │     │  │  │  ├─ test_cupy_core.py
   │     │  │  │  ├─ test_cupy_creation.py
   │     │  │  │  ├─ test_cupy_gufunc.py
   │     │  │  │  ├─ test_cupy_linalg.py
   │     │  │  │  ├─ test_cupy_overlap.py
   │     │  │  │  ├─ test_cupy_percentile.py
   │     │  │  │  ├─ test_cupy_random.py
   │     │  │  │  ├─ test_cupy_reductions.py
   │     │  │  │  ├─ test_cupy_routines.py
   │     │  │  │  ├─ test_cupy_slicing.py
   │     │  │  │  ├─ test_cupy_sparse.py
   │     │  │  │  ├─ test_dispatch.py
   │     │  │  │  ├─ test_fft.py
   │     │  │  │  ├─ test_gufunc.py
   │     │  │  │  ├─ test_image.py
   │     │  │  │  ├─ test_linalg.py
   │     │  │  │  ├─ test_map_blocks.py
   │     │  │  │  ├─ test_masked.py
   │     │  │  │  ├─ test_numpy_compat.py
   │     │  │  │  ├─ test_optimization.py
   │     │  │  │  ├─ test_overlap.py
   │     │  │  │  ├─ test_percentiles.py
   │     │  │  │  ├─ test_random.py
   │     │  │  │  ├─ test_rechunk.py
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_reshape.py
   │     │  │  │  ├─ test_routines.py
   │     │  │  │  ├─ test_shuffle.py
   │     │  │  │  ├─ test_slicing.py
   │     │  │  │  ├─ test_sparse.py
   │     │  │  │  ├─ test_stats.py
   │     │  │  │  ├─ test_svg.py
   │     │  │  │  ├─ test_testing.py
   │     │  │  │  ├─ test_ufunc.py
   │     │  │  │  ├─ test_wrap.py
   │     │  │  │  ├─ test_xarray.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_array_core.cpython-313.pyc
   │     │  │  │     ├─ test_array_expr_incompatible.cpython-313.pyc
   │     │  │  │     ├─ test_array_function.cpython-313.pyc
   │     │  │  │     ├─ test_array_utils.cpython-313.pyc
   │     │  │  │     ├─ test_atop.cpython-313.pyc
   │     │  │  │     ├─ test_chunk.cpython-313.pyc
   │     │  │  │     ├─ test_creation.cpython-313.pyc
   │     │  │  │     ├─ test_cupy_core.cpython-313.pyc
   │     │  │  │     ├─ test_cupy_creation.cpython-313.pyc
   │     │  │  │     ├─ test_cupy_gufunc.cpython-313.pyc
   │     │  │  │     ├─ test_cupy_linalg.cpython-313.pyc
   │     │  │  │     ├─ test_cupy_overlap.cpython-313.pyc
   │     │  │  │     ├─ test_cupy_percentile.cpython-313.pyc
   │     │  │  │     ├─ test_cupy_random.cpython-313.pyc
   │     │  │  │     ├─ test_cupy_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_cupy_routines.cpython-313.pyc
   │     │  │  │     ├─ test_cupy_slicing.cpython-313.pyc
   │     │  │  │     ├─ test_cupy_sparse.cpython-313.pyc
   │     │  │  │     ├─ test_dispatch.cpython-313.pyc
   │     │  │  │     ├─ test_fft.cpython-313.pyc
   │     │  │  │     ├─ test_gufunc.cpython-313.pyc
   │     │  │  │     ├─ test_image.cpython-313.pyc
   │     │  │  │     ├─ test_linalg.cpython-313.pyc
   │     │  │  │     ├─ test_map_blocks.cpython-313.pyc
   │     │  │  │     ├─ test_masked.cpython-313.pyc
   │     │  │  │     ├─ test_numpy_compat.cpython-313.pyc
   │     │  │  │     ├─ test_optimization.cpython-313.pyc
   │     │  │  │     ├─ test_overlap.cpython-313.pyc
   │     │  │  │     ├─ test_percentiles.cpython-313.pyc
   │     │  │  │     ├─ test_random.cpython-313.pyc
   │     │  │  │     ├─ test_rechunk.cpython-313.pyc
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_reshape.cpython-313.pyc
   │     │  │  │     ├─ test_routines.cpython-313.pyc
   │     │  │  │     ├─ test_shuffle.cpython-313.pyc
   │     │  │  │     ├─ test_slicing.cpython-313.pyc
   │     │  │  │     ├─ test_sparse.cpython-313.pyc
   │     │  │  │     ├─ test_stats.cpython-313.pyc
   │     │  │  │     ├─ test_svg.cpython-313.pyc
   │     │  │  │     ├─ test_testing.cpython-313.pyc
   │     │  │  │     ├─ test_ufunc.cpython-313.pyc
   │     │  │  │     ├─ test_wrap.cpython-313.pyc
   │     │  │  │     ├─ test_xarray.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tiledb_io.py
   │     │  │  ├─ ufunc.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ wrap.py
   │     │  │  ├─ _array_expr
   │     │  │  │  ├─ random.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_collection.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_collection.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _backends.py
   │     │  │  │  ├─ _blockwise.py
   │     │  │  │  ├─ _collection.py
   │     │  │  │  ├─ _creation.py
   │     │  │  │  ├─ _expr.py
   │     │  │  │  ├─ _io.py
   │     │  │  │  ├─ _map_blocks.py
   │     │  │  │  ├─ _rechunk.py
   │     │  │  │  ├─ _reductions.py
   │     │  │  │  ├─ _shuffle.py
   │     │  │  │  ├─ _slicing.py
   │     │  │  │  ├─ _utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ random.cpython-313.pyc
   │     │  │  │     ├─ _backends.cpython-313.pyc
   │     │  │  │     ├─ _blockwise.cpython-313.pyc
   │     │  │  │     ├─ _collection.cpython-313.pyc
   │     │  │  │     ├─ _creation.cpython-313.pyc
   │     │  │  │     ├─ _expr.cpython-313.pyc
   │     │  │  │     ├─ _io.cpython-313.pyc
   │     │  │  │     ├─ _map_blocks.cpython-313.pyc
   │     │  │  │     ├─ _rechunk.cpython-313.pyc
   │     │  │  │     ├─ _reductions.cpython-313.pyc
   │     │  │  │     ├─ _shuffle.cpython-313.pyc
   │     │  │  │     ├─ _slicing.cpython-313.pyc
   │     │  │  │     ├─ _utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _reductions_generic.py
   │     │  │  ├─ _shuffle.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ backends.cpython-313.pyc
   │     │  │     ├─ blockwise.cpython-313.pyc
   │     │  │     ├─ chunk.cpython-313.pyc
   │     │  │     ├─ chunk_types.cpython-313.pyc
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ creation.cpython-313.pyc
   │     │  │     ├─ cupy_entry_point.cpython-313.pyc
   │     │  │     ├─ dispatch.cpython-313.pyc
   │     │  │     ├─ einsumfuncs.cpython-313.pyc
   │     │  │     ├─ fft.cpython-313.pyc
   │     │  │     ├─ gufunc.cpython-313.pyc
   │     │  │     ├─ image.cpython-313.pyc
   │     │  │     ├─ linalg.cpython-313.pyc
   │     │  │     ├─ ma.cpython-313.pyc
   │     │  │     ├─ numpy_compat.cpython-313.pyc
   │     │  │     ├─ optimization.cpython-313.pyc
   │     │  │     ├─ overlap.cpython-313.pyc
   │     │  │     ├─ percentile.cpython-313.pyc
   │     │  │     ├─ random.cpython-313.pyc
   │     │  │     ├─ rechunk.cpython-313.pyc
   │     │  │     ├─ reductions.cpython-313.pyc
   │     │  │     ├─ reshape.cpython-313.pyc
   │     │  │     ├─ routines.cpython-313.pyc
   │     │  │     ├─ slicing.cpython-313.pyc
   │     │  │     ├─ stats.cpython-313.pyc
   │     │  │     ├─ svg.cpython-313.pyc
   │     │  │     ├─ tiledb_io.cpython-313.pyc
   │     │  │     ├─ ufunc.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ wrap.cpython-313.pyc
   │     │  │     ├─ _reductions_generic.cpython-313.pyc
   │     │  │     ├─ _shuffle.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ backends.py
   │     │  ├─ bag
   │     │  │  ├─ avro.py
   │     │  │  ├─ chunk.py
   │     │  │  ├─ core.py
   │     │  │  ├─ random.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_avro.py
   │     │  │  │  ├─ test_bag.py
   │     │  │  │  ├─ test_random.py
   │     │  │  │  ├─ test_text.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_avro.cpython-313.pyc
   │     │  │  │     ├─ test_bag.cpython-313.pyc
   │     │  │  │     ├─ test_random.cpython-313.pyc
   │     │  │  │     ├─ test_text.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ text.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ avro.cpython-313.pyc
   │     │  │     ├─ chunk.cpython-313.pyc
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ random.cpython-313.pyc
   │     │  │     ├─ text.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ base.py
   │     │  ├─ blockwise.py
   │     │  ├─ bytes
   │     │  │  ├─ core.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_bytes_utils.py
   │     │  │  │  ├─ test_compression.py
   │     │  │  │  ├─ test_http.py
   │     │  │  │  ├─ test_local.py
   │     │  │  │  ├─ test_s3.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_bytes_utils.cpython-313.pyc
   │     │  │  │     ├─ test_compression.cpython-313.pyc
   │     │  │  │     ├─ test_http.cpython-313.pyc
   │     │  │  │     ├─ test_local.cpython-313.pyc
   │     │  │  │     ├─ test_s3.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ cache.py
   │     │  ├─ callbacks.py
   │     │  ├─ cli.py
   │     │  ├─ config.py
   │     │  ├─ conftest.py
   │     │  ├─ context.py
   │     │  ├─ core.py
   │     │  ├─ dask-schema.yaml
   │     │  ├─ dask.yaml
   │     │  ├─ dataframe
   │     │  │  ├─ accessor.py
   │     │  │  ├─ api.py
   │     │  │  ├─ backends.py
   │     │  │  ├─ categorical.py
   │     │  │  ├─ core.py
   │     │  │  ├─ dask_expr
   │     │  │  │  ├─ datasets.py
   │     │  │  │  ├─ diagnostics
   │     │  │  │  │  ├─ _analyze.py
   │     │  │  │  │  ├─ _analyze_plugin.py
   │     │  │  │  │  ├─ _explain.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _analyze.cpython-313.pyc
   │     │  │  │  │     ├─ _analyze_plugin.cpython-313.pyc
   │     │  │  │  │     ├─ _explain.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ io
   │     │  │  │  │  ├─ bag.py
   │     │  │  │  │  ├─ io.py
   │     │  │  │  │  ├─ parquet.py
   │     │  │  │  │  ├─ records.py
   │     │  │  │  │  ├─ tests
   │     │  │  │  │  │  ├─ test_delayed.py
   │     │  │  │  │  │  ├─ test_distributed.py
   │     │  │  │  │  │  ├─ test_from_pandas.py
   │     │  │  │  │  │  ├─ test_io.py
   │     │  │  │  │  │  ├─ test_parquet.py
   │     │  │  │  │  │  ├─ test_sql.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_delayed.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_distributed.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_from_pandas.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_io.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_parquet.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_sql.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ _delayed.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ bag.cpython-313.pyc
   │     │  │  │  │     ├─ io.cpython-313.pyc
   │     │  │  │  │     ├─ parquet.cpython-313.pyc
   │     │  │  │  │     ├─ records.cpython-313.pyc
   │     │  │  │  │     ├─ _delayed.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_align_partitions.py
   │     │  │  │  │  ├─ test_categorical.py
   │     │  │  │  │  ├─ test_collection.py
   │     │  │  │  │  ├─ test_concat.py
   │     │  │  │  │  ├─ test_core.py
   │     │  │  │  │  ├─ test_cumulative.py
   │     │  │  │  │  ├─ test_datasets.py
   │     │  │  │  │  ├─ test_datetime.py
   │     │  │  │  │  ├─ test_describe.py
   │     │  │  │  │  ├─ test_diagnostics.py
   │     │  │  │  │  ├─ test_distributed.py
   │     │  │  │  │  ├─ test_dummies.py
   │     │  │  │  │  ├─ test_format.py
   │     │  │  │  │  ├─ test_fusion.py
   │     │  │  │  │  ├─ test_groupby.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_interchange.py
   │     │  │  │  │  ├─ test_map_partitions_overlap.py
   │     │  │  │  │  ├─ test_merge.py
   │     │  │  │  │  ├─ test_merge_asof.py
   │     │  │  │  │  ├─ test_partitioning_knowledge.py
   │     │  │  │  │  ├─ test_predicate_pushdown.py
   │     │  │  │  │  ├─ test_quantiles.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ test_repartition.py
   │     │  │  │  │  ├─ test_reshape.py
   │     │  │  │  │  ├─ test_rolling.py
   │     │  │  │  │  ├─ test_shuffle.py
   │     │  │  │  │  ├─ test_string_accessor.py
   │     │  │  │  │  ├─ test_ufunc.py
   │     │  │  │  │  ├─ _util.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_align_partitions.cpython-313.pyc
   │     │  │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │  │     ├─ test_collection.cpython-313.pyc
   │     │  │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_core.cpython-313.pyc
   │     │  │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │  │     ├─ test_datasets.cpython-313.pyc
   │     │  │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │  │     ├─ test_describe.cpython-313.pyc
   │     │  │  │  │     ├─ test_diagnostics.cpython-313.pyc
   │     │  │  │  │     ├─ test_distributed.cpython-313.pyc
   │     │  │  │  │     ├─ test_dummies.cpython-313.pyc
   │     │  │  │  │     ├─ test_format.cpython-313.pyc
   │     │  │  │  │     ├─ test_fusion.cpython-313.pyc
   │     │  │  │  │     ├─ test_groupby.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_interchange.cpython-313.pyc
   │     │  │  │  │     ├─ test_map_partitions_overlap.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_asof.cpython-313.pyc
   │     │  │  │  │     ├─ test_partitioning_knowledge.cpython-313.pyc
   │     │  │  │  │     ├─ test_predicate_pushdown.cpython-313.pyc
   │     │  │  │  │     ├─ test_quantiles.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     ├─ test_repartition.cpython-313.pyc
   │     │  │  │  │     ├─ test_reshape.cpython-313.pyc
   │     │  │  │  │     ├─ test_rolling.cpython-313.pyc
   │     │  │  │  │     ├─ test_shuffle.cpython-313.pyc
   │     │  │  │  │     ├─ test_string_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_ufunc.cpython-313.pyc
   │     │  │  │  │     ├─ _util.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _accessor.py
   │     │  │  │  ├─ _backends.py
   │     │  │  │  ├─ _categorical.py
   │     │  │  │  ├─ _collection.py
   │     │  │  │  ├─ _concat.py
   │     │  │  │  ├─ _cumulative.py
   │     │  │  │  ├─ _datetime.py
   │     │  │  │  ├─ _describe.py
   │     │  │  │  ├─ _dummies.py
   │     │  │  │  ├─ _expr.py
   │     │  │  │  ├─ _groupby.py
   │     │  │  │  ├─ _indexing.py
   │     │  │  │  ├─ _interchange.py
   │     │  │  │  ├─ _merge.py
   │     │  │  │  ├─ _merge_asof.py
   │     │  │  │  ├─ _quantile.py
   │     │  │  │  ├─ _quantiles.py
   │     │  │  │  ├─ _reductions.py
   │     │  │  │  ├─ _repartition.py
   │     │  │  │  ├─ _rolling.py
   │     │  │  │  ├─ _shuffle.py
   │     │  │  │  ├─ _str_accessor.py
   │     │  │  │  ├─ _util.py
   │     │  │  │  ├─ _version.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ datasets.cpython-313.pyc
   │     │  │  │     ├─ _accessor.cpython-313.pyc
   │     │  │  │     ├─ _backends.cpython-313.pyc
   │     │  │  │     ├─ _categorical.cpython-313.pyc
   │     │  │  │     ├─ _collection.cpython-313.pyc
   │     │  │  │     ├─ _concat.cpython-313.pyc
   │     │  │  │     ├─ _cumulative.cpython-313.pyc
   │     │  │  │     ├─ _datetime.cpython-313.pyc
   │     │  │  │     ├─ _describe.cpython-313.pyc
   │     │  │  │     ├─ _dummies.cpython-313.pyc
   │     │  │  │     ├─ _expr.cpython-313.pyc
   │     │  │  │     ├─ _groupby.cpython-313.pyc
   │     │  │  │     ├─ _indexing.cpython-313.pyc
   │     │  │  │     ├─ _interchange.cpython-313.pyc
   │     │  │  │     ├─ _merge.cpython-313.pyc
   │     │  │  │     ├─ _merge_asof.cpython-313.pyc
   │     │  │  │     ├─ _quantile.cpython-313.pyc
   │     │  │  │     ├─ _quantiles.cpython-313.pyc
   │     │  │  │     ├─ _reductions.cpython-313.pyc
   │     │  │  │     ├─ _repartition.cpython-313.pyc
   │     │  │  │     ├─ _rolling.cpython-313.pyc
   │     │  │  │     ├─ _shuffle.cpython-313.pyc
   │     │  │  │     ├─ _str_accessor.cpython-313.pyc
   │     │  │  │     ├─ _util.cpython-313.pyc
   │     │  │  │     ├─ _version.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ dispatch.py
   │     │  │  ├─ extensions.py
   │     │  │  ├─ groupby.py
   │     │  │  ├─ hyperloglog.py
   │     │  │  ├─ indexing.py
   │     │  │  ├─ io
   │     │  │  │  ├─ csv.py
   │     │  │  │  ├─ demo.py
   │     │  │  │  ├─ hdf.py
   │     │  │  │  ├─ io.py
   │     │  │  │  ├─ json.py
   │     │  │  │  ├─ orc
   │     │  │  │  │  ├─ arrow.py
   │     │  │  │  │  ├─ core.py
   │     │  │  │  │  ├─ utils.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ arrow.cpython-313.pyc
   │     │  │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ parquet
   │     │  │  │  │  ├─ arrow.py
   │     │  │  │  │  ├─ core.py
   │     │  │  │  │  ├─ utils.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ arrow.cpython-313.pyc
   │     │  │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ sql.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_csv.py
   │     │  │  │  │  ├─ test_demo.py
   │     │  │  │  │  ├─ test_hdf.py
   │     │  │  │  │  ├─ test_io.py
   │     │  │  │  │  ├─ test_json.py
   │     │  │  │  │  ├─ test_orc.py
   │     │  │  │  │  ├─ test_parquet.py
   │     │  │  │  │  ├─ test_sql.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_csv.cpython-313.pyc
   │     │  │  │  │     ├─ test_demo.cpython-313.pyc
   │     │  │  │  │     ├─ test_hdf.cpython-313.pyc
   │     │  │  │  │     ├─ test_io.cpython-313.pyc
   │     │  │  │  │     ├─ test_json.cpython-313.pyc
   │     │  │  │  │     ├─ test_orc.cpython-313.pyc
   │     │  │  │  │     ├─ test_parquet.cpython-313.pyc
   │     │  │  │  │     ├─ test_sql.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ csv.cpython-313.pyc
   │     │  │  │     ├─ demo.cpython-313.pyc
   │     │  │  │     ├─ hdf.cpython-313.pyc
   │     │  │  │     ├─ io.cpython-313.pyc
   │     │  │  │     ├─ json.cpython-313.pyc
   │     │  │  │     ├─ sql.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ methods.py
   │     │  │  ├─ multi.py
   │     │  │  ├─ partitionquantiles.py
   │     │  │  ├─ rolling.py
   │     │  │  ├─ shuffle.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_accessors.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_arithmetics_reduction.py
   │     │  │  │  ├─ test_boolean.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_dataframe.py
   │     │  │  │  ├─ test_extensions.py
   │     │  │  │  ├─ test_groupby.py
   │     │  │  │  ├─ test_hashing.py
   │     │  │  │  ├─ test_hyperloglog.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_merge_column_and_index.py
   │     │  │  │  ├─ test_methods.py
   │     │  │  │  ├─ test_multi.py
   │     │  │  │  ├─ test_numeric.py
   │     │  │  │  ├─ test_pyarrow.py
   │     │  │  │  ├─ test_pyarrow_compat.py
   │     │  │  │  ├─ test_reshape.py
   │     │  │  │  ├─ test_rolling.py
   │     │  │  │  ├─ test_shuffle.py
   │     │  │  │  ├─ test_ufunc.py
   │     │  │  │  ├─ test_utils_dataframe.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_accessors.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_arithmetics_reduction.cpython-313.pyc
   │     │  │  │     ├─ test_boolean.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_dataframe.cpython-313.pyc
   │     │  │  │     ├─ test_extensions.cpython-313.pyc
   │     │  │  │     ├─ test_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_hashing.cpython-313.pyc
   │     │  │  │     ├─ test_hyperloglog.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_merge_column_and_index.cpython-313.pyc
   │     │  │  │     ├─ test_methods.cpython-313.pyc
   │     │  │  │     ├─ test_multi.cpython-313.pyc
   │     │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_pyarrow.cpython-313.pyc
   │     │  │  │     ├─ test_pyarrow_compat.cpython-313.pyc
   │     │  │  │     ├─ test_reshape.cpython-313.pyc
   │     │  │  │     ├─ test_rolling.cpython-313.pyc
   │     │  │  │     ├─ test_shuffle.cpython-313.pyc
   │     │  │  │     ├─ test_ufunc.cpython-313.pyc
   │     │  │  │     ├─ test_utils_dataframe.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tseries
   │     │  │  │  ├─ resample.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_resample.py
   │     │  │  │  │  ├─ test_resample_expr.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_resample.cpython-313.pyc
   │     │  │  │  │     ├─ test_resample_expr.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ resample.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ utils.py
   │     │  │  ├─ _compat.py
   │     │  │  ├─ _dtypes.py
   │     │  │  ├─ _pyarrow.py
   │     │  │  ├─ _pyarrow_compat.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ accessor.cpython-313.pyc
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ backends.cpython-313.pyc
   │     │  │     ├─ categorical.cpython-313.pyc
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ dispatch.cpython-313.pyc
   │     │  │     ├─ extensions.cpython-313.pyc
   │     │  │     ├─ groupby.cpython-313.pyc
   │     │  │     ├─ hyperloglog.cpython-313.pyc
   │     │  │     ├─ indexing.cpython-313.pyc
   │     │  │     ├─ methods.cpython-313.pyc
   │     │  │     ├─ multi.cpython-313.pyc
   │     │  │     ├─ partitionquantiles.cpython-313.pyc
   │     │  │     ├─ rolling.cpython-313.pyc
   │     │  │     ├─ shuffle.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ _compat.cpython-313.pyc
   │     │  │     ├─ _dtypes.cpython-313.pyc
   │     │  │     ├─ _pyarrow.cpython-313.pyc
   │     │  │     ├─ _pyarrow_compat.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ datasets.py
   │     │  ├─ delayed.py
   │     │  ├─ diagnostics
   │     │  │  ├─ profile.py
   │     │  │  ├─ profile_visualize.py
   │     │  │  ├─ progress.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_profiler.py
   │     │  │  │  ├─ test_progress.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_profiler.cpython-313.pyc
   │     │  │  │     ├─ test_progress.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ profile.cpython-313.pyc
   │     │  │     ├─ profile_visualize.cpython-313.pyc
   │     │  │     ├─ progress.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ distributed.py
   │     │  ├─ dot.py
   │     │  ├─ graph_manipulation.py
   │     │  ├─ hashing.py
   │     │  ├─ highlevelgraph.py
   │     │  ├─ layers.py
   │     │  ├─ local.py
   │     │  ├─ ml.py
   │     │  ├─ multiprocessing.py
   │     │  ├─ optimization.py
   │     │  ├─ order.py
   │     │  ├─ py.typed
   │     │  ├─ rewrite.py
   │     │  ├─ sizeof.py
   │     │  ├─ system.py
   │     │  ├─ task_spec.py
   │     │  ├─ tests
   │     │  │  ├─ test_backends.py
   │     │  │  ├─ test_base.py
   │     │  │  ├─ test_cache.py
   │     │  │  ├─ test_callbacks.py
   │     │  │  ├─ test_ci.py
   │     │  │  ├─ test_cli.py
   │     │  │  ├─ test_compatibility.py
   │     │  │  ├─ test_config.py
   │     │  │  ├─ test_context.py
   │     │  │  ├─ test_core.py
   │     │  │  ├─ test_datasets.py
   │     │  │  ├─ test_delayed.py
   │     │  │  ├─ test_distributed.py
   │     │  │  ├─ test_docs.py
   │     │  │  ├─ test_dot.py
   │     │  │  ├─ test_expr.py
   │     │  │  ├─ test_graph_manipulation.py
   │     │  │  ├─ test_hashing.py
   │     │  │  ├─ test_highgraph.py
   │     │  │  ├─ test_imports.py
   │     │  │  ├─ test_layers.py
   │     │  │  ├─ test_local.py
   │     │  │  ├─ test_ml.py
   │     │  │  ├─ test_multiprocessing.py
   │     │  │  ├─ test_optimization.py
   │     │  │  ├─ test_order.py
   │     │  │  ├─ test_rewrite.py
   │     │  │  ├─ test_sizeof.py
   │     │  │  ├─ test_spark_compat.py
   │     │  │  ├─ test_system.py
   │     │  │  ├─ test_task_spec.py
   │     │  │  ├─ test_threaded.py
   │     │  │  ├─ test_tokenize.py
   │     │  │  ├─ test_traceback.py
   │     │  │  ├─ test_typing.py
   │     │  │  ├─ test_utils.py
   │     │  │  ├─ test_utils_test.py
   │     │  │  ├─ warning_aliases.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ test_backends.cpython-313.pyc
   │     │  │     ├─ test_base.cpython-313.pyc
   │     │  │     ├─ test_cache.cpython-313.pyc
   │     │  │     ├─ test_callbacks.cpython-313.pyc
   │     │  │     ├─ test_ci.cpython-313.pyc
   │     │  │     ├─ test_cli.cpython-313.pyc
   │     │  │     ├─ test_compatibility.cpython-313.pyc
   │     │  │     ├─ test_config.cpython-313.pyc
   │     │  │     ├─ test_context.cpython-313.pyc
   │     │  │     ├─ test_core.cpython-313.pyc
   │     │  │     ├─ test_datasets.cpython-313.pyc
   │     │  │     ├─ test_delayed.cpython-313.pyc
   │     │  │     ├─ test_distributed.cpython-313.pyc
   │     │  │     ├─ test_docs.cpython-313.pyc
   │     │  │     ├─ test_dot.cpython-313.pyc
   │     │  │     ├─ test_expr.cpython-313.pyc
   │     │  │     ├─ test_graph_manipulation.cpython-313.pyc
   │     │  │     ├─ test_hashing.cpython-313.pyc
   │     │  │     ├─ test_highgraph.cpython-313.pyc
   │     │  │     ├─ test_imports.cpython-313.pyc
   │     │  │     ├─ test_layers.cpython-313.pyc
   │     │  │     ├─ test_local.cpython-313.pyc
   │     │  │     ├─ test_ml.cpython-313.pyc
   │     │  │     ├─ test_multiprocessing.cpython-313.pyc
   │     │  │     ├─ test_optimization.cpython-313.pyc
   │     │  │     ├─ test_order.cpython-313.pyc
   │     │  │     ├─ test_rewrite.cpython-313.pyc
   │     │  │     ├─ test_sizeof.cpython-313.pyc
   │     │  │     ├─ test_spark_compat.cpython-313.pyc
   │     │  │     ├─ test_system.cpython-313.pyc
   │     │  │     ├─ test_task_spec.cpython-313.pyc
   │     │  │     ├─ test_threaded.cpython-313.pyc
   │     │  │     ├─ test_tokenize.cpython-313.pyc
   │     │  │     ├─ test_traceback.cpython-313.pyc
   │     │  │     ├─ test_typing.cpython-313.pyc
   │     │  │     ├─ test_utils.cpython-313.pyc
   │     │  │     ├─ test_utils_test.cpython-313.pyc
   │     │  │     ├─ warning_aliases.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ threaded.py
   │     │  ├─ tokenize.py
   │     │  ├─ typing.py
   │     │  ├─ utils.py
   │     │  ├─ utils_test.py
   │     │  ├─ widgets
   │     │  │  ├─ templates
   │     │  │  │  ├─ array.html.j2
   │     │  │  │  ├─ dataframe.html.j2
   │     │  │  │  ├─ highlevelgraph.html.j2
   │     │  │  │  └─ highlevelgraph_layer.html.j2
   │     │  │  ├─ tests
   │     │  │  │  ├─ templates
   │     │  │  │  │  ├─ bytes.html.j2
   │     │  │  │  │  ├─ custom_filter.html.j2
   │     │  │  │  │  └─ example.html.j2
   │     │  │  │  ├─ test_widgets.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ test_widgets.cpython-313.pyc
   │     │  │  ├─ widgets.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ widgets.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _collections.py
   │     │  ├─ _compatibility.py
   │     │  ├─ _dispatch.py
   │     │  ├─ _expr.py
   │     │  ├─ _task_spec.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ backends.cpython-313.pyc
   │     │     ├─ base.cpython-313.pyc
   │     │     ├─ blockwise.cpython-313.pyc
   │     │     ├─ cache.cpython-313.pyc
   │     │     ├─ callbacks.cpython-313.pyc
   │     │     ├─ cli.cpython-313.pyc
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ context.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ datasets.cpython-313.pyc
   │     │     ├─ delayed.cpython-313.pyc
   │     │     ├─ distributed.cpython-313.pyc
   │     │     ├─ dot.cpython-313.pyc
   │     │     ├─ graph_manipulation.cpython-313.pyc
   │     │     ├─ hashing.cpython-313.pyc
   │     │     ├─ highlevelgraph.cpython-313.pyc
   │     │     ├─ layers.cpython-313.pyc
   │     │     ├─ local.cpython-313.pyc
   │     │     ├─ ml.cpython-313.pyc
   │     │     ├─ multiprocessing.cpython-313.pyc
   │     │     ├─ optimization.cpython-313.pyc
   │     │     ├─ order.cpython-313.pyc
   │     │     ├─ rewrite.cpython-313.pyc
   │     │     ├─ sizeof.cpython-313.pyc
   │     │     ├─ system.cpython-313.pyc
   │     │     ├─ task_spec.cpython-313.pyc
   │     │     ├─ threaded.cpython-313.pyc
   │     │     ├─ tokenize.cpython-313.pyc
   │     │     ├─ typing.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ utils_test.cpython-313.pyc
   │     │     ├─ _collections.cpython-313.pyc
   │     │     ├─ _compatibility.cpython-313.pyc
   │     │     ├─ _dispatch.cpython-313.pyc
   │     │     ├─ _expr.cpython-313.pyc
   │     │     ├─ _task_spec.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ dask-2025.3.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ dask
   │     │  │  │  └─ array
   │     │  │  │     └─ NUMPY_LICENSE.txt
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ dateutil
   │     │  ├─ easter.py
   │     │  ├─ parser
   │     │  │  ├─ isoparser.py
   │     │  │  ├─ _parser.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ isoparser.cpython-313.pyc
   │     │  │     ├─ _parser.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ relativedelta.py
   │     │  ├─ rrule.py
   │     │  ├─ tz
   │     │  │  ├─ tz.py
   │     │  │  ├─ win.py
   │     │  │  ├─ _common.py
   │     │  │  ├─ _factories.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ tz.cpython-313.pyc
   │     │  │     ├─ win.cpython-313.pyc
   │     │  │     ├─ _common.cpython-313.pyc
   │     │  │     ├─ _factories.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tzwin.py
   │     │  ├─ utils.py
   │     │  ├─ zoneinfo
   │     │  │  ├─ dateutil-zoneinfo.tar.gz
   │     │  │  ├─ rebuild.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ rebuild.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _common.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ easter.cpython-313.pyc
   │     │     ├─ relativedelta.cpython-313.pyc
   │     │     ├─ rrule.cpython-313.pyc
   │     │     ├─ tzwin.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ _common.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ distributed
   │     │  ├─ active_memory_manager.py
   │     │  ├─ actor.py
   │     │  ├─ batched.py
   │     │  ├─ bokeh.py
   │     │  ├─ broker.py
   │     │  ├─ cfexecutor.py
   │     │  ├─ chaos.py
   │     │  ├─ cli
   │     │  │  ├─ dask_scheduler.py
   │     │  │  ├─ dask_spec.py
   │     │  │  ├─ dask_ssh.py
   │     │  │  ├─ dask_worker.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ dask_scheduler.cpython-313.pyc
   │     │  │     ├─ dask_spec.cpython-313.pyc
   │     │  │     ├─ dask_ssh.cpython-313.pyc
   │     │  │     ├─ dask_worker.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ client.py
   │     │  ├─ cluster_dump.py
   │     │  ├─ collections.py
   │     │  ├─ comm
   │     │  │  ├─ addressing.py
   │     │  │  ├─ core.py
   │     │  │  ├─ inproc.py
   │     │  │  ├─ registry.py
   │     │  │  ├─ tcp.py
   │     │  │  ├─ ucx.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ ws.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ addressing.cpython-313.pyc
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ inproc.cpython-313.pyc
   │     │  │     ├─ registry.cpython-313.pyc
   │     │  │     ├─ tcp.cpython-313.pyc
   │     │  │     ├─ ucx.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ ws.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ compatibility.py
   │     │  ├─ config.py
   │     │  ├─ core.py
   │     │  ├─ counter.py
   │     │  ├─ dashboard
   │     │  │  ├─ components
   │     │  │  │  ├─ nvml.py
   │     │  │  │  ├─ rmm.py
   │     │  │  │  ├─ scheduler.py
   │     │  │  │  ├─ shared.py
   │     │  │  │  ├─ worker.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ nvml.cpython-313.pyc
   │     │  │  │     ├─ rmm.cpython-313.pyc
   │     │  │  │     ├─ scheduler.cpython-313.pyc
   │     │  │  │     ├─ shared.cpython-313.pyc
   │     │  │  │     ├─ worker.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ core.py
   │     │  │  ├─ export_tool.js
   │     │  │  ├─ export_tool.py
   │     │  │  ├─ scheduler.py
   │     │  │  ├─ templates
   │     │  │  │  ├─ performance_report.html
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ theme.yaml
   │     │  │  ├─ utils.py
   │     │  │  ├─ worker.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ export_tool.cpython-313.pyc
   │     │  │     ├─ scheduler.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ worker.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ deploy
   │     │  │  ├─ adaptive.py
   │     │  │  ├─ adaptive_core.py
   │     │  │  ├─ cluster.py
   │     │  │  ├─ local.py
   │     │  │  ├─ old_ssh.py
   │     │  │  ├─ spec.py
   │     │  │  ├─ ssh.py
   │     │  │  ├─ subprocess.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ adaptive.cpython-313.pyc
   │     │  │     ├─ adaptive_core.cpython-313.pyc
   │     │  │     ├─ cluster.cpython-313.pyc
   │     │  │     ├─ local.cpython-313.pyc
   │     │  │     ├─ old_ssh.cpython-313.pyc
   │     │  │     ├─ spec.cpython-313.pyc
   │     │  │     ├─ ssh.cpython-313.pyc
   │     │  │     ├─ subprocess.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ diagnostics
   │     │  │  ├─ cluster_dump.py
   │     │  │  ├─ cudf.py
   │     │  │  ├─ eventstream.py
   │     │  │  ├─ graph_layout.py
   │     │  │  ├─ memory_sampler.py
   │     │  │  ├─ memray.py
   │     │  │  ├─ nvml.py
   │     │  │  ├─ plugin.py
   │     │  │  ├─ progress.py
   │     │  │  ├─ progressbar.py
   │     │  │  ├─ progress_stream.py
   │     │  │  ├─ rmm.py
   │     │  │  ├─ task_stream.py
   │     │  │  ├─ websocket.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ cluster_dump.cpython-313.pyc
   │     │  │     ├─ cudf.cpython-313.pyc
   │     │  │     ├─ eventstream.cpython-313.pyc
   │     │  │     ├─ graph_layout.cpython-313.pyc
   │     │  │     ├─ memory_sampler.cpython-313.pyc
   │     │  │     ├─ memray.cpython-313.pyc
   │     │  │     ├─ nvml.cpython-313.pyc
   │     │  │     ├─ plugin.cpython-313.pyc
   │     │  │     ├─ progress.cpython-313.pyc
   │     │  │     ├─ progressbar.cpython-313.pyc
   │     │  │     ├─ progress_stream.cpython-313.pyc
   │     │  │     ├─ rmm.cpython-313.pyc
   │     │  │     ├─ task_stream.cpython-313.pyc
   │     │  │     ├─ websocket.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ diskutils.py
   │     │  ├─ distributed-schema.yaml
   │     │  ├─ distributed.yaml
   │     │  ├─ event.py
   │     │  ├─ exceptions.py
   │     │  ├─ gc.py
   │     │  ├─ http
   │     │  │  ├─ health.py
   │     │  │  ├─ prometheus.py
   │     │  │  ├─ proxy.py
   │     │  │  ├─ routing.py
   │     │  │  ├─ scheduler
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ info.py
   │     │  │  │  ├─ json.py
   │     │  │  │  ├─ missing_bokeh.py
   │     │  │  │  ├─ prometheus
   │     │  │  │  │  ├─ core.py
   │     │  │  │  │  ├─ semaphore.py
   │     │  │  │  │  ├─ stealing.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │  │     ├─ semaphore.cpython-313.pyc
   │     │  │  │  │     ├─ stealing.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ info.cpython-313.pyc
   │     │  │  │     ├─ json.cpython-313.pyc
   │     │  │  │     ├─ missing_bokeh.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ static
   │     │  │  │  ├─ css
   │     │  │  │  │  ├─ base.css
   │     │  │  │  │  ├─ gpu.css
   │     │  │  │  │  ├─ individual-cluster-map.css
   │     │  │  │  │  ├─ sortable.min.css
   │     │  │  │  │  ├─ status.css
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ images
   │     │  │  │  │  ├─ dask-logo.svg
   │     │  │  │  │  ├─ fa-bars.svg
   │     │  │  │  │  ├─ favicon.ico
   │     │  │  │  │  ├─ jupyter.svg
   │     │  │  │  │  ├─ numpy.png
   │     │  │  │  │  ├─ pandas.png
   │     │  │  │  │  ├─ python.png
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ individual-cluster-map.html
   │     │  │  │  ├─ js
   │     │  │  │  │  ├─ anime.min.js
   │     │  │  │  │  ├─ individual-cluster-map.js
   │     │  │  │  │  ├─ reconnecting-websocket.min.js
   │     │  │  │  │  ├─ sortable.min.js
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ statics.py
   │     │  │  ├─ templates
   │     │  │  │  ├─ base.html
   │     │  │  │  ├─ call-stack.html
   │     │  │  │  ├─ exceptions.html
   │     │  │  │  ├─ gpu.html
   │     │  │  │  ├─ json-index.html
   │     │  │  │  ├─ logs.html
   │     │  │  │  ├─ main.html
   │     │  │  │  ├─ simple.html
   │     │  │  │  ├─ status.html
   │     │  │  │  ├─ task.html
   │     │  │  │  ├─ worker-table.html
   │     │  │  │  ├─ worker.html
   │     │  │  │  ├─ workers.html
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ utils.py
   │     │  │  ├─ worker
   │     │  │  │  ├─ prometheus
   │     │  │  │  │  ├─ core.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ health.cpython-313.pyc
   │     │  │     ├─ prometheus.cpython-313.pyc
   │     │  │     ├─ proxy.cpython-313.pyc
   │     │  │     ├─ routing.cpython-313.pyc
   │     │  │     ├─ statics.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ itertools.py
   │     │  ├─ lock.py
   │     │  ├─ metrics.py
   │     │  ├─ multi_lock.py
   │     │  ├─ nanny.py
   │     │  ├─ node.py
   │     │  ├─ objects.py
   │     │  ├─ preloading.py
   │     │  ├─ process.py
   │     │  ├─ proctitle.py
   │     │  ├─ profile.py
   │     │  ├─ protocol
   │     │  │  ├─ arrow.py
   │     │  │  ├─ compression.py
   │     │  │  ├─ core.py
   │     │  │  ├─ cuda.py
   │     │  │  ├─ cupy.py
   │     │  │  ├─ h5py.py
   │     │  │  ├─ keras.py
   │     │  │  ├─ netcdf4.py
   │     │  │  ├─ numba.py
   │     │  │  ├─ numpy.py
   │     │  │  ├─ pickle.py
   │     │  │  ├─ rmm.py
   │     │  │  ├─ scipy.py
   │     │  │  ├─ serialize.py
   │     │  │  ├─ sparse.py
   │     │  │  ├─ torch.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ utils_test.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ arrow.cpython-313.pyc
   │     │  │     ├─ compression.cpython-313.pyc
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ cuda.cpython-313.pyc
   │     │  │     ├─ cupy.cpython-313.pyc
   │     │  │     ├─ h5py.cpython-313.pyc
   │     │  │     ├─ keras.cpython-313.pyc
   │     │  │     ├─ netcdf4.cpython-313.pyc
   │     │  │     ├─ numba.cpython-313.pyc
   │     │  │     ├─ numpy.cpython-313.pyc
   │     │  │     ├─ pickle.cpython-313.pyc
   │     │  │     ├─ rmm.cpython-313.pyc
   │     │  │     ├─ scipy.cpython-313.pyc
   │     │  │     ├─ serialize.cpython-313.pyc
   │     │  │     ├─ sparse.cpython-313.pyc
   │     │  │     ├─ torch.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ utils_test.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ publish.py
   │     │  ├─ pubsub.py
   │     │  ├─ py.typed
   │     │  ├─ queues.py
   │     │  ├─ recreate_tasks.py
   │     │  ├─ scheduler.py
   │     │  ├─ security.py
   │     │  ├─ semaphore.py
   │     │  ├─ shuffle
   │     │  │  ├─ _arrow.py
   │     │  │  ├─ _buffer.py
   │     │  │  ├─ _comms.py
   │     │  │  ├─ _core.py
   │     │  │  ├─ _disk.py
   │     │  │  ├─ _exceptions.py
   │     │  │  ├─ _limiter.py
   │     │  │  ├─ _memory.py
   │     │  │  ├─ _merge.py
   │     │  │  ├─ _pickle.py
   │     │  │  ├─ _rechunk.py
   │     │  │  ├─ _scheduler_plugin.py
   │     │  │  ├─ _shuffle.py
   │     │  │  ├─ _worker_plugin.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _arrow.cpython-313.pyc
   │     │  │     ├─ _buffer.cpython-313.pyc
   │     │  │     ├─ _comms.cpython-313.pyc
   │     │  │     ├─ _core.cpython-313.pyc
   │     │  │     ├─ _disk.cpython-313.pyc
   │     │  │     ├─ _exceptions.cpython-313.pyc
   │     │  │     ├─ _limiter.cpython-313.pyc
   │     │  │     ├─ _memory.cpython-313.pyc
   │     │  │     ├─ _merge.cpython-313.pyc
   │     │  │     ├─ _pickle.cpython-313.pyc
   │     │  │     ├─ _rechunk.cpython-313.pyc
   │     │  │     ├─ _scheduler_plugin.cpython-313.pyc
   │     │  │     ├─ _shuffle.cpython-313.pyc
   │     │  │     ├─ _worker_plugin.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ sizeof.py
   │     │  ├─ spans.py
   │     │  ├─ spill.py
   │     │  ├─ stealing.py
   │     │  ├─ system.py
   │     │  ├─ system_monitor.py
   │     │  ├─ threadpoolexecutor.py
   │     │  ├─ utils.py
   │     │  ├─ utils_comm.py
   │     │  ├─ utils_test.py
   │     │  ├─ variable.py
   │     │  ├─ versions.py
   │     │  ├─ widgets
   │     │  │  ├─ templates
   │     │  │  │  ├─ client.html.j2
   │     │  │  │  ├─ cluster.html.j2
   │     │  │  │  ├─ computation.html.j2
   │     │  │  │  ├─ future.html.j2
   │     │  │  │  ├─ has_what.html.j2
   │     │  │  │  ├─ local_cluster.html.j2
   │     │  │  │  ├─ log.html.j2
   │     │  │  │  ├─ logs.html.j2
   │     │  │  │  ├─ process_interface.html.j2
   │     │  │  │  ├─ scheduler.html.j2
   │     │  │  │  ├─ scheduler_info.html.j2
   │     │  │  │  ├─ security.html.j2
   │     │  │  │  ├─ task_state.html.j2
   │     │  │  │  ├─ who_has.html.j2
   │     │  │  │  ├─ worker_state.html.j2
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ worker.py
   │     │  ├─ worker_client.py
   │     │  ├─ worker_memory.py
   │     │  ├─ worker_state_machine.py
   │     │  ├─ _asyncio.py
   │     │  ├─ _async_taskgroup.py
   │     │  ├─ _concurrent_futures_thread.py
   │     │  ├─ _signals.py
   │     │  ├─ _stories.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ active_memory_manager.cpython-313.pyc
   │     │     ├─ actor.cpython-313.pyc
   │     │     ├─ batched.cpython-313.pyc
   │     │     ├─ bokeh.cpython-313.pyc
   │     │     ├─ broker.cpython-313.pyc
   │     │     ├─ cfexecutor.cpython-313.pyc
   │     │     ├─ chaos.cpython-313.pyc
   │     │     ├─ client.cpython-313.pyc
   │     │     ├─ cluster_dump.cpython-313.pyc
   │     │     ├─ collections.cpython-313.pyc
   │     │     ├─ compatibility.cpython-313.pyc
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ counter.cpython-313.pyc
   │     │     ├─ diskutils.cpython-313.pyc
   │     │     ├─ event.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ gc.cpython-313.pyc
   │     │     ├─ itertools.cpython-313.pyc
   │     │     ├─ lock.cpython-313.pyc
   │     │     ├─ metrics.cpython-313.pyc
   │     │     ├─ multi_lock.cpython-313.pyc
   │     │     ├─ nanny.cpython-313.pyc
   │     │     ├─ node.cpython-313.pyc
   │     │     ├─ objects.cpython-313.pyc
   │     │     ├─ preloading.cpython-313.pyc
   │     │     ├─ process.cpython-313.pyc
   │     │     ├─ proctitle.cpython-313.pyc
   │     │     ├─ profile.cpython-313.pyc
   │     │     ├─ publish.cpython-313.pyc
   │     │     ├─ pubsub.cpython-313.pyc
   │     │     ├─ queues.cpython-313.pyc
   │     │     ├─ recreate_tasks.cpython-313.pyc
   │     │     ├─ scheduler.cpython-313.pyc
   │     │     ├─ security.cpython-313.pyc
   │     │     ├─ semaphore.cpython-313.pyc
   │     │     ├─ sizeof.cpython-313.pyc
   │     │     ├─ spans.cpython-313.pyc
   │     │     ├─ spill.cpython-313.pyc
   │     │     ├─ stealing.cpython-313.pyc
   │     │     ├─ system.cpython-313.pyc
   │     │     ├─ system_monitor.cpython-313.pyc
   │     │     ├─ threadpoolexecutor.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ utils_comm.cpython-313.pyc
   │     │     ├─ utils_test.cpython-313.pyc
   │     │     ├─ variable.cpython-313.pyc
   │     │     ├─ versions.cpython-313.pyc
   │     │     ├─ worker.cpython-313.pyc
   │     │     ├─ worker_client.cpython-313.pyc
   │     │     ├─ worker_memory.cpython-313.pyc
   │     │     ├─ worker_state_machine.cpython-313.pyc
   │     │     ├─ _asyncio.cpython-313.pyc
   │     │     ├─ _async_taskgroup.cpython-313.pyc
   │     │     ├─ _concurrent_futures_thread.cpython-313.pyc
   │     │     ├─ _signals.cpython-313.pyc
   │     │     ├─ _stories.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ distributed-2025.3.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ AUTHORS.md
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ fastapi
   │     │  ├─ applications.py
   │     │  ├─ background.py
   │     │  ├─ cli.py
   │     │  ├─ concurrency.py
   │     │  ├─ datastructures.py
   │     │  ├─ dependencies
   │     │  │  ├─ models.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ models.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ encoders.py
   │     │  ├─ exceptions.py
   │     │  ├─ exception_handlers.py
   │     │  ├─ logger.py
   │     │  ├─ middleware
   │     │  │  ├─ cors.py
   │     │  │  ├─ gzip.py
   │     │  │  ├─ httpsredirect.py
   │     │  │  ├─ trustedhost.py
   │     │  │  ├─ wsgi.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ cors.cpython-313.pyc
   │     │  │     ├─ gzip.cpython-313.pyc
   │     │  │     ├─ httpsredirect.cpython-313.pyc
   │     │  │     ├─ trustedhost.cpython-313.pyc
   │     │  │     ├─ wsgi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ openapi
   │     │  │  ├─ constants.py
   │     │  │  ├─ docs.py
   │     │  │  ├─ models.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ constants.cpython-313.pyc
   │     │  │     ├─ docs.cpython-313.pyc
   │     │  │     ├─ models.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ params.py
   │     │  ├─ param_functions.py
   │     │  ├─ py.typed
   │     │  ├─ requests.py
   │     │  ├─ responses.py
   │     │  ├─ routing.py
   │     │  ├─ security
   │     │  │  ├─ api_key.py
   │     │  │  ├─ base.py
   │     │  │  ├─ http.py
   │     │  │  ├─ oauth2.py
   │     │  │  ├─ open_id_connect_url.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api_key.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ http.cpython-313.pyc
   │     │  │     ├─ oauth2.cpython-313.pyc
   │     │  │     ├─ open_id_connect_url.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ staticfiles.py
   │     │  ├─ templating.py
   │     │  ├─ testclient.py
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ websockets.py
   │     │  ├─ _compat.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ applications.cpython-313.pyc
   │     │     ├─ background.cpython-313.pyc
   │     │     ├─ cli.cpython-313.pyc
   │     │     ├─ concurrency.cpython-313.pyc
   │     │     ├─ datastructures.cpython-313.pyc
   │     │     ├─ encoders.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ exception_handlers.cpython-313.pyc
   │     │     ├─ logger.cpython-313.pyc
   │     │     ├─ params.cpython-313.pyc
   │     │     ├─ param_functions.cpython-313.pyc
   │     │     ├─ requests.cpython-313.pyc
   │     │     ├─ responses.cpython-313.pyc
   │     │     ├─ routing.cpython-313.pyc
   │     │     ├─ staticfiles.cpython-313.pyc
   │     │     ├─ templating.cpython-313.pyc
   │     │     ├─ testclient.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ websockets.cpython-313.pyc
   │     │     ├─ _compat.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ fastapi-0.115.12.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ fontTools
   │     │  ├─ afmLib.py
   │     │  ├─ agl.py
   │     │  ├─ cffLib
   │     │  │  ├─ CFF2ToCFF.py
   │     │  │  ├─ CFFToCFF2.py
   │     │  │  ├─ specializer.py
   │     │  │  ├─ transforms.py
   │     │  │  ├─ width.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ CFF2ToCFF.cpython-313.pyc
   │     │  │     ├─ CFFToCFF2.cpython-313.pyc
   │     │  │     ├─ specializer.cpython-313.pyc
   │     │  │     ├─ transforms.cpython-313.pyc
   │     │  │     ├─ width.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ colorLib
   │     │  │  ├─ builder.py
   │     │  │  ├─ errors.py
   │     │  │  ├─ geometry.py
   │     │  │  ├─ table_builder.py
   │     │  │  ├─ unbuilder.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ builder.cpython-313.pyc
   │     │  │     ├─ errors.cpython-313.pyc
   │     │  │     ├─ geometry.cpython-313.pyc
   │     │  │     ├─ table_builder.cpython-313.pyc
   │     │  │     ├─ unbuilder.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ config
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ cu2qu
   │     │  │  ├─ benchmark.py
   │     │  │  ├─ cli.py
   │     │  │  ├─ cu2qu.c
   │     │  │  ├─ cu2qu.cp313-win_amd64.pyd
   │     │  │  ├─ cu2qu.py
   │     │  │  ├─ errors.py
   │     │  │  ├─ ufo.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ benchmark.cpython-313.pyc
   │     │  │     ├─ cli.cpython-313.pyc
   │     │  │     ├─ cu2qu.cpython-313.pyc
   │     │  │     ├─ errors.cpython-313.pyc
   │     │  │     ├─ ufo.cpython-313.pyc
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ designspaceLib
   │     │  │  ├─ split.py
   │     │  │  ├─ statNames.py
   │     │  │  ├─ types.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ split.cpython-313.pyc
   │     │  │     ├─ statNames.cpython-313.pyc
   │     │  │     ├─ types.cpython-313.pyc
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ encodings
   │     │  │  ├─ codecs.py
   │     │  │  ├─ MacRoman.py
   │     │  │  ├─ StandardEncoding.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ codecs.cpython-313.pyc
   │     │  │     ├─ MacRoman.cpython-313.pyc
   │     │  │     ├─ StandardEncoding.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ feaLib
   │     │  │  ├─ ast.py
   │     │  │  ├─ builder.py
   │     │  │  ├─ error.py
   │     │  │  ├─ lexer.c
   │     │  │  ├─ lexer.cp313-win_amd64.pyd
   │     │  │  ├─ lexer.py
   │     │  │  ├─ location.py
   │     │  │  ├─ lookupDebugInfo.py
   │     │  │  ├─ parser.py
   │     │  │  ├─ variableScalar.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ ast.cpython-313.pyc
   │     │  │     ├─ builder.cpython-313.pyc
   │     │  │     ├─ error.cpython-313.pyc
   │     │  │     ├─ lexer.cpython-313.pyc
   │     │  │     ├─ location.cpython-313.pyc
   │     │  │     ├─ lookupDebugInfo.cpython-313.pyc
   │     │  │     ├─ parser.cpython-313.pyc
   │     │  │     ├─ variableScalar.cpython-313.pyc
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ fontBuilder.py
   │     │  ├─ help.py
   │     │  ├─ merge
   │     │  │  ├─ base.py
   │     │  │  ├─ cmap.py
   │     │  │  ├─ layout.py
   │     │  │  ├─ options.py
   │     │  │  ├─ tables.py
   │     │  │  ├─ unicode.py
   │     │  │  ├─ util.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ cmap.cpython-313.pyc
   │     │  │     ├─ layout.cpython-313.pyc
   │     │  │     ├─ options.cpython-313.pyc
   │     │  │     ├─ tables.cpython-313.pyc
   │     │  │     ├─ unicode.cpython-313.pyc
   │     │  │     ├─ util.cpython-313.pyc
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ misc
   │     │  │  ├─ arrayTools.py
   │     │  │  ├─ bezierTools.c
   │     │  │  ├─ bezierTools.cp313-win_amd64.pyd
   │     │  │  ├─ bezierTools.py
   │     │  │  ├─ classifyTools.py
   │     │  │  ├─ cliTools.py
   │     │  │  ├─ configTools.py
   │     │  │  ├─ cython.py
   │     │  │  ├─ dictTools.py
   │     │  │  ├─ eexec.py
   │     │  │  ├─ encodingTools.py
   │     │  │  ├─ etree.py
   │     │  │  ├─ filenames.py
   │     │  │  ├─ fixedTools.py
   │     │  │  ├─ intTools.py
   │     │  │  ├─ iterTools.py
   │     │  │  ├─ lazyTools.py
   │     │  │  ├─ loggingTools.py
   │     │  │  ├─ macCreatorType.py
   │     │  │  ├─ macRes.py
   │     │  │  ├─ plistlib
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ psCharStrings.py
   │     │  │  ├─ psLib.py
   │     │  │  ├─ psOperators.py
   │     │  │  ├─ py23.py
   │     │  │  ├─ roundTools.py
   │     │  │  ├─ sstruct.py
   │     │  │  ├─ symfont.py
   │     │  │  ├─ testTools.py
   │     │  │  ├─ textTools.py
   │     │  │  ├─ timeTools.py
   │     │  │  ├─ transform.py
   │     │  │  ├─ treeTools.py
   │     │  │  ├─ vector.py
   │     │  │  ├─ visitor.py
   │     │  │  ├─ xmlReader.py
   │     │  │  ├─ xmlWriter.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ arrayTools.cpython-313.pyc
   │     │  │     ├─ bezierTools.cpython-313.pyc
   │     │  │     ├─ classifyTools.cpython-313.pyc
   │     │  │     ├─ cliTools.cpython-313.pyc
   │     │  │     ├─ configTools.cpython-313.pyc
   │     │  │     ├─ cython.cpython-313.pyc
   │     │  │     ├─ dictTools.cpython-313.pyc
   │     │  │     ├─ eexec.cpython-313.pyc
   │     │  │     ├─ encodingTools.cpython-313.pyc
   │     │  │     ├─ etree.cpython-313.pyc
   │     │  │     ├─ filenames.cpython-313.pyc
   │     │  │     ├─ fixedTools.cpython-313.pyc
   │     │  │     ├─ intTools.cpython-313.pyc
   │     │  │     ├─ iterTools.cpython-313.pyc
   │     │  │     ├─ lazyTools.cpython-313.pyc
   │     │  │     ├─ loggingTools.cpython-313.pyc
   │     │  │     ├─ macCreatorType.cpython-313.pyc
   │     │  │     ├─ macRes.cpython-313.pyc
   │     │  │     ├─ psCharStrings.cpython-313.pyc
   │     │  │     ├─ psLib.cpython-313.pyc
   │     │  │     ├─ psOperators.cpython-313.pyc
   │     │  │     ├─ py23.cpython-313.pyc
   │     │  │     ├─ roundTools.cpython-313.pyc
   │     │  │     ├─ sstruct.cpython-313.pyc
   │     │  │     ├─ symfont.cpython-313.pyc
   │     │  │     ├─ testTools.cpython-313.pyc
   │     │  │     ├─ textTools.cpython-313.pyc
   │     │  │     ├─ timeTools.cpython-313.pyc
   │     │  │     ├─ transform.cpython-313.pyc
   │     │  │     ├─ treeTools.cpython-313.pyc
   │     │  │     ├─ vector.cpython-313.pyc
   │     │  │     ├─ visitor.cpython-313.pyc
   │     │  │     ├─ xmlReader.cpython-313.pyc
   │     │  │     ├─ xmlWriter.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ mtiLib
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ otlLib
   │     │  │  ├─ builder.py
   │     │  │  ├─ error.py
   │     │  │  ├─ maxContextCalc.py
   │     │  │  ├─ optimize
   │     │  │  │  ├─ gpos.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ gpos.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ builder.cpython-313.pyc
   │     │  │     ├─ error.cpython-313.pyc
   │     │  │     ├─ maxContextCalc.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ pens
   │     │  │  ├─ areaPen.py
   │     │  │  ├─ basePen.py
   │     │  │  ├─ boundsPen.py
   │     │  │  ├─ cairoPen.py
   │     │  │  ├─ cocoaPen.py
   │     │  │  ├─ cu2quPen.py
   │     │  │  ├─ explicitClosingLinePen.py
   │     │  │  ├─ filterPen.py
   │     │  │  ├─ freetypePen.py
   │     │  │  ├─ hashPointPen.py
   │     │  │  ├─ momentsPen.c
   │     │  │  ├─ momentsPen.cp313-win_amd64.pyd
   │     │  │  ├─ momentsPen.py
   │     │  │  ├─ perimeterPen.py
   │     │  │  ├─ pointInsidePen.py
   │     │  │  ├─ pointPen.py
   │     │  │  ├─ qtPen.py
   │     │  │  ├─ qu2cuPen.py
   │     │  │  ├─ quartzPen.py
   │     │  │  ├─ recordingPen.py
   │     │  │  ├─ reportLabPen.py
   │     │  │  ├─ reverseContourPen.py
   │     │  │  ├─ roundingPen.py
   │     │  │  ├─ statisticsPen.py
   │     │  │  ├─ svgPathPen.py
   │     │  │  ├─ t2CharStringPen.py
   │     │  │  ├─ teePen.py
   │     │  │  ├─ transformPen.py
   │     │  │  ├─ ttGlyphPen.py
   │     │  │  ├─ wxPen.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ areaPen.cpython-313.pyc
   │     │  │     ├─ basePen.cpython-313.pyc
   │     │  │     ├─ boundsPen.cpython-313.pyc
   │     │  │     ├─ cairoPen.cpython-313.pyc
   │     │  │     ├─ cocoaPen.cpython-313.pyc
   │     │  │     ├─ cu2quPen.cpython-313.pyc
   │     │  │     ├─ explicitClosingLinePen.cpython-313.pyc
   │     │  │     ├─ filterPen.cpython-313.pyc
   │     │  │     ├─ freetypePen.cpython-313.pyc
   │     │  │     ├─ hashPointPen.cpython-313.pyc
   │     │  │     ├─ momentsPen.cpython-313.pyc
   │     │  │     ├─ perimeterPen.cpython-313.pyc
   │     │  │     ├─ pointInsidePen.cpython-313.pyc
   │     │  │     ├─ pointPen.cpython-313.pyc
   │     │  │     ├─ qtPen.cpython-313.pyc
   │     │  │     ├─ qu2cuPen.cpython-313.pyc
   │     │  │     ├─ quartzPen.cpython-313.pyc
   │     │  │     ├─ recordingPen.cpython-313.pyc
   │     │  │     ├─ reportLabPen.cpython-313.pyc
   │     │  │     ├─ reverseContourPen.cpython-313.pyc
   │     │  │     ├─ roundingPen.cpython-313.pyc
   │     │  │     ├─ statisticsPen.cpython-313.pyc
   │     │  │     ├─ svgPathPen.cpython-313.pyc
   │     │  │     ├─ t2CharStringPen.cpython-313.pyc
   │     │  │     ├─ teePen.cpython-313.pyc
   │     │  │     ├─ transformPen.cpython-313.pyc
   │     │  │     ├─ ttGlyphPen.cpython-313.pyc
   │     │  │     ├─ wxPen.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ qu2cu
   │     │  │  ├─ benchmark.py
   │     │  │  ├─ cli.py
   │     │  │  ├─ qu2cu.c
   │     │  │  ├─ qu2cu.cp313-win_amd64.pyd
   │     │  │  ├─ qu2cu.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ benchmark.cpython-313.pyc
   │     │  │     ├─ cli.cpython-313.pyc
   │     │  │     ├─ qu2cu.cpython-313.pyc
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ subset
   │     │  │  ├─ cff.py
   │     │  │  ├─ svg.py
   │     │  │  ├─ util.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ cff.cpython-313.pyc
   │     │  │     ├─ svg.cpython-313.pyc
   │     │  │     ├─ util.cpython-313.pyc
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ svgLib
   │     │  │  ├─ path
   │     │  │  │  ├─ arc.py
   │     │  │  │  ├─ parser.py
   │     │  │  │  ├─ shapes.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ arc.cpython-313.pyc
   │     │  │  │     ├─ parser.cpython-313.pyc
   │     │  │  │     ├─ shapes.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ t1Lib
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tfmLib.py
   │     │  ├─ ttLib
   │     │  │  ├─ macUtils.py
   │     │  │  ├─ removeOverlaps.py
   │     │  │  ├─ reorderGlyphs.py
   │     │  │  ├─ scaleUpem.py
   │     │  │  ├─ sfnt.py
   │     │  │  ├─ standardGlyphOrder.py
   │     │  │  ├─ tables
   │     │  │  │  ├─ asciiTable.py
   │     │  │  │  ├─ BitmapGlyphMetrics.py
   │     │  │  │  ├─ B_A_S_E_.py
   │     │  │  │  ├─ C_B_D_T_.py
   │     │  │  │  ├─ C_B_L_C_.py
   │     │  │  │  ├─ C_F_F_.py
   │     │  │  │  ├─ C_F_F__2.py
   │     │  │  │  ├─ C_O_L_R_.py
   │     │  │  │  ├─ C_P_A_L_.py
   │     │  │  │  ├─ DefaultTable.py
   │     │  │  │  ├─ D_S_I_G_.py
   │     │  │  │  ├─ D__e_b_g.py
   │     │  │  │  ├─ E_B_D_T_.py
   │     │  │  │  ├─ E_B_L_C_.py
   │     │  │  │  ├─ F_F_T_M_.py
   │     │  │  │  ├─ F__e_a_t.py
   │     │  │  │  ├─ grUtils.py
   │     │  │  │  ├─ G_D_E_F_.py
   │     │  │  │  ├─ G_M_A_P_.py
   │     │  │  │  ├─ G_P_K_G_.py
   │     │  │  │  ├─ G_P_O_S_.py
   │     │  │  │  ├─ G_S_U_B_.py
   │     │  │  │  ├─ G__l_a_t.py
   │     │  │  │  ├─ G__l_o_c.py
   │     │  │  │  ├─ H_V_A_R_.py
   │     │  │  │  ├─ J_S_T_F_.py
   │     │  │  │  ├─ L_T_S_H_.py
   │     │  │  │  ├─ M_A_T_H_.py
   │     │  │  │  ├─ M_E_T_A_.py
   │     │  │  │  ├─ M_V_A_R_.py
   │     │  │  │  ├─ otBase.py
   │     │  │  │  ├─ otConverters.py
   │     │  │  │  ├─ otData.py
   │     │  │  │  ├─ otTables.py
   │     │  │  │  ├─ otTraverse.py
   │     │  │  │  ├─ O_S_2f_2.py
   │     │  │  │  ├─ sbixGlyph.py
   │     │  │  │  ├─ sbixStrike.py
   │     │  │  │  ├─ S_I_N_G_.py
   │     │  │  │  ├─ S_T_A_T_.py
   │     │  │  │  ├─ S_V_G_.py
   │     │  │  │  ├─ S__i_l_f.py
   │     │  │  │  ├─ S__i_l_l.py
   │     │  │  │  ├─ table_API_readme.txt
   │     │  │  │  ├─ ttProgram.py
   │     │  │  │  ├─ TupleVariation.py
   │     │  │  │  ├─ T_S_I_B_.py
   │     │  │  │  ├─ T_S_I_C_.py
   │     │  │  │  ├─ T_S_I_D_.py
   │     │  │  │  ├─ T_S_I_J_.py
   │     │  │  │  ├─ T_S_I_P_.py
   │     │  │  │  ├─ T_S_I_S_.py
   │     │  │  │  ├─ T_S_I_V_.py
   │     │  │  │  ├─ T_S_I__0.py
   │     │  │  │  ├─ T_S_I__1.py
   │     │  │  │  ├─ T_S_I__2.py
   │     │  │  │  ├─ T_S_I__3.py
   │     │  │  │  ├─ T_S_I__5.py
   │     │  │  │  ├─ T_T_F_A_.py
   │     │  │  │  ├─ V_A_R_C_.py
   │     │  │  │  ├─ V_D_M_X_.py
   │     │  │  │  ├─ V_O_R_G_.py
   │     │  │  │  ├─ V_V_A_R_.py
   │     │  │  │  ├─ _a_n_k_r.py
   │     │  │  │  ├─ _a_v_a_r.py
   │     │  │  │  ├─ _b_s_l_n.py
   │     │  │  │  ├─ _c_i_d_g.py
   │     │  │  │  ├─ _c_m_a_p.py
   │     │  │  │  ├─ _c_v_a_r.py
   │     │  │  │  ├─ _c_v_t.py
   │     │  │  │  ├─ _f_e_a_t.py
   │     │  │  │  ├─ _f_p_g_m.py
   │     │  │  │  ├─ _f_v_a_r.py
   │     │  │  │  ├─ _g_a_s_p.py
   │     │  │  │  ├─ _g_c_i_d.py
   │     │  │  │  ├─ _g_l_y_f.py
   │     │  │  │  ├─ _g_v_a_r.py
   │     │  │  │  ├─ _h_d_m_x.py
   │     │  │  │  ├─ _h_e_a_d.py
   │     │  │  │  ├─ _h_h_e_a.py
   │     │  │  │  ├─ _h_m_t_x.py
   │     │  │  │  ├─ _k_e_r_n.py
   │     │  │  │  ├─ _l_c_a_r.py
   │     │  │  │  ├─ _l_o_c_a.py
   │     │  │  │  ├─ _l_t_a_g.py
   │     │  │  │  ├─ _m_a_x_p.py
   │     │  │  │  ├─ _m_e_t_a.py
   │     │  │  │  ├─ _m_o_r_t.py
   │     │  │  │  ├─ _m_o_r_x.py
   │     │  │  │  ├─ _n_a_m_e.py
   │     │  │  │  ├─ _o_p_b_d.py
   │     │  │  │  ├─ _p_o_s_t.py
   │     │  │  │  ├─ _p_r_e_p.py
   │     │  │  │  ├─ _p_r_o_p.py
   │     │  │  │  ├─ _s_b_i_x.py
   │     │  │  │  ├─ _t_r_a_k.py
   │     │  │  │  ├─ _v_h_e_a.py
   │     │  │  │  ├─ _v_m_t_x.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ asciiTable.cpython-313.pyc
   │     │  │  │     ├─ BitmapGlyphMetrics.cpython-313.pyc
   │     │  │  │     ├─ B_A_S_E_.cpython-313.pyc
   │     │  │  │     ├─ C_B_D_T_.cpython-313.pyc
   │     │  │  │     ├─ C_B_L_C_.cpython-313.pyc
   │     │  │  │     ├─ C_F_F_.cpython-313.pyc
   │     │  │  │     ├─ C_F_F__2.cpython-313.pyc
   │     │  │  │     ├─ C_O_L_R_.cpython-313.pyc
   │     │  │  │     ├─ C_P_A_L_.cpython-313.pyc
   │     │  │  │     ├─ DefaultTable.cpython-313.pyc
   │     │  │  │     ├─ D_S_I_G_.cpython-313.pyc
   │     │  │  │     ├─ D__e_b_g.cpython-313.pyc
   │     │  │  │     ├─ E_B_D_T_.cpython-313.pyc
   │     │  │  │     ├─ E_B_L_C_.cpython-313.pyc
   │     │  │  │     ├─ F_F_T_M_.cpython-313.pyc
   │     │  │  │     ├─ F__e_a_t.cpython-313.pyc
   │     │  │  │     ├─ grUtils.cpython-313.pyc
   │     │  │  │     ├─ G_D_E_F_.cpython-313.pyc
   │     │  │  │     ├─ G_M_A_P_.cpython-313.pyc
   │     │  │  │     ├─ G_P_K_G_.cpython-313.pyc
   │     │  │  │     ├─ G_P_O_S_.cpython-313.pyc
   │     │  │  │     ├─ G_S_U_B_.cpython-313.pyc
   │     │  │  │     ├─ G__l_a_t.cpython-313.pyc
   │     │  │  │     ├─ G__l_o_c.cpython-313.pyc
   │     │  │  │     ├─ H_V_A_R_.cpython-313.pyc
   │     │  │  │     ├─ J_S_T_F_.cpython-313.pyc
   │     │  │  │     ├─ L_T_S_H_.cpython-313.pyc
   │     │  │  │     ├─ M_A_T_H_.cpython-313.pyc
   │     │  │  │     ├─ M_E_T_A_.cpython-313.pyc
   │     │  │  │     ├─ M_V_A_R_.cpython-313.pyc
   │     │  │  │     ├─ otBase.cpython-313.pyc
   │     │  │  │     ├─ otConverters.cpython-313.pyc
   │     │  │  │     ├─ otData.cpython-313.pyc
   │     │  │  │     ├─ otTables.cpython-313.pyc
   │     │  │  │     ├─ otTraverse.cpython-313.pyc
   │     │  │  │     ├─ O_S_2f_2.cpython-313.pyc
   │     │  │  │     ├─ sbixGlyph.cpython-313.pyc
   │     │  │  │     ├─ sbixStrike.cpython-313.pyc
   │     │  │  │     ├─ S_I_N_G_.cpython-313.pyc
   │     │  │  │     ├─ S_T_A_T_.cpython-313.pyc
   │     │  │  │     ├─ S_V_G_.cpython-313.pyc
   │     │  │  │     ├─ S__i_l_f.cpython-313.pyc
   │     │  │  │     ├─ S__i_l_l.cpython-313.pyc
   │     │  │  │     ├─ ttProgram.cpython-313.pyc
   │     │  │  │     ├─ TupleVariation.cpython-313.pyc
   │     │  │  │     ├─ T_S_I_B_.cpython-313.pyc
   │     │  │  │     ├─ T_S_I_C_.cpython-313.pyc
   │     │  │  │     ├─ T_S_I_D_.cpython-313.pyc
   │     │  │  │     ├─ T_S_I_J_.cpython-313.pyc
   │     │  │  │     ├─ T_S_I_P_.cpython-313.pyc
   │     │  │  │     ├─ T_S_I_S_.cpython-313.pyc
   │     │  │  │     ├─ T_S_I_V_.cpython-313.pyc
   │     │  │  │     ├─ T_S_I__0.cpython-313.pyc
   │     │  │  │     ├─ T_S_I__1.cpython-313.pyc
   │     │  │  │     ├─ T_S_I__2.cpython-313.pyc
   │     │  │  │     ├─ T_S_I__3.cpython-313.pyc
   │     │  │  │     ├─ T_S_I__5.cpython-313.pyc
   │     │  │  │     ├─ T_T_F_A_.cpython-313.pyc
   │     │  │  │     ├─ V_A_R_C_.cpython-313.pyc
   │     │  │  │     ├─ V_D_M_X_.cpython-313.pyc
   │     │  │  │     ├─ V_O_R_G_.cpython-313.pyc
   │     │  │  │     ├─ V_V_A_R_.cpython-313.pyc
   │     │  │  │     ├─ _a_n_k_r.cpython-313.pyc
   │     │  │  │     ├─ _a_v_a_r.cpython-313.pyc
   │     │  │  │     ├─ _b_s_l_n.cpython-313.pyc
   │     │  │  │     ├─ _c_i_d_g.cpython-313.pyc
   │     │  │  │     ├─ _c_m_a_p.cpython-313.pyc
   │     │  │  │     ├─ _c_v_a_r.cpython-313.pyc
   │     │  │  │     ├─ _c_v_t.cpython-313.pyc
   │     │  │  │     ├─ _f_e_a_t.cpython-313.pyc
   │     │  │  │     ├─ _f_p_g_m.cpython-313.pyc
   │     │  │  │     ├─ _f_v_a_r.cpython-313.pyc
   │     │  │  │     ├─ _g_a_s_p.cpython-313.pyc
   │     │  │  │     ├─ _g_c_i_d.cpython-313.pyc
   │     │  │  │     ├─ _g_l_y_f.cpython-313.pyc
   │     │  │  │     ├─ _g_v_a_r.cpython-313.pyc
   │     │  │  │     ├─ _h_d_m_x.cpython-313.pyc
   │     │  │  │     ├─ _h_e_a_d.cpython-313.pyc
   │     │  │  │     ├─ _h_h_e_a.cpython-313.pyc
   │     │  │  │     ├─ _h_m_t_x.cpython-313.pyc
   │     │  │  │     ├─ _k_e_r_n.cpython-313.pyc
   │     │  │  │     ├─ _l_c_a_r.cpython-313.pyc
   │     │  │  │     ├─ _l_o_c_a.cpython-313.pyc
   │     │  │  │     ├─ _l_t_a_g.cpython-313.pyc
   │     │  │  │     ├─ _m_a_x_p.cpython-313.pyc
   │     │  │  │     ├─ _m_e_t_a.cpython-313.pyc
   │     │  │  │     ├─ _m_o_r_t.cpython-313.pyc
   │     │  │  │     ├─ _m_o_r_x.cpython-313.pyc
   │     │  │  │     ├─ _n_a_m_e.cpython-313.pyc
   │     │  │  │     ├─ _o_p_b_d.cpython-313.pyc
   │     │  │  │     ├─ _p_o_s_t.cpython-313.pyc
   │     │  │  │     ├─ _p_r_e_p.cpython-313.pyc
   │     │  │  │     ├─ _p_r_o_p.cpython-313.pyc
   │     │  │  │     ├─ _s_b_i_x.cpython-313.pyc
   │     │  │  │     ├─ _t_r_a_k.cpython-313.pyc
   │     │  │  │     ├─ _v_h_e_a.cpython-313.pyc
   │     │  │  │     ├─ _v_m_t_x.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ ttCollection.py
   │     │  │  ├─ ttFont.py
   │     │  │  ├─ ttGlyphSet.py
   │     │  │  ├─ ttVisitor.py
   │     │  │  ├─ woff2.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ macUtils.cpython-313.pyc
   │     │  │     ├─ removeOverlaps.cpython-313.pyc
   │     │  │     ├─ reorderGlyphs.cpython-313.pyc
   │     │  │     ├─ scaleUpem.cpython-313.pyc
   │     │  │     ├─ sfnt.cpython-313.pyc
   │     │  │     ├─ standardGlyphOrder.cpython-313.pyc
   │     │  │     ├─ ttCollection.cpython-313.pyc
   │     │  │     ├─ ttFont.cpython-313.pyc
   │     │  │     ├─ ttGlyphSet.cpython-313.pyc
   │     │  │     ├─ ttVisitor.cpython-313.pyc
   │     │  │     ├─ woff2.cpython-313.pyc
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ ttx.py
   │     │  ├─ ufoLib
   │     │  │  ├─ converters.py
   │     │  │  ├─ errors.py
   │     │  │  ├─ etree.py
   │     │  │  ├─ filenames.py
   │     │  │  ├─ glifLib.py
   │     │  │  ├─ kerning.py
   │     │  │  ├─ plistlib.py
   │     │  │  ├─ pointPen.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ validators.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ converters.cpython-313.pyc
   │     │  │     ├─ errors.cpython-313.pyc
   │     │  │     ├─ etree.cpython-313.pyc
   │     │  │     ├─ filenames.cpython-313.pyc
   │     │  │     ├─ glifLib.cpython-313.pyc
   │     │  │     ├─ kerning.cpython-313.pyc
   │     │  │     ├─ plistlib.cpython-313.pyc
   │     │  │     ├─ pointPen.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ validators.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ unicode.py
   │     │  ├─ unicodedata
   │     │  │  ├─ Blocks.py
   │     │  │  ├─ OTTags.py
   │     │  │  ├─ ScriptExtensions.py
   │     │  │  ├─ Scripts.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ Blocks.cpython-313.pyc
   │     │  │     ├─ OTTags.cpython-313.pyc
   │     │  │     ├─ ScriptExtensions.cpython-313.pyc
   │     │  │     ├─ Scripts.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ varLib
   │     │  │  ├─ avar.py
   │     │  │  ├─ avarPlanner.py
   │     │  │  ├─ builder.py
   │     │  │  ├─ cff.py
   │     │  │  ├─ errors.py
   │     │  │  ├─ featureVars.py
   │     │  │  ├─ instancer
   │     │  │  │  ├─ featureVars.py
   │     │  │  │  ├─ names.py
   │     │  │  │  ├─ solver.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ featureVars.cpython-313.pyc
   │     │  │  │     ├─ names.cpython-313.pyc
   │     │  │  │     ├─ solver.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ interpolatable.py
   │     │  │  ├─ interpolatableHelpers.py
   │     │  │  ├─ interpolatablePlot.py
   │     │  │  ├─ interpolatableTestContourOrder.py
   │     │  │  ├─ interpolatableTestStartingPoint.py
   │     │  │  ├─ interpolate_layout.py
   │     │  │  ├─ iup.c
   │     │  │  ├─ iup.cp313-win_amd64.pyd
   │     │  │  ├─ iup.py
   │     │  │  ├─ merger.py
   │     │  │  ├─ models.py
   │     │  │  ├─ multiVarStore.py
   │     │  │  ├─ mutator.py
   │     │  │  ├─ mvar.py
   │     │  │  ├─ plot.py
   │     │  │  ├─ stat.py
   │     │  │  ├─ varStore.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ avar.cpython-313.pyc
   │     │  │     ├─ avarPlanner.cpython-313.pyc
   │     │  │     ├─ builder.cpython-313.pyc
   │     │  │     ├─ cff.cpython-313.pyc
   │     │  │     ├─ errors.cpython-313.pyc
   │     │  │     ├─ featureVars.cpython-313.pyc
   │     │  │     ├─ interpolatable.cpython-313.pyc
   │     │  │     ├─ interpolatableHelpers.cpython-313.pyc
   │     │  │     ├─ interpolatablePlot.cpython-313.pyc
   │     │  │     ├─ interpolatableTestContourOrder.cpython-313.pyc
   │     │  │     ├─ interpolatableTestStartingPoint.cpython-313.pyc
   │     │  │     ├─ interpolate_layout.cpython-313.pyc
   │     │  │     ├─ iup.cpython-313.pyc
   │     │  │     ├─ merger.cpython-313.pyc
   │     │  │     ├─ models.cpython-313.pyc
   │     │  │     ├─ multiVarStore.cpython-313.pyc
   │     │  │     ├─ mutator.cpython-313.pyc
   │     │  │     ├─ mvar.cpython-313.pyc
   │     │  │     ├─ plot.cpython-313.pyc
   │     │  │     ├─ stat.cpython-313.pyc
   │     │  │     ├─ varStore.cpython-313.pyc
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ voltLib
   │     │  │  ├─ ast.py
   │     │  │  ├─ error.py
   │     │  │  ├─ lexer.py
   │     │  │  ├─ parser.py
   │     │  │  ├─ voltToFea.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ ast.cpython-313.pyc
   │     │  │     ├─ error.cpython-313.pyc
   │     │  │     ├─ lexer.cpython-313.pyc
   │     │  │     ├─ parser.cpython-313.pyc
   │     │  │     ├─ voltToFea.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ afmLib.cpython-313.pyc
   │     │     ├─ agl.cpython-313.pyc
   │     │     ├─ fontBuilder.cpython-313.pyc
   │     │     ├─ help.cpython-313.pyc
   │     │     ├─ tfmLib.cpython-313.pyc
   │     │     ├─ ttx.cpython-313.pyc
   │     │     ├─ unicode.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ fonttools-4.56.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ fsspec
   │     │  ├─ archive.py
   │     │  ├─ asyn.py
   │     │  ├─ caching.py
   │     │  ├─ callbacks.py
   │     │  ├─ compression.py
   │     │  ├─ config.py
   │     │  ├─ conftest.py
   │     │  ├─ core.py
   │     │  ├─ dircache.py
   │     │  ├─ exceptions.py
   │     │  ├─ fuse.py
   │     │  ├─ generic.py
   │     │  ├─ gui.py
   │     │  ├─ implementations
   │     │  │  ├─ arrow.py
   │     │  │  ├─ asyn_wrapper.py
   │     │  │  ├─ cached.py
   │     │  │  ├─ cache_mapper.py
   │     │  │  ├─ cache_metadata.py
   │     │  │  ├─ dask.py
   │     │  │  ├─ data.py
   │     │  │  ├─ dbfs.py
   │     │  │  ├─ dirfs.py
   │     │  │  ├─ ftp.py
   │     │  │  ├─ git.py
   │     │  │  ├─ github.py
   │     │  │  ├─ http.py
   │     │  │  ├─ http_sync.py
   │     │  │  ├─ jupyter.py
   │     │  │  ├─ libarchive.py
   │     │  │  ├─ local.py
   │     │  │  ├─ memory.py
   │     │  │  ├─ reference.py
   │     │  │  ├─ sftp.py
   │     │  │  ├─ smb.py
   │     │  │  ├─ tar.py
   │     │  │  ├─ webhdfs.py
   │     │  │  ├─ zip.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ arrow.cpython-313.pyc
   │     │  │     ├─ asyn_wrapper.cpython-313.pyc
   │     │  │     ├─ cached.cpython-313.pyc
   │     │  │     ├─ cache_mapper.cpython-313.pyc
   │     │  │     ├─ cache_metadata.cpython-313.pyc
   │     │  │     ├─ dask.cpython-313.pyc
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ dbfs.cpython-313.pyc
   │     │  │     ├─ dirfs.cpython-313.pyc
   │     │  │     ├─ ftp.cpython-313.pyc
   │     │  │     ├─ git.cpython-313.pyc
   │     │  │     ├─ github.cpython-313.pyc
   │     │  │     ├─ http.cpython-313.pyc
   │     │  │     ├─ http_sync.cpython-313.pyc
   │     │  │     ├─ jupyter.cpython-313.pyc
   │     │  │     ├─ libarchive.cpython-313.pyc
   │     │  │     ├─ local.cpython-313.pyc
   │     │  │     ├─ memory.cpython-313.pyc
   │     │  │     ├─ reference.cpython-313.pyc
   │     │  │     ├─ sftp.cpython-313.pyc
   │     │  │     ├─ smb.cpython-313.pyc
   │     │  │     ├─ tar.cpython-313.pyc
   │     │  │     ├─ webhdfs.cpython-313.pyc
   │     │  │     ├─ zip.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ json.py
   │     │  ├─ mapping.py
   │     │  ├─ parquet.py
   │     │  ├─ registry.py
   │     │  ├─ spec.py
   │     │  ├─ tests
   │     │  │  └─ abstract
   │     │  │     ├─ common.py
   │     │  │     ├─ copy.py
   │     │  │     ├─ get.py
   │     │  │     ├─ mv.py
   │     │  │     ├─ open.py
   │     │  │     ├─ pipe.py
   │     │  │     ├─ put.py
   │     │  │     ├─ __init__.py
   │     │  │     └─ __pycache__
   │     │  │        ├─ common.cpython-313.pyc
   │     │  │        ├─ copy.cpython-313.pyc
   │     │  │        ├─ get.cpython-313.pyc
   │     │  │        ├─ mv.cpython-313.pyc
   │     │  │        ├─ open.cpython-313.pyc
   │     │  │        ├─ pipe.cpython-313.pyc
   │     │  │        ├─ put.cpython-313.pyc
   │     │  │        └─ __init__.cpython-313.pyc
   │     │  ├─ transaction.py
   │     │  ├─ utils.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ archive.cpython-313.pyc
   │     │     ├─ asyn.cpython-313.pyc
   │     │     ├─ caching.cpython-313.pyc
   │     │     ├─ callbacks.cpython-313.pyc
   │     │     ├─ compression.cpython-313.pyc
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ dircache.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ fuse.cpython-313.pyc
   │     │     ├─ generic.cpython-313.pyc
   │     │     ├─ gui.cpython-313.pyc
   │     │     ├─ json.cpython-313.pyc
   │     │     ├─ mapping.cpython-313.pyc
   │     │     ├─ parquet.cpython-313.pyc
   │     │     ├─ registry.cpython-313.pyc
   │     │     ├─ spec.cpython-313.pyc
   │     │     ├─ transaction.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ fsspec-2025.3.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ h11
   │     │  ├─ py.typed
   │     │  ├─ tests
   │     │  │  ├─ data
   │     │  │  │  └─ test-file
   │     │  │  ├─ helpers.py
   │     │  │  ├─ test_against_stdlib_http.py
   │     │  │  ├─ test_connection.py
   │     │  │  ├─ test_events.py
   │     │  │  ├─ test_headers.py
   │     │  │  ├─ test_helpers.py
   │     │  │  ├─ test_io.py
   │     │  │  ├─ test_receivebuffer.py
   │     │  │  ├─ test_state.py
   │     │  │  ├─ test_util.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ helpers.cpython-313.pyc
   │     │  │     ├─ test_against_stdlib_http.cpython-313.pyc
   │     │  │     ├─ test_connection.cpython-313.pyc
   │     │  │     ├─ test_events.cpython-313.pyc
   │     │  │     ├─ test_headers.cpython-313.pyc
   │     │  │     ├─ test_helpers.cpython-313.pyc
   │     │  │     ├─ test_io.cpython-313.pyc
   │     │  │     ├─ test_receivebuffer.cpython-313.pyc
   │     │  │     ├─ test_state.cpython-313.pyc
   │     │  │     ├─ test_util.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _abnf.py
   │     │  ├─ _connection.py
   │     │  ├─ _events.py
   │     │  ├─ _headers.py
   │     │  ├─ _readers.py
   │     │  ├─ _receivebuffer.py
   │     │  ├─ _state.py
   │     │  ├─ _util.py
   │     │  ├─ _version.py
   │     │  ├─ _writers.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _abnf.cpython-313.pyc
   │     │     ├─ _connection.cpython-313.pyc
   │     │     ├─ _events.cpython-313.pyc
   │     │     ├─ _headers.cpython-313.pyc
   │     │     ├─ _readers.cpython-313.pyc
   │     │     ├─ _receivebuffer.cpython-313.pyc
   │     │     ├─ _state.cpython-313.pyc
   │     │     ├─ _util.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     ├─ _writers.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ h11-0.14.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ idna
   │     │  ├─ codec.py
   │     │  ├─ compat.py
   │     │  ├─ core.py
   │     │  ├─ idnadata.py
   │     │  ├─ intranges.py
   │     │  ├─ package_data.py
   │     │  ├─ py.typed
   │     │  ├─ uts46data.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ codec.cpython-313.pyc
   │     │     ├─ compat.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ idnadata.cpython-313.pyc
   │     │     ├─ intranges.cpython-313.pyc
   │     │     ├─ package_data.cpython-313.pyc
   │     │     ├─ uts46data.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ idna-3.10.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ jinja2
   │     │  ├─ async_utils.py
   │     │  ├─ bccache.py
   │     │  ├─ compiler.py
   │     │  ├─ constants.py
   │     │  ├─ debug.py
   │     │  ├─ defaults.py
   │     │  ├─ environment.py
   │     │  ├─ exceptions.py
   │     │  ├─ ext.py
   │     │  ├─ filters.py
   │     │  ├─ idtracking.py
   │     │  ├─ lexer.py
   │     │  ├─ loaders.py
   │     │  ├─ meta.py
   │     │  ├─ nativetypes.py
   │     │  ├─ nodes.py
   │     │  ├─ optimizer.py
   │     │  ├─ parser.py
   │     │  ├─ py.typed
   │     │  ├─ runtime.py
   │     │  ├─ sandbox.py
   │     │  ├─ tests.py
   │     │  ├─ utils.py
   │     │  ├─ visitor.py
   │     │  ├─ _identifier.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ async_utils.cpython-313.pyc
   │     │     ├─ bccache.cpython-313.pyc
   │     │     ├─ compiler.cpython-313.pyc
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ debug.cpython-313.pyc
   │     │     ├─ defaults.cpython-313.pyc
   │     │     ├─ environment.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ ext.cpython-313.pyc
   │     │     ├─ filters.cpython-313.pyc
   │     │     ├─ idtracking.cpython-313.pyc
   │     │     ├─ lexer.cpython-313.pyc
   │     │     ├─ loaders.cpython-313.pyc
   │     │     ├─ meta.cpython-313.pyc
   │     │     ├─ nativetypes.cpython-313.pyc
   │     │     ├─ nodes.cpython-313.pyc
   │     │     ├─ optimizer.cpython-313.pyc
   │     │     ├─ parser.cpython-313.pyc
   │     │     ├─ runtime.cpython-313.pyc
   │     │     ├─ sandbox.cpython-313.pyc
   │     │     ├─ tests.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ visitor.cpython-313.pyc
   │     │     ├─ _identifier.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ jinja2-3.1.6.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ joblib
   │     │  ├─ backports.py
   │     │  ├─ compressor.py
   │     │  ├─ disk.py
   │     │  ├─ executor.py
   │     │  ├─ externals
   │     │  │  ├─ cloudpickle
   │     │  │  │  ├─ cloudpickle.py
   │     │  │  │  ├─ cloudpickle_fast.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cloudpickle.cpython-313.pyc
   │     │  │  │     ├─ cloudpickle_fast.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ loky
   │     │  │  │  ├─ backend
   │     │  │  │  │  ├─ context.py
   │     │  │  │  │  ├─ fork_exec.py
   │     │  │  │  │  ├─ popen_loky_posix.py
   │     │  │  │  │  ├─ popen_loky_win32.py
   │     │  │  │  │  ├─ process.py
   │     │  │  │  │  ├─ queues.py
   │     │  │  │  │  ├─ reduction.py
   │     │  │  │  │  ├─ resource_tracker.py
   │     │  │  │  │  ├─ spawn.py
   │     │  │  │  │  ├─ synchronize.py
   │     │  │  │  │  ├─ utils.py
   │     │  │  │  │  ├─ _posix_reduction.py
   │     │  │  │  │  ├─ _win_reduction.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ context.cpython-313.pyc
   │     │  │  │  │     ├─ fork_exec.cpython-313.pyc
   │     │  │  │  │     ├─ popen_loky_posix.cpython-313.pyc
   │     │  │  │  │     ├─ popen_loky_win32.cpython-313.pyc
   │     │  │  │  │     ├─ process.cpython-313.pyc
   │     │  │  │  │     ├─ queues.cpython-313.pyc
   │     │  │  │  │     ├─ reduction.cpython-313.pyc
   │     │  │  │  │     ├─ resource_tracker.cpython-313.pyc
   │     │  │  │  │     ├─ spawn.cpython-313.pyc
   │     │  │  │  │     ├─ synchronize.cpython-313.pyc
   │     │  │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │  │     ├─ _posix_reduction.cpython-313.pyc
   │     │  │  │  │     ├─ _win_reduction.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ cloudpickle_wrapper.py
   │     │  │  │  ├─ initializers.py
   │     │  │  │  ├─ process_executor.py
   │     │  │  │  ├─ reusable_executor.py
   │     │  │  │  ├─ _base.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cloudpickle_wrapper.cpython-313.pyc
   │     │  │  │     ├─ initializers.cpython-313.pyc
   │     │  │  │     ├─ process_executor.cpython-313.pyc
   │     │  │  │     ├─ reusable_executor.cpython-313.pyc
   │     │  │  │     ├─ _base.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ func_inspect.py
   │     │  ├─ hashing.py
   │     │  ├─ logger.py
   │     │  ├─ memory.py
   │     │  ├─ numpy_pickle.py
   │     │  ├─ numpy_pickle_compat.py
   │     │  ├─ numpy_pickle_utils.py
   │     │  ├─ parallel.py
   │     │  ├─ pool.py
   │     │  ├─ test
   │     │  │  ├─ common.py
   │     │  │  ├─ data
   │     │  │  │  ├─ create_numpy_pickle.py
   │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py27_np16.gz
   │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py27_np17.gz
   │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py33_np18.gz
   │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py34_np19.gz
   │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py35_np19.gz
   │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl
   │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl.bz2
   │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl.gzip
   │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl.lzma
   │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl.xz
   │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl
   │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl.bz2
   │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl.gzip
   │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl.lzma
   │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl.xz
   │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl
   │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl.bz2
   │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl.gzip
   │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl.lzma
   │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl.xz
   │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl
   │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl.bz2
   │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl.gzip
   │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl.lzma
   │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl.xz
   │     │  │  │  ├─ joblib_0.11.0_compressed_pickle_py36_np111.gz
   │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl
   │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl.bz2
   │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl.gzip
   │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl.lzma
   │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl.xz
   │     │  │  │  ├─ joblib_0.8.4_compressed_pickle_py27_np17.gz
   │     │  │  │  ├─ joblib_0.9.2_compressed_pickle_py27_np16.gz
   │     │  │  │  ├─ joblib_0.9.2_compressed_pickle_py27_np17.gz
   │     │  │  │  ├─ joblib_0.9.2_compressed_pickle_py34_np19.gz
   │     │  │  │  ├─ joblib_0.9.2_compressed_pickle_py35_np19.gz
   │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl
   │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl_01.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl_02.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl_03.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl_04.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl
   │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl_01.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl_02.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl_03.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl_04.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl
   │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl_01.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl_02.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl_03.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl_04.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl
   │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl_01.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl_02.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl_03.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl_04.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl
   │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl_01.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl_02.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl_03.npy
   │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl_04.npy
   │     │  │  │  ├─ joblib_0.9.4.dev0_compressed_cache_size_pickle_py35_np19.gz
   │     │  │  │  ├─ joblib_0.9.4.dev0_compressed_cache_size_pickle_py35_np19.gz_01.npy.z
   │     │  │  │  ├─ joblib_0.9.4.dev0_compressed_cache_size_pickle_py35_np19.gz_02.npy.z
   │     │  │  │  ├─ joblib_0.9.4.dev0_compressed_cache_size_pickle_py35_np19.gz_03.npy.z
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ create_numpy_pickle.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ testutils.py
   │     │  │  ├─ test_backports.py
   │     │  │  ├─ test_cloudpickle_wrapper.py
   │     │  │  ├─ test_config.py
   │     │  │  ├─ test_dask.py
   │     │  │  ├─ test_disk.py
   │     │  │  ├─ test_func_inspect.py
   │     │  │  ├─ test_func_inspect_special_encoding.py
   │     │  │  ├─ test_hashing.py
   │     │  │  ├─ test_init.py
   │     │  │  ├─ test_logger.py
   │     │  │  ├─ test_memmapping.py
   │     │  │  ├─ test_memory.py
   │     │  │  ├─ test_memory_async.py
   │     │  │  ├─ test_missing_multiprocessing.py
   │     │  │  ├─ test_module.py
   │     │  │  ├─ test_numpy_pickle.py
   │     │  │  ├─ test_numpy_pickle_compat.py
   │     │  │  ├─ test_numpy_pickle_utils.py
   │     │  │  ├─ test_parallel.py
   │     │  │  ├─ test_store_backends.py
   │     │  │  ├─ test_testing.py
   │     │  │  ├─ test_utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ common.cpython-313.pyc
   │     │  │     ├─ testutils.cpython-313.pyc
   │     │  │     ├─ test_backports.cpython-313.pyc
   │     │  │     ├─ test_cloudpickle_wrapper.cpython-313.pyc
   │     │  │     ├─ test_config.cpython-313.pyc
   │     │  │     ├─ test_dask.cpython-313.pyc
   │     │  │     ├─ test_disk.cpython-313.pyc
   │     │  │     ├─ test_func_inspect.cpython-313.pyc
   │     │  │     ├─ test_func_inspect_special_encoding.cpython-313.pyc
   │     │  │     ├─ test_hashing.cpython-313.pyc
   │     │  │     ├─ test_init.cpython-313.pyc
   │     │  │     ├─ test_logger.cpython-313.pyc
   │     │  │     ├─ test_memmapping.cpython-313.pyc
   │     │  │     ├─ test_memory.cpython-313.pyc
   │     │  │     ├─ test_memory_async.cpython-313.pyc
   │     │  │     ├─ test_missing_multiprocessing.cpython-313.pyc
   │     │  │     ├─ test_module.cpython-313.pyc
   │     │  │     ├─ test_numpy_pickle.cpython-313.pyc
   │     │  │     ├─ test_numpy_pickle_compat.cpython-313.pyc
   │     │  │     ├─ test_numpy_pickle_utils.cpython-313.pyc
   │     │  │     ├─ test_parallel.cpython-313.pyc
   │     │  │     ├─ test_store_backends.cpython-313.pyc
   │     │  │     ├─ test_testing.cpython-313.pyc
   │     │  │     ├─ test_utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ testing.py
   │     │  ├─ _cloudpickle_wrapper.py
   │     │  ├─ _dask.py
   │     │  ├─ _memmapping_reducer.py
   │     │  ├─ _multiprocessing_helpers.py
   │     │  ├─ _parallel_backends.py
   │     │  ├─ _store_backends.py
   │     │  ├─ _utils.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ backports.cpython-313.pyc
   │     │     ├─ compressor.cpython-313.pyc
   │     │     ├─ disk.cpython-313.pyc
   │     │     ├─ executor.cpython-313.pyc
   │     │     ├─ func_inspect.cpython-313.pyc
   │     │     ├─ hashing.cpython-313.pyc
   │     │     ├─ logger.cpython-313.pyc
   │     │     ├─ memory.cpython-313.pyc
   │     │     ├─ numpy_pickle.cpython-313.pyc
   │     │     ├─ numpy_pickle_compat.cpython-313.pyc
   │     │     ├─ numpy_pickle_utils.cpython-313.pyc
   │     │     ├─ parallel.cpython-313.pyc
   │     │     ├─ pool.cpython-313.pyc
   │     │     ├─ testing.cpython-313.pyc
   │     │     ├─ _cloudpickle_wrapper.cpython-313.pyc
   │     │     ├─ _dask.cpython-313.pyc
   │     │     ├─ _memmapping_reducer.cpython-313.pyc
   │     │     ├─ _multiprocessing_helpers.cpython-313.pyc
   │     │     ├─ _parallel_backends.cpython-313.pyc
   │     │     ├─ _store_backends.cpython-313.pyc
   │     │     ├─ _utils.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ joblib-1.4.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ kiwisolver
   │     │  ├─ exceptions.py
   │     │  ├─ py.typed
   │     │  ├─ _cext.cp313-win_amd64.pyd
   │     │  ├─ _cext.pyi
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ kiwisolver-1.4.8.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ lightgbm
   │     │  ├─ basic.py
   │     │  ├─ bin
   │     │  │  └─ lib_lightgbm.dll
   │     │  ├─ callback.py
   │     │  ├─ compat.py
   │     │  ├─ dask.py
   │     │  ├─ engine.py
   │     │  ├─ lib
   │     │  │  └─ lib_lightgbm.lib
   │     │  ├─ libpath.py
   │     │  ├─ plotting.py
   │     │  ├─ py.typed
   │     │  ├─ sklearn.py
   │     │  ├─ VERSION.txt
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ basic.cpython-313.pyc
   │     │     ├─ callback.cpython-313.pyc
   │     │     ├─ compat.cpython-313.pyc
   │     │     ├─ dask.cpython-313.pyc
   │     │     ├─ engine.cpython-313.pyc
   │     │     ├─ libpath.cpython-313.pyc
   │     │     ├─ plotting.cpython-313.pyc
   │     │     ├─ sklearn.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ lightgbm-4.6.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ locket
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ locket-1.0.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ markupsafe
   │     │  ├─ py.typed
   │     │  ├─ _native.py
   │     │  ├─ _speedups.c
   │     │  ├─ _speedups.cp313-win_amd64.pyd
   │     │  ├─ _speedups.pyi
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _native.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ MarkupSafe-3.0.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ matplotlib
   │     │  ├─ animation.py
   │     │  ├─ animation.pyi
   │     │  ├─ artist.py
   │     │  ├─ artist.pyi
   │     │  ├─ axes
   │     │  │  ├─ _axes.py
   │     │  │  ├─ _axes.pyi
   │     │  │  ├─ _base.py
   │     │  │  ├─ _base.pyi
   │     │  │  ├─ _secondary_axes.py
   │     │  │  ├─ _secondary_axes.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _axes.cpython-313.pyc
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _secondary_axes.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ axis.py
   │     │  ├─ axis.pyi
   │     │  ├─ backends
   │     │  │  ├─ backend_agg.py
   │     │  │  ├─ backend_cairo.py
   │     │  │  ├─ backend_gtk3.py
   │     │  │  ├─ backend_gtk3agg.py
   │     │  │  ├─ backend_gtk3cairo.py
   │     │  │  ├─ backend_gtk4.py
   │     │  │  ├─ backend_gtk4agg.py
   │     │  │  ├─ backend_gtk4cairo.py
   │     │  │  ├─ backend_macosx.py
   │     │  │  ├─ backend_mixed.py
   │     │  │  ├─ backend_nbagg.py
   │     │  │  ├─ backend_pdf.py
   │     │  │  ├─ backend_pgf.py
   │     │  │  ├─ backend_ps.py
   │     │  │  ├─ backend_qt.py
   │     │  │  ├─ backend_qt5.py
   │     │  │  ├─ backend_qt5agg.py
   │     │  │  ├─ backend_qt5cairo.py
   │     │  │  ├─ backend_qtagg.py
   │     │  │  ├─ backend_qtcairo.py
   │     │  │  ├─ backend_svg.py
   │     │  │  ├─ backend_template.py
   │     │  │  ├─ backend_tkagg.py
   │     │  │  ├─ backend_tkcairo.py
   │     │  │  ├─ backend_webagg.py
   │     │  │  ├─ backend_webagg_core.py
   │     │  │  ├─ backend_wx.py
   │     │  │  ├─ backend_wxagg.py
   │     │  │  ├─ backend_wxcairo.py
   │     │  │  ├─ qt_compat.py
   │     │  │  ├─ qt_editor
   │     │  │  │  ├─ figureoptions.py
   │     │  │  │  ├─ _formlayout.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ figureoptions.cpython-313.pyc
   │     │  │  │     ├─ _formlayout.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ registry.py
   │     │  │  ├─ web_backend
   │     │  │  │  ├─ all_figures.html
   │     │  │  │  ├─ css
   │     │  │  │  │  ├─ boilerplate.css
   │     │  │  │  │  ├─ fbm.css
   │     │  │  │  │  ├─ mpl.css
   │     │  │  │  │  └─ page.css
   │     │  │  │  ├─ ipython_inline_figure.html
   │     │  │  │  ├─ js
   │     │  │  │  │  ├─ mpl.js
   │     │  │  │  │  ├─ mpl_tornado.js
   │     │  │  │  │  └─ nbagg_mpl.js
   │     │  │  │  └─ single_figure.html
   │     │  │  ├─ _backend_agg.cp313-win_amd64.pyd
   │     │  │  ├─ _backend_agg.pyi
   │     │  │  ├─ _backend_gtk.py
   │     │  │  ├─ _backend_pdf_ps.py
   │     │  │  ├─ _backend_tk.py
   │     │  │  ├─ _macosx.pyi
   │     │  │  ├─ _tkagg.cp313-win_amd64.pyd
   │     │  │  ├─ _tkagg.pyi
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ backend_agg.cpython-313.pyc
   │     │  │     ├─ backend_cairo.cpython-313.pyc
   │     │  │     ├─ backend_gtk3.cpython-313.pyc
   │     │  │     ├─ backend_gtk3agg.cpython-313.pyc
   │     │  │     ├─ backend_gtk3cairo.cpython-313.pyc
   │     │  │     ├─ backend_gtk4.cpython-313.pyc
   │     │  │     ├─ backend_gtk4agg.cpython-313.pyc
   │     │  │     ├─ backend_gtk4cairo.cpython-313.pyc
   │     │  │     ├─ backend_macosx.cpython-313.pyc
   │     │  │     ├─ backend_mixed.cpython-313.pyc
   │     │  │     ├─ backend_nbagg.cpython-313.pyc
   │     │  │     ├─ backend_pdf.cpython-313.pyc
   │     │  │     ├─ backend_pgf.cpython-313.pyc
   │     │  │     ├─ backend_ps.cpython-313.pyc
   │     │  │     ├─ backend_qt.cpython-313.pyc
   │     │  │     ├─ backend_qt5.cpython-313.pyc
   │     │  │     ├─ backend_qt5agg.cpython-313.pyc
   │     │  │     ├─ backend_qt5cairo.cpython-313.pyc
   │     │  │     ├─ backend_qtagg.cpython-313.pyc
   │     │  │     ├─ backend_qtcairo.cpython-313.pyc
   │     │  │     ├─ backend_svg.cpython-313.pyc
   │     │  │     ├─ backend_template.cpython-313.pyc
   │     │  │     ├─ backend_tkagg.cpython-313.pyc
   │     │  │     ├─ backend_tkcairo.cpython-313.pyc
   │     │  │     ├─ backend_webagg.cpython-313.pyc
   │     │  │     ├─ backend_webagg_core.cpython-313.pyc
   │     │  │     ├─ backend_wx.cpython-313.pyc
   │     │  │     ├─ backend_wxagg.cpython-313.pyc
   │     │  │     ├─ backend_wxcairo.cpython-313.pyc
   │     │  │     ├─ qt_compat.cpython-313.pyc
   │     │  │     ├─ registry.cpython-313.pyc
   │     │  │     ├─ _backend_gtk.cpython-313.pyc
   │     │  │     ├─ _backend_pdf_ps.cpython-313.pyc
   │     │  │     ├─ _backend_tk.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ backend_bases.py
   │     │  ├─ backend_bases.pyi
   │     │  ├─ backend_managers.py
   │     │  ├─ backend_managers.pyi
   │     │  ├─ backend_tools.py
   │     │  ├─ backend_tools.pyi
   │     │  ├─ bezier.py
   │     │  ├─ bezier.pyi
   │     │  ├─ category.py
   │     │  ├─ cbook.py
   │     │  ├─ cbook.pyi
   │     │  ├─ cm.py
   │     │  ├─ cm.pyi
   │     │  ├─ collections.py
   │     │  ├─ collections.pyi
   │     │  ├─ colorbar.py
   │     │  ├─ colorbar.pyi
   │     │  ├─ colorizer.py
   │     │  ├─ colorizer.pyi
   │     │  ├─ colors.py
   │     │  ├─ colors.pyi
   │     │  ├─ container.py
   │     │  ├─ container.pyi
   │     │  ├─ contour.py
   │     │  ├─ contour.pyi
   │     │  ├─ dates.py
   │     │  ├─ dviread.py
   │     │  ├─ dviread.pyi
   │     │  ├─ figure.py
   │     │  ├─ figure.pyi
   │     │  ├─ font_manager.py
   │     │  ├─ font_manager.pyi
   │     │  ├─ ft2font.cp313-win_amd64.pyd
   │     │  ├─ ft2font.pyi
   │     │  ├─ gridspec.py
   │     │  ├─ gridspec.pyi
   │     │  ├─ hatch.py
   │     │  ├─ hatch.pyi
   │     │  ├─ image.py
   │     │  ├─ image.pyi
   │     │  ├─ inset.py
   │     │  ├─ inset.pyi
   │     │  ├─ layout_engine.py
   │     │  ├─ layout_engine.pyi
   │     │  ├─ legend.py
   │     │  ├─ legend.pyi
   │     │  ├─ legend_handler.py
   │     │  ├─ legend_handler.pyi
   │     │  ├─ lines.py
   │     │  ├─ lines.pyi
   │     │  ├─ markers.py
   │     │  ├─ markers.pyi
   │     │  ├─ mathtext.py
   │     │  ├─ mathtext.pyi
   │     │  ├─ mlab.py
   │     │  ├─ mlab.pyi
   │     │  ├─ mpl-data
   │     │  │  ├─ fonts
   │     │  │  │  ├─ afm
   │     │  │  │  │  ├─ cmex10.afm
   │     │  │  │  │  ├─ cmmi10.afm
   │     │  │  │  │  ├─ cmr10.afm
   │     │  │  │  │  ├─ cmsy10.afm
   │     │  │  │  │  ├─ cmtt10.afm
   │     │  │  │  │  ├─ pagd8a.afm
   │     │  │  │  │  ├─ pagdo8a.afm
   │     │  │  │  │  ├─ pagk8a.afm
   │     │  │  │  │  ├─ pagko8a.afm
   │     │  │  │  │  ├─ pbkd8a.afm
   │     │  │  │  │  ├─ pbkdi8a.afm
   │     │  │  │  │  ├─ pbkl8a.afm
   │     │  │  │  │  ├─ pbkli8a.afm
   │     │  │  │  │  ├─ pcrb8a.afm
   │     │  │  │  │  ├─ pcrbo8a.afm
   │     │  │  │  │  ├─ pcrr8a.afm
   │     │  │  │  │  ├─ pcrro8a.afm
   │     │  │  │  │  ├─ phvb8a.afm
   │     │  │  │  │  ├─ phvb8an.afm
   │     │  │  │  │  ├─ phvbo8a.afm
   │     │  │  │  │  ├─ phvbo8an.afm
   │     │  │  │  │  ├─ phvl8a.afm
   │     │  │  │  │  ├─ phvlo8a.afm
   │     │  │  │  │  ├─ phvr8a.afm
   │     │  │  │  │  ├─ phvr8an.afm
   │     │  │  │  │  ├─ phvro8a.afm
   │     │  │  │  │  ├─ phvro8an.afm
   │     │  │  │  │  ├─ pncb8a.afm
   │     │  │  │  │  ├─ pncbi8a.afm
   │     │  │  │  │  ├─ pncr8a.afm
   │     │  │  │  │  ├─ pncri8a.afm
   │     │  │  │  │  ├─ pplb8a.afm
   │     │  │  │  │  ├─ pplbi8a.afm
   │     │  │  │  │  ├─ pplr8a.afm
   │     │  │  │  │  ├─ pplri8a.afm
   │     │  │  │  │  ├─ psyr.afm
   │     │  │  │  │  ├─ ptmb8a.afm
   │     │  │  │  │  ├─ ptmbi8a.afm
   │     │  │  │  │  ├─ ptmr8a.afm
   │     │  │  │  │  ├─ ptmri8a.afm
   │     │  │  │  │  ├─ putb8a.afm
   │     │  │  │  │  ├─ putbi8a.afm
   │     │  │  │  │  ├─ putr8a.afm
   │     │  │  │  │  ├─ putri8a.afm
   │     │  │  │  │  ├─ pzcmi8a.afm
   │     │  │  │  │  └─ pzdr.afm
   │     │  │  │  ├─ pdfcorefonts
   │     │  │  │  │  ├─ Courier-Bold.afm
   │     │  │  │  │  ├─ Courier-BoldOblique.afm
   │     │  │  │  │  ├─ Courier-Oblique.afm
   │     │  │  │  │  ├─ Courier.afm
   │     │  │  │  │  ├─ Helvetica-Bold.afm
   │     │  │  │  │  ├─ Helvetica-BoldOblique.afm
   │     │  │  │  │  ├─ Helvetica-Oblique.afm
   │     │  │  │  │  ├─ Helvetica.afm
   │     │  │  │  │  ├─ readme.txt
   │     │  │  │  │  ├─ Symbol.afm
   │     │  │  │  │  ├─ Times-Bold.afm
   │     │  │  │  │  ├─ Times-BoldItalic.afm
   │     │  │  │  │  ├─ Times-Italic.afm
   │     │  │  │  │  ├─ Times-Roman.afm
   │     │  │  │  │  └─ ZapfDingbats.afm
   │     │  │  │  └─ ttf
   │     │  │  │     ├─ cmb10.ttf
   │     │  │  │     ├─ cmex10.ttf
   │     │  │  │     ├─ cmmi10.ttf
   │     │  │  │     ├─ cmr10.ttf
   │     │  │  │     ├─ cmss10.ttf
   │     │  │  │     ├─ cmsy10.ttf
   │     │  │  │     ├─ cmtt10.ttf
   │     │  │  │     ├─ DejaVuSans-Bold.ttf
   │     │  │  │     ├─ DejaVuSans-BoldOblique.ttf
   │     │  │  │     ├─ DejaVuSans-Oblique.ttf
   │     │  │  │     ├─ DejaVuSans.ttf
   │     │  │  │     ├─ DejaVuSansDisplay.ttf
   │     │  │  │     ├─ DejaVuSansMono-Bold.ttf
   │     │  │  │     ├─ DejaVuSansMono-BoldOblique.ttf
   │     │  │  │     ├─ DejaVuSansMono-Oblique.ttf
   │     │  │  │     ├─ DejaVuSansMono.ttf
   │     │  │  │     ├─ DejaVuSerif-Bold.ttf
   │     │  │  │     ├─ DejaVuSerif-BoldItalic.ttf
   │     │  │  │     ├─ DejaVuSerif-Italic.ttf
   │     │  │  │     ├─ DejaVuSerif.ttf
   │     │  │  │     ├─ DejaVuSerifDisplay.ttf
   │     │  │  │     ├─ LICENSE_DEJAVU
   │     │  │  │     ├─ LICENSE_STIX
   │     │  │  │     ├─ STIXGeneral.ttf
   │     │  │  │     ├─ STIXGeneralBol.ttf
   │     │  │  │     ├─ STIXGeneralBolIta.ttf
   │     │  │  │     ├─ STIXGeneralItalic.ttf
   │     │  │  │     ├─ STIXNonUni.ttf
   │     │  │  │     ├─ STIXNonUniBol.ttf
   │     │  │  │     ├─ STIXNonUniBolIta.ttf
   │     │  │  │     ├─ STIXNonUniIta.ttf
   │     │  │  │     ├─ STIXSizFiveSymReg.ttf
   │     │  │  │     ├─ STIXSizFourSymBol.ttf
   │     │  │  │     ├─ STIXSizFourSymReg.ttf
   │     │  │  │     ├─ STIXSizOneSymBol.ttf
   │     │  │  │     ├─ STIXSizOneSymReg.ttf
   │     │  │  │     ├─ STIXSizThreeSymBol.ttf
   │     │  │  │     ├─ STIXSizThreeSymReg.ttf
   │     │  │  │     ├─ STIXSizTwoSymBol.ttf
   │     │  │  │     └─ STIXSizTwoSymReg.ttf
   │     │  │  ├─ images
   │     │  │  │  ├─ back-symbolic.svg
   │     │  │  │  ├─ back.pdf
   │     │  │  │  ├─ back.png
   │     │  │  │  ├─ back.svg
   │     │  │  │  ├─ back_large.png
   │     │  │  │  ├─ filesave-symbolic.svg
   │     │  │  │  ├─ filesave.pdf
   │     │  │  │  ├─ filesave.png
   │     │  │  │  ├─ filesave.svg
   │     │  │  │  ├─ filesave_large.png
   │     │  │  │  ├─ forward-symbolic.svg
   │     │  │  │  ├─ forward.pdf
   │     │  │  │  ├─ forward.png
   │     │  │  │  ├─ forward.svg
   │     │  │  │  ├─ forward_large.png
   │     │  │  │  ├─ hand.pdf
   │     │  │  │  ├─ hand.png
   │     │  │  │  ├─ hand.svg
   │     │  │  │  ├─ help-symbolic.svg
   │     │  │  │  ├─ help.pdf
   │     │  │  │  ├─ help.png
   │     │  │  │  ├─ help.svg
   │     │  │  │  ├─ help_large.png
   │     │  │  │  ├─ home-symbolic.svg
   │     │  │  │  ├─ home.pdf
   │     │  │  │  ├─ home.png
   │     │  │  │  ├─ home.svg
   │     │  │  │  ├─ home_large.png
   │     │  │  │  ├─ matplotlib.pdf
   │     │  │  │  ├─ matplotlib.png
   │     │  │  │  ├─ matplotlib.svg
   │     │  │  │  ├─ matplotlib_large.png
   │     │  │  │  ├─ move-symbolic.svg
   │     │  │  │  ├─ move.pdf
   │     │  │  │  ├─ move.png
   │     │  │  │  ├─ move.svg
   │     │  │  │  ├─ move_large.png
   │     │  │  │  ├─ qt4_editor_options.pdf
   │     │  │  │  ├─ qt4_editor_options.png
   │     │  │  │  ├─ qt4_editor_options.svg
   │     │  │  │  ├─ qt4_editor_options_large.png
   │     │  │  │  ├─ subplots-symbolic.svg
   │     │  │  │  ├─ subplots.pdf
   │     │  │  │  ├─ subplots.png
   │     │  │  │  ├─ subplots.svg
   │     │  │  │  ├─ subplots_large.png
   │     │  │  │  ├─ zoom_to_rect-symbolic.svg
   │     │  │  │  ├─ zoom_to_rect.pdf
   │     │  │  │  ├─ zoom_to_rect.png
   │     │  │  │  ├─ zoom_to_rect.svg
   │     │  │  │  └─ zoom_to_rect_large.png
   │     │  │  ├─ kpsewhich.lua
   │     │  │  ├─ matplotlibrc
   │     │  │  ├─ plot_directive
   │     │  │  │  └─ plot_directive.css
   │     │  │  ├─ sample_data
   │     │  │  │  ├─ axes_grid
   │     │  │  │  │  └─ bivariate_normal.npy
   │     │  │  │  ├─ data_x_x2_x3.csv
   │     │  │  │  ├─ eeg.dat
   │     │  │  │  ├─ embedding_in_wx3.xrc
   │     │  │  │  ├─ goog.npz
   │     │  │  │  ├─ grace_hopper.jpg
   │     │  │  │  ├─ jacksboro_fault_dem.npz
   │     │  │  │  ├─ logo2.png
   │     │  │  │  ├─ membrane.dat
   │     │  │  │  ├─ Minduka_Present_Blue_Pack.png
   │     │  │  │  ├─ msft.csv
   │     │  │  │  ├─ README.txt
   │     │  │  │  ├─ s1045.ima.gz
   │     │  │  │  ├─ Stocks.csv
   │     │  │  │  └─ topobathy.npz
   │     │  │  └─ stylelib
   │     │  │     ├─ bmh.mplstyle
   │     │  │     ├─ classic.mplstyle
   │     │  │     ├─ dark_background.mplstyle
   │     │  │     ├─ fast.mplstyle
   │     │  │     ├─ fivethirtyeight.mplstyle
   │     │  │     ├─ ggplot.mplstyle
   │     │  │     ├─ grayscale.mplstyle
   │     │  │     ├─ petroff10.mplstyle
   │     │  │     ├─ seaborn-v0_8-bright.mplstyle
   │     │  │     ├─ seaborn-v0_8-colorblind.mplstyle
   │     │  │     ├─ seaborn-v0_8-dark-palette.mplstyle
   │     │  │     ├─ seaborn-v0_8-dark.mplstyle
   │     │  │     ├─ seaborn-v0_8-darkgrid.mplstyle
   │     │  │     ├─ seaborn-v0_8-deep.mplstyle
   │     │  │     ├─ seaborn-v0_8-muted.mplstyle
   │     │  │     ├─ seaborn-v0_8-notebook.mplstyle
   │     │  │     ├─ seaborn-v0_8-paper.mplstyle
   │     │  │     ├─ seaborn-v0_8-pastel.mplstyle
   │     │  │     ├─ seaborn-v0_8-poster.mplstyle
   │     │  │     ├─ seaborn-v0_8-talk.mplstyle
   │     │  │     ├─ seaborn-v0_8-ticks.mplstyle
   │     │  │     ├─ seaborn-v0_8-white.mplstyle
   │     │  │     ├─ seaborn-v0_8-whitegrid.mplstyle
   │     │  │     ├─ seaborn-v0_8.mplstyle
   │     │  │     ├─ Solarize_Light2.mplstyle
   │     │  │     ├─ tableau-colorblind10.mplstyle
   │     │  │     ├─ _classic_test_patch.mplstyle
   │     │  │     ├─ _mpl-gallery-nogrid.mplstyle
   │     │  │     └─ _mpl-gallery.mplstyle
   │     │  ├─ offsetbox.py
   │     │  ├─ offsetbox.pyi
   │     │  ├─ patches.py
   │     │  ├─ patches.pyi
   │     │  ├─ path.py
   │     │  ├─ path.pyi
   │     │  ├─ patheffects.py
   │     │  ├─ patheffects.pyi
   │     │  ├─ projections
   │     │  │  ├─ geo.py
   │     │  │  ├─ geo.pyi
   │     │  │  ├─ polar.py
   │     │  │  ├─ polar.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ geo.cpython-313.pyc
   │     │  │     ├─ polar.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ pylab.py
   │     │  ├─ pyplot.py
   │     │  ├─ quiver.py
   │     │  ├─ quiver.pyi
   │     │  ├─ rcsetup.py
   │     │  ├─ rcsetup.pyi
   │     │  ├─ sankey.py
   │     │  ├─ sankey.pyi
   │     │  ├─ scale.py
   │     │  ├─ scale.pyi
   │     │  ├─ sphinxext
   │     │  │  ├─ figmpl_directive.py
   │     │  │  ├─ mathmpl.py
   │     │  │  ├─ plot_directive.py
   │     │  │  ├─ roles.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ figmpl_directive.cpython-313.pyc
   │     │  │     ├─ mathmpl.cpython-313.pyc
   │     │  │     ├─ plot_directive.cpython-313.pyc
   │     │  │     ├─ roles.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ spines.py
   │     │  ├─ spines.pyi
   │     │  ├─ stackplot.py
   │     │  ├─ stackplot.pyi
   │     │  ├─ streamplot.py
   │     │  ├─ streamplot.pyi
   │     │  ├─ style
   │     │  │  ├─ core.py
   │     │  │  ├─ core.pyi
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ table.py
   │     │  ├─ table.pyi
   │     │  ├─ testing
   │     │  │  ├─ compare.py
   │     │  │  ├─ compare.pyi
   │     │  │  ├─ conftest.py
   │     │  │  ├─ conftest.pyi
   │     │  │  ├─ decorators.py
   │     │  │  ├─ decorators.pyi
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ jpl_units
   │     │  │  │  ├─ Duration.py
   │     │  │  │  ├─ Epoch.py
   │     │  │  │  ├─ EpochConverter.py
   │     │  │  │  ├─ StrConverter.py
   │     │  │  │  ├─ UnitDbl.py
   │     │  │  │  ├─ UnitDblConverter.py
   │     │  │  │  ├─ UnitDblFormatter.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ Duration.cpython-313.pyc
   │     │  │  │     ├─ Epoch.cpython-313.pyc
   │     │  │  │     ├─ EpochConverter.cpython-313.pyc
   │     │  │  │     ├─ StrConverter.cpython-313.pyc
   │     │  │  │     ├─ UnitDbl.cpython-313.pyc
   │     │  │  │     ├─ UnitDblConverter.cpython-313.pyc
   │     │  │  │     ├─ UnitDblFormatter.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ widgets.py
   │     │  │  ├─ widgets.pyi
   │     │  │  ├─ _markers.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ compare.cpython-313.pyc
   │     │  │     ├─ conftest.cpython-313.pyc
   │     │  │     ├─ decorators.cpython-313.pyc
   │     │  │     ├─ exceptions.cpython-313.pyc
   │     │  │     ├─ widgets.cpython-313.pyc
   │     │  │     ├─ _markers.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tests
   │     │  │  ├─ conftest.py
   │     │  │  ├─ test_afm.py
   │     │  │  ├─ test_agg.py
   │     │  │  ├─ test_agg_filter.py
   │     │  │  ├─ test_animation.py
   │     │  │  ├─ test_api.py
   │     │  │  ├─ test_arrow_patches.py
   │     │  │  ├─ test_artist.py
   │     │  │  ├─ test_axes.py
   │     │  │  ├─ test_axis.py
   │     │  │  ├─ test_backends_interactive.py
   │     │  │  ├─ test_backend_bases.py
   │     │  │  ├─ test_backend_cairo.py
   │     │  │  ├─ test_backend_gtk3.py
   │     │  │  ├─ test_backend_inline.py
   │     │  │  ├─ test_backend_macosx.py
   │     │  │  ├─ test_backend_nbagg.py
   │     │  │  ├─ test_backend_pdf.py
   │     │  │  ├─ test_backend_pgf.py
   │     │  │  ├─ test_backend_ps.py
   │     │  │  ├─ test_backend_qt.py
   │     │  │  ├─ test_backend_registry.py
   │     │  │  ├─ test_backend_svg.py
   │     │  │  ├─ test_backend_template.py
   │     │  │  ├─ test_backend_tk.py
   │     │  │  ├─ test_backend_tools.py
   │     │  │  ├─ test_backend_webagg.py
   │     │  │  ├─ test_basic.py
   │     │  │  ├─ test_bbox_tight.py
   │     │  │  ├─ test_bezier.py
   │     │  │  ├─ test_category.py
   │     │  │  ├─ test_cbook.py
   │     │  │  ├─ test_collections.py
   │     │  │  ├─ test_colorbar.py
   │     │  │  ├─ test_colors.py
   │     │  │  ├─ test_compare_images.py
   │     │  │  ├─ test_constrainedlayout.py
   │     │  │  ├─ test_container.py
   │     │  │  ├─ test_contour.py
   │     │  │  ├─ test_cycles.py
   │     │  │  ├─ test_dates.py
   │     │  │  ├─ test_datetime.py
   │     │  │  ├─ test_determinism.py
   │     │  │  ├─ test_doc.py
   │     │  │  ├─ test_dviread.py
   │     │  │  ├─ test_figure.py
   │     │  │  ├─ test_fontconfig_pattern.py
   │     │  │  ├─ test_font_manager.py
   │     │  │  ├─ test_ft2font.py
   │     │  │  ├─ test_getattr.py
   │     │  │  ├─ test_gridspec.py
   │     │  │  ├─ test_image.py
   │     │  │  ├─ test_legend.py
   │     │  │  ├─ test_lines.py
   │     │  │  ├─ test_marker.py
   │     │  │  ├─ test_mathtext.py
   │     │  │  ├─ test_matplotlib.py
   │     │  │  ├─ test_mlab.py
   │     │  │  ├─ test_multivariate_colormaps.py
   │     │  │  ├─ test_offsetbox.py
   │     │  │  ├─ test_patches.py
   │     │  │  ├─ test_path.py
   │     │  │  ├─ test_patheffects.py
   │     │  │  ├─ test_pickle.py
   │     │  │  ├─ test_png.py
   │     │  │  ├─ test_polar.py
   │     │  │  ├─ test_preprocess_data.py
   │     │  │  ├─ test_pyplot.py
   │     │  │  ├─ test_quiver.py
   │     │  │  ├─ test_rcparams.py
   │     │  │  ├─ test_sankey.py
   │     │  │  ├─ test_scale.py
   │     │  │  ├─ test_simplification.py
   │     │  │  ├─ test_skew.py
   │     │  │  ├─ test_sphinxext.py
   │     │  │  ├─ test_spines.py
   │     │  │  ├─ test_streamplot.py
   │     │  │  ├─ test_style.py
   │     │  │  ├─ test_subplots.py
   │     │  │  ├─ test_table.py
   │     │  │  ├─ test_testing.py
   │     │  │  ├─ test_texmanager.py
   │     │  │  ├─ test_text.py
   │     │  │  ├─ test_textpath.py
   │     │  │  ├─ test_ticker.py
   │     │  │  ├─ test_tightlayout.py
   │     │  │  ├─ test_transforms.py
   │     │  │  ├─ test_triangulation.py
   │     │  │  ├─ test_type1font.py
   │     │  │  ├─ test_units.py
   │     │  │  ├─ test_usetex.py
   │     │  │  ├─ test_widgets.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ conftest.cpython-313.pyc
   │     │  │     ├─ test_afm.cpython-313.pyc
   │     │  │     ├─ test_agg.cpython-313.pyc
   │     │  │     ├─ test_agg_filter.cpython-313.pyc
   │     │  │     ├─ test_animation.cpython-313.pyc
   │     │  │     ├─ test_api.cpython-313.pyc
   │     │  │     ├─ test_arrow_patches.cpython-313.pyc
   │     │  │     ├─ test_artist.cpython-313.pyc
   │     │  │     ├─ test_axes.cpython-313.pyc
   │     │  │     ├─ test_axis.cpython-313.pyc
   │     │  │     ├─ test_backends_interactive.cpython-313.pyc
   │     │  │     ├─ test_backend_bases.cpython-313.pyc
   │     │  │     ├─ test_backend_cairo.cpython-313.pyc
   │     │  │     ├─ test_backend_gtk3.cpython-313.pyc
   │     │  │     ├─ test_backend_inline.cpython-313.pyc
   │     │  │     ├─ test_backend_macosx.cpython-313.pyc
   │     │  │     ├─ test_backend_nbagg.cpython-313.pyc
   │     │  │     ├─ test_backend_pdf.cpython-313.pyc
   │     │  │     ├─ test_backend_pgf.cpython-313.pyc
   │     │  │     ├─ test_backend_ps.cpython-313.pyc
   │     │  │     ├─ test_backend_qt.cpython-313.pyc
   │     │  │     ├─ test_backend_registry.cpython-313.pyc
   │     │  │     ├─ test_backend_svg.cpython-313.pyc
   │     │  │     ├─ test_backend_template.cpython-313.pyc
   │     │  │     ├─ test_backend_tk.cpython-313.pyc
   │     │  │     ├─ test_backend_tools.cpython-313.pyc
   │     │  │     ├─ test_backend_webagg.cpython-313.pyc
   │     │  │     ├─ test_basic.cpython-313.pyc
   │     │  │     ├─ test_bbox_tight.cpython-313.pyc
   │     │  │     ├─ test_bezier.cpython-313.pyc
   │     │  │     ├─ test_category.cpython-313.pyc
   │     │  │     ├─ test_cbook.cpython-313.pyc
   │     │  │     ├─ test_collections.cpython-313.pyc
   │     │  │     ├─ test_colorbar.cpython-313.pyc
   │     │  │     ├─ test_colors.cpython-313.pyc
   │     │  │     ├─ test_compare_images.cpython-313.pyc
   │     │  │     ├─ test_constrainedlayout.cpython-313.pyc
   │     │  │     ├─ test_container.cpython-313.pyc
   │     │  │     ├─ test_contour.cpython-313.pyc
   │     │  │     ├─ test_cycles.cpython-313.pyc
   │     │  │     ├─ test_dates.cpython-313.pyc
   │     │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │     ├─ test_determinism.cpython-313.pyc
   │     │  │     ├─ test_doc.cpython-313.pyc
   │     │  │     ├─ test_dviread.cpython-313.pyc
   │     │  │     ├─ test_figure.cpython-313.pyc
   │     │  │     ├─ test_fontconfig_pattern.cpython-313.pyc
   │     │  │     ├─ test_font_manager.cpython-313.pyc
   │     │  │     ├─ test_ft2font.cpython-313.pyc
   │     │  │     ├─ test_getattr.cpython-313.pyc
   │     │  │     ├─ test_gridspec.cpython-313.pyc
   │     │  │     ├─ test_image.cpython-313.pyc
   │     │  │     ├─ test_legend.cpython-313.pyc
   │     │  │     ├─ test_lines.cpython-313.pyc
   │     │  │     ├─ test_marker.cpython-313.pyc
   │     │  │     ├─ test_mathtext.cpython-313.pyc
   │     │  │     ├─ test_matplotlib.cpython-313.pyc
   │     │  │     ├─ test_mlab.cpython-313.pyc
   │     │  │     ├─ test_multivariate_colormaps.cpython-313.pyc
   │     │  │     ├─ test_offsetbox.cpython-313.pyc
   │     │  │     ├─ test_patches.cpython-313.pyc
   │     │  │     ├─ test_path.cpython-313.pyc
   │     │  │     ├─ test_patheffects.cpython-313.pyc
   │     │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │     ├─ test_png.cpython-313.pyc
   │     │  │     ├─ test_polar.cpython-313.pyc
   │     │  │     ├─ test_preprocess_data.cpython-313.pyc
   │     │  │     ├─ test_pyplot.cpython-313.pyc
   │     │  │     ├─ test_quiver.cpython-313.pyc
   │     │  │     ├─ test_rcparams.cpython-313.pyc
   │     │  │     ├─ test_sankey.cpython-313.pyc
   │     │  │     ├─ test_scale.cpython-313.pyc
   │     │  │     ├─ test_simplification.cpython-313.pyc
   │     │  │     ├─ test_skew.cpython-313.pyc
   │     │  │     ├─ test_sphinxext.cpython-313.pyc
   │     │  │     ├─ test_spines.cpython-313.pyc
   │     │  │     ├─ test_streamplot.cpython-313.pyc
   │     │  │     ├─ test_style.cpython-313.pyc
   │     │  │     ├─ test_subplots.cpython-313.pyc
   │     │  │     ├─ test_table.cpython-313.pyc
   │     │  │     ├─ test_testing.cpython-313.pyc
   │     │  │     ├─ test_texmanager.cpython-313.pyc
   │     │  │     ├─ test_text.cpython-313.pyc
   │     │  │     ├─ test_textpath.cpython-313.pyc
   │     │  │     ├─ test_ticker.cpython-313.pyc
   │     │  │     ├─ test_tightlayout.cpython-313.pyc
   │     │  │     ├─ test_transforms.cpython-313.pyc
   │     │  │     ├─ test_triangulation.cpython-313.pyc
   │     │  │     ├─ test_type1font.cpython-313.pyc
   │     │  │     ├─ test_units.cpython-313.pyc
   │     │  │     ├─ test_usetex.cpython-313.pyc
   │     │  │     ├─ test_widgets.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ texmanager.py
   │     │  ├─ texmanager.pyi
   │     │  ├─ text.py
   │     │  ├─ text.pyi
   │     │  ├─ textpath.py
   │     │  ├─ textpath.pyi
   │     │  ├─ ticker.py
   │     │  ├─ ticker.pyi
   │     │  ├─ transforms.py
   │     │  ├─ transforms.pyi
   │     │  ├─ tri
   │     │  │  ├─ _triangulation.py
   │     │  │  ├─ _triangulation.pyi
   │     │  │  ├─ _tricontour.py
   │     │  │  ├─ _tricontour.pyi
   │     │  │  ├─ _trifinder.py
   │     │  │  ├─ _trifinder.pyi
   │     │  │  ├─ _triinterpolate.py
   │     │  │  ├─ _triinterpolate.pyi
   │     │  │  ├─ _tripcolor.py
   │     │  │  ├─ _tripcolor.pyi
   │     │  │  ├─ _triplot.py
   │     │  │  ├─ _triplot.pyi
   │     │  │  ├─ _trirefine.py
   │     │  │  ├─ _trirefine.pyi
   │     │  │  ├─ _tritools.py
   │     │  │  ├─ _tritools.pyi
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _triangulation.cpython-313.pyc
   │     │  │     ├─ _tricontour.cpython-313.pyc
   │     │  │     ├─ _trifinder.cpython-313.pyc
   │     │  │     ├─ _triinterpolate.cpython-313.pyc
   │     │  │     ├─ _tripcolor.cpython-313.pyc
   │     │  │     ├─ _triplot.cpython-313.pyc
   │     │  │     ├─ _trirefine.cpython-313.pyc
   │     │  │     ├─ _tritools.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ typing.py
   │     │  ├─ units.py
   │     │  ├─ widgets.py
   │     │  ├─ widgets.pyi
   │     │  ├─ _afm.py
   │     │  ├─ _animation_data.py
   │     │  ├─ _api
   │     │  │  ├─ deprecation.py
   │     │  │  ├─ deprecation.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ deprecation.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _blocking_input.py
   │     │  ├─ _cm.py
   │     │  ├─ _cm_bivar.py
   │     │  ├─ _cm_listed.py
   │     │  ├─ _cm_multivar.py
   │     │  ├─ _color_data.py
   │     │  ├─ _color_data.pyi
   │     │  ├─ _constrained_layout.py
   │     │  ├─ _c_internal_utils.cp313-win_amd64.pyd
   │     │  ├─ _c_internal_utils.pyi
   │     │  ├─ _docstring.py
   │     │  ├─ _docstring.pyi
   │     │  ├─ _enums.py
   │     │  ├─ _enums.pyi
   │     │  ├─ _fontconfig_pattern.py
   │     │  ├─ _image.cp313-win_amd64.pyd
   │     │  ├─ _image.pyi
   │     │  ├─ _internal_utils.py
   │     │  ├─ _layoutgrid.py
   │     │  ├─ _mathtext.py
   │     │  ├─ _mathtext_data.py
   │     │  ├─ _path.cp313-win_amd64.pyd
   │     │  ├─ _path.pyi
   │     │  ├─ _pylab_helpers.py
   │     │  ├─ _pylab_helpers.pyi
   │     │  ├─ _qhull.cp313-win_amd64.pyd
   │     │  ├─ _qhull.pyi
   │     │  ├─ _text_helpers.py
   │     │  ├─ _tight_bbox.py
   │     │  ├─ _tight_layout.py
   │     │  ├─ _tri.cp313-win_amd64.pyd
   │     │  ├─ _tri.pyi
   │     │  ├─ _type1font.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  ├─ __init__.pyi
   │     │  └─ __pycache__
   │     │     ├─ animation.cpython-313.pyc
   │     │     ├─ artist.cpython-313.pyc
   │     │     ├─ axis.cpython-313.pyc
   │     │     ├─ backend_bases.cpython-313.pyc
   │     │     ├─ backend_managers.cpython-313.pyc
   │     │     ├─ backend_tools.cpython-313.pyc
   │     │     ├─ bezier.cpython-313.pyc
   │     │     ├─ category.cpython-313.pyc
   │     │     ├─ cbook.cpython-313.pyc
   │     │     ├─ cm.cpython-313.pyc
   │     │     ├─ collections.cpython-313.pyc
   │     │     ├─ colorbar.cpython-313.pyc
   │     │     ├─ colorizer.cpython-313.pyc
   │     │     ├─ colors.cpython-313.pyc
   │     │     ├─ container.cpython-313.pyc
   │     │     ├─ contour.cpython-313.pyc
   │     │     ├─ dates.cpython-313.pyc
   │     │     ├─ dviread.cpython-313.pyc
   │     │     ├─ figure.cpython-313.pyc
   │     │     ├─ font_manager.cpython-313.pyc
   │     │     ├─ gridspec.cpython-313.pyc
   │     │     ├─ hatch.cpython-313.pyc
   │     │     ├─ image.cpython-313.pyc
   │     │     ├─ inset.cpython-313.pyc
   │     │     ├─ layout_engine.cpython-313.pyc
   │     │     ├─ legend.cpython-313.pyc
   │     │     ├─ legend_handler.cpython-313.pyc
   │     │     ├─ lines.cpython-313.pyc
   │     │     ├─ markers.cpython-313.pyc
   │     │     ├─ mathtext.cpython-313.pyc
   │     │     ├─ mlab.cpython-313.pyc
   │     │     ├─ offsetbox.cpython-313.pyc
   │     │     ├─ patches.cpython-313.pyc
   │     │     ├─ path.cpython-313.pyc
   │     │     ├─ patheffects.cpython-313.pyc
   │     │     ├─ pylab.cpython-313.pyc
   │     │     ├─ pyplot.cpython-313.pyc
   │     │     ├─ quiver.cpython-313.pyc
   │     │     ├─ rcsetup.cpython-313.pyc
   │     │     ├─ sankey.cpython-313.pyc
   │     │     ├─ scale.cpython-313.pyc
   │     │     ├─ spines.cpython-313.pyc
   │     │     ├─ stackplot.cpython-313.pyc
   │     │     ├─ streamplot.cpython-313.pyc
   │     │     ├─ table.cpython-313.pyc
   │     │     ├─ texmanager.cpython-313.pyc
   │     │     ├─ text.cpython-313.pyc
   │     │     ├─ textpath.cpython-313.pyc
   │     │     ├─ ticker.cpython-313.pyc
   │     │     ├─ transforms.cpython-313.pyc
   │     │     ├─ typing.cpython-313.pyc
   │     │     ├─ units.cpython-313.pyc
   │     │     ├─ widgets.cpython-313.pyc
   │     │     ├─ _afm.cpython-313.pyc
   │     │     ├─ _animation_data.cpython-313.pyc
   │     │     ├─ _blocking_input.cpython-313.pyc
   │     │     ├─ _cm.cpython-313.pyc
   │     │     ├─ _cm_bivar.cpython-313.pyc
   │     │     ├─ _cm_listed.cpython-313.pyc
   │     │     ├─ _cm_multivar.cpython-313.pyc
   │     │     ├─ _color_data.cpython-313.pyc
   │     │     ├─ _constrained_layout.cpython-313.pyc
   │     │     ├─ _docstring.cpython-313.pyc
   │     │     ├─ _enums.cpython-313.pyc
   │     │     ├─ _fontconfig_pattern.cpython-313.pyc
   │     │     ├─ _internal_utils.cpython-313.pyc
   │     │     ├─ _layoutgrid.cpython-313.pyc
   │     │     ├─ _mathtext.cpython-313.pyc
   │     │     ├─ _mathtext_data.cpython-313.pyc
   │     │     ├─ _pylab_helpers.cpython-313.pyc
   │     │     ├─ _text_helpers.cpython-313.pyc
   │     │     ├─ _tight_bbox.cpython-313.pyc
   │     │     ├─ _tight_layout.cpython-313.pyc
   │     │     ├─ _type1font.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ matplotlib-3.10.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ mpl_toolkits
   │     │  ├─ axes_grid1
   │     │  │  ├─ anchored_artists.py
   │     │  │  ├─ axes_divider.py
   │     │  │  ├─ axes_grid.py
   │     │  │  ├─ axes_rgb.py
   │     │  │  ├─ axes_size.py
   │     │  │  ├─ inset_locator.py
   │     │  │  ├─ mpl_axes.py
   │     │  │  ├─ parasite_axes.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_axes_grid1.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_axes_grid1.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ anchored_artists.cpython-313.pyc
   │     │  │     ├─ axes_divider.cpython-313.pyc
   │     │  │     ├─ axes_grid.cpython-313.pyc
   │     │  │     ├─ axes_rgb.cpython-313.pyc
   │     │  │     ├─ axes_size.cpython-313.pyc
   │     │  │     ├─ inset_locator.cpython-313.pyc
   │     │  │     ├─ mpl_axes.cpython-313.pyc
   │     │  │     ├─ parasite_axes.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ axisartist
   │     │  │  ├─ angle_helper.py
   │     │  │  ├─ axes_divider.py
   │     │  │  ├─ axislines.py
   │     │  │  ├─ axisline_style.py
   │     │  │  ├─ axis_artist.py
   │     │  │  ├─ floating_axes.py
   │     │  │  ├─ grid_finder.py
   │     │  │  ├─ grid_helper_curvelinear.py
   │     │  │  ├─ parasite_axes.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_angle_helper.py
   │     │  │  │  ├─ test_axislines.py
   │     │  │  │  ├─ test_axis_artist.py
   │     │  │  │  ├─ test_floating_axes.py
   │     │  │  │  ├─ test_grid_finder.py
   │     │  │  │  ├─ test_grid_helper_curvelinear.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_angle_helper.cpython-313.pyc
   │     │  │  │     ├─ test_axislines.cpython-313.pyc
   │     │  │  │     ├─ test_axis_artist.cpython-313.pyc
   │     │  │  │     ├─ test_floating_axes.cpython-313.pyc
   │     │  │  │     ├─ test_grid_finder.cpython-313.pyc
   │     │  │  │     ├─ test_grid_helper_curvelinear.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ angle_helper.cpython-313.pyc
   │     │  │     ├─ axes_divider.cpython-313.pyc
   │     │  │     ├─ axislines.cpython-313.pyc
   │     │  │     ├─ axisline_style.cpython-313.pyc
   │     │  │     ├─ axis_artist.cpython-313.pyc
   │     │  │     ├─ floating_axes.cpython-313.pyc
   │     │  │     ├─ grid_finder.cpython-313.pyc
   │     │  │     ├─ grid_helper_curvelinear.cpython-313.pyc
   │     │  │     ├─ parasite_axes.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  └─ mplot3d
   │     │     ├─ art3d.py
   │     │     ├─ axes3d.py
   │     │     ├─ axis3d.py
   │     │     ├─ proj3d.py
   │     │     ├─ tests
   │     │     │  ├─ conftest.py
   │     │     │  ├─ test_art3d.py
   │     │     │  ├─ test_axes3d.py
   │     │     │  ├─ test_legend3d.py
   │     │     │  ├─ __init__.py
   │     │     │  └─ __pycache__
   │     │     │     ├─ conftest.cpython-313.pyc
   │     │     │     ├─ test_art3d.cpython-313.pyc
   │     │     │     ├─ test_axes3d.cpython-313.pyc
   │     │     │     ├─ test_legend3d.cpython-313.pyc
   │     │     │     └─ __init__.cpython-313.pyc
   │     │     ├─ __init__.py
   │     │     └─ __pycache__
   │     │        ├─ art3d.cpython-313.pyc
   │     │        ├─ axes3d.cpython-313.pyc
   │     │        ├─ axis3d.cpython-313.pyc
   │     │        ├─ proj3d.cpython-313.pyc
   │     │        └─ __init__.cpython-313.pyc
   │     ├─ msgpack
   │     │  ├─ exceptions.py
   │     │  ├─ ext.py
   │     │  ├─ fallback.py
   │     │  ├─ _cmsgpack.cp313-win_amd64.pyd
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ ext.cpython-313.pyc
   │     │     ├─ fallback.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ msgpack-1.1.0.dist-info
   │     │  ├─ COPYING
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ numpy
   │     │  ├─ char
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ compat
   │     │  │  ├─ py3k.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ py3k.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ conftest.py
   │     │  ├─ core
   │     │  │  ├─ arrayprint.py
   │     │  │  ├─ defchararray.py
   │     │  │  ├─ einsumfunc.py
   │     │  │  ├─ fromnumeric.py
   │     │  │  ├─ function_base.py
   │     │  │  ├─ getlimits.py
   │     │  │  ├─ multiarray.py
   │     │  │  ├─ numeric.py
   │     │  │  ├─ numerictypes.py
   │     │  │  ├─ overrides.py
   │     │  │  ├─ overrides.pyi
   │     │  │  ├─ records.py
   │     │  │  ├─ shape_base.py
   │     │  │  ├─ umath.py
   │     │  │  ├─ _dtype.py
   │     │  │  ├─ _dtype.pyi
   │     │  │  ├─ _dtype_ctypes.py
   │     │  │  ├─ _dtype_ctypes.pyi
   │     │  │  ├─ _internal.py
   │     │  │  ├─ _multiarray_umath.py
   │     │  │  ├─ _utils.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ arrayprint.cpython-313.pyc
   │     │  │     ├─ defchararray.cpython-313.pyc
   │     │  │     ├─ einsumfunc.cpython-313.pyc
   │     │  │     ├─ fromnumeric.cpython-313.pyc
   │     │  │     ├─ function_base.cpython-313.pyc
   │     │  │     ├─ getlimits.cpython-313.pyc
   │     │  │     ├─ multiarray.cpython-313.pyc
   │     │  │     ├─ numeric.cpython-313.pyc
   │     │  │     ├─ numerictypes.cpython-313.pyc
   │     │  │     ├─ overrides.cpython-313.pyc
   │     │  │     ├─ records.cpython-313.pyc
   │     │  │     ├─ shape_base.cpython-313.pyc
   │     │  │     ├─ umath.cpython-313.pyc
   │     │  │     ├─ _dtype.cpython-313.pyc
   │     │  │     ├─ _dtype_ctypes.cpython-313.pyc
   │     │  │     ├─ _internal.cpython-313.pyc
   │     │  │     ├─ _multiarray_umath.cpython-313.pyc
   │     │  │     ├─ _utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ ctypeslib.py
   │     │  ├─ ctypeslib.pyi
   │     │  ├─ doc
   │     │  │  ├─ ufuncs.py
   │     │  │  └─ __pycache__
   │     │  │     └─ ufuncs.cpython-313.pyc
   │     │  ├─ dtypes.py
   │     │  ├─ dtypes.pyi
   │     │  ├─ exceptions.py
   │     │  ├─ exceptions.pyi
   │     │  ├─ f2py
   │     │  │  ├─ auxfuncs.py
   │     │  │  ├─ capi_maps.py
   │     │  │  ├─ cb_rules.py
   │     │  │  ├─ cfuncs.py
   │     │  │  ├─ common_rules.py
   │     │  │  ├─ crackfortran.py
   │     │  │  ├─ diagnose.py
   │     │  │  ├─ f2py2e.py
   │     │  │  ├─ f90mod_rules.py
   │     │  │  ├─ func2subr.py
   │     │  │  ├─ rules.py
   │     │  │  ├─ setup.cfg
   │     │  │  ├─ src
   │     │  │  │  ├─ fortranobject.c
   │     │  │  │  └─ fortranobject.h
   │     │  │  ├─ symbolic.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ src
   │     │  │  │  │  ├─ abstract_interface
   │     │  │  │  │  │  ├─ foo.f90
   │     │  │  │  │  │  └─ gh18403_mod.f90
   │     │  │  │  │  ├─ array_from_pyobj
   │     │  │  │  │  │  └─ wrapmodule.c
   │     │  │  │  │  ├─ assumed_shape
   │     │  │  │  │  │  ├─ .f2py_f2cmap
   │     │  │  │  │  │  ├─ foo_free.f90
   │     │  │  │  │  │  ├─ foo_mod.f90
   │     │  │  │  │  │  ├─ foo_use.f90
   │     │  │  │  │  │  └─ precision.f90
   │     │  │  │  │  ├─ block_docstring
   │     │  │  │  │  │  └─ foo.f
   │     │  │  │  │  ├─ callback
   │     │  │  │  │  │  ├─ foo.f
   │     │  │  │  │  │  ├─ gh17797.f90
   │     │  │  │  │  │  ├─ gh18335.f90
   │     │  │  │  │  │  ├─ gh25211.f
   │     │  │  │  │  │  ├─ gh25211.pyf
   │     │  │  │  │  │  └─ gh26681.f90
   │     │  │  │  │  ├─ cli
   │     │  │  │  │  │  ├─ gh_22819.pyf
   │     │  │  │  │  │  ├─ hi77.f
   │     │  │  │  │  │  └─ hiworld.f90
   │     │  │  │  │  ├─ common
   │     │  │  │  │  │  ├─ block.f
   │     │  │  │  │  │  └─ gh19161.f90
   │     │  │  │  │  ├─ crackfortran
   │     │  │  │  │  │  ├─ accesstype.f90
   │     │  │  │  │  │  ├─ data_common.f
   │     │  │  │  │  │  ├─ data_multiplier.f
   │     │  │  │  │  │  ├─ data_stmts.f90
   │     │  │  │  │  │  ├─ data_with_comments.f
   │     │  │  │  │  │  ├─ foo_deps.f90
   │     │  │  │  │  │  ├─ gh15035.f
   │     │  │  │  │  │  ├─ gh17859.f
   │     │  │  │  │  │  ├─ gh22648.pyf
   │     │  │  │  │  │  ├─ gh23533.f
   │     │  │  │  │  │  ├─ gh23598.f90
   │     │  │  │  │  │  ├─ gh23598Warn.f90
   │     │  │  │  │  │  ├─ gh23879.f90
   │     │  │  │  │  │  ├─ gh27697.f90
   │     │  │  │  │  │  ├─ gh2848.f90
   │     │  │  │  │  │  ├─ operators.f90
   │     │  │  │  │  │  ├─ privatemod.f90
   │     │  │  │  │  │  ├─ publicmod.f90
   │     │  │  │  │  │  ├─ pubprivmod.f90
   │     │  │  │  │  │  └─ unicode_comment.f90
   │     │  │  │  │  ├─ f2cmap
   │     │  │  │  │  │  ├─ .f2py_f2cmap
   │     │  │  │  │  │  └─ isoFortranEnvMap.f90
   │     │  │  │  │  ├─ isocintrin
   │     │  │  │  │  │  └─ isoCtests.f90
   │     │  │  │  │  ├─ kind
   │     │  │  │  │  │  └─ foo.f90
   │     │  │  │  │  ├─ mixed
   │     │  │  │  │  │  ├─ foo.f
   │     │  │  │  │  │  ├─ foo_fixed.f90
   │     │  │  │  │  │  └─ foo_free.f90
   │     │  │  │  │  ├─ modules
   │     │  │  │  │  │  ├─ gh25337
   │     │  │  │  │  │  │  ├─ data.f90
   │     │  │  │  │  │  │  └─ use_data.f90
   │     │  │  │  │  │  ├─ gh26920
   │     │  │  │  │  │  │  ├─ two_mods_with_no_public_entities.f90
   │     │  │  │  │  │  │  └─ two_mods_with_one_public_routine.f90
   │     │  │  │  │  │  ├─ module_data_docstring.f90
   │     │  │  │  │  │  └─ use_modules.f90
   │     │  │  │  │  ├─ negative_bounds
   │     │  │  │  │  │  └─ issue_20853.f90
   │     │  │  │  │  ├─ parameter
   │     │  │  │  │  │  ├─ constant_array.f90
   │     │  │  │  │  │  ├─ constant_both.f90
   │     │  │  │  │  │  ├─ constant_compound.f90
   │     │  │  │  │  │  ├─ constant_integer.f90
   │     │  │  │  │  │  ├─ constant_non_compound.f90
   │     │  │  │  │  │  └─ constant_real.f90
   │     │  │  │  │  ├─ quoted_character
   │     │  │  │  │  │  └─ foo.f
   │     │  │  │  │  ├─ regression
   │     │  │  │  │  │  ├─ AB.inc
   │     │  │  │  │  │  ├─ assignOnlyModule.f90
   │     │  │  │  │  │  ├─ datonly.f90
   │     │  │  │  │  │  ├─ f77comments.f
   │     │  │  │  │  │  ├─ f77fixedform.f95
   │     │  │  │  │  │  ├─ f90continuation.f90
   │     │  │  │  │  │  ├─ incfile.f90
   │     │  │  │  │  │  ├─ inout.f90
   │     │  │  │  │  │  └─ lower_f2py_fortran.f90
   │     │  │  │  │  ├─ return_character
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ return_complex
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ return_integer
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ return_logical
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ return_real
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ routines
   │     │  │  │  │  │  ├─ funcfortranname.f
   │     │  │  │  │  │  ├─ funcfortranname.pyf
   │     │  │  │  │  │  ├─ subrout.f
   │     │  │  │  │  │  └─ subrout.pyf
   │     │  │  │  │  ├─ size
   │     │  │  │  │  │  └─ foo.f90
   │     │  │  │  │  ├─ string
   │     │  │  │  │  │  ├─ char.f90
   │     │  │  │  │  │  ├─ fixed_string.f90
   │     │  │  │  │  │  ├─ gh24008.f
   │     │  │  │  │  │  ├─ gh24662.f90
   │     │  │  │  │  │  ├─ gh25286.f90
   │     │  │  │  │  │  ├─ gh25286.pyf
   │     │  │  │  │  │  ├─ gh25286_bc.pyf
   │     │  │  │  │  │  ├─ scalar_string.f90
   │     │  │  │  │  │  └─ string.f
   │     │  │  │  │  └─ value_attrspec
   │     │  │  │  │     └─ gh21665.f90
   │     │  │  │  ├─ test_abstract_interface.py
   │     │  │  │  ├─ test_array_from_pyobj.py
   │     │  │  │  ├─ test_assumed_shape.py
   │     │  │  │  ├─ test_block_docstring.py
   │     │  │  │  ├─ test_callback.py
   │     │  │  │  ├─ test_character.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_crackfortran.py
   │     │  │  │  ├─ test_data.py
   │     │  │  │  ├─ test_docs.py
   │     │  │  │  ├─ test_f2cmap.py
   │     │  │  │  ├─ test_f2py2e.py
   │     │  │  │  ├─ test_isoc.py
   │     │  │  │  ├─ test_kind.py
   │     │  │  │  ├─ test_mixed.py
   │     │  │  │  ├─ test_modules.py
   │     │  │  │  ├─ test_parameter.py
   │     │  │  │  ├─ test_pyf_src.py
   │     │  │  │  ├─ test_quoted_character.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_return_character.py
   │     │  │  │  ├─ test_return_complex.py
   │     │  │  │  ├─ test_return_integer.py
   │     │  │  │  ├─ test_return_logical.py
   │     │  │  │  ├─ test_return_real.py
   │     │  │  │  ├─ test_routines.py
   │     │  │  │  ├─ test_semicolon_split.py
   │     │  │  │  ├─ test_size.py
   │     │  │  │  ├─ test_string.py
   │     │  │  │  ├─ test_symbolic.py
   │     │  │  │  ├─ test_value_attrspec.py
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_abstract_interface.cpython-313.pyc
   │     │  │  │     ├─ test_array_from_pyobj.cpython-313.pyc
   │     │  │  │     ├─ test_assumed_shape.cpython-313.pyc
   │     │  │  │     ├─ test_block_docstring.cpython-313.pyc
   │     │  │  │     ├─ test_callback.cpython-313.pyc
   │     │  │  │     ├─ test_character.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_crackfortran.cpython-313.pyc
   │     │  │  │     ├─ test_data.cpython-313.pyc
   │     │  │  │     ├─ test_docs.cpython-313.pyc
   │     │  │  │     ├─ test_f2cmap.cpython-313.pyc
   │     │  │  │     ├─ test_f2py2e.cpython-313.pyc
   │     │  │  │     ├─ test_isoc.cpython-313.pyc
   │     │  │  │     ├─ test_kind.cpython-313.pyc
   │     │  │  │     ├─ test_mixed.cpython-313.pyc
   │     │  │  │     ├─ test_modules.cpython-313.pyc
   │     │  │  │     ├─ test_parameter.cpython-313.pyc
   │     │  │  │     ├─ test_pyf_src.cpython-313.pyc
   │     │  │  │     ├─ test_quoted_character.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_return_character.cpython-313.pyc
   │     │  │  │     ├─ test_return_complex.cpython-313.pyc
   │     │  │  │     ├─ test_return_integer.cpython-313.pyc
   │     │  │  │     ├─ test_return_logical.cpython-313.pyc
   │     │  │  │     ├─ test_return_real.cpython-313.pyc
   │     │  │  │     ├─ test_routines.cpython-313.pyc
   │     │  │  │     ├─ test_semicolon_split.cpython-313.pyc
   │     │  │  │     ├─ test_size.cpython-313.pyc
   │     │  │  │     ├─ test_string.cpython-313.pyc
   │     │  │  │     ├─ test_symbolic.cpython-313.pyc
   │     │  │  │     ├─ test_value_attrspec.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ use_rules.py
   │     │  │  ├─ _backends
   │     │  │  │  ├─ meson.build.template
   │     │  │  │  ├─ _backend.py
   │     │  │  │  ├─ _distutils.py
   │     │  │  │  ├─ _meson.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _backend.cpython-313.pyc
   │     │  │  │     ├─ _distutils.cpython-313.pyc
   │     │  │  │     ├─ _meson.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _isocbind.py
   │     │  │  ├─ _src_pyf.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  ├─ __main__.py
   │     │  │  ├─ __pycache__
   │     │  │  │  ├─ auxfuncs.cpython-313.pyc
   │     │  │  │  ├─ capi_maps.cpython-313.pyc
   │     │  │  │  ├─ cb_rules.cpython-313.pyc
   │     │  │  │  ├─ cfuncs.cpython-313.pyc
   │     │  │  │  ├─ common_rules.cpython-313.pyc
   │     │  │  │  ├─ crackfortran.cpython-313.pyc
   │     │  │  │  ├─ diagnose.cpython-313.pyc
   │     │  │  │  ├─ f2py2e.cpython-313.pyc
   │     │  │  │  ├─ f90mod_rules.cpython-313.pyc
   │     │  │  │  ├─ func2subr.cpython-313.pyc
   │     │  │  │  ├─ rules.cpython-313.pyc
   │     │  │  │  ├─ symbolic.cpython-313.pyc
   │     │  │  │  ├─ use_rules.cpython-313.pyc
   │     │  │  │  ├─ _isocbind.cpython-313.pyc
   │     │  │  │  ├─ _src_pyf.cpython-313.pyc
   │     │  │  │  ├─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __main__.cpython-313.pyc
   │     │  │  │  └─ __version__.cpython-313.pyc
   │     │  │  └─ __version__.py
   │     │  ├─ fft
   │     │  │  ├─ helper.py
   │     │  │  ├─ helper.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_helper.py
   │     │  │  │  ├─ test_pocketfft.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_helper.cpython-313.pyc
   │     │  │  │     ├─ test_pocketfft.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _helper.py
   │     │  │  ├─ _helper.pyi
   │     │  │  ├─ _pocketfft.py
   │     │  │  ├─ _pocketfft.pyi
   │     │  │  ├─ _pocketfft_umath.cp313-win_amd64.lib
   │     │  │  ├─ _pocketfft_umath.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ helper.cpython-313.pyc
   │     │  │     ├─ _helper.cpython-313.pyc
   │     │  │     ├─ _pocketfft.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ lib
   │     │  │  ├─ array_utils.py
   │     │  │  ├─ array_utils.pyi
   │     │  │  ├─ format.py
   │     │  │  ├─ format.pyi
   │     │  │  ├─ introspect.py
   │     │  │  ├─ introspect.pyi
   │     │  │  ├─ mixins.py
   │     │  │  ├─ mixins.pyi
   │     │  │  ├─ npyio.py
   │     │  │  ├─ npyio.pyi
   │     │  │  ├─ recfunctions.py
   │     │  │  ├─ recfunctions.pyi
   │     │  │  ├─ scimath.py
   │     │  │  ├─ scimath.pyi
   │     │  │  ├─ stride_tricks.py
   │     │  │  ├─ stride_tricks.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ py2-np0-objarr.npy
   │     │  │  │  │  ├─ py2-objarr.npy
   │     │  │  │  │  ├─ py2-objarr.npz
   │     │  │  │  │  ├─ py3-objarr.npy
   │     │  │  │  │  ├─ py3-objarr.npz
   │     │  │  │  │  ├─ python3.npy
   │     │  │  │  │  └─ win64python2.npy
   │     │  │  │  ├─ test_arraypad.py
   │     │  │  │  ├─ test_arraysetops.py
   │     │  │  │  ├─ test_arrayterator.py
   │     │  │  │  ├─ test_array_utils.py
   │     │  │  │  ├─ test_format.py
   │     │  │  │  ├─ test_function_base.py
   │     │  │  │  ├─ test_histograms.py
   │     │  │  │  ├─ test_index_tricks.py
   │     │  │  │  ├─ test_io.py
   │     │  │  │  ├─ test_loadtxt.py
   │     │  │  │  ├─ test_mixins.py
   │     │  │  │  ├─ test_nanfunctions.py
   │     │  │  │  ├─ test_packbits.py
   │     │  │  │  ├─ test_polynomial.py
   │     │  │  │  ├─ test_recfunctions.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_shape_base.py
   │     │  │  │  ├─ test_stride_tricks.py
   │     │  │  │  ├─ test_twodim_base.py
   │     │  │  │  ├─ test_type_check.py
   │     │  │  │  ├─ test_ufunclike.py
   │     │  │  │  ├─ test_utils.py
   │     │  │  │  ├─ test__datasource.py
   │     │  │  │  ├─ test__iotools.py
   │     │  │  │  ├─ test__version.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_arraypad.cpython-313.pyc
   │     │  │  │     ├─ test_arraysetops.cpython-313.pyc
   │     │  │  │     ├─ test_arrayterator.cpython-313.pyc
   │     │  │  │     ├─ test_array_utils.cpython-313.pyc
   │     │  │  │     ├─ test_format.cpython-313.pyc
   │     │  │  │     ├─ test_function_base.cpython-313.pyc
   │     │  │  │     ├─ test_histograms.cpython-313.pyc
   │     │  │  │     ├─ test_index_tricks.cpython-313.pyc
   │     │  │  │     ├─ test_io.cpython-313.pyc
   │     │  │  │     ├─ test_loadtxt.cpython-313.pyc
   │     │  │  │     ├─ test_mixins.cpython-313.pyc
   │     │  │  │     ├─ test_nanfunctions.cpython-313.pyc
   │     │  │  │     ├─ test_packbits.cpython-313.pyc
   │     │  │  │     ├─ test_polynomial.cpython-313.pyc
   │     │  │  │     ├─ test_recfunctions.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_shape_base.cpython-313.pyc
   │     │  │  │     ├─ test_stride_tricks.cpython-313.pyc
   │     │  │  │     ├─ test_twodim_base.cpython-313.pyc
   │     │  │  │     ├─ test_type_check.cpython-313.pyc
   │     │  │  │     ├─ test_ufunclike.cpython-313.pyc
   │     │  │  │     ├─ test_utils.cpython-313.pyc
   │     │  │  │     ├─ test__datasource.cpython-313.pyc
   │     │  │  │     ├─ test__iotools.cpython-313.pyc
   │     │  │  │     ├─ test__version.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ user_array.py
   │     │  │  ├─ user_array.pyi
   │     │  │  ├─ _arraypad_impl.py
   │     │  │  ├─ _arraypad_impl.pyi
   │     │  │  ├─ _arraysetops_impl.py
   │     │  │  ├─ _arraysetops_impl.pyi
   │     │  │  ├─ _arrayterator_impl.py
   │     │  │  ├─ _arrayterator_impl.pyi
   │     │  │  ├─ _array_utils_impl.py
   │     │  │  ├─ _array_utils_impl.pyi
   │     │  │  ├─ _datasource.py
   │     │  │  ├─ _datasource.pyi
   │     │  │  ├─ _function_base_impl.py
   │     │  │  ├─ _function_base_impl.pyi
   │     │  │  ├─ _histograms_impl.py
   │     │  │  ├─ _histograms_impl.pyi
   │     │  │  ├─ _index_tricks_impl.py
   │     │  │  ├─ _index_tricks_impl.pyi
   │     │  │  ├─ _iotools.py
   │     │  │  ├─ _iotools.pyi
   │     │  │  ├─ _nanfunctions_impl.py
   │     │  │  ├─ _nanfunctions_impl.pyi
   │     │  │  ├─ _npyio_impl.py
   │     │  │  ├─ _npyio_impl.pyi
   │     │  │  ├─ _polynomial_impl.py
   │     │  │  ├─ _polynomial_impl.pyi
   │     │  │  ├─ _scimath_impl.py
   │     │  │  ├─ _scimath_impl.pyi
   │     │  │  ├─ _shape_base_impl.py
   │     │  │  ├─ _shape_base_impl.pyi
   │     │  │  ├─ _stride_tricks_impl.py
   │     │  │  ├─ _stride_tricks_impl.pyi
   │     │  │  ├─ _twodim_base_impl.py
   │     │  │  ├─ _twodim_base_impl.pyi
   │     │  │  ├─ _type_check_impl.py
   │     │  │  ├─ _type_check_impl.pyi
   │     │  │  ├─ _ufunclike_impl.py
   │     │  │  ├─ _ufunclike_impl.pyi
   │     │  │  ├─ _user_array_impl.py
   │     │  │  ├─ _user_array_impl.pyi
   │     │  │  ├─ _utils_impl.py
   │     │  │  ├─ _utils_impl.pyi
   │     │  │  ├─ _version.py
   │     │  │  ├─ _version.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ array_utils.cpython-313.pyc
   │     │  │     ├─ format.cpython-313.pyc
   │     │  │     ├─ introspect.cpython-313.pyc
   │     │  │     ├─ mixins.cpython-313.pyc
   │     │  │     ├─ npyio.cpython-313.pyc
   │     │  │     ├─ recfunctions.cpython-313.pyc
   │     │  │     ├─ scimath.cpython-313.pyc
   │     │  │     ├─ stride_tricks.cpython-313.pyc
   │     │  │     ├─ user_array.cpython-313.pyc
   │     │  │     ├─ _arraypad_impl.cpython-313.pyc
   │     │  │     ├─ _arraysetops_impl.cpython-313.pyc
   │     │  │     ├─ _arrayterator_impl.cpython-313.pyc
   │     │  │     ├─ _array_utils_impl.cpython-313.pyc
   │     │  │     ├─ _datasource.cpython-313.pyc
   │     │  │     ├─ _function_base_impl.cpython-313.pyc
   │     │  │     ├─ _histograms_impl.cpython-313.pyc
   │     │  │     ├─ _index_tricks_impl.cpython-313.pyc
   │     │  │     ├─ _iotools.cpython-313.pyc
   │     │  │     ├─ _nanfunctions_impl.cpython-313.pyc
   │     │  │     ├─ _npyio_impl.cpython-313.pyc
   │     │  │     ├─ _polynomial_impl.cpython-313.pyc
   │     │  │     ├─ _scimath_impl.cpython-313.pyc
   │     │  │     ├─ _shape_base_impl.cpython-313.pyc
   │     │  │     ├─ _stride_tricks_impl.cpython-313.pyc
   │     │  │     ├─ _twodim_base_impl.cpython-313.pyc
   │     │  │     ├─ _type_check_impl.cpython-313.pyc
   │     │  │     ├─ _ufunclike_impl.cpython-313.pyc
   │     │  │     ├─ _user_array_impl.cpython-313.pyc
   │     │  │     ├─ _utils_impl.cpython-313.pyc
   │     │  │     ├─ _version.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ linalg
   │     │  │  ├─ lapack_lite.cp313-win_amd64.lib
   │     │  │  ├─ lapack_lite.cp313-win_amd64.pyd
   │     │  │  ├─ lapack_lite.pyi
   │     │  │  ├─ linalg.py
   │     │  │  ├─ linalg.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_deprecations.py
   │     │  │  │  ├─ test_linalg.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_deprecations.cpython-313.pyc
   │     │  │  │     ├─ test_linalg.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _linalg.py
   │     │  │  ├─ _linalg.pyi
   │     │  │  ├─ _umath_linalg.cp313-win_amd64.lib
   │     │  │  ├─ _umath_linalg.cp313-win_amd64.pyd
   │     │  │  ├─ _umath_linalg.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ linalg.cpython-313.pyc
   │     │  │     ├─ _linalg.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ ma
   │     │  │  ├─ API_CHANGES.txt
   │     │  │  ├─ core.py
   │     │  │  ├─ core.pyi
   │     │  │  ├─ extras.py
   │     │  │  ├─ extras.pyi
   │     │  │  ├─ LICENSE
   │     │  │  ├─ mrecords.py
   │     │  │  ├─ mrecords.pyi
   │     │  │  ├─ README.rst
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_arrayobject.py
   │     │  │  │  ├─ test_core.py
   │     │  │  │  ├─ test_deprecations.py
   │     │  │  │  ├─ test_extras.py
   │     │  │  │  ├─ test_mrecords.py
   │     │  │  │  ├─ test_old_ma.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_subclassing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_arrayobject.cpython-313.pyc
   │     │  │  │     ├─ test_core.cpython-313.pyc
   │     │  │  │     ├─ test_deprecations.cpython-313.pyc
   │     │  │  │     ├─ test_extras.cpython-313.pyc
   │     │  │  │     ├─ test_mrecords.cpython-313.pyc
   │     │  │  │     ├─ test_old_ma.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_subclassing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ testutils.py
   │     │  │  ├─ timer_comparison.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ extras.cpython-313.pyc
   │     │  │     ├─ mrecords.cpython-313.pyc
   │     │  │     ├─ testutils.cpython-313.pyc
   │     │  │     ├─ timer_comparison.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ matlib.py
   │     │  ├─ matlib.pyi
   │     │  ├─ matrixlib
   │     │  │  ├─ defmatrix.py
   │     │  │  ├─ defmatrix.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_defmatrix.py
   │     │  │  │  ├─ test_interaction.py
   │     │  │  │  ├─ test_masked_matrix.py
   │     │  │  │  ├─ test_matrix_linalg.py
   │     │  │  │  ├─ test_multiarray.py
   │     │  │  │  ├─ test_numeric.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_defmatrix.cpython-313.pyc
   │     │  │  │     ├─ test_interaction.cpython-313.pyc
   │     │  │  │     ├─ test_masked_matrix.cpython-313.pyc
   │     │  │  │     ├─ test_matrix_linalg.cpython-313.pyc
   │     │  │  │     ├─ test_multiarray.cpython-313.pyc
   │     │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ defmatrix.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ polynomial
   │     │  │  ├─ chebyshev.py
   │     │  │  ├─ chebyshev.pyi
   │     │  │  ├─ hermite.py
   │     │  │  ├─ hermite.pyi
   │     │  │  ├─ hermite_e.py
   │     │  │  ├─ hermite_e.pyi
   │     │  │  ├─ laguerre.py
   │     │  │  ├─ laguerre.pyi
   │     │  │  ├─ legendre.py
   │     │  │  ├─ legendre.pyi
   │     │  │  ├─ polynomial.py
   │     │  │  ├─ polynomial.pyi
   │     │  │  ├─ polyutils.py
   │     │  │  ├─ polyutils.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_chebyshev.py
   │     │  │  │  ├─ test_classes.py
   │     │  │  │  ├─ test_hermite.py
   │     │  │  │  ├─ test_hermite_e.py
   │     │  │  │  ├─ test_laguerre.py
   │     │  │  │  ├─ test_legendre.py
   │     │  │  │  ├─ test_polynomial.py
   │     │  │  │  ├─ test_polyutils.py
   │     │  │  │  ├─ test_printing.py
   │     │  │  │  ├─ test_symbol.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_chebyshev.cpython-313.pyc
   │     │  │  │     ├─ test_classes.cpython-313.pyc
   │     │  │  │     ├─ test_hermite.cpython-313.pyc
   │     │  │  │     ├─ test_hermite_e.cpython-313.pyc
   │     │  │  │     ├─ test_laguerre.cpython-313.pyc
   │     │  │  │     ├─ test_legendre.cpython-313.pyc
   │     │  │  │     ├─ test_polynomial.cpython-313.pyc
   │     │  │  │     ├─ test_polyutils.cpython-313.pyc
   │     │  │  │     ├─ test_printing.cpython-313.pyc
   │     │  │  │     ├─ test_symbol.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _polybase.py
   │     │  │  ├─ _polybase.pyi
   │     │  │  ├─ _polytypes.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ chebyshev.cpython-313.pyc
   │     │  │     ├─ hermite.cpython-313.pyc
   │     │  │     ├─ hermite_e.cpython-313.pyc
   │     │  │     ├─ laguerre.cpython-313.pyc
   │     │  │     ├─ legendre.cpython-313.pyc
   │     │  │     ├─ polynomial.cpython-313.pyc
   │     │  │     ├─ polyutils.cpython-313.pyc
   │     │  │     ├─ _polybase.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ random
   │     │  │  ├─ bit_generator.cp313-win_amd64.lib
   │     │  │  ├─ bit_generator.cp313-win_amd64.pyd
   │     │  │  ├─ bit_generator.pxd
   │     │  │  ├─ bit_generator.pyi
   │     │  │  ├─ c_distributions.pxd
   │     │  │  ├─ lib
   │     │  │  │  └─ npyrandom.lib
   │     │  │  ├─ LICENSE.md
   │     │  │  ├─ mtrand.cp313-win_amd64.lib
   │     │  │  ├─ mtrand.cp313-win_amd64.pyd
   │     │  │  ├─ mtrand.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ generator_pcg64_np121.pkl.gz
   │     │  │  │  │  ├─ generator_pcg64_np126.pkl.gz
   │     │  │  │  │  ├─ mt19937-testset-1.csv
   │     │  │  │  │  ├─ mt19937-testset-2.csv
   │     │  │  │  │  ├─ pcg64-testset-1.csv
   │     │  │  │  │  ├─ pcg64-testset-2.csv
   │     │  │  │  │  ├─ pcg64dxsm-testset-1.csv
   │     │  │  │  │  ├─ pcg64dxsm-testset-2.csv
   │     │  │  │  │  ├─ philox-testset-1.csv
   │     │  │  │  │  ├─ philox-testset-2.csv
   │     │  │  │  │  ├─ sfc64-testset-1.csv
   │     │  │  │  │  ├─ sfc64-testset-2.csv
   │     │  │  │  │  ├─ sfc64_np126.pkl.gz
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_direct.py
   │     │  │  │  ├─ test_extending.py
   │     │  │  │  ├─ test_generator_mt19937.py
   │     │  │  │  ├─ test_generator_mt19937_regressions.py
   │     │  │  │  ├─ test_random.py
   │     │  │  │  ├─ test_randomstate.py
   │     │  │  │  ├─ test_randomstate_regression.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_seed_sequence.py
   │     │  │  │  ├─ test_smoke.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_direct.cpython-313.pyc
   │     │  │  │     ├─ test_extending.cpython-313.pyc
   │     │  │  │     ├─ test_generator_mt19937.cpython-313.pyc
   │     │  │  │     ├─ test_generator_mt19937_regressions.cpython-313.pyc
   │     │  │  │     ├─ test_random.cpython-313.pyc
   │     │  │  │     ├─ test_randomstate.cpython-313.pyc
   │     │  │  │     ├─ test_randomstate_regression.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_seed_sequence.cpython-313.pyc
   │     │  │  │     ├─ test_smoke.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _bounded_integers.cp313-win_amd64.lib
   │     │  │  ├─ _bounded_integers.cp313-win_amd64.pyd
   │     │  │  ├─ _bounded_integers.pxd
   │     │  │  ├─ _common.cp313-win_amd64.lib
   │     │  │  ├─ _common.cp313-win_amd64.pyd
   │     │  │  ├─ _common.pxd
   │     │  │  ├─ _examples
   │     │  │  │  ├─ cffi
   │     │  │  │  │  ├─ extending.py
   │     │  │  │  │  ├─ parse.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ extending.cpython-313.pyc
   │     │  │  │  │     └─ parse.cpython-313.pyc
   │     │  │  │  ├─ cython
   │     │  │  │  │  ├─ extending.pyx
   │     │  │  │  │  ├─ extending_distributions.pyx
   │     │  │  │  │  └─ meson.build
   │     │  │  │  └─ numba
   │     │  │  │     ├─ extending.py
   │     │  │  │     ├─ extending_distributions.py
   │     │  │  │     └─ __pycache__
   │     │  │  │        ├─ extending.cpython-313.pyc
   │     │  │  │        └─ extending_distributions.cpython-313.pyc
   │     │  │  ├─ _generator.cp313-win_amd64.lib
   │     │  │  ├─ _generator.cp313-win_amd64.pyd
   │     │  │  ├─ _generator.pyi
   │     │  │  ├─ _mt19937.cp313-win_amd64.lib
   │     │  │  ├─ _mt19937.cp313-win_amd64.pyd
   │     │  │  ├─ _mt19937.pyi
   │     │  │  ├─ _pcg64.cp313-win_amd64.lib
   │     │  │  ├─ _pcg64.cp313-win_amd64.pyd
   │     │  │  ├─ _pcg64.pyi
   │     │  │  ├─ _philox.cp313-win_amd64.lib
   │     │  │  ├─ _philox.cp313-win_amd64.pyd
   │     │  │  ├─ _philox.pyi
   │     │  │  ├─ _pickle.py
   │     │  │  ├─ _pickle.pyi
   │     │  │  ├─ _sfc64.cp313-win_amd64.lib
   │     │  │  ├─ _sfc64.cp313-win_amd64.pyd
   │     │  │  ├─ _sfc64.pyi
   │     │  │  ├─ __init__.pxd
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _pickle.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ rec
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ strings
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ testing
   │     │  │  ├─ overrides.py
   │     │  │  ├─ overrides.pyi
   │     │  │  ├─ print_coercion_tables.py
   │     │  │  ├─ print_coercion_tables.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _private
   │     │  │  │  ├─ extbuild.py
   │     │  │  │  ├─ extbuild.pyi
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ utils.pyi
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __init__.pyi
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ extbuild.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ overrides.cpython-313.pyc
   │     │  │     ├─ print_coercion_tables.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tests
   │     │  │  ├─ test_configtool.py
   │     │  │  ├─ test_ctypeslib.py
   │     │  │  ├─ test_lazyloading.py
   │     │  │  ├─ test_matlib.py
   │     │  │  ├─ test_numpy_config.py
   │     │  │  ├─ test_numpy_version.py
   │     │  │  ├─ test_public_api.py
   │     │  │  ├─ test_reloading.py
   │     │  │  ├─ test_scripts.py
   │     │  │  ├─ test_warnings.py
   │     │  │  ├─ test__all__.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ test_configtool.cpython-313.pyc
   │     │  │     ├─ test_ctypeslib.cpython-313.pyc
   │     │  │     ├─ test_lazyloading.cpython-313.pyc
   │     │  │     ├─ test_matlib.cpython-313.pyc
   │     │  │     ├─ test_numpy_config.cpython-313.pyc
   │     │  │     ├─ test_numpy_version.cpython-313.pyc
   │     │  │     ├─ test_public_api.cpython-313.pyc
   │     │  │     ├─ test_reloading.cpython-313.pyc
   │     │  │     ├─ test_scripts.cpython-313.pyc
   │     │  │     ├─ test_warnings.cpython-313.pyc
   │     │  │     ├─ test__all__.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ typing
   │     │  │  ├─ mypy_plugin.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ fail
   │     │  │  │  │  │  ├─ arithmetic.pyi
   │     │  │  │  │  │  ├─ arrayprint.pyi
   │     │  │  │  │  │  ├─ arrayterator.pyi
   │     │  │  │  │  │  ├─ array_constructors.pyi
   │     │  │  │  │  │  ├─ array_like.pyi
   │     │  │  │  │  │  ├─ array_pad.pyi
   │     │  │  │  │  │  ├─ bitwise_ops.pyi
   │     │  │  │  │  │  ├─ char.pyi
   │     │  │  │  │  │  ├─ chararray.pyi
   │     │  │  │  │  │  ├─ comparisons.pyi
   │     │  │  │  │  │  ├─ constants.pyi
   │     │  │  │  │  │  ├─ datasource.pyi
   │     │  │  │  │  │  ├─ dtype.pyi
   │     │  │  │  │  │  ├─ einsumfunc.pyi
   │     │  │  │  │  │  ├─ flatiter.pyi
   │     │  │  │  │  │  ├─ fromnumeric.pyi
   │     │  │  │  │  │  ├─ histograms.pyi
   │     │  │  │  │  │  ├─ index_tricks.pyi
   │     │  │  │  │  │  ├─ lib_function_base.pyi
   │     │  │  │  │  │  ├─ lib_polynomial.pyi
   │     │  │  │  │  │  ├─ lib_utils.pyi
   │     │  │  │  │  │  ├─ lib_version.pyi
   │     │  │  │  │  │  ├─ linalg.pyi
   │     │  │  │  │  │  ├─ memmap.pyi
   │     │  │  │  │  │  ├─ modules.pyi
   │     │  │  │  │  │  ├─ multiarray.pyi
   │     │  │  │  │  │  ├─ ndarray.pyi
   │     │  │  │  │  │  ├─ ndarray_misc.pyi
   │     │  │  │  │  │  ├─ nditer.pyi
   │     │  │  │  │  │  ├─ nested_sequence.pyi
   │     │  │  │  │  │  ├─ npyio.pyi
   │     │  │  │  │  │  ├─ numerictypes.pyi
   │     │  │  │  │  │  ├─ random.pyi
   │     │  │  │  │  │  ├─ rec.pyi
   │     │  │  │  │  │  ├─ scalars.pyi
   │     │  │  │  │  │  ├─ shape.pyi
   │     │  │  │  │  │  ├─ shape_base.pyi
   │     │  │  │  │  │  ├─ stride_tricks.pyi
   │     │  │  │  │  │  ├─ strings.pyi
   │     │  │  │  │  │  ├─ testing.pyi
   │     │  │  │  │  │  ├─ twodim_base.pyi
   │     │  │  │  │  │  ├─ type_check.pyi
   │     │  │  │  │  │  ├─ ufunclike.pyi
   │     │  │  │  │  │  ├─ ufuncs.pyi
   │     │  │  │  │  │  ├─ ufunc_config.pyi
   │     │  │  │  │  │  └─ warnings_and_errors.pyi
   │     │  │  │  │  ├─ misc
   │     │  │  │  │  │  └─ extended_precision.pyi
   │     │  │  │  │  ├─ mypy.ini
   │     │  │  │  │  ├─ pass
   │     │  │  │  │  │  ├─ arithmetic.py
   │     │  │  │  │  │  ├─ arrayprint.py
   │     │  │  │  │  │  ├─ arrayterator.py
   │     │  │  │  │  │  ├─ array_constructors.py
   │     │  │  │  │  │  ├─ array_like.py
   │     │  │  │  │  │  ├─ bitwise_ops.py
   │     │  │  │  │  │  ├─ comparisons.py
   │     │  │  │  │  │  ├─ dtype.py
   │     │  │  │  │  │  ├─ einsumfunc.py
   │     │  │  │  │  │  ├─ flatiter.py
   │     │  │  │  │  │  ├─ fromnumeric.py
   │     │  │  │  │  │  ├─ index_tricks.py
   │     │  │  │  │  │  ├─ lib_user_array.py
   │     │  │  │  │  │  ├─ lib_utils.py
   │     │  │  │  │  │  ├─ lib_version.py
   │     │  │  │  │  │  ├─ literal.py
   │     │  │  │  │  │  ├─ ma.py
   │     │  │  │  │  │  ├─ mod.py
   │     │  │  │  │  │  ├─ modules.py
   │     │  │  │  │  │  ├─ multiarray.py
   │     │  │  │  │  │  ├─ ndarray_conversion.py
   │     │  │  │  │  │  ├─ ndarray_misc.py
   │     │  │  │  │  │  ├─ ndarray_shape_manipulation.py
   │     │  │  │  │  │  ├─ nditer.py
   │     │  │  │  │  │  ├─ numeric.py
   │     │  │  │  │  │  ├─ numerictypes.py
   │     │  │  │  │  │  ├─ random.py
   │     │  │  │  │  │  ├─ recfunctions.py
   │     │  │  │  │  │  ├─ scalars.py
   │     │  │  │  │  │  ├─ shape.py
   │     │  │  │  │  │  ├─ simple.py
   │     │  │  │  │  │  ├─ simple_py3.py
   │     │  │  │  │  │  ├─ ufunclike.py
   │     │  │  │  │  │  ├─ ufuncs.py
   │     │  │  │  │  │  ├─ ufunc_config.py
   │     │  │  │  │  │  ├─ warnings_and_errors.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ arithmetic.cpython-313.pyc
   │     │  │  │  │  │     ├─ arrayprint.cpython-313.pyc
   │     │  │  │  │  │     ├─ arrayterator.cpython-313.pyc
   │     │  │  │  │  │     ├─ array_constructors.cpython-313.pyc
   │     │  │  │  │  │     ├─ array_like.cpython-313.pyc
   │     │  │  │  │  │     ├─ bitwise_ops.cpython-313.pyc
   │     │  │  │  │  │     ├─ comparisons.cpython-313.pyc
   │     │  │  │  │  │     ├─ dtype.cpython-313.pyc
   │     │  │  │  │  │     ├─ einsumfunc.cpython-313.pyc
   │     │  │  │  │  │     ├─ flatiter.cpython-313.pyc
   │     │  │  │  │  │     ├─ fromnumeric.cpython-313.pyc
   │     │  │  │  │  │     ├─ index_tricks.cpython-313.pyc
   │     │  │  │  │  │     ├─ lib_user_array.cpython-313.pyc
   │     │  │  │  │  │     ├─ lib_utils.cpython-313.pyc
   │     │  │  │  │  │     ├─ lib_version.cpython-313.pyc
   │     │  │  │  │  │     ├─ literal.cpython-313.pyc
   │     │  │  │  │  │     ├─ ma.cpython-313.pyc
   │     │  │  │  │  │     ├─ mod.cpython-313.pyc
   │     │  │  │  │  │     ├─ modules.cpython-313.pyc
   │     │  │  │  │  │     ├─ multiarray.cpython-313.pyc
   │     │  │  │  │  │     ├─ ndarray_conversion.cpython-313.pyc
   │     │  │  │  │  │     ├─ ndarray_misc.cpython-313.pyc
   │     │  │  │  │  │     ├─ ndarray_shape_manipulation.cpython-313.pyc
   │     │  │  │  │  │     ├─ nditer.cpython-313.pyc
   │     │  │  │  │  │     ├─ numeric.cpython-313.pyc
   │     │  │  │  │  │     ├─ numerictypes.cpython-313.pyc
   │     │  │  │  │  │     ├─ random.cpython-313.pyc
   │     │  │  │  │  │     ├─ recfunctions.cpython-313.pyc
   │     │  │  │  │  │     ├─ scalars.cpython-313.pyc
   │     │  │  │  │  │     ├─ shape.cpython-313.pyc
   │     │  │  │  │  │     ├─ simple.cpython-313.pyc
   │     │  │  │  │  │     ├─ simple_py3.cpython-313.pyc
   │     │  │  │  │  │     ├─ ufunclike.cpython-313.pyc
   │     │  │  │  │  │     ├─ ufuncs.cpython-313.pyc
   │     │  │  │  │  │     ├─ ufunc_config.cpython-313.pyc
   │     │  │  │  │  │     └─ warnings_and_errors.cpython-313.pyc
   │     │  │  │  │  └─ reveal
   │     │  │  │  │     ├─ arithmetic.pyi
   │     │  │  │  │     ├─ arraypad.pyi
   │     │  │  │  │     ├─ arrayprint.pyi
   │     │  │  │  │     ├─ arraysetops.pyi
   │     │  │  │  │     ├─ arrayterator.pyi
   │     │  │  │  │     ├─ array_api_info.pyi
   │     │  │  │  │     ├─ array_constructors.pyi
   │     │  │  │  │     ├─ bitwise_ops.pyi
   │     │  │  │  │     ├─ char.pyi
   │     │  │  │  │     ├─ chararray.pyi
   │     │  │  │  │     ├─ comparisons.pyi
   │     │  │  │  │     ├─ constants.pyi
   │     │  │  │  │     ├─ ctypeslib.pyi
   │     │  │  │  │     ├─ datasource.pyi
   │     │  │  │  │     ├─ dtype.pyi
   │     │  │  │  │     ├─ einsumfunc.pyi
   │     │  │  │  │     ├─ emath.pyi
   │     │  │  │  │     ├─ fft.pyi
   │     │  │  │  │     ├─ flatiter.pyi
   │     │  │  │  │     ├─ fromnumeric.pyi
   │     │  │  │  │     ├─ getlimits.pyi
   │     │  │  │  │     ├─ histograms.pyi
   │     │  │  │  │     ├─ index_tricks.pyi
   │     │  │  │  │     ├─ lib_function_base.pyi
   │     │  │  │  │     ├─ lib_polynomial.pyi
   │     │  │  │  │     ├─ lib_utils.pyi
   │     │  │  │  │     ├─ lib_version.pyi
   │     │  │  │  │     ├─ linalg.pyi
   │     │  │  │  │     ├─ matrix.pyi
   │     │  │  │  │     ├─ memmap.pyi
   │     │  │  │  │     ├─ mod.pyi
   │     │  │  │  │     ├─ modules.pyi
   │     │  │  │  │     ├─ multiarray.pyi
   │     │  │  │  │     ├─ nbit_base_example.pyi
   │     │  │  │  │     ├─ ndarray_assignability.pyi
   │     │  │  │  │     ├─ ndarray_conversion.pyi
   │     │  │  │  │     ├─ ndarray_misc.pyi
   │     │  │  │  │     ├─ ndarray_shape_manipulation.pyi
   │     │  │  │  │     ├─ nditer.pyi
   │     │  │  │  │     ├─ nested_sequence.pyi
   │     │  │  │  │     ├─ npyio.pyi
   │     │  │  │  │     ├─ numeric.pyi
   │     │  │  │  │     ├─ numerictypes.pyi
   │     │  │  │  │     ├─ polynomial_polybase.pyi
   │     │  │  │  │     ├─ polynomial_polyutils.pyi
   │     │  │  │  │     ├─ polynomial_series.pyi
   │     │  │  │  │     ├─ random.pyi
   │     │  │  │  │     ├─ rec.pyi
   │     │  │  │  │     ├─ scalars.pyi
   │     │  │  │  │     ├─ shape.pyi
   │     │  │  │  │     ├─ shape_base.pyi
   │     │  │  │  │     ├─ stride_tricks.pyi
   │     │  │  │  │     ├─ strings.pyi
   │     │  │  │  │     ├─ testing.pyi
   │     │  │  │  │     ├─ twodim_base.pyi
   │     │  │  │  │     ├─ type_check.pyi
   │     │  │  │  │     ├─ ufunclike.pyi
   │     │  │  │  │     ├─ ufuncs.pyi
   │     │  │  │  │     ├─ ufunc_config.pyi
   │     │  │  │  │     └─ warnings_and_errors.pyi
   │     │  │  │  ├─ test_isfile.py
   │     │  │  │  ├─ test_runtime.py
   │     │  │  │  ├─ test_typing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_isfile.cpython-313.pyc
   │     │  │  │     ├─ test_runtime.cpython-313.pyc
   │     │  │  │     ├─ test_typing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ mypy_plugin.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ version.py
   │     │  ├─ version.pyi
   │     │  ├─ _array_api_info.py
   │     │  ├─ _array_api_info.pyi
   │     │  ├─ _configtool.py
   │     │  ├─ _configtool.pyi
   │     │  ├─ _core
   │     │  │  ├─ arrayprint.py
   │     │  │  ├─ arrayprint.pyi
   │     │  │  ├─ cversions.py
   │     │  │  ├─ defchararray.py
   │     │  │  ├─ defchararray.pyi
   │     │  │  ├─ einsumfunc.py
   │     │  │  ├─ einsumfunc.pyi
   │     │  │  ├─ fromnumeric.py
   │     │  │  ├─ fromnumeric.pyi
   │     │  │  ├─ function_base.py
   │     │  │  ├─ function_base.pyi
   │     │  │  ├─ getlimits.py
   │     │  │  ├─ getlimits.pyi
   │     │  │  ├─ include
   │     │  │  │  └─ numpy
   │     │  │  │     ├─ arrayobject.h
   │     │  │  │     ├─ arrayscalars.h
   │     │  │  │     ├─ dtype_api.h
   │     │  │  │     ├─ halffloat.h
   │     │  │  │     ├─ ndarrayobject.h
   │     │  │  │     ├─ ndarraytypes.h
   │     │  │  │     ├─ npy_1_7_deprecated_api.h
   │     │  │  │     ├─ npy_2_compat.h
   │     │  │  │     ├─ npy_2_complexcompat.h
   │     │  │  │     ├─ npy_3kcompat.h
   │     │  │  │     ├─ npy_common.h
   │     │  │  │     ├─ npy_cpu.h
   │     │  │  │     ├─ npy_endian.h
   │     │  │  │     ├─ npy_math.h
   │     │  │  │     ├─ npy_no_deprecated_api.h
   │     │  │  │     ├─ npy_os.h
   │     │  │  │     ├─ numpyconfig.h
   │     │  │  │     ├─ random
   │     │  │  │     │  ├─ bitgen.h
   │     │  │  │     │  ├─ distributions.h
   │     │  │  │     │  ├─ libdivide.h
   │     │  │  │     │  └─ LICENSE.txt
   │     │  │  │     ├─ ufuncobject.h
   │     │  │  │     ├─ utils.h
   │     │  │  │     ├─ _neighborhood_iterator_imp.h
   │     │  │  │     ├─ _numpyconfig.h
   │     │  │  │     ├─ _public_dtype_api_table.h
   │     │  │  │     ├─ __multiarray_api.c
   │     │  │  │     ├─ __multiarray_api.h
   │     │  │  │     ├─ __ufunc_api.c
   │     │  │  │     └─ __ufunc_api.h
   │     │  │  ├─ lib
   │     │  │  │  ├─ npy-pkg-config
   │     │  │  │  │  ├─ mlib.ini
   │     │  │  │  │  └─ npymath.ini
   │     │  │  │  ├─ npymath.lib
   │     │  │  │  └─ pkgconfig
   │     │  │  │     └─ numpy.pc
   │     │  │  ├─ memmap.py
   │     │  │  ├─ memmap.pyi
   │     │  │  ├─ multiarray.py
   │     │  │  ├─ multiarray.pyi
   │     │  │  ├─ numeric.py
   │     │  │  ├─ numeric.pyi
   │     │  │  ├─ numerictypes.py
   │     │  │  ├─ numerictypes.pyi
   │     │  │  ├─ overrides.py
   │     │  │  ├─ overrides.pyi
   │     │  │  ├─ printoptions.py
   │     │  │  ├─ printoptions.pyi
   │     │  │  ├─ records.py
   │     │  │  ├─ records.pyi
   │     │  │  ├─ shape_base.py
   │     │  │  ├─ shape_base.pyi
   │     │  │  ├─ strings.py
   │     │  │  ├─ strings.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ astype_copy.pkl
   │     │  │  │  │  ├─ generate_umath_validation_data.cpp
   │     │  │  │  │  ├─ recarray_from_file.fits
   │     │  │  │  │  ├─ umath-validation-set-arccos.csv
   │     │  │  │  │  ├─ umath-validation-set-arccosh.csv
   │     │  │  │  │  ├─ umath-validation-set-arcsin.csv
   │     │  │  │  │  ├─ umath-validation-set-arcsinh.csv
   │     │  │  │  │  ├─ umath-validation-set-arctan.csv
   │     │  │  │  │  ├─ umath-validation-set-arctanh.csv
   │     │  │  │  │  ├─ umath-validation-set-cbrt.csv
   │     │  │  │  │  ├─ umath-validation-set-cos.csv
   │     │  │  │  │  ├─ umath-validation-set-cosh.csv
   │     │  │  │  │  ├─ umath-validation-set-exp.csv
   │     │  │  │  │  ├─ umath-validation-set-exp2.csv
   │     │  │  │  │  ├─ umath-validation-set-expm1.csv
   │     │  │  │  │  ├─ umath-validation-set-log.csv
   │     │  │  │  │  ├─ umath-validation-set-log10.csv
   │     │  │  │  │  ├─ umath-validation-set-log1p.csv
   │     │  │  │  │  ├─ umath-validation-set-log2.csv
   │     │  │  │  │  ├─ umath-validation-set-README.txt
   │     │  │  │  │  ├─ umath-validation-set-sin.csv
   │     │  │  │  │  ├─ umath-validation-set-sinh.csv
   │     │  │  │  │  ├─ umath-validation-set-tan.csv
   │     │  │  │  │  └─ umath-validation-set-tanh.csv
   │     │  │  │  ├─ examples
   │     │  │  │  │  ├─ cython
   │     │  │  │  │  │  ├─ checks.pyx
   │     │  │  │  │  │  ├─ meson.build
   │     │  │  │  │  │  ├─ setup.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     └─ setup.cpython-313.pyc
   │     │  │  │  │  └─ limited_api
   │     │  │  │  │     ├─ limited_api1.c
   │     │  │  │  │     ├─ limited_api2.pyx
   │     │  │  │  │     ├─ limited_api_latest.c
   │     │  │  │  │     ├─ meson.build
   │     │  │  │  │     ├─ setup.py
   │     │  │  │  │     └─ __pycache__
   │     │  │  │  │        └─ setup.cpython-313.pyc
   │     │  │  │  ├─ test_abc.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_argparse.py
   │     │  │  │  ├─ test_arraymethod.py
   │     │  │  │  ├─ test_arrayobject.py
   │     │  │  │  ├─ test_arrayprint.py
   │     │  │  │  ├─ test_array_api_info.py
   │     │  │  │  ├─ test_array_coercion.py
   │     │  │  │  ├─ test_array_interface.py
   │     │  │  │  ├─ test_casting_floatingpoint_errors.py
   │     │  │  │  ├─ test_casting_unittests.py
   │     │  │  │  ├─ test_conversion_utils.py
   │     │  │  │  ├─ test_cpu_dispatcher.py
   │     │  │  │  ├─ test_cpu_features.py
   │     │  │  │  ├─ test_custom_dtypes.py
   │     │  │  │  ├─ test_cython.py
   │     │  │  │  ├─ test_datetime.py
   │     │  │  │  ├─ test_defchararray.py
   │     │  │  │  ├─ test_deprecations.py
   │     │  │  │  ├─ test_dlpack.py
   │     │  │  │  ├─ test_dtype.py
   │     │  │  │  ├─ test_einsum.py
   │     │  │  │  ├─ test_errstate.py
   │     │  │  │  ├─ test_extint128.py
   │     │  │  │  ├─ test_function_base.py
   │     │  │  │  ├─ test_getlimits.py
   │     │  │  │  ├─ test_half.py
   │     │  │  │  ├─ test_hashtable.py
   │     │  │  │  ├─ test_indexerrors.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_item_selection.py
   │     │  │  │  ├─ test_limited_api.py
   │     │  │  │  ├─ test_longdouble.py
   │     │  │  │  ├─ test_machar.py
   │     │  │  │  ├─ test_memmap.py
   │     │  │  │  ├─ test_mem_overlap.py
   │     │  │  │  ├─ test_mem_policy.py
   │     │  │  │  ├─ test_multiarray.py
   │     │  │  │  ├─ test_multithreading.py
   │     │  │  │  ├─ test_nditer.py
   │     │  │  │  ├─ test_nep50_promotions.py
   │     │  │  │  ├─ test_numeric.py
   │     │  │  │  ├─ test_numerictypes.py
   │     │  │  │  ├─ test_overrides.py
   │     │  │  │  ├─ test_print.py
   │     │  │  │  ├─ test_protocols.py
   │     │  │  │  ├─ test_records.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_scalarbuffer.py
   │     │  │  │  ├─ test_scalarinherit.py
   │     │  │  │  ├─ test_scalarmath.py
   │     │  │  │  ├─ test_scalarprint.py
   │     │  │  │  ├─ test_scalar_ctors.py
   │     │  │  │  ├─ test_scalar_methods.py
   │     │  │  │  ├─ test_shape_base.py
   │     │  │  │  ├─ test_simd.py
   │     │  │  │  ├─ test_simd_module.py
   │     │  │  │  ├─ test_stringdtype.py
   │     │  │  │  ├─ test_strings.py
   │     │  │  │  ├─ test_ufunc.py
   │     │  │  │  ├─ test_umath.py
   │     │  │  │  ├─ test_umath_accuracy.py
   │     │  │  │  ├─ test_umath_complex.py
   │     │  │  │  ├─ test_unicode.py
   │     │  │  │  ├─ test__exceptions.py
   │     │  │  │  ├─ _locales.py
   │     │  │  │  ├─ _natype.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_abc.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_argparse.cpython-313.pyc
   │     │  │  │     ├─ test_arraymethod.cpython-313.pyc
   │     │  │  │     ├─ test_arrayobject.cpython-313.pyc
   │     │  │  │     ├─ test_arrayprint.cpython-313.pyc
   │     │  │  │     ├─ test_array_api_info.cpython-313.pyc
   │     │  │  │     ├─ test_array_coercion.cpython-313.pyc
   │     │  │  │     ├─ test_array_interface.cpython-313.pyc
   │     │  │  │     ├─ test_casting_floatingpoint_errors.cpython-313.pyc
   │     │  │  │     ├─ test_casting_unittests.cpython-313.pyc
   │     │  │  │     ├─ test_conversion_utils.cpython-313.pyc
   │     │  │  │     ├─ test_cpu_dispatcher.cpython-313.pyc
   │     │  │  │     ├─ test_cpu_features.cpython-313.pyc
   │     │  │  │     ├─ test_custom_dtypes.cpython-313.pyc
   │     │  │  │     ├─ test_cython.cpython-313.pyc
   │     │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_defchararray.cpython-313.pyc
   │     │  │  │     ├─ test_deprecations.cpython-313.pyc
   │     │  │  │     ├─ test_dlpack.cpython-313.pyc
   │     │  │  │     ├─ test_dtype.cpython-313.pyc
   │     │  │  │     ├─ test_einsum.cpython-313.pyc
   │     │  │  │     ├─ test_errstate.cpython-313.pyc
   │     │  │  │     ├─ test_extint128.cpython-313.pyc
   │     │  │  │     ├─ test_function_base.cpython-313.pyc
   │     │  │  │     ├─ test_getlimits.cpython-313.pyc
   │     │  │  │     ├─ test_half.cpython-313.pyc
   │     │  │  │     ├─ test_hashtable.cpython-313.pyc
   │     │  │  │     ├─ test_indexerrors.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_item_selection.cpython-313.pyc
   │     │  │  │     ├─ test_limited_api.cpython-313.pyc
   │     │  │  │     ├─ test_longdouble.cpython-313.pyc
   │     │  │  │     ├─ test_machar.cpython-313.pyc
   │     │  │  │     ├─ test_memmap.cpython-313.pyc
   │     │  │  │     ├─ test_mem_overlap.cpython-313.pyc
   │     │  │  │     ├─ test_mem_policy.cpython-313.pyc
   │     │  │  │     ├─ test_multiarray.cpython-313.pyc
   │     │  │  │     ├─ test_multithreading.cpython-313.pyc
   │     │  │  │     ├─ test_nditer.cpython-313.pyc
   │     │  │  │     ├─ test_nep50_promotions.cpython-313.pyc
   │     │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_numerictypes.cpython-313.pyc
   │     │  │  │     ├─ test_overrides.cpython-313.pyc
   │     │  │  │     ├─ test_print.cpython-313.pyc
   │     │  │  │     ├─ test_protocols.cpython-313.pyc
   │     │  │  │     ├─ test_records.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_scalarbuffer.cpython-313.pyc
   │     │  │  │     ├─ test_scalarinherit.cpython-313.pyc
   │     │  │  │     ├─ test_scalarmath.cpython-313.pyc
   │     │  │  │     ├─ test_scalarprint.cpython-313.pyc
   │     │  │  │     ├─ test_scalar_ctors.cpython-313.pyc
   │     │  │  │     ├─ test_scalar_methods.cpython-313.pyc
   │     │  │  │     ├─ test_shape_base.cpython-313.pyc
   │     │  │  │     ├─ test_simd.cpython-313.pyc
   │     │  │  │     ├─ test_simd_module.cpython-313.pyc
   │     │  │  │     ├─ test_stringdtype.cpython-313.pyc
   │     │  │  │     ├─ test_strings.cpython-313.pyc
   │     │  │  │     ├─ test_ufunc.cpython-313.pyc
   │     │  │  │     ├─ test_umath.cpython-313.pyc
   │     │  │  │     ├─ test_umath_accuracy.cpython-313.pyc
   │     │  │  │     ├─ test_umath_complex.cpython-313.pyc
   │     │  │  │     ├─ test_unicode.cpython-313.pyc
   │     │  │  │     ├─ test__exceptions.cpython-313.pyc
   │     │  │  │     ├─ _locales.cpython-313.pyc
   │     │  │  │     └─ _natype.cpython-313.pyc
   │     │  │  ├─ umath.py
   │     │  │  ├─ umath.pyi
   │     │  │  ├─ _add_newdocs.py
   │     │  │  ├─ _add_newdocs.pyi
   │     │  │  ├─ _add_newdocs_scalars.py
   │     │  │  ├─ _add_newdocs_scalars.pyi
   │     │  │  ├─ _asarray.py
   │     │  │  ├─ _asarray.pyi
   │     │  │  ├─ _dtype.py
   │     │  │  ├─ _dtype.pyi
   │     │  │  ├─ _dtype_ctypes.py
   │     │  │  ├─ _dtype_ctypes.pyi
   │     │  │  ├─ _exceptions.py
   │     │  │  ├─ _exceptions.pyi
   │     │  │  ├─ _internal.py
   │     │  │  ├─ _internal.pyi
   │     │  │  ├─ _machar.py
   │     │  │  ├─ _machar.pyi
   │     │  │  ├─ _methods.py
   │     │  │  ├─ _methods.pyi
   │     │  │  ├─ _multiarray_tests.cp313-win_amd64.lib
   │     │  │  ├─ _multiarray_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _multiarray_umath.cp313-win_amd64.lib
   │     │  │  ├─ _multiarray_umath.cp313-win_amd64.pyd
   │     │  │  ├─ _operand_flag_tests.cp313-win_amd64.lib
   │     │  │  ├─ _operand_flag_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _rational_tests.cp313-win_amd64.lib
   │     │  │  ├─ _rational_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _simd.cp313-win_amd64.lib
   │     │  │  ├─ _simd.cp313-win_amd64.pyd
   │     │  │  ├─ _simd.pyi
   │     │  │  ├─ _string_helpers.py
   │     │  │  ├─ _string_helpers.pyi
   │     │  │  ├─ _struct_ufunc_tests.cp313-win_amd64.lib
   │     │  │  ├─ _struct_ufunc_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _type_aliases.py
   │     │  │  ├─ _type_aliases.pyi
   │     │  │  ├─ _ufunc_config.py
   │     │  │  ├─ _ufunc_config.pyi
   │     │  │  ├─ _umath_tests.cp313-win_amd64.lib
   │     │  │  ├─ _umath_tests.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ arrayprint.cpython-313.pyc
   │     │  │     ├─ cversions.cpython-313.pyc
   │     │  │     ├─ defchararray.cpython-313.pyc
   │     │  │     ├─ einsumfunc.cpython-313.pyc
   │     │  │     ├─ fromnumeric.cpython-313.pyc
   │     │  │     ├─ function_base.cpython-313.pyc
   │     │  │     ├─ getlimits.cpython-313.pyc
   │     │  │     ├─ memmap.cpython-313.pyc
   │     │  │     ├─ multiarray.cpython-313.pyc
   │     │  │     ├─ numeric.cpython-313.pyc
   │     │  │     ├─ numerictypes.cpython-313.pyc
   │     │  │     ├─ overrides.cpython-313.pyc
   │     │  │     ├─ printoptions.cpython-313.pyc
   │     │  │     ├─ records.cpython-313.pyc
   │     │  │     ├─ shape_base.cpython-313.pyc
   │     │  │     ├─ strings.cpython-313.pyc
   │     │  │     ├─ umath.cpython-313.pyc
   │     │  │     ├─ _add_newdocs.cpython-313.pyc
   │     │  │     ├─ _add_newdocs_scalars.cpython-313.pyc
   │     │  │     ├─ _asarray.cpython-313.pyc
   │     │  │     ├─ _dtype.cpython-313.pyc
   │     │  │     ├─ _dtype_ctypes.cpython-313.pyc
   │     │  │     ├─ _exceptions.cpython-313.pyc
   │     │  │     ├─ _internal.cpython-313.pyc
   │     │  │     ├─ _machar.cpython-313.pyc
   │     │  │     ├─ _methods.cpython-313.pyc
   │     │  │     ├─ _string_helpers.cpython-313.pyc
   │     │  │     ├─ _type_aliases.cpython-313.pyc
   │     │  │     ├─ _ufunc_config.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _distributor_init.py
   │     │  ├─ _distributor_init.pyi
   │     │  ├─ _expired_attrs_2_0.py
   │     │  ├─ _expired_attrs_2_0.pyi
   │     │  ├─ _globals.py
   │     │  ├─ _globals.pyi
   │     │  ├─ _pyinstaller
   │     │  │  ├─ hook-numpy.py
   │     │  │  ├─ hook-numpy.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ pyinstaller-smoke.py
   │     │  │  │  ├─ test_pyinstaller.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ pyinstaller-smoke.cpython-313.pyc
   │     │  │  │     ├─ test_pyinstaller.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ hook-numpy.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _pytesttester.py
   │     │  ├─ _pytesttester.pyi
   │     │  ├─ _typing
   │     │  │  ├─ _add_docstring.py
   │     │  │  ├─ _array_like.py
   │     │  │  ├─ _callable.pyi
   │     │  │  ├─ _char_codes.py
   │     │  │  ├─ _dtype_like.py
   │     │  │  ├─ _extended_precision.py
   │     │  │  ├─ _nbit.py
   │     │  │  ├─ _nbit_base.py
   │     │  │  ├─ _nested_sequence.py
   │     │  │  ├─ _scalars.py
   │     │  │  ├─ _shape.py
   │     │  │  ├─ _ufunc.py
   │     │  │  ├─ _ufunc.pyi
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _add_docstring.cpython-313.pyc
   │     │  │     ├─ _array_like.cpython-313.pyc
   │     │  │     ├─ _char_codes.cpython-313.pyc
   │     │  │     ├─ _dtype_like.cpython-313.pyc
   │     │  │     ├─ _extended_precision.cpython-313.pyc
   │     │  │     ├─ _nbit.cpython-313.pyc
   │     │  │     ├─ _nbit_base.cpython-313.pyc
   │     │  │     ├─ _nested_sequence.cpython-313.pyc
   │     │  │     ├─ _scalars.cpython-313.pyc
   │     │  │     ├─ _shape.cpython-313.pyc
   │     │  │     ├─ _ufunc.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _utils
   │     │  │  ├─ _convertions.py
   │     │  │  ├─ _convertions.pyi
   │     │  │  ├─ _inspect.py
   │     │  │  ├─ _inspect.pyi
   │     │  │  ├─ _pep440.py
   │     │  │  ├─ _pep440.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _convertions.cpython-313.pyc
   │     │  │     ├─ _inspect.cpython-313.pyc
   │     │  │     ├─ _pep440.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __config__.py
   │     │  ├─ __config__.pyi
   │     │  ├─ __init__.cython-30.pxd
   │     │  ├─ __init__.pxd
   │     │  ├─ __init__.py
   │     │  ├─ __init__.pyi
   │     │  └─ __pycache__
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ ctypeslib.cpython-313.pyc
   │     │     ├─ dtypes.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ matlib.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ _array_api_info.cpython-313.pyc
   │     │     ├─ _configtool.cpython-313.pyc
   │     │     ├─ _distributor_init.cpython-313.pyc
   │     │     ├─ _expired_attrs_2_0.cpython-313.pyc
   │     │     ├─ _globals.cpython-313.pyc
   │     │     ├─ _pytesttester.cpython-313.pyc
   │     │     ├─ __config__.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ numpy-2.2.4-cp313-cp313-win_amd64.whl
   │     ├─ numpy-2.2.4.dist-info
   │     │  ├─ DELVEWHEEL
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ numpy.libs
   │     │  ├─ libscipy_openblas64_-43e11ff0749b8cbe0a615c9cf6737e0e.dll
   │     │  └─ msvcp140-263139962577ecda4cd9469ca360a746.dll
   │     ├─ packaging
   │     │  ├─ licenses
   │     │  │  ├─ _spdx.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _spdx.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ markers.py
   │     │  ├─ metadata.py
   │     │  ├─ py.typed
   │     │  ├─ requirements.py
   │     │  ├─ specifiers.py
   │     │  ├─ tags.py
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ _elffile.py
   │     │  ├─ _manylinux.py
   │     │  ├─ _musllinux.py
   │     │  ├─ _parser.py
   │     │  ├─ _structures.py
   │     │  ├─ _tokenizer.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ markers.cpython-313.pyc
   │     │     ├─ metadata.cpython-313.pyc
   │     │     ├─ requirements.cpython-313.pyc
   │     │     ├─ specifiers.cpython-313.pyc
   │     │     ├─ tags.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ _elffile.cpython-313.pyc
   │     │     ├─ _manylinux.cpython-313.pyc
   │     │     ├─ _musllinux.cpython-313.pyc
   │     │     ├─ _parser.cpython-313.pyc
   │     │     ├─ _structures.cpython-313.pyc
   │     │     ├─ _tokenizer.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ packaging-24.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ LICENSE.APACHE
   │     │  ├─ LICENSE.BSD
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pandas
   │     │  ├─ api
   │     │  │  ├─ extensions
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexers
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ interchange
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ types
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ typing
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ arrays
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ compat
   │     │  │  ├─ compressors.py
   │     │  │  ├─ numpy
   │     │  │  │  ├─ function.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ function.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pickle_compat.py
   │     │  │  ├─ pyarrow.py
   │     │  │  ├─ _constants.py
   │     │  │  ├─ _optional.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ compressors.cpython-313.pyc
   │     │  │     ├─ pickle_compat.cpython-313.pyc
   │     │  │     ├─ pyarrow.cpython-313.pyc
   │     │  │     ├─ _constants.cpython-313.pyc
   │     │  │     ├─ _optional.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ conftest.py
   │     │  ├─ core
   │     │  │  ├─ accessor.py
   │     │  │  ├─ algorithms.py
   │     │  │  ├─ api.py
   │     │  │  ├─ apply.py
   │     │  │  ├─ arraylike.py
   │     │  │  ├─ arrays
   │     │  │  │  ├─ arrow
   │     │  │  │  │  ├─ accessors.py
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ extension_types.py
   │     │  │  │  │  ├─ _arrow_utils.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ accessors.cpython-313.pyc
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ extension_types.cpython-313.pyc
   │     │  │  │  │     ├─ _arrow_utils.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ boolean.py
   │     │  │  │  ├─ categorical.py
   │     │  │  │  ├─ datetimelike.py
   │     │  │  │  ├─ datetimes.py
   │     │  │  │  ├─ floating.py
   │     │  │  │  ├─ integer.py
   │     │  │  │  ├─ interval.py
   │     │  │  │  ├─ masked.py
   │     │  │  │  ├─ numeric.py
   │     │  │  │  ├─ numpy_.py
   │     │  │  │  ├─ period.py
   │     │  │  │  ├─ sparse
   │     │  │  │  │  ├─ accessor.py
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ scipy_sparse.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ accessor.cpython-313.pyc
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ scipy_sparse.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ string_.py
   │     │  │  │  ├─ string_arrow.py
   │     │  │  │  ├─ timedeltas.py
   │     │  │  │  ├─ _arrow_string_mixins.py
   │     │  │  │  ├─ _mixins.py
   │     │  │  │  ├─ _ranges.py
   │     │  │  │  ├─ _utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ boolean.cpython-313.pyc
   │     │  │  │     ├─ categorical.cpython-313.pyc
   │     │  │  │     ├─ datetimelike.cpython-313.pyc
   │     │  │  │     ├─ datetimes.cpython-313.pyc
   │     │  │  │     ├─ floating.cpython-313.pyc
   │     │  │  │     ├─ integer.cpython-313.pyc
   │     │  │  │     ├─ interval.cpython-313.pyc
   │     │  │  │     ├─ masked.cpython-313.pyc
   │     │  │  │     ├─ numeric.cpython-313.pyc
   │     │  │  │     ├─ numpy_.cpython-313.pyc
   │     │  │  │     ├─ period.cpython-313.pyc
   │     │  │  │     ├─ string_.cpython-313.pyc
   │     │  │  │     ├─ string_arrow.cpython-313.pyc
   │     │  │  │     ├─ timedeltas.cpython-313.pyc
   │     │  │  │     ├─ _arrow_string_mixins.cpython-313.pyc
   │     │  │  │     ├─ _mixins.cpython-313.pyc
   │     │  │  │     ├─ _ranges.cpython-313.pyc
   │     │  │  │     ├─ _utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ array_algos
   │     │  │  │  ├─ datetimelike_accumulations.py
   │     │  │  │  ├─ masked_accumulations.py
   │     │  │  │  ├─ masked_reductions.py
   │     │  │  │  ├─ putmask.py
   │     │  │  │  ├─ quantile.py
   │     │  │  │  ├─ replace.py
   │     │  │  │  ├─ take.py
   │     │  │  │  ├─ transforms.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ datetimelike_accumulations.cpython-313.pyc
   │     │  │  │     ├─ masked_accumulations.cpython-313.pyc
   │     │  │  │     ├─ masked_reductions.cpython-313.pyc
   │     │  │  │     ├─ putmask.cpython-313.pyc
   │     │  │  │     ├─ quantile.cpython-313.pyc
   │     │  │  │     ├─ replace.cpython-313.pyc
   │     │  │  │     ├─ take.cpython-313.pyc
   │     │  │  │     ├─ transforms.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ base.py
   │     │  │  ├─ common.py
   │     │  │  ├─ computation
   │     │  │  │  ├─ align.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ check.py
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ engines.py
   │     │  │  │  ├─ eval.py
   │     │  │  │  ├─ expr.py
   │     │  │  │  ├─ expressions.py
   │     │  │  │  ├─ ops.py
   │     │  │  │  ├─ parsing.py
   │     │  │  │  ├─ pytables.py
   │     │  │  │  ├─ scope.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ align.cpython-313.pyc
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ check.cpython-313.pyc
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ engines.cpython-313.pyc
   │     │  │  │     ├─ eval.cpython-313.pyc
   │     │  │  │     ├─ expr.cpython-313.pyc
   │     │  │  │     ├─ expressions.cpython-313.pyc
   │     │  │  │     ├─ ops.cpython-313.pyc
   │     │  │  │     ├─ parsing.cpython-313.pyc
   │     │  │  │     ├─ pytables.cpython-313.pyc
   │     │  │  │     ├─ scope.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ config_init.py
   │     │  │  ├─ construction.py
   │     │  │  ├─ dtypes
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ astype.py
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ cast.py
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ concat.py
   │     │  │  │  ├─ dtypes.py
   │     │  │  │  ├─ generic.py
   │     │  │  │  ├─ inference.py
   │     │  │  │  ├─ missing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ astype.cpython-313.pyc
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ cast.cpython-313.pyc
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ concat.cpython-313.pyc
   │     │  │  │     ├─ dtypes.cpython-313.pyc
   │     │  │  │     ├─ generic.cpython-313.pyc
   │     │  │  │     ├─ inference.cpython-313.pyc
   │     │  │  │     ├─ missing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ flags.py
   │     │  │  ├─ frame.py
   │     │  │  ├─ generic.py
   │     │  │  ├─ groupby
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ categorical.py
   │     │  │  │  ├─ generic.py
   │     │  │  │  ├─ groupby.py
   │     │  │  │  ├─ grouper.py
   │     │  │  │  ├─ indexing.py
   │     │  │  │  ├─ numba_.py
   │     │  │  │  ├─ ops.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ categorical.cpython-313.pyc
   │     │  │  │     ├─ generic.cpython-313.pyc
   │     │  │  │     ├─ groupby.cpython-313.pyc
   │     │  │  │     ├─ grouper.cpython-313.pyc
   │     │  │  │     ├─ indexing.cpython-313.pyc
   │     │  │  │     ├─ numba_.cpython-313.pyc
   │     │  │  │     ├─ ops.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexers
   │     │  │  │  ├─ objects.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ objects.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexes
   │     │  │  │  ├─ accessors.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ category.py
   │     │  │  │  ├─ datetimelike.py
   │     │  │  │  ├─ datetimes.py
   │     │  │  │  ├─ extension.py
   │     │  │  │  ├─ frozen.py
   │     │  │  │  ├─ interval.py
   │     │  │  │  ├─ multi.py
   │     │  │  │  ├─ period.py
   │     │  │  │  ├─ range.py
   │     │  │  │  ├─ timedeltas.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ accessors.cpython-313.pyc
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ category.cpython-313.pyc
   │     │  │  │     ├─ datetimelike.cpython-313.pyc
   │     │  │  │     ├─ datetimes.cpython-313.pyc
   │     │  │  │     ├─ extension.cpython-313.pyc
   │     │  │  │     ├─ frozen.cpython-313.pyc
   │     │  │  │     ├─ interval.cpython-313.pyc
   │     │  │  │     ├─ multi.cpython-313.pyc
   │     │  │  │     ├─ period.cpython-313.pyc
   │     │  │  │     ├─ range.cpython-313.pyc
   │     │  │  │     ├─ timedeltas.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexing.py
   │     │  │  ├─ interchange
   │     │  │  │  ├─ buffer.py
   │     │  │  │  ├─ column.py
   │     │  │  │  ├─ dataframe.py
   │     │  │  │  ├─ dataframe_protocol.py
   │     │  │  │  ├─ from_dataframe.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ buffer.cpython-313.pyc
   │     │  │  │     ├─ column.cpython-313.pyc
   │     │  │  │     ├─ dataframe.cpython-313.pyc
   │     │  │  │     ├─ dataframe_protocol.cpython-313.pyc
   │     │  │  │     ├─ from_dataframe.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ internals
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ array_manager.py
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ blocks.py
   │     │  │  │  ├─ concat.py
   │     │  │  │  ├─ construction.py
   │     │  │  │  ├─ managers.py
   │     │  │  │  ├─ ops.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ array_manager.cpython-313.pyc
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ blocks.cpython-313.pyc
   │     │  │  │     ├─ concat.cpython-313.pyc
   │     │  │  │     ├─ construction.cpython-313.pyc
   │     │  │  │     ├─ managers.cpython-313.pyc
   │     │  │  │     ├─ ops.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ methods
   │     │  │  │  ├─ describe.py
   │     │  │  │  ├─ selectn.py
   │     │  │  │  ├─ to_dict.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ describe.cpython-313.pyc
   │     │  │  │     ├─ selectn.cpython-313.pyc
   │     │  │  │     ├─ to_dict.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ missing.py
   │     │  │  ├─ nanops.py
   │     │  │  ├─ ops
   │     │  │  │  ├─ array_ops.py
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ dispatch.py
   │     │  │  │  ├─ docstrings.py
   │     │  │  │  ├─ invalid.py
   │     │  │  │  ├─ mask_ops.py
   │     │  │  │  ├─ missing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ array_ops.cpython-313.pyc
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ dispatch.cpython-313.pyc
   │     │  │  │     ├─ docstrings.cpython-313.pyc
   │     │  │  │     ├─ invalid.cpython-313.pyc
   │     │  │  │     ├─ mask_ops.cpython-313.pyc
   │     │  │  │     ├─ missing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ resample.py
   │     │  │  ├─ reshape
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ concat.py
   │     │  │  │  ├─ encoding.py
   │     │  │  │  ├─ melt.py
   │     │  │  │  ├─ merge.py
   │     │  │  │  ├─ pivot.py
   │     │  │  │  ├─ reshape.py
   │     │  │  │  ├─ tile.py
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ concat.cpython-313.pyc
   │     │  │  │     ├─ encoding.cpython-313.pyc
   │     │  │  │     ├─ melt.cpython-313.pyc
   │     │  │  │     ├─ merge.cpython-313.pyc
   │     │  │  │     ├─ pivot.cpython-313.pyc
   │     │  │  │     ├─ reshape.cpython-313.pyc
   │     │  │  │     ├─ tile.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ roperator.py
   │     │  │  ├─ sample.py
   │     │  │  ├─ series.py
   │     │  │  ├─ shared_docs.py
   │     │  │  ├─ sorting.py
   │     │  │  ├─ sparse
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ strings
   │     │  │  │  ├─ accessor.py
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ object_array.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ accessor.cpython-313.pyc
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ object_array.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tools
   │     │  │  │  ├─ datetimes.py
   │     │  │  │  ├─ numeric.py
   │     │  │  │  ├─ timedeltas.py
   │     │  │  │  ├─ times.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ datetimes.cpython-313.pyc
   │     │  │  │     ├─ numeric.cpython-313.pyc
   │     │  │  │     ├─ timedeltas.cpython-313.pyc
   │     │  │  │     ├─ times.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ util
   │     │  │  │  ├─ hashing.py
   │     │  │  │  ├─ numba_.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ hashing.cpython-313.pyc
   │     │  │  │     ├─ numba_.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ window
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ doc.py
   │     │  │  │  ├─ ewm.py
   │     │  │  │  ├─ expanding.py
   │     │  │  │  ├─ numba_.py
   │     │  │  │  ├─ online.py
   │     │  │  │  ├─ rolling.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ doc.cpython-313.pyc
   │     │  │  │     ├─ ewm.cpython-313.pyc
   │     │  │  │     ├─ expanding.cpython-313.pyc
   │     │  │  │     ├─ numba_.cpython-313.pyc
   │     │  │  │     ├─ online.cpython-313.pyc
   │     │  │  │     ├─ rolling.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _numba
   │     │  │  │  ├─ executor.py
   │     │  │  │  ├─ extensions.py
   │     │  │  │  ├─ kernels
   │     │  │  │  │  ├─ mean_.py
   │     │  │  │  │  ├─ min_max_.py
   │     │  │  │  │  ├─ shared.py
   │     │  │  │  │  ├─ sum_.py
   │     │  │  │  │  ├─ var_.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ mean_.cpython-313.pyc
   │     │  │  │  │     ├─ min_max_.cpython-313.pyc
   │     │  │  │  │     ├─ shared.cpython-313.pyc
   │     │  │  │  │     ├─ sum_.cpython-313.pyc
   │     │  │  │  │     ├─ var_.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ executor.cpython-313.pyc
   │     │  │  │     ├─ extensions.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ accessor.cpython-313.pyc
   │     │  │     ├─ algorithms.cpython-313.pyc
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ apply.cpython-313.pyc
   │     │  │     ├─ arraylike.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ common.cpython-313.pyc
   │     │  │     ├─ config_init.cpython-313.pyc
   │     │  │     ├─ construction.cpython-313.pyc
   │     │  │     ├─ flags.cpython-313.pyc
   │     │  │     ├─ frame.cpython-313.pyc
   │     │  │     ├─ generic.cpython-313.pyc
   │     │  │     ├─ indexing.cpython-313.pyc
   │     │  │     ├─ missing.cpython-313.pyc
   │     │  │     ├─ nanops.cpython-313.pyc
   │     │  │     ├─ resample.cpython-313.pyc
   │     │  │     ├─ roperator.cpython-313.pyc
   │     │  │     ├─ sample.cpython-313.pyc
   │     │  │     ├─ series.cpython-313.pyc
   │     │  │     ├─ shared_docs.cpython-313.pyc
   │     │  │     ├─ sorting.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ errors
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ io
   │     │  │  ├─ api.py
   │     │  │  ├─ clipboard
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ clipboards.py
   │     │  │  ├─ common.py
   │     │  │  ├─ excel
   │     │  │  │  ├─ _base.py
   │     │  │  │  ├─ _calamine.py
   │     │  │  │  ├─ _odfreader.py
   │     │  │  │  ├─ _odswriter.py
   │     │  │  │  ├─ _openpyxl.py
   │     │  │  │  ├─ _pyxlsb.py
   │     │  │  │  ├─ _util.py
   │     │  │  │  ├─ _xlrd.py
   │     │  │  │  ├─ _xlsxwriter.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _base.cpython-313.pyc
   │     │  │  │     ├─ _calamine.cpython-313.pyc
   │     │  │  │     ├─ _odfreader.cpython-313.pyc
   │     │  │  │     ├─ _odswriter.cpython-313.pyc
   │     │  │  │     ├─ _openpyxl.cpython-313.pyc
   │     │  │  │     ├─ _pyxlsb.cpython-313.pyc
   │     │  │  │     ├─ _util.cpython-313.pyc
   │     │  │  │     ├─ _xlrd.cpython-313.pyc
   │     │  │  │     ├─ _xlsxwriter.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ feather_format.py
   │     │  │  ├─ formats
   │     │  │  │  ├─ console.py
   │     │  │  │  ├─ css.py
   │     │  │  │  ├─ csvs.py
   │     │  │  │  ├─ excel.py
   │     │  │  │  ├─ format.py
   │     │  │  │  ├─ html.py
   │     │  │  │  ├─ info.py
   │     │  │  │  ├─ printing.py
   │     │  │  │  ├─ string.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ style_render.py
   │     │  │  │  ├─ templates
   │     │  │  │  │  ├─ html.tpl
   │     │  │  │  │  ├─ html_style.tpl
   │     │  │  │  │  ├─ html_table.tpl
   │     │  │  │  │  ├─ latex.tpl
   │     │  │  │  │  ├─ latex_longtable.tpl
   │     │  │  │  │  ├─ latex_table.tpl
   │     │  │  │  │  └─ string.tpl
   │     │  │  │  ├─ xml.py
   │     │  │  │  ├─ _color_data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ console.cpython-313.pyc
   │     │  │  │     ├─ css.cpython-313.pyc
   │     │  │  │     ├─ csvs.cpython-313.pyc
   │     │  │  │     ├─ excel.cpython-313.pyc
   │     │  │  │     ├─ format.cpython-313.pyc
   │     │  │  │     ├─ html.cpython-313.pyc
   │     │  │  │     ├─ info.cpython-313.pyc
   │     │  │  │     ├─ printing.cpython-313.pyc
   │     │  │  │     ├─ string.cpython-313.pyc
   │     │  │  │     ├─ style.cpython-313.pyc
   │     │  │  │     ├─ style_render.cpython-313.pyc
   │     │  │  │     ├─ xml.cpython-313.pyc
   │     │  │  │     ├─ _color_data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ gbq.py
   │     │  │  ├─ html.py
   │     │  │  ├─ json
   │     │  │  │  ├─ _json.py
   │     │  │  │  ├─ _normalize.py
   │     │  │  │  ├─ _table_schema.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _json.cpython-313.pyc
   │     │  │  │     ├─ _normalize.cpython-313.pyc
   │     │  │  │     ├─ _table_schema.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ orc.py
   │     │  │  ├─ parquet.py
   │     │  │  ├─ parsers
   │     │  │  │  ├─ arrow_parser_wrapper.py
   │     │  │  │  ├─ base_parser.py
   │     │  │  │  ├─ c_parser_wrapper.py
   │     │  │  │  ├─ python_parser.py
   │     │  │  │  ├─ readers.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ arrow_parser_wrapper.cpython-313.pyc
   │     │  │  │     ├─ base_parser.cpython-313.pyc
   │     │  │  │     ├─ c_parser_wrapper.cpython-313.pyc
   │     │  │  │     ├─ python_parser.cpython-313.pyc
   │     │  │  │     ├─ readers.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pickle.py
   │     │  │  ├─ pytables.py
   │     │  │  ├─ sas
   │     │  │  │  ├─ sas7bdat.py
   │     │  │  │  ├─ sasreader.py
   │     │  │  │  ├─ sas_constants.py
   │     │  │  │  ├─ sas_xport.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ sas7bdat.cpython-313.pyc
   │     │  │  │     ├─ sasreader.cpython-313.pyc
   │     │  │  │     ├─ sas_constants.cpython-313.pyc
   │     │  │  │     ├─ sas_xport.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ spss.py
   │     │  │  ├─ sql.py
   │     │  │  ├─ stata.py
   │     │  │  ├─ xml.py
   │     │  │  ├─ _util.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ clipboards.cpython-313.pyc
   │     │  │     ├─ common.cpython-313.pyc
   │     │  │     ├─ feather_format.cpython-313.pyc
   │     │  │     ├─ gbq.cpython-313.pyc
   │     │  │     ├─ html.cpython-313.pyc
   │     │  │     ├─ orc.cpython-313.pyc
   │     │  │     ├─ parquet.cpython-313.pyc
   │     │  │     ├─ pickle.cpython-313.pyc
   │     │  │     ├─ pytables.cpython-313.pyc
   │     │  │     ├─ spss.cpython-313.pyc
   │     │  │     ├─ sql.cpython-313.pyc
   │     │  │     ├─ stata.cpython-313.pyc
   │     │  │     ├─ xml.cpython-313.pyc
   │     │  │     ├─ _util.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ plotting
   │     │  │  ├─ _core.py
   │     │  │  ├─ _matplotlib
   │     │  │  │  ├─ boxplot.py
   │     │  │  │  ├─ converter.py
   │     │  │  │  ├─ core.py
   │     │  │  │  ├─ groupby.py
   │     │  │  │  ├─ hist.py
   │     │  │  │  ├─ misc.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ timeseries.py
   │     │  │  │  ├─ tools.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ boxplot.cpython-313.pyc
   │     │  │  │     ├─ converter.cpython-313.pyc
   │     │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │     ├─ groupby.cpython-313.pyc
   │     │  │  │     ├─ hist.cpython-313.pyc
   │     │  │  │     ├─ misc.cpython-313.pyc
   │     │  │  │     ├─ style.cpython-313.pyc
   │     │  │  │     ├─ timeseries.cpython-313.pyc
   │     │  │  │     ├─ tools.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _misc.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _core.cpython-313.pyc
   │     │  │     ├─ _misc.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ pyproject.toml
   │     │  ├─ testing.py
   │     │  ├─ tests
   │     │  │  ├─ api
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_types.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_types.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ apply
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ test_frame_apply.py
   │     │  │  │  ├─ test_frame_apply_relabeling.py
   │     │  │  │  ├─ test_frame_transform.py
   │     │  │  │  ├─ test_invalid_arg.py
   │     │  │  │  ├─ test_numba.py
   │     │  │  │  ├─ test_series_apply.py
   │     │  │  │  ├─ test_series_apply_relabeling.py
   │     │  │  │  ├─ test_series_transform.py
   │     │  │  │  ├─ test_str.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ test_frame_apply.cpython-313.pyc
   │     │  │  │     ├─ test_frame_apply_relabeling.cpython-313.pyc
   │     │  │  │     ├─ test_frame_transform.cpython-313.pyc
   │     │  │  │     ├─ test_invalid_arg.cpython-313.pyc
   │     │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │     ├─ test_series_apply.cpython-313.pyc
   │     │  │  │     ├─ test_series_apply_relabeling.cpython-313.pyc
   │     │  │  │     ├─ test_series_transform.cpython-313.pyc
   │     │  │  │     ├─ test_str.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ arithmetic
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_array_ops.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_datetime64.py
   │     │  │  │  ├─ test_interval.py
   │     │  │  │  ├─ test_numeric.py
   │     │  │  │  ├─ test_object.py
   │     │  │  │  ├─ test_period.py
   │     │  │  │  ├─ test_timedelta64.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_array_ops.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_datetime64.cpython-313.pyc
   │     │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_object.cpython-313.pyc
   │     │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │     ├─ test_timedelta64.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ arrays
   │     │  │  │  ├─ boolean
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_comparison.py
   │     │  │  │  │  ├─ test_construction.py
   │     │  │  │  │  ├─ test_function.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_logical.py
   │     │  │  │  │  ├─ test_ops.py
   │     │  │  │  │  ├─ test_reduction.py
   │     │  │  │  │  ├─ test_repr.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_comparison.cpython-313.pyc
   │     │  │  │  │     ├─ test_construction.cpython-313.pyc
   │     │  │  │  │     ├─ test_function.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_logical.cpython-313.pyc
   │     │  │  │  │     ├─ test_ops.cpython-313.pyc
   │     │  │  │  │     ├─ test_reduction.cpython-313.pyc
   │     │  │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ categorical
   │     │  │  │  │  ├─ test_algos.py
   │     │  │  │  │  ├─ test_analytics.py
   │     │  │  │  │  ├─ test_api.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_dtypes.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_map.py
   │     │  │  │  │  ├─ test_missing.py
   │     │  │  │  │  ├─ test_operators.py
   │     │  │  │  │  ├─ test_replace.py
   │     │  │  │  │  ├─ test_repr.py
   │     │  │  │  │  ├─ test_sorting.py
   │     │  │  │  │  ├─ test_subclass.py
   │     │  │  │  │  ├─ test_take.py
   │     │  │  │  │  ├─ test_warnings.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_algos.cpython-313.pyc
   │     │  │  │  │     ├─ test_analytics.cpython-313.pyc
   │     │  │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │  │     ├─ test_operators.cpython-313.pyc
   │     │  │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │  │     ├─ test_sorting.cpython-313.pyc
   │     │  │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │  │     ├─ test_take.cpython-313.pyc
   │     │  │  │  │     ├─ test_warnings.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ datetimes
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_cumulative.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ floating
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_comparison.py
   │     │  │  │  │  ├─ test_concat.py
   │     │  │  │  │  ├─ test_construction.py
   │     │  │  │  │  ├─ test_contains.py
   │     │  │  │  │  ├─ test_function.py
   │     │  │  │  │  ├─ test_repr.py
   │     │  │  │  │  ├─ test_to_numpy.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_comparison.cpython-313.pyc
   │     │  │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_construction.cpython-313.pyc
   │     │  │  │  │     ├─ test_contains.cpython-313.pyc
   │     │  │  │  │     ├─ test_function.cpython-313.pyc
   │     │  │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_numpy.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ integer
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_comparison.py
   │     │  │  │  │  ├─ test_concat.py
   │     │  │  │  │  ├─ test_construction.py
   │     │  │  │  │  ├─ test_dtypes.py
   │     │  │  │  │  ├─ test_function.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_reduction.py
   │     │  │  │  │  ├─ test_repr.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_comparison.cpython-313.pyc
   │     │  │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_construction.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_function.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_reduction.cpython-313.pyc
   │     │  │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ interval
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_interval.py
   │     │  │  │  │  ├─ test_interval_pyarrow.py
   │     │  │  │  │  ├─ test_overlaps.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval_pyarrow.cpython-313.pyc
   │     │  │  │  │     ├─ test_overlaps.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ masked
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_arrow_compat.py
   │     │  │  │  │  ├─ test_function.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_arrow_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_function.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ masked_shared.py
   │     │  │  │  ├─ numpy_
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_numpy.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_numpy.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ period
   │     │  │  │  │  ├─ test_arrow_compat.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arrow_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ sparse
   │     │  │  │  │  ├─ test_accessor.py
   │     │  │  │  │  ├─ test_arithmetics.py
   │     │  │  │  │  ├─ test_array.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_combine_concat.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_dtype.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_libsparse.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ test_unary.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_arithmetics.cpython-313.pyc
   │     │  │  │  │     ├─ test_array.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtype.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_libsparse.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     ├─ test_unary.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ string_
   │     │  │  │  │  ├─ test_string.py
   │     │  │  │  │  ├─ test_string_arrow.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_string.cpython-313.pyc
   │     │  │  │  │     ├─ test_string_arrow.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_array.py
   │     │  │  │  ├─ test_datetimelike.py
   │     │  │  │  ├─ test_datetimes.py
   │     │  │  │  ├─ test_ndarray_backed.py
   │     │  │  │  ├─ test_period.py
   │     │  │  │  ├─ test_timedeltas.py
   │     │  │  │  ├─ timedeltas
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_cumulative.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ masked_shared.cpython-313.pyc
   │     │  │  │     ├─ test_array.cpython-313.pyc
   │     │  │  │     ├─ test_datetimelike.cpython-313.pyc
   │     │  │  │     ├─ test_datetimes.cpython-313.pyc
   │     │  │  │     ├─ test_ndarray_backed.cpython-313.pyc
   │     │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │     ├─ test_timedeltas.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ base
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ test_constructors.py
   │     │  │  │  ├─ test_conversion.py
   │     │  │  │  ├─ test_fillna.py
   │     │  │  │  ├─ test_misc.py
   │     │  │  │  ├─ test_transpose.py
   │     │  │  │  ├─ test_unique.py
   │     │  │  │  ├─ test_value_counts.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │     ├─ test_conversion.cpython-313.pyc
   │     │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │     ├─ test_misc.cpython-313.pyc
   │     │  │  │     ├─ test_transpose.cpython-313.pyc
   │     │  │  │     ├─ test_unique.cpython-313.pyc
   │     │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ computation
   │     │  │  │  ├─ test_compat.py
   │     │  │  │  ├─ test_eval.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_compat.cpython-313.pyc
   │     │  │  │     ├─ test_eval.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ config
   │     │  │  │  ├─ test_config.py
   │     │  │  │  ├─ test_localization.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_config.cpython-313.pyc
   │     │  │  │     ├─ test_localization.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ construction
   │     │  │  │  ├─ test_extract_array.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_extract_array.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ copy_view
   │     │  │  │  ├─ index
   │     │  │  │  │  ├─ test_datetimeindex.py
   │     │  │  │  │  ├─ test_index.py
   │     │  │  │  │  ├─ test_periodindex.py
   │     │  │  │  │  ├─ test_timedeltaindex.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_datetimeindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_periodindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_timedeltaindex.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_array.py
   │     │  │  │  ├─ test_astype.py
   │     │  │  │  ├─ test_chained_assignment_deprecation.py
   │     │  │  │  ├─ test_clip.py
   │     │  │  │  ├─ test_constructors.py
   │     │  │  │  ├─ test_core_functionalities.py
   │     │  │  │  ├─ test_functions.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_internals.py
   │     │  │  │  ├─ test_interp_fillna.py
   │     │  │  │  ├─ test_methods.py
   │     │  │  │  ├─ test_replace.py
   │     │  │  │  ├─ test_setitem.py
   │     │  │  │  ├─ test_util.py
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_array.cpython-313.pyc
   │     │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │     ├─ test_chained_assignment_deprecation.cpython-313.pyc
   │     │  │  │     ├─ test_clip.cpython-313.pyc
   │     │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │     ├─ test_core_functionalities.cpython-313.pyc
   │     │  │  │     ├─ test_functions.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_internals.cpython-313.pyc
   │     │  │  │     ├─ test_interp_fillna.cpython-313.pyc
   │     │  │  │     ├─ test_methods.cpython-313.pyc
   │     │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │     ├─ test_setitem.cpython-313.pyc
   │     │  │  │     ├─ test_util.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ dtypes
   │     │  │  │  ├─ cast
   │     │  │  │  │  ├─ test_can_hold_element.py
   │     │  │  │  │  ├─ test_construct_from_scalar.py
   │     │  │  │  │  ├─ test_construct_ndarray.py
   │     │  │  │  │  ├─ test_construct_object_arr.py
   │     │  │  │  │  ├─ test_dict_compat.py
   │     │  │  │  │  ├─ test_downcast.py
   │     │  │  │  │  ├─ test_find_common_type.py
   │     │  │  │  │  ├─ test_infer_datetimelike.py
   │     │  │  │  │  ├─ test_infer_dtype.py
   │     │  │  │  │  ├─ test_maybe_box_native.py
   │     │  │  │  │  ├─ test_promote.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_can_hold_element.cpython-313.pyc
   │     │  │  │  │     ├─ test_construct_from_scalar.cpython-313.pyc
   │     │  │  │  │     ├─ test_construct_ndarray.cpython-313.pyc
   │     │  │  │  │     ├─ test_construct_object_arr.cpython-313.pyc
   │     │  │  │  │     ├─ test_dict_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_downcast.cpython-313.pyc
   │     │  │  │  │     ├─ test_find_common_type.cpython-313.pyc
   │     │  │  │  │     ├─ test_infer_datetimelike.cpython-313.pyc
   │     │  │  │  │     ├─ test_infer_dtype.cpython-313.pyc
   │     │  │  │  │     ├─ test_maybe_box_native.cpython-313.pyc
   │     │  │  │  │     ├─ test_promote.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_concat.py
   │     │  │  │  ├─ test_dtypes.py
   │     │  │  │  ├─ test_generic.py
   │     │  │  │  ├─ test_inference.py
   │     │  │  │  ├─ test_missing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │     ├─ test_generic.cpython-313.pyc
   │     │  │  │     ├─ test_inference.cpython-313.pyc
   │     │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ extension
   │     │  │  │  ├─ array_with_attr
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ test_array_with_attr.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ test_array_with_attr.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ base
   │     │  │  │  │  ├─ accumulate.py
   │     │  │  │  │  ├─ base.py
   │     │  │  │  │  ├─ casting.py
   │     │  │  │  │  ├─ constructors.py
   │     │  │  │  │  ├─ dim2.py
   │     │  │  │  │  ├─ dtype.py
   │     │  │  │  │  ├─ getitem.py
   │     │  │  │  │  ├─ groupby.py
   │     │  │  │  │  ├─ index.py
   │     │  │  │  │  ├─ interface.py
   │     │  │  │  │  ├─ io.py
   │     │  │  │  │  ├─ methods.py
   │     │  │  │  │  ├─ missing.py
   │     │  │  │  │  ├─ ops.py
   │     │  │  │  │  ├─ printing.py
   │     │  │  │  │  ├─ reduce.py
   │     │  │  │  │  ├─ reshaping.py
   │     │  │  │  │  ├─ setitem.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ accumulate.cpython-313.pyc
   │     │  │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │  │     ├─ casting.cpython-313.pyc
   │     │  │  │  │     ├─ constructors.cpython-313.pyc
   │     │  │  │  │     ├─ dim2.cpython-313.pyc
   │     │  │  │  │     ├─ dtype.cpython-313.pyc
   │     │  │  │  │     ├─ getitem.cpython-313.pyc
   │     │  │  │  │     ├─ groupby.cpython-313.pyc
   │     │  │  │  │     ├─ index.cpython-313.pyc
   │     │  │  │  │     ├─ interface.cpython-313.pyc
   │     │  │  │  │     ├─ io.cpython-313.pyc
   │     │  │  │  │     ├─ methods.cpython-313.pyc
   │     │  │  │  │     ├─ missing.cpython-313.pyc
   │     │  │  │  │     ├─ ops.cpython-313.pyc
   │     │  │  │  │     ├─ printing.cpython-313.pyc
   │     │  │  │  │     ├─ reduce.cpython-313.pyc
   │     │  │  │  │     ├─ reshaping.cpython-313.pyc
   │     │  │  │  │     ├─ setitem.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ date
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ decimal
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ test_decimal.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ test_decimal.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ json
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ test_json.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ test_json.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ list
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ test_list.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ test_list.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_arrow.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_datetime.py
   │     │  │  │  ├─ test_extension.py
   │     │  │  │  ├─ test_interval.py
   │     │  │  │  ├─ test_masked.py
   │     │  │  │  ├─ test_numpy.py
   │     │  │  │  ├─ test_period.py
   │     │  │  │  ├─ test_sparse.py
   │     │  │  │  ├─ test_string.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_arrow.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_extension.cpython-313.pyc
   │     │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │     ├─ test_masked.cpython-313.pyc
   │     │  │  │     ├─ test_numpy.cpython-313.pyc
   │     │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │     ├─ test_sparse.cpython-313.pyc
   │     │  │  │     ├─ test_string.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ frame
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ constructors
   │     │  │  │  │  ├─ test_from_dict.py
   │     │  │  │  │  ├─ test_from_records.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_from_dict.cpython-313.pyc
   │     │  │  │  │     ├─ test_from_records.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ indexing
   │     │  │  │  │  ├─ test_coercion.py
   │     │  │  │  │  ├─ test_delitem.py
   │     │  │  │  │  ├─ test_get.py
   │     │  │  │  │  ├─ test_getitem.py
   │     │  │  │  │  ├─ test_get_value.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_insert.py
   │     │  │  │  │  ├─ test_mask.py
   │     │  │  │  │  ├─ test_setitem.py
   │     │  │  │  │  ├─ test_set_value.py
   │     │  │  │  │  ├─ test_take.py
   │     │  │  │  │  ├─ test_where.py
   │     │  │  │  │  ├─ test_xs.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_coercion.cpython-313.pyc
   │     │  │  │  │     ├─ test_delitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_get.cpython-313.pyc
   │     │  │  │  │     ├─ test_getitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_value.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_insert.cpython-313.pyc
   │     │  │  │  │     ├─ test_mask.cpython-313.pyc
   │     │  │  │  │     ├─ test_setitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_value.cpython-313.pyc
   │     │  │  │  │     ├─ test_take.cpython-313.pyc
   │     │  │  │  │     ├─ test_where.cpython-313.pyc
   │     │  │  │  │     ├─ test_xs.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ methods
   │     │  │  │  │  ├─ test_add_prefix_suffix.py
   │     │  │  │  │  ├─ test_align.py
   │     │  │  │  │  ├─ test_asfreq.py
   │     │  │  │  │  ├─ test_asof.py
   │     │  │  │  │  ├─ test_assign.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_at_time.py
   │     │  │  │  │  ├─ test_between_time.py
   │     │  │  │  │  ├─ test_clip.py
   │     │  │  │  │  ├─ test_combine.py
   │     │  │  │  │  ├─ test_combine_first.py
   │     │  │  │  │  ├─ test_compare.py
   │     │  │  │  │  ├─ test_convert_dtypes.py
   │     │  │  │  │  ├─ test_copy.py
   │     │  │  │  │  ├─ test_count.py
   │     │  │  │  │  ├─ test_cov_corr.py
   │     │  │  │  │  ├─ test_describe.py
   │     │  │  │  │  ├─ test_diff.py
   │     │  │  │  │  ├─ test_dot.py
   │     │  │  │  │  ├─ test_drop.py
   │     │  │  │  │  ├─ test_droplevel.py
   │     │  │  │  │  ├─ test_dropna.py
   │     │  │  │  │  ├─ test_drop_duplicates.py
   │     │  │  │  │  ├─ test_dtypes.py
   │     │  │  │  │  ├─ test_duplicated.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_explode.py
   │     │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  ├─ test_filter.py
   │     │  │  │  │  ├─ test_first_and_last.py
   │     │  │  │  │  ├─ test_first_valid_index.py
   │     │  │  │  │  ├─ test_get_numeric_data.py
   │     │  │  │  │  ├─ test_head_tail.py
   │     │  │  │  │  ├─ test_infer_objects.py
   │     │  │  │  │  ├─ test_info.py
   │     │  │  │  │  ├─ test_interpolate.py
   │     │  │  │  │  ├─ test_isetitem.py
   │     │  │  │  │  ├─ test_isin.py
   │     │  │  │  │  ├─ test_is_homogeneous_dtype.py
   │     │  │  │  │  ├─ test_iterrows.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_map.py
   │     │  │  │  │  ├─ test_matmul.py
   │     │  │  │  │  ├─ test_nlargest.py
   │     │  │  │  │  ├─ test_pct_change.py
   │     │  │  │  │  ├─ test_pipe.py
   │     │  │  │  │  ├─ test_pop.py
   │     │  │  │  │  ├─ test_quantile.py
   │     │  │  │  │  ├─ test_rank.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_reindex_like.py
   │     │  │  │  │  ├─ test_rename.py
   │     │  │  │  │  ├─ test_rename_axis.py
   │     │  │  │  │  ├─ test_reorder_levels.py
   │     │  │  │  │  ├─ test_replace.py
   │     │  │  │  │  ├─ test_reset_index.py
   │     │  │  │  │  ├─ test_round.py
   │     │  │  │  │  ├─ test_sample.py
   │     │  │  │  │  ├─ test_select_dtypes.py
   │     │  │  │  │  ├─ test_set_axis.py
   │     │  │  │  │  ├─ test_set_index.py
   │     │  │  │  │  ├─ test_shift.py
   │     │  │  │  │  ├─ test_size.py
   │     │  │  │  │  ├─ test_sort_index.py
   │     │  │  │  │  ├─ test_sort_values.py
   │     │  │  │  │  ├─ test_swapaxes.py
   │     │  │  │  │  ├─ test_swaplevel.py
   │     │  │  │  │  ├─ test_to_csv.py
   │     │  │  │  │  ├─ test_to_dict.py
   │     │  │  │  │  ├─ test_to_dict_of_blocks.py
   │     │  │  │  │  ├─ test_to_numpy.py
   │     │  │  │  │  ├─ test_to_period.py
   │     │  │  │  │  ├─ test_to_records.py
   │     │  │  │  │  ├─ test_to_timestamp.py
   │     │  │  │  │  ├─ test_transpose.py
   │     │  │  │  │  ├─ test_truncate.py
   │     │  │  │  │  ├─ test_tz_convert.py
   │     │  │  │  │  ├─ test_tz_localize.py
   │     │  │  │  │  ├─ test_update.py
   │     │  │  │  │  ├─ test_values.py
   │     │  │  │  │  ├─ test_value_counts.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_add_prefix_suffix.cpython-313.pyc
   │     │  │  │  │     ├─ test_align.cpython-313.pyc
   │     │  │  │  │     ├─ test_asfreq.cpython-313.pyc
   │     │  │  │  │     ├─ test_asof.cpython-313.pyc
   │     │  │  │  │     ├─ test_assign.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_at_time.cpython-313.pyc
   │     │  │  │  │     ├─ test_between_time.cpython-313.pyc
   │     │  │  │  │     ├─ test_clip.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine_first.cpython-313.pyc
   │     │  │  │  │     ├─ test_compare.cpython-313.pyc
   │     │  │  │  │     ├─ test_convert_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_copy.cpython-313.pyc
   │     │  │  │  │     ├─ test_count.cpython-313.pyc
   │     │  │  │  │     ├─ test_cov_corr.cpython-313.pyc
   │     │  │  │  │     ├─ test_describe.cpython-313.pyc
   │     │  │  │  │     ├─ test_diff.cpython-313.pyc
   │     │  │  │  │     ├─ test_dot.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop.cpython-313.pyc
   │     │  │  │  │     ├─ test_droplevel.cpython-313.pyc
   │     │  │  │  │     ├─ test_dropna.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop_duplicates.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_duplicated.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_explode.cpython-313.pyc
   │     │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │     ├─ test_filter.cpython-313.pyc
   │     │  │  │  │     ├─ test_first_and_last.cpython-313.pyc
   │     │  │  │  │     ├─ test_first_valid_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_numeric_data.cpython-313.pyc
   │     │  │  │  │     ├─ test_head_tail.cpython-313.pyc
   │     │  │  │  │     ├─ test_infer_objects.cpython-313.pyc
   │     │  │  │  │     ├─ test_info.cpython-313.pyc
   │     │  │  │  │     ├─ test_interpolate.cpython-313.pyc
   │     │  │  │  │     ├─ test_isetitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_isin.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_homogeneous_dtype.cpython-313.pyc
   │     │  │  │  │     ├─ test_iterrows.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │     ├─ test_matmul.cpython-313.pyc
   │     │  │  │  │     ├─ test_nlargest.cpython-313.pyc
   │     │  │  │  │     ├─ test_pct_change.cpython-313.pyc
   │     │  │  │  │     ├─ test_pipe.cpython-313.pyc
   │     │  │  │  │     ├─ test_pop.cpython-313.pyc
   │     │  │  │  │     ├─ test_quantile.cpython-313.pyc
   │     │  │  │  │     ├─ test_rank.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex_like.cpython-313.pyc
   │     │  │  │  │     ├─ test_rename.cpython-313.pyc
   │     │  │  │  │     ├─ test_rename_axis.cpython-313.pyc
   │     │  │  │  │     ├─ test_reorder_levels.cpython-313.pyc
   │     │  │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │  │     ├─ test_reset_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │     ├─ test_sample.cpython-313.pyc
   │     │  │  │  │     ├─ test_select_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_axis.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_shift.cpython-313.pyc
   │     │  │  │  │     ├─ test_size.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_swapaxes.cpython-313.pyc
   │     │  │  │  │     ├─ test_swaplevel.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_csv.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_dict.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_dict_of_blocks.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_numpy.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_period.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_records.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_timestamp.cpython-313.pyc
   │     │  │  │  │     ├─ test_transpose.cpython-313.pyc
   │     │  │  │  │     ├─ test_truncate.cpython-313.pyc
   │     │  │  │  │     ├─ test_tz_convert.cpython-313.pyc
   │     │  │  │  │     ├─ test_tz_localize.cpython-313.pyc
   │     │  │  │  │     ├─ test_update.cpython-313.pyc
   │     │  │  │  │     ├─ test_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_alter_axes.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_arithmetic.py
   │     │  │  │  ├─ test_arrow_interface.py
   │     │  │  │  ├─ test_block_internals.py
   │     │  │  │  ├─ test_constructors.py
   │     │  │  │  ├─ test_cumulative.py
   │     │  │  │  ├─ test_iteration.py
   │     │  │  │  ├─ test_logical_ops.py
   │     │  │  │  ├─ test_nonunique_indexes.py
   │     │  │  │  ├─ test_npfuncs.py
   │     │  │  │  ├─ test_query_eval.py
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_repr.py
   │     │  │  │  ├─ test_stack_unstack.py
   │     │  │  │  ├─ test_subclass.py
   │     │  │  │  ├─ test_ufunc.py
   │     │  │  │  ├─ test_unary.py
   │     │  │  │  ├─ test_validate.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_alter_axes.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │     ├─ test_arrow_interface.cpython-313.pyc
   │     │  │  │     ├─ test_block_internals.cpython-313.pyc
   │     │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │     ├─ test_iteration.cpython-313.pyc
   │     │  │  │     ├─ test_logical_ops.cpython-313.pyc
   │     │  │  │     ├─ test_nonunique_indexes.cpython-313.pyc
   │     │  │  │     ├─ test_npfuncs.cpython-313.pyc
   │     │  │  │     ├─ test_query_eval.cpython-313.pyc
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │     ├─ test_stack_unstack.cpython-313.pyc
   │     │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │     ├─ test_ufunc.cpython-313.pyc
   │     │  │  │     ├─ test_unary.cpython-313.pyc
   │     │  │  │     ├─ test_validate.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ generic
   │     │  │  │  ├─ test_duplicate_labels.py
   │     │  │  │  ├─ test_finalize.py
   │     │  │  │  ├─ test_frame.py
   │     │  │  │  ├─ test_generic.py
   │     │  │  │  ├─ test_label_or_level_utils.py
   │     │  │  │  ├─ test_series.py
   │     │  │  │  ├─ test_to_xarray.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_duplicate_labels.cpython-313.pyc
   │     │  │  │     ├─ test_finalize.cpython-313.pyc
   │     │  │  │     ├─ test_frame.cpython-313.pyc
   │     │  │  │     ├─ test_generic.cpython-313.pyc
   │     │  │  │     ├─ test_label_or_level_utils.cpython-313.pyc
   │     │  │  │     ├─ test_series.cpython-313.pyc
   │     │  │  │     ├─ test_to_xarray.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ groupby
   │     │  │  │  ├─ aggregate
   │     │  │  │  │  ├─ test_aggregate.py
   │     │  │  │  │  ├─ test_cython.py
   │     │  │  │  │  ├─ test_numba.py
   │     │  │  │  │  ├─ test_other.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_aggregate.cpython-313.pyc
   │     │  │  │  │     ├─ test_cython.cpython-313.pyc
   │     │  │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │  │     ├─ test_other.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ methods
   │     │  │  │  │  ├─ test_corrwith.py
   │     │  │  │  │  ├─ test_describe.py
   │     │  │  │  │  ├─ test_groupby_shift_diff.py
   │     │  │  │  │  ├─ test_is_monotonic.py
   │     │  │  │  │  ├─ test_nlargest_nsmallest.py
   │     │  │  │  │  ├─ test_nth.py
   │     │  │  │  │  ├─ test_quantile.py
   │     │  │  │  │  ├─ test_rank.py
   │     │  │  │  │  ├─ test_sample.py
   │     │  │  │  │  ├─ test_size.py
   │     │  │  │  │  ├─ test_skew.py
   │     │  │  │  │  ├─ test_value_counts.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_corrwith.cpython-313.pyc
   │     │  │  │  │     ├─ test_describe.cpython-313.pyc
   │     │  │  │  │     ├─ test_groupby_shift_diff.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_nlargest_nsmallest.cpython-313.pyc
   │     │  │  │  │     ├─ test_nth.cpython-313.pyc
   │     │  │  │  │     ├─ test_quantile.cpython-313.pyc
   │     │  │  │  │     ├─ test_rank.cpython-313.pyc
   │     │  │  │  │     ├─ test_sample.cpython-313.pyc
   │     │  │  │  │     ├─ test_size.cpython-313.pyc
   │     │  │  │  │     ├─ test_skew.cpython-313.pyc
   │     │  │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_all_methods.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_apply.py
   │     │  │  │  ├─ test_apply_mutate.py
   │     │  │  │  ├─ test_bin_groupby.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_counting.py
   │     │  │  │  ├─ test_cumulative.py
   │     │  │  │  ├─ test_filters.py
   │     │  │  │  ├─ test_groupby.py
   │     │  │  │  ├─ test_groupby_dropna.py
   │     │  │  │  ├─ test_groupby_subclass.py
   │     │  │  │  ├─ test_grouping.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_index_as_string.py
   │     │  │  │  ├─ test_libgroupby.py
   │     │  │  │  ├─ test_missing.py
   │     │  │  │  ├─ test_numba.py
   │     │  │  │  ├─ test_numeric_only.py
   │     │  │  │  ├─ test_pipe.py
   │     │  │  │  ├─ test_raises.py
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_timegrouper.py
   │     │  │  │  ├─ transform
   │     │  │  │  │  ├─ test_numba.py
   │     │  │  │  │  ├─ test_transform.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │  │     ├─ test_transform.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_all_methods.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_apply.cpython-313.pyc
   │     │  │  │     ├─ test_apply_mutate.cpython-313.pyc
   │     │  │  │     ├─ test_bin_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_counting.cpython-313.pyc
   │     │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │     ├─ test_filters.cpython-313.pyc
   │     │  │  │     ├─ test_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_groupby_dropna.cpython-313.pyc
   │     │  │  │     ├─ test_groupby_subclass.cpython-313.pyc
   │     │  │  │     ├─ test_grouping.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_index_as_string.cpython-313.pyc
   │     │  │  │     ├─ test_libgroupby.cpython-313.pyc
   │     │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │     ├─ test_numeric_only.cpython-313.pyc
   │     │  │  │     ├─ test_pipe.cpython-313.pyc
   │     │  │  │     ├─ test_raises.cpython-313.pyc
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_timegrouper.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexes
   │     │  │  │  ├─ base_class
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_reshape.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_where.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_reshape.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_where.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ categorical
   │     │  │  │  │  ├─ test_append.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_category.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_map.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_append.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_category.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ datetimelike_
   │     │  │  │  │  ├─ test_drop_duplicates.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_is_monotonic.py
   │     │  │  │  │  ├─ test_nat.py
   │     │  │  │  │  ├─ test_sort_values.py
   │     │  │  │  │  ├─ test_value_counts.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_drop_duplicates.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_nat.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ datetimes
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_asof.py
   │     │  │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  │  ├─ test_delete.py
   │     │  │  │  │  │  ├─ test_factorize.py
   │     │  │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  │  ├─ test_insert.py
   │     │  │  │  │  │  ├─ test_isocalendar.py
   │     │  │  │  │  │  ├─ test_map.py
   │     │  │  │  │  │  ├─ test_normalize.py
   │     │  │  │  │  │  ├─ test_repeat.py
   │     │  │  │  │  │  ├─ test_resolution.py
   │     │  │  │  │  │  ├─ test_round.py
   │     │  │  │  │  │  ├─ test_shift.py
   │     │  │  │  │  │  ├─ test_snap.py
   │     │  │  │  │  │  ├─ test_to_frame.py
   │     │  │  │  │  │  ├─ test_to_julian_date.py
   │     │  │  │  │  │  ├─ test_to_period.py
   │     │  │  │  │  │  ├─ test_to_pydatetime.py
   │     │  │  │  │  │  ├─ test_to_series.py
   │     │  │  │  │  │  ├─ test_tz_convert.py
   │     │  │  │  │  │  ├─ test_tz_localize.py
   │     │  │  │  │  │  ├─ test_unique.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_asof.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_delete.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_factorize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_insert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_isocalendar.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_normalize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_repeat.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_resolution.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_shift.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_snap.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_frame.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_julian_date.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_period.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_pydatetime.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_series.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tz_convert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tz_localize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_unique.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_datetime.py
   │     │  │  │  │  ├─ test_date_range.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_freq_attr.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_iter.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_npfuncs.py
   │     │  │  │  │  ├─ test_ops.py
   │     │  │  │  │  ├─ test_partial_slicing.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_scalar_compat.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_timezones.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │  │     ├─ test_date_range.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_freq_attr.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_iter.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_npfuncs.cpython-313.pyc
   │     │  │  │  │     ├─ test_ops.cpython-313.pyc
   │     │  │  │  │     ├─ test_partial_slicing.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_scalar_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_timezones.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ interval
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_interval.py
   │     │  │  │  │  ├─ test_interval_range.py
   │     │  │  │  │  ├─ test_interval_tree.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval_range.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval_tree.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ multi
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_analytics.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_compat.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_conversion.py
   │     │  │  │  │  ├─ test_copy.py
   │     │  │  │  │  ├─ test_drop.py
   │     │  │  │  │  ├─ test_duplicates.py
   │     │  │  │  │  ├─ test_equivalence.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_get_level_values.py
   │     │  │  │  │  ├─ test_get_set.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_integrity.py
   │     │  │  │  │  ├─ test_isin.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_lexsort.py
   │     │  │  │  │  ├─ test_missing.py
   │     │  │  │  │  ├─ test_monotonic.py
   │     │  │  │  │  ├─ test_names.py
   │     │  │  │  │  ├─ test_partial_indexing.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_reshape.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_sorting.py
   │     │  │  │  │  ├─ test_take.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_analytics.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_conversion.cpython-313.pyc
   │     │  │  │  │     ├─ test_copy.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop.cpython-313.pyc
   │     │  │  │  │     ├─ test_duplicates.cpython-313.pyc
   │     │  │  │  │     ├─ test_equivalence.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_level_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_set.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_integrity.cpython-313.pyc
   │     │  │  │  │     ├─ test_isin.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_lexsort.cpython-313.pyc
   │     │  │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │  │     ├─ test_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_names.cpython-313.pyc
   │     │  │  │  │     ├─ test_partial_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_reshape.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_sorting.cpython-313.pyc
   │     │  │  │  │     ├─ test_take.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ numeric
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_numeric.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ object
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ period
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_asfreq.py
   │     │  │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  │  ├─ test_factorize.py
   │     │  │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  │  ├─ test_insert.py
   │     │  │  │  │  │  ├─ test_is_full.py
   │     │  │  │  │  │  ├─ test_repeat.py
   │     │  │  │  │  │  ├─ test_shift.py
   │     │  │  │  │  │  ├─ test_to_timestamp.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_asfreq.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_factorize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_insert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_is_full.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_repeat.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_shift.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_timestamp.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_freq_attr.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_monotonic.py
   │     │  │  │  │  ├─ test_partial_slicing.py
   │     │  │  │  │  ├─ test_period.py
   │     │  │  │  │  ├─ test_period_range.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_resolution.py
   │     │  │  │  │  ├─ test_scalar_compat.py
   │     │  │  │  │  ├─ test_searchsorted.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_tools.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_freq_attr.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_partial_slicing.cpython-313.pyc
   │     │  │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │  │     ├─ test_period_range.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_resolution.cpython-313.pyc
   │     │  │  │  │     ├─ test_scalar_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_searchsorted.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_tools.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ ranges
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_range.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_range.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_any_index.py
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_datetimelike.py
   │     │  │  │  ├─ test_engines.py
   │     │  │  │  ├─ test_frozen.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_index_new.py
   │     │  │  │  ├─ test_numpy_compat.py
   │     │  │  │  ├─ test_old_base.py
   │     │  │  │  ├─ test_setops.py
   │     │  │  │  ├─ test_subclass.py
   │     │  │  │  ├─ timedeltas
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  │  ├─ test_factorize.py
   │     │  │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  │  ├─ test_insert.py
   │     │  │  │  │  │  ├─ test_repeat.py
   │     │  │  │  │  │  ├─ test_shift.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_factorize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_insert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_repeat.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_shift.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_delete.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_freq_attr.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_ops.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_scalar_compat.py
   │     │  │  │  │  ├─ test_searchsorted.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_timedelta.py
   │     │  │  │  │  ├─ test_timedelta_range.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_delete.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_freq_attr.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_ops.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_scalar_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_searchsorted.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_timedelta.cpython-313.pyc
   │     │  │  │  │     ├─ test_timedelta_range.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_any_index.cpython-313.pyc
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_datetimelike.cpython-313.pyc
   │     │  │  │     ├─ test_engines.cpython-313.pyc
   │     │  │  │     ├─ test_frozen.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_index_new.cpython-313.pyc
   │     │  │  │     ├─ test_numpy_compat.cpython-313.pyc
   │     │  │  │     ├─ test_old_base.cpython-313.pyc
   │     │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexing
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ interval
   │     │  │  │  │  ├─ test_interval.py
   │     │  │  │  │  ├─ test_interval_new.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval_new.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ multiindex
   │     │  │  │  │  ├─ test_chaining_and_caching.py
   │     │  │  │  │  ├─ test_datetime.py
   │     │  │  │  │  ├─ test_getitem.py
   │     │  │  │  │  ├─ test_iloc.py
   │     │  │  │  │  ├─ test_indexing_slow.py
   │     │  │  │  │  ├─ test_loc.py
   │     │  │  │  │  ├─ test_multiindex.py
   │     │  │  │  │  ├─ test_partial.py
   │     │  │  │  │  ├─ test_setitem.py
   │     │  │  │  │  ├─ test_slice.py
   │     │  │  │  │  ├─ test_sorted.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_chaining_and_caching.cpython-313.pyc
   │     │  │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │  │     ├─ test_getitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_iloc.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing_slow.cpython-313.pyc
   │     │  │  │  │     ├─ test_loc.cpython-313.pyc
   │     │  │  │  │     ├─ test_multiindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_partial.cpython-313.pyc
   │     │  │  │  │     ├─ test_setitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_slice.cpython-313.pyc
   │     │  │  │  │     ├─ test_sorted.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_at.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_chaining_and_caching.py
   │     │  │  │  ├─ test_check_indexer.py
   │     │  │  │  ├─ test_coercion.py
   │     │  │  │  ├─ test_datetime.py
   │     │  │  │  ├─ test_floats.py
   │     │  │  │  ├─ test_iat.py
   │     │  │  │  ├─ test_iloc.py
   │     │  │  │  ├─ test_indexers.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_loc.py
   │     │  │  │  ├─ test_na_indexing.py
   │     │  │  │  ├─ test_partial.py
   │     │  │  │  ├─ test_scalar.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_at.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_chaining_and_caching.cpython-313.pyc
   │     │  │  │     ├─ test_check_indexer.cpython-313.pyc
   │     │  │  │     ├─ test_coercion.cpython-313.pyc
   │     │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_floats.cpython-313.pyc
   │     │  │  │     ├─ test_iat.cpython-313.pyc
   │     │  │  │     ├─ test_iloc.cpython-313.pyc
   │     │  │  │     ├─ test_indexers.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_loc.cpython-313.pyc
   │     │  │  │     ├─ test_na_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_partial.cpython-313.pyc
   │     │  │  │     ├─ test_scalar.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ interchange
   │     │  │  │  ├─ test_impl.py
   │     │  │  │  ├─ test_spec_conformance.py
   │     │  │  │  ├─ test_utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_impl.cpython-313.pyc
   │     │  │  │     ├─ test_spec_conformance.cpython-313.pyc
   │     │  │  │     ├─ test_utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ internals
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_internals.py
   │     │  │  │  ├─ test_managers.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_internals.cpython-313.pyc
   │     │  │  │     ├─ test_managers.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ io
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ excel
   │     │  │  │  │  ├─ test_odf.py
   │     │  │  │  │  ├─ test_odswriter.py
   │     │  │  │  │  ├─ test_openpyxl.py
   │     │  │  │  │  ├─ test_readers.py
   │     │  │  │  │  ├─ test_style.py
   │     │  │  │  │  ├─ test_writers.py
   │     │  │  │  │  ├─ test_xlrd.py
   │     │  │  │  │  ├─ test_xlsxwriter.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_odf.cpython-313.pyc
   │     │  │  │  │     ├─ test_odswriter.cpython-313.pyc
   │     │  │  │  │     ├─ test_openpyxl.cpython-313.pyc
   │     │  │  │  │     ├─ test_readers.cpython-313.pyc
   │     │  │  │  │     ├─ test_style.cpython-313.pyc
   │     │  │  │  │     ├─ test_writers.cpython-313.pyc
   │     │  │  │  │     ├─ test_xlrd.cpython-313.pyc
   │     │  │  │  │     ├─ test_xlsxwriter.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ formats
   │     │  │  │  │  ├─ style
   │     │  │  │  │  │  ├─ test_bar.py
   │     │  │  │  │  │  ├─ test_exceptions.py
   │     │  │  │  │  │  ├─ test_format.py
   │     │  │  │  │  │  ├─ test_highlight.py
   │     │  │  │  │  │  ├─ test_html.py
   │     │  │  │  │  │  ├─ test_matplotlib.py
   │     │  │  │  │  │  ├─ test_non_unique.py
   │     │  │  │  │  │  ├─ test_style.py
   │     │  │  │  │  │  ├─ test_tooltip.py
   │     │  │  │  │  │  ├─ test_to_latex.py
   │     │  │  │  │  │  ├─ test_to_string.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_bar.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_exceptions.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_format.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_highlight.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_html.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_matplotlib.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_non_unique.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_style.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tooltip.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_latex.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_string.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_console.py
   │     │  │  │  │  ├─ test_css.py
   │     │  │  │  │  ├─ test_eng_formatting.py
   │     │  │  │  │  ├─ test_format.py
   │     │  │  │  │  ├─ test_ipython_compat.py
   │     │  │  │  │  ├─ test_printing.py
   │     │  │  │  │  ├─ test_to_csv.py
   │     │  │  │  │  ├─ test_to_excel.py
   │     │  │  │  │  ├─ test_to_html.py
   │     │  │  │  │  ├─ test_to_latex.py
   │     │  │  │  │  ├─ test_to_markdown.py
   │     │  │  │  │  ├─ test_to_string.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_console.cpython-313.pyc
   │     │  │  │  │     ├─ test_css.cpython-313.pyc
   │     │  │  │  │     ├─ test_eng_formatting.cpython-313.pyc
   │     │  │  │  │     ├─ test_format.cpython-313.pyc
   │     │  │  │  │     ├─ test_ipython_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_printing.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_csv.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_excel.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_html.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_latex.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_markdown.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_string.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ generate_legacy_storage_files.py
   │     │  │  │  ├─ json
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_compression.py
   │     │  │  │  │  ├─ test_deprecated_kwargs.py
   │     │  │  │  │  ├─ test_json_table_schema.py
   │     │  │  │  │  ├─ test_json_table_schema_ext_dtype.py
   │     │  │  │  │  ├─ test_normalize.py
   │     │  │  │  │  ├─ test_pandas.py
   │     │  │  │  │  ├─ test_readlines.py
   │     │  │  │  │  ├─ test_ujson.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_compression.cpython-313.pyc
   │     │  │  │  │     ├─ test_deprecated_kwargs.cpython-313.pyc
   │     │  │  │  │     ├─ test_json_table_schema.cpython-313.pyc
   │     │  │  │  │     ├─ test_json_table_schema_ext_dtype.cpython-313.pyc
   │     │  │  │  │     ├─ test_normalize.cpython-313.pyc
   │     │  │  │  │     ├─ test_pandas.cpython-313.pyc
   │     │  │  │  │     ├─ test_readlines.cpython-313.pyc
   │     │  │  │  │     ├─ test_ujson.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ parser
   │     │  │  │  │  ├─ common
   │     │  │  │  │  │  ├─ test_chunksize.py
   │     │  │  │  │  │  ├─ test_common_basic.py
   │     │  │  │  │  │  ├─ test_data_list.py
   │     │  │  │  │  │  ├─ test_decimal.py
   │     │  │  │  │  │  ├─ test_file_buffer_url.py
   │     │  │  │  │  │  ├─ test_float.py
   │     │  │  │  │  │  ├─ test_index.py
   │     │  │  │  │  │  ├─ test_inf.py
   │     │  │  │  │  │  ├─ test_ints.py
   │     │  │  │  │  │  ├─ test_iterator.py
   │     │  │  │  │  │  ├─ test_read_errors.py
   │     │  │  │  │  │  ├─ test_verbose.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_chunksize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_common_basic.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_data_list.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_decimal.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_file_buffer_url.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_float.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_index.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_inf.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_ints.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_iterator.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_read_errors.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_verbose.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ dtypes
   │     │  │  │  │  │  ├─ test_categorical.py
   │     │  │  │  │  │  ├─ test_dtypes_basic.py
   │     │  │  │  │  │  ├─ test_empty.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_dtypes_basic.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_empty.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_comment.py
   │     │  │  │  │  ├─ test_compression.py
   │     │  │  │  │  ├─ test_concatenate_chunks.py
   │     │  │  │  │  ├─ test_converters.py
   │     │  │  │  │  ├─ test_c_parser_only.py
   │     │  │  │  │  ├─ test_dialect.py
   │     │  │  │  │  ├─ test_encoding.py
   │     │  │  │  │  ├─ test_header.py
   │     │  │  │  │  ├─ test_index_col.py
   │     │  │  │  │  ├─ test_mangle_dupes.py
   │     │  │  │  │  ├─ test_multi_thread.py
   │     │  │  │  │  ├─ test_na_values.py
   │     │  │  │  │  ├─ test_network.py
   │     │  │  │  │  ├─ test_parse_dates.py
   │     │  │  │  │  ├─ test_python_parser_only.py
   │     │  │  │  │  ├─ test_quoting.py
   │     │  │  │  │  ├─ test_read_fwf.py
   │     │  │  │  │  ├─ test_skiprows.py
   │     │  │  │  │  ├─ test_textreader.py
   │     │  │  │  │  ├─ test_unsupported.py
   │     │  │  │  │  ├─ test_upcast.py
   │     │  │  │  │  ├─ usecols
   │     │  │  │  │  │  ├─ test_parse_dates.py
   │     │  │  │  │  │  ├─ test_strings.py
   │     │  │  │  │  │  ├─ test_usecols_basic.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_parse_dates.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_strings.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_usecols_basic.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_comment.cpython-313.pyc
   │     │  │  │  │     ├─ test_compression.cpython-313.pyc
   │     │  │  │  │     ├─ test_concatenate_chunks.cpython-313.pyc
   │     │  │  │  │     ├─ test_converters.cpython-313.pyc
   │     │  │  │  │     ├─ test_c_parser_only.cpython-313.pyc
   │     │  │  │  │     ├─ test_dialect.cpython-313.pyc
   │     │  │  │  │     ├─ test_encoding.cpython-313.pyc
   │     │  │  │  │     ├─ test_header.cpython-313.pyc
   │     │  │  │  │     ├─ test_index_col.cpython-313.pyc
   │     │  │  │  │     ├─ test_mangle_dupes.cpython-313.pyc
   │     │  │  │  │     ├─ test_multi_thread.cpython-313.pyc
   │     │  │  │  │     ├─ test_na_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_network.cpython-313.pyc
   │     │  │  │  │     ├─ test_parse_dates.cpython-313.pyc
   │     │  │  │  │     ├─ test_python_parser_only.cpython-313.pyc
   │     │  │  │  │     ├─ test_quoting.cpython-313.pyc
   │     │  │  │  │     ├─ test_read_fwf.cpython-313.pyc
   │     │  │  │  │     ├─ test_skiprows.cpython-313.pyc
   │     │  │  │  │     ├─ test_textreader.cpython-313.pyc
   │     │  │  │  │     ├─ test_unsupported.cpython-313.pyc
   │     │  │  │  │     ├─ test_upcast.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ pytables
   │     │  │  │  │  ├─ common.py
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_append.py
   │     │  │  │  │  ├─ test_categorical.py
   │     │  │  │  │  ├─ test_compat.py
   │     │  │  │  │  ├─ test_complex.py
   │     │  │  │  │  ├─ test_errors.py
   │     │  │  │  │  ├─ test_file_handling.py
   │     │  │  │  │  ├─ test_keys.py
   │     │  │  │  │  ├─ test_put.py
   │     │  │  │  │  ├─ test_pytables_missing.py
   │     │  │  │  │  ├─ test_read.py
   │     │  │  │  │  ├─ test_retain_attributes.py
   │     │  │  │  │  ├─ test_round_trip.py
   │     │  │  │  │  ├─ test_select.py
   │     │  │  │  │  ├─ test_store.py
   │     │  │  │  │  ├─ test_subclass.py
   │     │  │  │  │  ├─ test_timezones.py
   │     │  │  │  │  ├─ test_time_series.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_append.cpython-313.pyc
   │     │  │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │  │     ├─ test_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_complex.cpython-313.pyc
   │     │  │  │  │     ├─ test_errors.cpython-313.pyc
   │     │  │  │  │     ├─ test_file_handling.cpython-313.pyc
   │     │  │  │  │     ├─ test_keys.cpython-313.pyc
   │     │  │  │  │     ├─ test_put.cpython-313.pyc
   │     │  │  │  │     ├─ test_pytables_missing.cpython-313.pyc
   │     │  │  │  │     ├─ test_read.cpython-313.pyc
   │     │  │  │  │     ├─ test_retain_attributes.cpython-313.pyc
   │     │  │  │  │     ├─ test_round_trip.cpython-313.pyc
   │     │  │  │  │     ├─ test_select.cpython-313.pyc
   │     │  │  │  │     ├─ test_store.cpython-313.pyc
   │     │  │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │  │     ├─ test_timezones.cpython-313.pyc
   │     │  │  │  │     ├─ test_time_series.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ sas
   │     │  │  │  │  ├─ test_byteswap.py
   │     │  │  │  │  ├─ test_sas.py
   │     │  │  │  │  ├─ test_sas7bdat.py
   │     │  │  │  │  ├─ test_xport.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_byteswap.cpython-313.pyc
   │     │  │  │  │     ├─ test_sas.cpython-313.pyc
   │     │  │  │  │     ├─ test_sas7bdat.cpython-313.pyc
   │     │  │  │  │     ├─ test_xport.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_clipboard.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_compression.py
   │     │  │  │  ├─ test_feather.py
   │     │  │  │  ├─ test_fsspec.py
   │     │  │  │  ├─ test_gbq.py
   │     │  │  │  ├─ test_gcs.py
   │     │  │  │  ├─ test_html.py
   │     │  │  │  ├─ test_http_headers.py
   │     │  │  │  ├─ test_orc.py
   │     │  │  │  ├─ test_parquet.py
   │     │  │  │  ├─ test_pickle.py
   │     │  │  │  ├─ test_s3.py
   │     │  │  │  ├─ test_spss.py
   │     │  │  │  ├─ test_sql.py
   │     │  │  │  ├─ test_stata.py
   │     │  │  │  ├─ xml
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_to_xml.py
   │     │  │  │  │  ├─ test_xml.py
   │     │  │  │  │  ├─ test_xml_dtypes.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_xml.cpython-313.pyc
   │     │  │  │  │     ├─ test_xml.cpython-313.pyc
   │     │  │  │  │     ├─ test_xml_dtypes.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ generate_legacy_storage_files.cpython-313.pyc
   │     │  │  │     ├─ test_clipboard.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_compression.cpython-313.pyc
   │     │  │  │     ├─ test_feather.cpython-313.pyc
   │     │  │  │     ├─ test_fsspec.cpython-313.pyc
   │     │  │  │     ├─ test_gbq.cpython-313.pyc
   │     │  │  │     ├─ test_gcs.cpython-313.pyc
   │     │  │  │     ├─ test_html.cpython-313.pyc
   │     │  │  │     ├─ test_http_headers.cpython-313.pyc
   │     │  │  │     ├─ test_orc.cpython-313.pyc
   │     │  │  │     ├─ test_parquet.cpython-313.pyc
   │     │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │     ├─ test_s3.cpython-313.pyc
   │     │  │  │     ├─ test_spss.cpython-313.pyc
   │     │  │  │     ├─ test_sql.cpython-313.pyc
   │     │  │  │     ├─ test_stata.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ libs
   │     │  │  │  ├─ test_hashtable.py
   │     │  │  │  ├─ test_join.py
   │     │  │  │  ├─ test_lib.py
   │     │  │  │  ├─ test_libalgos.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_hashtable.cpython-313.pyc
   │     │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │     ├─ test_lib.cpython-313.pyc
   │     │  │  │     ├─ test_libalgos.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ plotting
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ frame
   │     │  │  │  │  ├─ test_frame.py
   │     │  │  │  │  ├─ test_frame_color.py
   │     │  │  │  │  ├─ test_frame_groupby.py
   │     │  │  │  │  ├─ test_frame_legend.py
   │     │  │  │  │  ├─ test_frame_subplots.py
   │     │  │  │  │  ├─ test_hist_box_by.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_frame.cpython-313.pyc
   │     │  │  │  │     ├─ test_frame_color.cpython-313.pyc
   │     │  │  │  │     ├─ test_frame_groupby.cpython-313.pyc
   │     │  │  │  │     ├─ test_frame_legend.cpython-313.pyc
   │     │  │  │  │     ├─ test_frame_subplots.cpython-313.pyc
   │     │  │  │  │     ├─ test_hist_box_by.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_backend.py
   │     │  │  │  ├─ test_boxplot_method.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_converter.py
   │     │  │  │  ├─ test_datetimelike.py
   │     │  │  │  ├─ test_groupby.py
   │     │  │  │  ├─ test_hist_method.py
   │     │  │  │  ├─ test_misc.py
   │     │  │  │  ├─ test_series.py
   │     │  │  │  ├─ test_style.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_backend.cpython-313.pyc
   │     │  │  │     ├─ test_boxplot_method.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_converter.cpython-313.pyc
   │     │  │  │     ├─ test_datetimelike.cpython-313.pyc
   │     │  │  │     ├─ test_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_hist_method.cpython-313.pyc
   │     │  │  │     ├─ test_misc.cpython-313.pyc
   │     │  │  │     ├─ test_series.cpython-313.pyc
   │     │  │  │     ├─ test_style.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ reductions
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_stat_reductions.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_stat_reductions.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ resample
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_datetime_index.py
   │     │  │  │  ├─ test_period_index.py
   │     │  │  │  ├─ test_resampler_grouper.py
   │     │  │  │  ├─ test_resample_api.py
   │     │  │  │  ├─ test_timedelta.py
   │     │  │  │  ├─ test_time_grouper.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_datetime_index.cpython-313.pyc
   │     │  │  │     ├─ test_period_index.cpython-313.pyc
   │     │  │  │     ├─ test_resampler_grouper.cpython-313.pyc
   │     │  │  │     ├─ test_resample_api.cpython-313.pyc
   │     │  │  │     ├─ test_timedelta.cpython-313.pyc
   │     │  │  │     ├─ test_time_grouper.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ reshape
   │     │  │  │  ├─ concat
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_append.py
   │     │  │  │  │  ├─ test_append_common.py
   │     │  │  │  │  ├─ test_categorical.py
   │     │  │  │  │  ├─ test_concat.py
   │     │  │  │  │  ├─ test_dataframe.py
   │     │  │  │  │  ├─ test_datetimes.py
   │     │  │  │  │  ├─ test_empty.py
   │     │  │  │  │  ├─ test_index.py
   │     │  │  │  │  ├─ test_invalid.py
   │     │  │  │  │  ├─ test_series.py
   │     │  │  │  │  ├─ test_sort.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_append.cpython-313.pyc
   │     │  │  │  │     ├─ test_append_common.cpython-313.pyc
   │     │  │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_dataframe.cpython-313.pyc
   │     │  │  │  │     ├─ test_datetimes.cpython-313.pyc
   │     │  │  │  │     ├─ test_empty.cpython-313.pyc
   │     │  │  │  │     ├─ test_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_invalid.cpython-313.pyc
   │     │  │  │  │     ├─ test_series.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ merge
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_merge.py
   │     │  │  │  │  ├─ test_merge_asof.py
   │     │  │  │  │  ├─ test_merge_cross.py
   │     │  │  │  │  ├─ test_merge_index_as_string.py
   │     │  │  │  │  ├─ test_merge_ordered.py
   │     │  │  │  │  ├─ test_multi.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_asof.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_cross.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_index_as_string.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_ordered.cpython-313.pyc
   │     │  │  │  │     ├─ test_multi.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_crosstab.py
   │     │  │  │  ├─ test_cut.py
   │     │  │  │  ├─ test_from_dummies.py
   │     │  │  │  ├─ test_get_dummies.py
   │     │  │  │  ├─ test_melt.py
   │     │  │  │  ├─ test_pivot.py
   │     │  │  │  ├─ test_pivot_multilevel.py
   │     │  │  │  ├─ test_qcut.py
   │     │  │  │  ├─ test_union_categoricals.py
   │     │  │  │  ├─ test_util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_crosstab.cpython-313.pyc
   │     │  │  │     ├─ test_cut.cpython-313.pyc
   │     │  │  │     ├─ test_from_dummies.cpython-313.pyc
   │     │  │  │     ├─ test_get_dummies.cpython-313.pyc
   │     │  │  │     ├─ test_melt.cpython-313.pyc
   │     │  │  │     ├─ test_pivot.cpython-313.pyc
   │     │  │  │     ├─ test_pivot_multilevel.cpython-313.pyc
   │     │  │  │     ├─ test_qcut.cpython-313.pyc
   │     │  │  │     ├─ test_union_categoricals.cpython-313.pyc
   │     │  │  │     ├─ test_util.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ scalar
   │     │  │  │  ├─ interval
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_contains.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_interval.py
   │     │  │  │  │  ├─ test_overlaps.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_contains.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │  │     ├─ test_overlaps.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ period
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_asfreq.py
   │     │  │  │  │  ├─ test_period.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_asfreq.cpython-313.pyc
   │     │  │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_nat.py
   │     │  │  │  ├─ test_na_scalar.py
   │     │  │  │  ├─ timedelta
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_as_unit.py
   │     │  │  │  │  │  ├─ test_round.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_as_unit.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_timedelta.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_timedelta.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ timestamp
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_as_unit.py
   │     │  │  │  │  │  ├─ test_normalize.py
   │     │  │  │  │  │  ├─ test_replace.py
   │     │  │  │  │  │  ├─ test_round.py
   │     │  │  │  │  │  ├─ test_timestamp_method.py
   │     │  │  │  │  │  ├─ test_to_julian_date.py
   │     │  │  │  │  │  ├─ test_to_pydatetime.py
   │     │  │  │  │  │  ├─ test_tz_convert.py
   │     │  │  │  │  │  ├─ test_tz_localize.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_as_unit.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_normalize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_timestamp_method.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_julian_date.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_pydatetime.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tz_convert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tz_localize.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_comparisons.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_timestamp.py
   │     │  │  │  │  ├─ test_timezones.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_comparisons.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_timestamp.cpython-313.pyc
   │     │  │  │  │     ├─ test_timezones.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_nat.cpython-313.pyc
   │     │  │  │     ├─ test_na_scalar.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ series
   │     │  │  │  ├─ accessors
   │     │  │  │  │  ├─ test_cat_accessor.py
   │     │  │  │  │  ├─ test_dt_accessor.py
   │     │  │  │  │  ├─ test_list_accessor.py
   │     │  │  │  │  ├─ test_sparse_accessor.py
   │     │  │  │  │  ├─ test_struct_accessor.py
   │     │  │  │  │  ├─ test_str_accessor.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_cat_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_dt_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_list_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_sparse_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_struct_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_str_accessor.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ indexing
   │     │  │  │  │  ├─ test_datetime.py
   │     │  │  │  │  ├─ test_delitem.py
   │     │  │  │  │  ├─ test_get.py
   │     │  │  │  │  ├─ test_getitem.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_mask.py
   │     │  │  │  │  ├─ test_setitem.py
   │     │  │  │  │  ├─ test_set_value.py
   │     │  │  │  │  ├─ test_take.py
   │     │  │  │  │  ├─ test_where.py
   │     │  │  │  │  ├─ test_xs.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │  │     ├─ test_delitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_get.cpython-313.pyc
   │     │  │  │  │     ├─ test_getitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_mask.cpython-313.pyc
   │     │  │  │  │     ├─ test_setitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_value.cpython-313.pyc
   │     │  │  │  │     ├─ test_take.cpython-313.pyc
   │     │  │  │  │     ├─ test_where.cpython-313.pyc
   │     │  │  │  │     ├─ test_xs.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ methods
   │     │  │  │  │  ├─ test_add_prefix_suffix.py
   │     │  │  │  │  ├─ test_align.py
   │     │  │  │  │  ├─ test_argsort.py
   │     │  │  │  │  ├─ test_asof.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_autocorr.py
   │     │  │  │  │  ├─ test_between.py
   │     │  │  │  │  ├─ test_case_when.py
   │     │  │  │  │  ├─ test_clip.py
   │     │  │  │  │  ├─ test_combine.py
   │     │  │  │  │  ├─ test_combine_first.py
   │     │  │  │  │  ├─ test_compare.py
   │     │  │  │  │  ├─ test_convert_dtypes.py
   │     │  │  │  │  ├─ test_copy.py
   │     │  │  │  │  ├─ test_count.py
   │     │  │  │  │  ├─ test_cov_corr.py
   │     │  │  │  │  ├─ test_describe.py
   │     │  │  │  │  ├─ test_diff.py
   │     │  │  │  │  ├─ test_drop.py
   │     │  │  │  │  ├─ test_dropna.py
   │     │  │  │  │  ├─ test_drop_duplicates.py
   │     │  │  │  │  ├─ test_dtypes.py
   │     │  │  │  │  ├─ test_duplicated.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_explode.py
   │     │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  ├─ test_get_numeric_data.py
   │     │  │  │  │  ├─ test_head_tail.py
   │     │  │  │  │  ├─ test_infer_objects.py
   │     │  │  │  │  ├─ test_info.py
   │     │  │  │  │  ├─ test_interpolate.py
   │     │  │  │  │  ├─ test_isin.py
   │     │  │  │  │  ├─ test_isna.py
   │     │  │  │  │  ├─ test_is_monotonic.py
   │     │  │  │  │  ├─ test_is_unique.py
   │     │  │  │  │  ├─ test_item.py
   │     │  │  │  │  ├─ test_map.py
   │     │  │  │  │  ├─ test_matmul.py
   │     │  │  │  │  ├─ test_nlargest.py
   │     │  │  │  │  ├─ test_nunique.py
   │     │  │  │  │  ├─ test_pct_change.py
   │     │  │  │  │  ├─ test_pop.py
   │     │  │  │  │  ├─ test_quantile.py
   │     │  │  │  │  ├─ test_rank.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_reindex_like.py
   │     │  │  │  │  ├─ test_rename.py
   │     │  │  │  │  ├─ test_rename_axis.py
   │     │  │  │  │  ├─ test_repeat.py
   │     │  │  │  │  ├─ test_replace.py
   │     │  │  │  │  ├─ test_reset_index.py
   │     │  │  │  │  ├─ test_round.py
   │     │  │  │  │  ├─ test_searchsorted.py
   │     │  │  │  │  ├─ test_set_name.py
   │     │  │  │  │  ├─ test_size.py
   │     │  │  │  │  ├─ test_sort_index.py
   │     │  │  │  │  ├─ test_sort_values.py
   │     │  │  │  │  ├─ test_tolist.py
   │     │  │  │  │  ├─ test_to_csv.py
   │     │  │  │  │  ├─ test_to_dict.py
   │     │  │  │  │  ├─ test_to_frame.py
   │     │  │  │  │  ├─ test_to_numpy.py
   │     │  │  │  │  ├─ test_truncate.py
   │     │  │  │  │  ├─ test_tz_localize.py
   │     │  │  │  │  ├─ test_unique.py
   │     │  │  │  │  ├─ test_unstack.py
   │     │  │  │  │  ├─ test_update.py
   │     │  │  │  │  ├─ test_values.py
   │     │  │  │  │  ├─ test_value_counts.py
   │     │  │  │  │  ├─ test_view.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_add_prefix_suffix.cpython-313.pyc
   │     │  │  │  │     ├─ test_align.cpython-313.pyc
   │     │  │  │  │     ├─ test_argsort.cpython-313.pyc
   │     │  │  │  │     ├─ test_asof.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_autocorr.cpython-313.pyc
   │     │  │  │  │     ├─ test_between.cpython-313.pyc
   │     │  │  │  │     ├─ test_case_when.cpython-313.pyc
   │     │  │  │  │     ├─ test_clip.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine_first.cpython-313.pyc
   │     │  │  │  │     ├─ test_compare.cpython-313.pyc
   │     │  │  │  │     ├─ test_convert_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_copy.cpython-313.pyc
   │     │  │  │  │     ├─ test_count.cpython-313.pyc
   │     │  │  │  │     ├─ test_cov_corr.cpython-313.pyc
   │     │  │  │  │     ├─ test_describe.cpython-313.pyc
   │     │  │  │  │     ├─ test_diff.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop.cpython-313.pyc
   │     │  │  │  │     ├─ test_dropna.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop_duplicates.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_duplicated.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_explode.cpython-313.pyc
   │     │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_numeric_data.cpython-313.pyc
   │     │  │  │  │     ├─ test_head_tail.cpython-313.pyc
   │     │  │  │  │     ├─ test_infer_objects.cpython-313.pyc
   │     │  │  │  │     ├─ test_info.cpython-313.pyc
   │     │  │  │  │     ├─ test_interpolate.cpython-313.pyc
   │     │  │  │  │     ├─ test_isin.cpython-313.pyc
   │     │  │  │  │     ├─ test_isna.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_unique.cpython-313.pyc
   │     │  │  │  │     ├─ test_item.cpython-313.pyc
   │     │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │     ├─ test_matmul.cpython-313.pyc
   │     │  │  │  │     ├─ test_nlargest.cpython-313.pyc
   │     │  │  │  │     ├─ test_nunique.cpython-313.pyc
   │     │  │  │  │     ├─ test_pct_change.cpython-313.pyc
   │     │  │  │  │     ├─ test_pop.cpython-313.pyc
   │     │  │  │  │     ├─ test_quantile.cpython-313.pyc
   │     │  │  │  │     ├─ test_rank.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex_like.cpython-313.pyc
   │     │  │  │  │     ├─ test_rename.cpython-313.pyc
   │     │  │  │  │     ├─ test_rename_axis.cpython-313.pyc
   │     │  │  │  │     ├─ test_repeat.cpython-313.pyc
   │     │  │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │  │     ├─ test_reset_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │     ├─ test_searchsorted.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_name.cpython-313.pyc
   │     │  │  │  │     ├─ test_size.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_tolist.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_csv.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_dict.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_frame.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_numpy.cpython-313.pyc
   │     │  │  │  │     ├─ test_truncate.cpython-313.pyc
   │     │  │  │  │     ├─ test_tz_localize.cpython-313.pyc
   │     │  │  │  │     ├─ test_unique.cpython-313.pyc
   │     │  │  │  │     ├─ test_unstack.cpython-313.pyc
   │     │  │  │  │     ├─ test_update.cpython-313.pyc
   │     │  │  │  │     ├─ test_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │  │     ├─ test_view.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_arithmetic.py
   │     │  │  │  ├─ test_constructors.py
   │     │  │  │  ├─ test_cumulative.py
   │     │  │  │  ├─ test_formats.py
   │     │  │  │  ├─ test_iteration.py
   │     │  │  │  ├─ test_logical_ops.py
   │     │  │  │  ├─ test_missing.py
   │     │  │  │  ├─ test_npfuncs.py
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_subclass.py
   │     │  │  │  ├─ test_ufunc.py
   │     │  │  │  ├─ test_unary.py
   │     │  │  │  ├─ test_validate.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │     ├─ test_iteration.cpython-313.pyc
   │     │  │  │     ├─ test_logical_ops.cpython-313.pyc
   │     │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │     ├─ test_npfuncs.cpython-313.pyc
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │     ├─ test_ufunc.cpython-313.pyc
   │     │  │  │     ├─ test_unary.cpython-313.pyc
   │     │  │  │     ├─ test_validate.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ strings
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_case_justify.py
   │     │  │  │  ├─ test_cat.py
   │     │  │  │  ├─ test_extract.py
   │     │  │  │  ├─ test_find_replace.py
   │     │  │  │  ├─ test_get_dummies.py
   │     │  │  │  ├─ test_split_partition.py
   │     │  │  │  ├─ test_strings.py
   │     │  │  │  ├─ test_string_array.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_case_justify.cpython-313.pyc
   │     │  │  │     ├─ test_cat.cpython-313.pyc
   │     │  │  │     ├─ test_extract.cpython-313.pyc
   │     │  │  │     ├─ test_find_replace.cpython-313.pyc
   │     │  │  │     ├─ test_get_dummies.cpython-313.pyc
   │     │  │  │     ├─ test_split_partition.cpython-313.pyc
   │     │  │  │     ├─ test_strings.cpython-313.pyc
   │     │  │  │     ├─ test_string_array.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ test_aggregation.py
   │     │  │  ├─ test_algos.py
   │     │  │  ├─ test_common.py
   │     │  │  ├─ test_downstream.py
   │     │  │  ├─ test_errors.py
   │     │  │  ├─ test_expressions.py
   │     │  │  ├─ test_flags.py
   │     │  │  ├─ test_multilevel.py
   │     │  │  ├─ test_nanops.py
   │     │  │  ├─ test_optional_dependency.py
   │     │  │  ├─ test_register_accessor.py
   │     │  │  ├─ test_sorting.py
   │     │  │  ├─ test_take.py
   │     │  │  ├─ tools
   │     │  │  │  ├─ test_to_datetime.py
   │     │  │  │  ├─ test_to_numeric.py
   │     │  │  │  ├─ test_to_time.py
   │     │  │  │  ├─ test_to_timedelta.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_to_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_to_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_to_time.cpython-313.pyc
   │     │  │  │     ├─ test_to_timedelta.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tseries
   │     │  │  │  ├─ frequencies
   │     │  │  │  │  ├─ test_frequencies.py
   │     │  │  │  │  ├─ test_freq_code.py
   │     │  │  │  │  ├─ test_inference.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_frequencies.cpython-313.pyc
   │     │  │  │  │     ├─ test_freq_code.cpython-313.pyc
   │     │  │  │  │     ├─ test_inference.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ holiday
   │     │  │  │  │  ├─ test_calendar.py
   │     │  │  │  │  ├─ test_federal.py
   │     │  │  │  │  ├─ test_holiday.py
   │     │  │  │  │  ├─ test_observance.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_calendar.cpython-313.pyc
   │     │  │  │  │     ├─ test_federal.cpython-313.pyc
   │     │  │  │  │     ├─ test_holiday.cpython-313.pyc
   │     │  │  │  │     ├─ test_observance.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ offsets
   │     │  │  │  │  ├─ common.py
   │     │  │  │  │  ├─ test_business_day.py
   │     │  │  │  │  ├─ test_business_hour.py
   │     │  │  │  │  ├─ test_business_month.py
   │     │  │  │  │  ├─ test_business_quarter.py
   │     │  │  │  │  ├─ test_business_year.py
   │     │  │  │  │  ├─ test_common.py
   │     │  │  │  │  ├─ test_custom_business_day.py
   │     │  │  │  │  ├─ test_custom_business_hour.py
   │     │  │  │  │  ├─ test_custom_business_month.py
   │     │  │  │  │  ├─ test_dst.py
   │     │  │  │  │  ├─ test_easter.py
   │     │  │  │  │  ├─ test_fiscal.py
   │     │  │  │  │  ├─ test_index.py
   │     │  │  │  │  ├─ test_month.py
   │     │  │  │  │  ├─ test_offsets.py
   │     │  │  │  │  ├─ test_offsets_properties.py
   │     │  │  │  │  ├─ test_quarter.py
   │     │  │  │  │  ├─ test_ticks.py
   │     │  │  │  │  ├─ test_week.py
   │     │  │  │  │  ├─ test_year.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_day.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_hour.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_month.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_quarter.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_year.cpython-313.pyc
   │     │  │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │  │     ├─ test_custom_business_day.cpython-313.pyc
   │     │  │  │  │     ├─ test_custom_business_hour.cpython-313.pyc
   │     │  │  │  │     ├─ test_custom_business_month.cpython-313.pyc
   │     │  │  │  │     ├─ test_dst.cpython-313.pyc
   │     │  │  │  │     ├─ test_easter.cpython-313.pyc
   │     │  │  │  │     ├─ test_fiscal.cpython-313.pyc
   │     │  │  │  │     ├─ test_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_month.cpython-313.pyc
   │     │  │  │  │     ├─ test_offsets.cpython-313.pyc
   │     │  │  │  │     ├─ test_offsets_properties.cpython-313.pyc
   │     │  │  │  │     ├─ test_quarter.cpython-313.pyc
   │     │  │  │  │     ├─ test_ticks.cpython-313.pyc
   │     │  │  │  │     ├─ test_week.cpython-313.pyc
   │     │  │  │  │     ├─ test_year.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tslibs
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_array_to_datetime.py
   │     │  │  │  ├─ test_ccalendar.py
   │     │  │  │  ├─ test_conversion.py
   │     │  │  │  ├─ test_fields.py
   │     │  │  │  ├─ test_libfrequencies.py
   │     │  │  │  ├─ test_liboffsets.py
   │     │  │  │  ├─ test_npy_units.py
   │     │  │  │  ├─ test_np_datetime.py
   │     │  │  │  ├─ test_parse_iso8601.py
   │     │  │  │  ├─ test_parsing.py
   │     │  │  │  ├─ test_period.py
   │     │  │  │  ├─ test_resolution.py
   │     │  │  │  ├─ test_strptime.py
   │     │  │  │  ├─ test_timedeltas.py
   │     │  │  │  ├─ test_timezones.py
   │     │  │  │  ├─ test_to_offset.py
   │     │  │  │  ├─ test_tzconversion.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_array_to_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_ccalendar.cpython-313.pyc
   │     │  │  │     ├─ test_conversion.cpython-313.pyc
   │     │  │  │     ├─ test_fields.cpython-313.pyc
   │     │  │  │     ├─ test_libfrequencies.cpython-313.pyc
   │     │  │  │     ├─ test_liboffsets.cpython-313.pyc
   │     │  │  │     ├─ test_npy_units.cpython-313.pyc
   │     │  │  │     ├─ test_np_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_parse_iso8601.cpython-313.pyc
   │     │  │  │     ├─ test_parsing.cpython-313.pyc
   │     │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │     ├─ test_resolution.cpython-313.pyc
   │     │  │  │     ├─ test_strptime.cpython-313.pyc
   │     │  │  │     ├─ test_timedeltas.cpython-313.pyc
   │     │  │  │     ├─ test_timezones.cpython-313.pyc
   │     │  │  │     ├─ test_to_offset.cpython-313.pyc
   │     │  │  │     ├─ test_tzconversion.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ util
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_assert_almost_equal.py
   │     │  │  │  ├─ test_assert_attr_equal.py
   │     │  │  │  ├─ test_assert_categorical_equal.py
   │     │  │  │  ├─ test_assert_extension_array_equal.py
   │     │  │  │  ├─ test_assert_frame_equal.py
   │     │  │  │  ├─ test_assert_index_equal.py
   │     │  │  │  ├─ test_assert_interval_array_equal.py
   │     │  │  │  ├─ test_assert_numpy_array_equal.py
   │     │  │  │  ├─ test_assert_produces_warning.py
   │     │  │  │  ├─ test_assert_series_equal.py
   │     │  │  │  ├─ test_deprecate.py
   │     │  │  │  ├─ test_deprecate_kwarg.py
   │     │  │  │  ├─ test_deprecate_nonkeyword_arguments.py
   │     │  │  │  ├─ test_doc.py
   │     │  │  │  ├─ test_hashing.py
   │     │  │  │  ├─ test_numba.py
   │     │  │  │  ├─ test_rewrite_warning.py
   │     │  │  │  ├─ test_shares_memory.py
   │     │  │  │  ├─ test_show_versions.py
   │     │  │  │  ├─ test_util.py
   │     │  │  │  ├─ test_validate_args.py
   │     │  │  │  ├─ test_validate_args_and_kwargs.py
   │     │  │  │  ├─ test_validate_inclusive.py
   │     │  │  │  ├─ test_validate_kwargs.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_assert_almost_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_attr_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_categorical_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_extension_array_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_frame_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_index_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_interval_array_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_numpy_array_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_produces_warning.cpython-313.pyc
   │     │  │  │     ├─ test_assert_series_equal.cpython-313.pyc
   │     │  │  │     ├─ test_deprecate.cpython-313.pyc
   │     │  │  │     ├─ test_deprecate_kwarg.cpython-313.pyc
   │     │  │  │     ├─ test_deprecate_nonkeyword_arguments.cpython-313.pyc
   │     │  │  │     ├─ test_doc.cpython-313.pyc
   │     │  │  │     ├─ test_hashing.cpython-313.pyc
   │     │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │     ├─ test_rewrite_warning.cpython-313.pyc
   │     │  │  │     ├─ test_shares_memory.cpython-313.pyc
   │     │  │  │     ├─ test_show_versions.cpython-313.pyc
   │     │  │  │     ├─ test_util.cpython-313.pyc
   │     │  │  │     ├─ test_validate_args.cpython-313.pyc
   │     │  │  │     ├─ test_validate_args_and_kwargs.cpython-313.pyc
   │     │  │  │     ├─ test_validate_inclusive.cpython-313.pyc
   │     │  │  │     ├─ test_validate_kwargs.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ window
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ moments
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_moments_consistency_ewm.py
   │     │  │  │  │  ├─ test_moments_consistency_expanding.py
   │     │  │  │  │  ├─ test_moments_consistency_rolling.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_moments_consistency_ewm.cpython-313.pyc
   │     │  │  │  │     ├─ test_moments_consistency_expanding.cpython-313.pyc
   │     │  │  │  │     ├─ test_moments_consistency_rolling.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_apply.py
   │     │  │  │  ├─ test_base_indexer.py
   │     │  │  │  ├─ test_cython_aggregations.py
   │     │  │  │  ├─ test_dtypes.py
   │     │  │  │  ├─ test_ewm.py
   │     │  │  │  ├─ test_expanding.py
   │     │  │  │  ├─ test_groupby.py
   │     │  │  │  ├─ test_numba.py
   │     │  │  │  ├─ test_online.py
   │     │  │  │  ├─ test_pairwise.py
   │     │  │  │  ├─ test_rolling.py
   │     │  │  │  ├─ test_rolling_functions.py
   │     │  │  │  ├─ test_rolling_quantile.py
   │     │  │  │  ├─ test_rolling_skew_kurt.py
   │     │  │  │  ├─ test_timeseries_window.py
   │     │  │  │  ├─ test_win_type.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_apply.cpython-313.pyc
   │     │  │  │     ├─ test_base_indexer.cpython-313.pyc
   │     │  │  │     ├─ test_cython_aggregations.cpython-313.pyc
   │     │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │     ├─ test_ewm.cpython-313.pyc
   │     │  │  │     ├─ test_expanding.cpython-313.pyc
   │     │  │  │     ├─ test_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │     ├─ test_online.cpython-313.pyc
   │     │  │  │     ├─ test_pairwise.cpython-313.pyc
   │     │  │  │     ├─ test_rolling.cpython-313.pyc
   │     │  │  │     ├─ test_rolling_functions.cpython-313.pyc
   │     │  │  │     ├─ test_rolling_quantile.cpython-313.pyc
   │     │  │  │     ├─ test_rolling_skew_kurt.cpython-313.pyc
   │     │  │  │     ├─ test_timeseries_window.cpython-313.pyc
   │     │  │  │     ├─ test_win_type.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ test_aggregation.cpython-313.pyc
   │     │  │     ├─ test_algos.cpython-313.pyc
   │     │  │     ├─ test_common.cpython-313.pyc
   │     │  │     ├─ test_downstream.cpython-313.pyc
   │     │  │     ├─ test_errors.cpython-313.pyc
   │     │  │     ├─ test_expressions.cpython-313.pyc
   │     │  │     ├─ test_flags.cpython-313.pyc
   │     │  │     ├─ test_multilevel.cpython-313.pyc
   │     │  │     ├─ test_nanops.cpython-313.pyc
   │     │  │     ├─ test_optional_dependency.cpython-313.pyc
   │     │  │     ├─ test_register_accessor.cpython-313.pyc
   │     │  │     ├─ test_sorting.cpython-313.pyc
   │     │  │     ├─ test_take.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tseries
   │     │  │  ├─ api.py
   │     │  │  ├─ frequencies.py
   │     │  │  ├─ holiday.py
   │     │  │  ├─ offsets.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ frequencies.cpython-313.pyc
   │     │  │     ├─ holiday.cpython-313.pyc
   │     │  │     ├─ offsets.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ util
   │     │  │  ├─ version
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _decorators.py
   │     │  │  ├─ _doctools.py
   │     │  │  ├─ _exceptions.py
   │     │  │  ├─ _print_versions.py
   │     │  │  ├─ _tester.py
   │     │  │  ├─ _test_decorators.py
   │     │  │  ├─ _validators.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _decorators.cpython-313.pyc
   │     │  │     ├─ _doctools.cpython-313.pyc
   │     │  │     ├─ _exceptions.cpython-313.pyc
   │     │  │     ├─ _print_versions.cpython-313.pyc
   │     │  │     ├─ _tester.cpython-313.pyc
   │     │  │     ├─ _test_decorators.cpython-313.pyc
   │     │  │     ├─ _validators.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _config
   │     │  │  ├─ config.py
   │     │  │  ├─ dates.py
   │     │  │  ├─ display.py
   │     │  │  ├─ localization.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ config.cpython-313.pyc
   │     │  │     ├─ dates.cpython-313.pyc
   │     │  │     ├─ display.cpython-313.pyc
   │     │  │     ├─ localization.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _libs
   │     │  │  ├─ algos.cp313-win_amd64.lib
   │     │  │  ├─ algos.cp313-win_amd64.pyd
   │     │  │  ├─ algos.pyi
   │     │  │  ├─ arrays.cp313-win_amd64.lib
   │     │  │  ├─ arrays.cp313-win_amd64.pyd
   │     │  │  ├─ arrays.pyi
   │     │  │  ├─ byteswap.cp313-win_amd64.lib
   │     │  │  ├─ byteswap.cp313-win_amd64.pyd
   │     │  │  ├─ byteswap.pyi
   │     │  │  ├─ groupby.cp313-win_amd64.lib
   │     │  │  ├─ groupby.cp313-win_amd64.pyd
   │     │  │  ├─ groupby.pyi
   │     │  │  ├─ hashing.cp313-win_amd64.lib
   │     │  │  ├─ hashing.cp313-win_amd64.pyd
   │     │  │  ├─ hashing.pyi
   │     │  │  ├─ hashtable.cp313-win_amd64.lib
   │     │  │  ├─ hashtable.cp313-win_amd64.pyd
   │     │  │  ├─ hashtable.pyi
   │     │  │  ├─ index.cp313-win_amd64.lib
   │     │  │  ├─ index.cp313-win_amd64.pyd
   │     │  │  ├─ index.pyi
   │     │  │  ├─ indexing.cp313-win_amd64.lib
   │     │  │  ├─ indexing.cp313-win_amd64.pyd
   │     │  │  ├─ indexing.pyi
   │     │  │  ├─ internals.cp313-win_amd64.lib
   │     │  │  ├─ internals.cp313-win_amd64.pyd
   │     │  │  ├─ internals.pyi
   │     │  │  ├─ interval.cp313-win_amd64.lib
   │     │  │  ├─ interval.cp313-win_amd64.pyd
   │     │  │  ├─ interval.pyi
   │     │  │  ├─ join.cp313-win_amd64.lib
   │     │  │  ├─ join.cp313-win_amd64.pyd
   │     │  │  ├─ join.pyi
   │     │  │  ├─ json.cp313-win_amd64.lib
   │     │  │  ├─ json.cp313-win_amd64.pyd
   │     │  │  ├─ json.pyi
   │     │  │  ├─ lib.cp313-win_amd64.lib
   │     │  │  ├─ lib.cp313-win_amd64.pyd
   │     │  │  ├─ lib.pyi
   │     │  │  ├─ missing.cp313-win_amd64.lib
   │     │  │  ├─ missing.cp313-win_amd64.pyd
   │     │  │  ├─ missing.pyi
   │     │  │  ├─ ops.cp313-win_amd64.lib
   │     │  │  ├─ ops.cp313-win_amd64.pyd
   │     │  │  ├─ ops.pyi
   │     │  │  ├─ ops_dispatch.cp313-win_amd64.lib
   │     │  │  ├─ ops_dispatch.cp313-win_amd64.pyd
   │     │  │  ├─ ops_dispatch.pyi
   │     │  │  ├─ pandas_datetime.cp313-win_amd64.lib
   │     │  │  ├─ pandas_datetime.cp313-win_amd64.pyd
   │     │  │  ├─ pandas_parser.cp313-win_amd64.lib
   │     │  │  ├─ pandas_parser.cp313-win_amd64.pyd
   │     │  │  ├─ parsers.cp313-win_amd64.lib
   │     │  │  ├─ parsers.cp313-win_amd64.pyd
   │     │  │  ├─ parsers.pyi
   │     │  │  ├─ properties.cp313-win_amd64.lib
   │     │  │  ├─ properties.cp313-win_amd64.pyd
   │     │  │  ├─ properties.pyi
   │     │  │  ├─ reshape.cp313-win_amd64.lib
   │     │  │  ├─ reshape.cp313-win_amd64.pyd
   │     │  │  ├─ reshape.pyi
   │     │  │  ├─ sas.cp313-win_amd64.lib
   │     │  │  ├─ sas.cp313-win_amd64.pyd
   │     │  │  ├─ sas.pyi
   │     │  │  ├─ sparse.cp313-win_amd64.lib
   │     │  │  ├─ sparse.cp313-win_amd64.pyd
   │     │  │  ├─ sparse.pyi
   │     │  │  ├─ testing.cp313-win_amd64.lib
   │     │  │  ├─ testing.cp313-win_amd64.pyd
   │     │  │  ├─ testing.pyi
   │     │  │  ├─ tslib.cp313-win_amd64.lib
   │     │  │  ├─ tslib.cp313-win_amd64.pyd
   │     │  │  ├─ tslib.pyi
   │     │  │  ├─ tslibs
   │     │  │  │  ├─ base.cp313-win_amd64.lib
   │     │  │  │  ├─ base.cp313-win_amd64.pyd
   │     │  │  │  ├─ ccalendar.cp313-win_amd64.lib
   │     │  │  │  ├─ ccalendar.cp313-win_amd64.pyd
   │     │  │  │  ├─ ccalendar.pyi
   │     │  │  │  ├─ conversion.cp313-win_amd64.lib
   │     │  │  │  ├─ conversion.cp313-win_amd64.pyd
   │     │  │  │  ├─ conversion.pyi
   │     │  │  │  ├─ dtypes.cp313-win_amd64.lib
   │     │  │  │  ├─ dtypes.cp313-win_amd64.pyd
   │     │  │  │  ├─ dtypes.pyi
   │     │  │  │  ├─ fields.cp313-win_amd64.lib
   │     │  │  │  ├─ fields.cp313-win_amd64.pyd
   │     │  │  │  ├─ fields.pyi
   │     │  │  │  ├─ nattype.cp313-win_amd64.lib
   │     │  │  │  ├─ nattype.cp313-win_amd64.pyd
   │     │  │  │  ├─ nattype.pyi
   │     │  │  │  ├─ np_datetime.cp313-win_amd64.lib
   │     │  │  │  ├─ np_datetime.cp313-win_amd64.pyd
   │     │  │  │  ├─ np_datetime.pyi
   │     │  │  │  ├─ offsets.cp313-win_amd64.lib
   │     │  │  │  ├─ offsets.cp313-win_amd64.pyd
   │     │  │  │  ├─ offsets.pyi
   │     │  │  │  ├─ parsing.cp313-win_amd64.lib
   │     │  │  │  ├─ parsing.cp313-win_amd64.pyd
   │     │  │  │  ├─ parsing.pyi
   │     │  │  │  ├─ period.cp313-win_amd64.lib
   │     │  │  │  ├─ period.cp313-win_amd64.pyd
   │     │  │  │  ├─ period.pyi
   │     │  │  │  ├─ strptime.cp313-win_amd64.lib
   │     │  │  │  ├─ strptime.cp313-win_amd64.pyd
   │     │  │  │  ├─ strptime.pyi
   │     │  │  │  ├─ timedeltas.cp313-win_amd64.lib
   │     │  │  │  ├─ timedeltas.cp313-win_amd64.pyd
   │     │  │  │  ├─ timedeltas.pyi
   │     │  │  │  ├─ timestamps.cp313-win_amd64.lib
   │     │  │  │  ├─ timestamps.cp313-win_amd64.pyd
   │     │  │  │  ├─ timestamps.pyi
   │     │  │  │  ├─ timezones.cp313-win_amd64.lib
   │     │  │  │  ├─ timezones.cp313-win_amd64.pyd
   │     │  │  │  ├─ timezones.pyi
   │     │  │  │  ├─ tzconversion.cp313-win_amd64.lib
   │     │  │  │  ├─ tzconversion.cp313-win_amd64.pyd
   │     │  │  │  ├─ tzconversion.pyi
   │     │  │  │  ├─ vectorized.cp313-win_amd64.lib
   │     │  │  │  ├─ vectorized.cp313-win_amd64.pyd
   │     │  │  │  ├─ vectorized.pyi
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ window
   │     │  │  │  ├─ aggregations.cp313-win_amd64.lib
   │     │  │  │  ├─ aggregations.cp313-win_amd64.pyd
   │     │  │  │  ├─ aggregations.pyi
   │     │  │  │  ├─ indexers.cp313-win_amd64.lib
   │     │  │  │  ├─ indexers.cp313-win_amd64.pyd
   │     │  │  │  ├─ indexers.pyi
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ writers.cp313-win_amd64.lib
   │     │  │  ├─ writers.cp313-win_amd64.pyd
   │     │  │  ├─ writers.pyi
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _testing
   │     │  │  ├─ asserters.py
   │     │  │  ├─ compat.py
   │     │  │  ├─ contexts.py
   │     │  │  ├─ _hypothesis.py
   │     │  │  ├─ _io.py
   │     │  │  ├─ _warnings.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asserters.cpython-313.pyc
   │     │  │     ├─ compat.cpython-313.pyc
   │     │  │     ├─ contexts.cpython-313.pyc
   │     │  │     ├─ _hypothesis.cpython-313.pyc
   │     │  │     ├─ _io.cpython-313.pyc
   │     │  │     ├─ _warnings.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _typing.py
   │     │  ├─ _version.py
   │     │  ├─ _version_meson.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ testing.cpython-313.pyc
   │     │     ├─ _typing.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     ├─ _version_meson.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pandas-2.2.3.dist-info
   │     │  ├─ DELVEWHEEL
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ pandas.libs
   │     │  └─ msvcp140-0f2ea95580b32bcfc81c235d5751ce78.dll
   │     ├─ partd
   │     │  ├─ buffer.py
   │     │  ├─ compressed.py
   │     │  ├─ core.py
   │     │  ├─ dict.py
   │     │  ├─ encode.py
   │     │  ├─ file.py
   │     │  ├─ numpy.py
   │     │  ├─ pandas.py
   │     │  ├─ pickle.py
   │     │  ├─ python.py
   │     │  ├─ utils.py
   │     │  ├─ zmq.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ buffer.cpython-313.pyc
   │     │     ├─ compressed.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ dict.cpython-313.pyc
   │     │     ├─ encode.cpython-313.pyc
   │     │     ├─ file.cpython-313.pyc
   │     │     ├─ numpy.cpython-313.pyc
   │     │     ├─ pandas.cpython-313.pyc
   │     │     ├─ pickle.cpython-313.pyc
   │     │     ├─ python.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ zmq.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ partd-1.4.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ patsy
   │     │  ├─ build.py
   │     │  ├─ builtins.py
   │     │  ├─ categorical.py
   │     │  ├─ compat.py
   │     │  ├─ compat_ordereddict.py
   │     │  ├─ constraint.py
   │     │  ├─ contrasts.py
   │     │  ├─ desc.py
   │     │  ├─ design_info.py
   │     │  ├─ eval.py
   │     │  ├─ highlevel.py
   │     │  ├─ infix_parser.py
   │     │  ├─ mgcv_cubic_splines.py
   │     │  ├─ missing.py
   │     │  ├─ origin.py
   │     │  ├─ parse_formula.py
   │     │  ├─ redundancy.py
   │     │  ├─ splines.py
   │     │  ├─ state.py
   │     │  ├─ test_build.py
   │     │  ├─ test_highlevel.py
   │     │  ├─ test_regressions.py
   │     │  ├─ test_splines_bs_data.py
   │     │  ├─ test_splines_crs_data.py
   │     │  ├─ test_state.py
   │     │  ├─ tokens.py
   │     │  ├─ user_util.py
   │     │  ├─ util.py
   │     │  ├─ version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ build.cpython-313.pyc
   │     │     ├─ builtins.cpython-313.pyc
   │     │     ├─ categorical.cpython-313.pyc
   │     │     ├─ compat.cpython-313.pyc
   │     │     ├─ compat_ordereddict.cpython-313.pyc
   │     │     ├─ constraint.cpython-313.pyc
   │     │     ├─ contrasts.cpython-313.pyc
   │     │     ├─ desc.cpython-313.pyc
   │     │     ├─ design_info.cpython-313.pyc
   │     │     ├─ eval.cpython-313.pyc
   │     │     ├─ highlevel.cpython-313.pyc
   │     │     ├─ infix_parser.cpython-313.pyc
   │     │     ├─ mgcv_cubic_splines.cpython-313.pyc
   │     │     ├─ missing.cpython-313.pyc
   │     │     ├─ origin.cpython-313.pyc
   │     │     ├─ parse_formula.cpython-313.pyc
   │     │     ├─ redundancy.cpython-313.pyc
   │     │     ├─ splines.cpython-313.pyc
   │     │     ├─ state.cpython-313.pyc
   │     │     ├─ test_build.cpython-313.pyc
   │     │     ├─ test_highlevel.cpython-313.pyc
   │     │     ├─ test_regressions.cpython-313.pyc
   │     │     ├─ test_splines_bs_data.cpython-313.pyc
   │     │     ├─ test_splines_crs_data.cpython-313.pyc
   │     │     ├─ test_state.cpython-313.pyc
   │     │     ├─ tokens.cpython-313.pyc
   │     │     ├─ user_util.cpython-313.pyc
   │     │     ├─ util.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ patsy-1.0.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ PIL
   │     │  ├─ BdfFontFile.py
   │     │  ├─ BlpImagePlugin.py
   │     │  ├─ BmpImagePlugin.py
   │     │  ├─ BufrStubImagePlugin.py
   │     │  ├─ ContainerIO.py
   │     │  ├─ CurImagePlugin.py
   │     │  ├─ DcxImagePlugin.py
   │     │  ├─ DdsImagePlugin.py
   │     │  ├─ EpsImagePlugin.py
   │     │  ├─ ExifTags.py
   │     │  ├─ features.py
   │     │  ├─ FitsImagePlugin.py
   │     │  ├─ FliImagePlugin.py
   │     │  ├─ FontFile.py
   │     │  ├─ FpxImagePlugin.py
   │     │  ├─ FtexImagePlugin.py
   │     │  ├─ GbrImagePlugin.py
   │     │  ├─ GdImageFile.py
   │     │  ├─ GifImagePlugin.py
   │     │  ├─ GimpGradientFile.py
   │     │  ├─ GimpPaletteFile.py
   │     │  ├─ GribStubImagePlugin.py
   │     │  ├─ Hdf5StubImagePlugin.py
   │     │  ├─ IcnsImagePlugin.py
   │     │  ├─ IcoImagePlugin.py
   │     │  ├─ Image.py
   │     │  ├─ ImageChops.py
   │     │  ├─ ImageCms.py
   │     │  ├─ ImageColor.py
   │     │  ├─ ImageDraw.py
   │     │  ├─ ImageDraw2.py
   │     │  ├─ ImageEnhance.py
   │     │  ├─ ImageFile.py
   │     │  ├─ ImageFilter.py
   │     │  ├─ ImageFont.py
   │     │  ├─ ImageGrab.py
   │     │  ├─ ImageMath.py
   │     │  ├─ ImageMode.py
   │     │  ├─ ImageMorph.py
   │     │  ├─ ImageOps.py
   │     │  ├─ ImagePalette.py
   │     │  ├─ ImagePath.py
   │     │  ├─ ImageQt.py
   │     │  ├─ ImageSequence.py
   │     │  ├─ ImageShow.py
   │     │  ├─ ImageStat.py
   │     │  ├─ ImageTk.py
   │     │  ├─ ImageTransform.py
   │     │  ├─ ImageWin.py
   │     │  ├─ ImImagePlugin.py
   │     │  ├─ ImtImagePlugin.py
   │     │  ├─ IptcImagePlugin.py
   │     │  ├─ Jpeg2KImagePlugin.py
   │     │  ├─ JpegImagePlugin.py
   │     │  ├─ JpegPresets.py
   │     │  ├─ McIdasImagePlugin.py
   │     │  ├─ MicImagePlugin.py
   │     │  ├─ MpegImagePlugin.py
   │     │  ├─ MpoImagePlugin.py
   │     │  ├─ MspImagePlugin.py
   │     │  ├─ PaletteFile.py
   │     │  ├─ PalmImagePlugin.py
   │     │  ├─ PcdImagePlugin.py
   │     │  ├─ PcfFontFile.py
   │     │  ├─ PcxImagePlugin.py
   │     │  ├─ PdfImagePlugin.py
   │     │  ├─ PdfParser.py
   │     │  ├─ PixarImagePlugin.py
   │     │  ├─ PngImagePlugin.py
   │     │  ├─ PpmImagePlugin.py
   │     │  ├─ PsdImagePlugin.py
   │     │  ├─ PSDraw.py
   │     │  ├─ py.typed
   │     │  ├─ QoiImagePlugin.py
   │     │  ├─ report.py
   │     │  ├─ SgiImagePlugin.py
   │     │  ├─ SpiderImagePlugin.py
   │     │  ├─ SunImagePlugin.py
   │     │  ├─ TarIO.py
   │     │  ├─ TgaImagePlugin.py
   │     │  ├─ TiffImagePlugin.py
   │     │  ├─ TiffTags.py
   │     │  ├─ WalImageFile.py
   │     │  ├─ WebPImagePlugin.py
   │     │  ├─ WmfImagePlugin.py
   │     │  ├─ XbmImagePlugin.py
   │     │  ├─ XpmImagePlugin.py
   │     │  ├─ XVThumbImagePlugin.py
   │     │  ├─ _binary.py
   │     │  ├─ _deprecate.py
   │     │  ├─ _imaging.cp313-win_amd64.pyd
   │     │  ├─ _imaging.pyi
   │     │  ├─ _imagingcms.cp313-win_amd64.pyd
   │     │  ├─ _imagingcms.pyi
   │     │  ├─ _imagingft.cp313-win_amd64.pyd
   │     │  ├─ _imagingft.pyi
   │     │  ├─ _imagingmath.cp313-win_amd64.pyd
   │     │  ├─ _imagingmath.pyi
   │     │  ├─ _imagingmorph.cp313-win_amd64.pyd
   │     │  ├─ _imagingmorph.pyi
   │     │  ├─ _imagingtk.cp313-win_amd64.pyd
   │     │  ├─ _imagingtk.pyi
   │     │  ├─ _tkinter_finder.py
   │     │  ├─ _typing.py
   │     │  ├─ _util.py
   │     │  ├─ _version.py
   │     │  ├─ _webp.cp313-win_amd64.pyd
   │     │  ├─ _webp.pyi
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ BdfFontFile.cpython-313.pyc
   │     │     ├─ BlpImagePlugin.cpython-313.pyc
   │     │     ├─ BmpImagePlugin.cpython-313.pyc
   │     │     ├─ BufrStubImagePlugin.cpython-313.pyc
   │     │     ├─ ContainerIO.cpython-313.pyc
   │     │     ├─ CurImagePlugin.cpython-313.pyc
   │     │     ├─ DcxImagePlugin.cpython-313.pyc
   │     │     ├─ DdsImagePlugin.cpython-313.pyc
   │     │     ├─ EpsImagePlugin.cpython-313.pyc
   │     │     ├─ ExifTags.cpython-313.pyc
   │     │     ├─ features.cpython-313.pyc
   │     │     ├─ FitsImagePlugin.cpython-313.pyc
   │     │     ├─ FliImagePlugin.cpython-313.pyc
   │     │     ├─ FontFile.cpython-313.pyc
   │     │     ├─ FpxImagePlugin.cpython-313.pyc
   │     │     ├─ FtexImagePlugin.cpython-313.pyc
   │     │     ├─ GbrImagePlugin.cpython-313.pyc
   │     │     ├─ GdImageFile.cpython-313.pyc
   │     │     ├─ GifImagePlugin.cpython-313.pyc
   │     │     ├─ GimpGradientFile.cpython-313.pyc
   │     │     ├─ GimpPaletteFile.cpython-313.pyc
   │     │     ├─ GribStubImagePlugin.cpython-313.pyc
   │     │     ├─ Hdf5StubImagePlugin.cpython-313.pyc
   │     │     ├─ IcnsImagePlugin.cpython-313.pyc
   │     │     ├─ IcoImagePlugin.cpython-313.pyc
   │     │     ├─ Image.cpython-313.pyc
   │     │     ├─ ImageChops.cpython-313.pyc
   │     │     ├─ ImageCms.cpython-313.pyc
   │     │     ├─ ImageColor.cpython-313.pyc
   │     │     ├─ ImageDraw.cpython-313.pyc
   │     │     ├─ ImageDraw2.cpython-313.pyc
   │     │     ├─ ImageEnhance.cpython-313.pyc
   │     │     ├─ ImageFile.cpython-313.pyc
   │     │     ├─ ImageFilter.cpython-313.pyc
   │     │     ├─ ImageFont.cpython-313.pyc
   │     │     ├─ ImageGrab.cpython-313.pyc
   │     │     ├─ ImageMath.cpython-313.pyc
   │     │     ├─ ImageMode.cpython-313.pyc
   │     │     ├─ ImageMorph.cpython-313.pyc
   │     │     ├─ ImageOps.cpython-313.pyc
   │     │     ├─ ImagePalette.cpython-313.pyc
   │     │     ├─ ImagePath.cpython-313.pyc
   │     │     ├─ ImageQt.cpython-313.pyc
   │     │     ├─ ImageSequence.cpython-313.pyc
   │     │     ├─ ImageShow.cpython-313.pyc
   │     │     ├─ ImageStat.cpython-313.pyc
   │     │     ├─ ImageTk.cpython-313.pyc
   │     │     ├─ ImageTransform.cpython-313.pyc
   │     │     ├─ ImageWin.cpython-313.pyc
   │     │     ├─ ImImagePlugin.cpython-313.pyc
   │     │     ├─ ImtImagePlugin.cpython-313.pyc
   │     │     ├─ IptcImagePlugin.cpython-313.pyc
   │     │     ├─ Jpeg2KImagePlugin.cpython-313.pyc
   │     │     ├─ JpegImagePlugin.cpython-313.pyc
   │     │     ├─ JpegPresets.cpython-313.pyc
   │     │     ├─ McIdasImagePlugin.cpython-313.pyc
   │     │     ├─ MicImagePlugin.cpython-313.pyc
   │     │     ├─ MpegImagePlugin.cpython-313.pyc
   │     │     ├─ MpoImagePlugin.cpython-313.pyc
   │     │     ├─ MspImagePlugin.cpython-313.pyc
   │     │     ├─ PaletteFile.cpython-313.pyc
   │     │     ├─ PalmImagePlugin.cpython-313.pyc
   │     │     ├─ PcdImagePlugin.cpython-313.pyc
   │     │     ├─ PcfFontFile.cpython-313.pyc
   │     │     ├─ PcxImagePlugin.cpython-313.pyc
   │     │     ├─ PdfImagePlugin.cpython-313.pyc
   │     │     ├─ PdfParser.cpython-313.pyc
   │     │     ├─ PixarImagePlugin.cpython-313.pyc
   │     │     ├─ PngImagePlugin.cpython-313.pyc
   │     │     ├─ PpmImagePlugin.cpython-313.pyc
   │     │     ├─ PsdImagePlugin.cpython-313.pyc
   │     │     ├─ PSDraw.cpython-313.pyc
   │     │     ├─ QoiImagePlugin.cpython-313.pyc
   │     │     ├─ report.cpython-313.pyc
   │     │     ├─ SgiImagePlugin.cpython-313.pyc
   │     │     ├─ SpiderImagePlugin.cpython-313.pyc
   │     │     ├─ SunImagePlugin.cpython-313.pyc
   │     │     ├─ TarIO.cpython-313.pyc
   │     │     ├─ TgaImagePlugin.cpython-313.pyc
   │     │     ├─ TiffImagePlugin.cpython-313.pyc
   │     │     ├─ TiffTags.cpython-313.pyc
   │     │     ├─ WalImageFile.cpython-313.pyc
   │     │     ├─ WebPImagePlugin.cpython-313.pyc
   │     │     ├─ WmfImagePlugin.cpython-313.pyc
   │     │     ├─ XbmImagePlugin.cpython-313.pyc
   │     │     ├─ XpmImagePlugin.cpython-313.pyc
   │     │     ├─ XVThumbImagePlugin.cpython-313.pyc
   │     │     ├─ _binary.cpython-313.pyc
   │     │     ├─ _deprecate.cpython-313.pyc
   │     │     ├─ _tkinter_finder.cpython-313.pyc
   │     │     ├─ _typing.cpython-313.pyc
   │     │     ├─ _util.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ pillow-11.1.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  ├─ WHEEL
   │     │  └─ zip-safe
   │     ├─ pip
   │     │  ├─ py.typed
   │     │  ├─ _internal
   │     │  │  ├─ build_env.py
   │     │  │  ├─ cache.py
   │     │  │  ├─ cli
   │     │  │  │  ├─ autocompletion.py
   │     │  │  │  ├─ base_command.py
   │     │  │  │  ├─ cmdoptions.py
   │     │  │  │  ├─ command_context.py
   │     │  │  │  ├─ index_command.py
   │     │  │  │  ├─ main.py
   │     │  │  │  ├─ main_parser.py
   │     │  │  │  ├─ parser.py
   │     │  │  │  ├─ progress_bars.py
   │     │  │  │  ├─ req_command.py
   │     │  │  │  ├─ spinners.py
   │     │  │  │  ├─ status_codes.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ autocompletion.cpython-313.pyc
   │     │  │  │     ├─ base_command.cpython-313.pyc
   │     │  │  │     ├─ cmdoptions.cpython-313.pyc
   │     │  │  │     ├─ command_context.cpython-313.pyc
   │     │  │  │     ├─ index_command.cpython-313.pyc
   │     │  │  │     ├─ main.cpython-313.pyc
   │     │  │  │     ├─ main_parser.cpython-313.pyc
   │     │  │  │     ├─ parser.cpython-313.pyc
   │     │  │  │     ├─ progress_bars.cpython-313.pyc
   │     │  │  │     ├─ req_command.cpython-313.pyc
   │     │  │  │     ├─ spinners.cpython-313.pyc
   │     │  │  │     ├─ status_codes.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ commands
   │     │  │  │  ├─ cache.py
   │     │  │  │  ├─ check.py
   │     │  │  │  ├─ completion.py
   │     │  │  │  ├─ configuration.py
   │     │  │  │  ├─ debug.py
   │     │  │  │  ├─ download.py
   │     │  │  │  ├─ freeze.py
   │     │  │  │  ├─ hash.py
   │     │  │  │  ├─ help.py
   │     │  │  │  ├─ index.py
   │     │  │  │  ├─ inspect.py
   │     │  │  │  ├─ install.py
   │     │  │  │  ├─ list.py
   │     │  │  │  ├─ search.py
   │     │  │  │  ├─ show.py
   │     │  │  │  ├─ uninstall.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cache.cpython-313.pyc
   │     │  │  │     ├─ check.cpython-313.pyc
   │     │  │  │     ├─ completion.cpython-313.pyc
   │     │  │  │     ├─ configuration.cpython-313.pyc
   │     │  │  │     ├─ debug.cpython-313.pyc
   │     │  │  │     ├─ download.cpython-313.pyc
   │     │  │  │     ├─ freeze.cpython-313.pyc
   │     │  │  │     ├─ hash.cpython-313.pyc
   │     │  │  │     ├─ help.cpython-313.pyc
   │     │  │  │     ├─ index.cpython-313.pyc
   │     │  │  │     ├─ inspect.cpython-313.pyc
   │     │  │  │     ├─ install.cpython-313.pyc
   │     │  │  │     ├─ list.cpython-313.pyc
   │     │  │  │     ├─ search.cpython-313.pyc
   │     │  │  │     ├─ show.cpython-313.pyc
   │     │  │  │     ├─ uninstall.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ configuration.py
   │     │  │  ├─ distributions
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ installed.py
   │     │  │  │  ├─ sdist.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ installed.cpython-313.pyc
   │     │  │  │     ├─ sdist.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ index
   │     │  │  │  ├─ collector.py
   │     │  │  │  ├─ package_finder.py
   │     │  │  │  ├─ sources.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ collector.cpython-313.pyc
   │     │  │  │     ├─ package_finder.cpython-313.pyc
   │     │  │  │     ├─ sources.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ locations
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ _distutils.py
   │     │  │  │  ├─ _sysconfig.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ _distutils.cpython-313.pyc
   │     │  │  │     ├─ _sysconfig.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ main.py
   │     │  │  ├─ metadata
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ importlib
   │     │  │  │  │  ├─ _compat.py
   │     │  │  │  │  ├─ _dists.py
   │     │  │  │  │  ├─ _envs.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _compat.cpython-313.pyc
   │     │  │  │  │     ├─ _dists.cpython-313.pyc
   │     │  │  │  │     ├─ _envs.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ pkg_resources.py
   │     │  │  │  ├─ _json.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ pkg_resources.cpython-313.pyc
   │     │  │  │     ├─ _json.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ models
   │     │  │  │  ├─ candidate.py
   │     │  │  │  ├─ direct_url.py
   │     │  │  │  ├─ format_control.py
   │     │  │  │  ├─ index.py
   │     │  │  │  ├─ installation_report.py
   │     │  │  │  ├─ link.py
   │     │  │  │  ├─ scheme.py
   │     │  │  │  ├─ search_scope.py
   │     │  │  │  ├─ selection_prefs.py
   │     │  │  │  ├─ target_python.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ candidate.cpython-313.pyc
   │     │  │  │     ├─ direct_url.cpython-313.pyc
   │     │  │  │     ├─ format_control.cpython-313.pyc
   │     │  │  │     ├─ index.cpython-313.pyc
   │     │  │  │     ├─ installation_report.cpython-313.pyc
   │     │  │  │     ├─ link.cpython-313.pyc
   │     │  │  │     ├─ scheme.cpython-313.pyc
   │     │  │  │     ├─ search_scope.cpython-313.pyc
   │     │  │  │     ├─ selection_prefs.cpython-313.pyc
   │     │  │  │     ├─ target_python.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ network
   │     │  │  │  ├─ auth.py
   │     │  │  │  ├─ cache.py
   │     │  │  │  ├─ download.py
   │     │  │  │  ├─ lazy_wheel.py
   │     │  │  │  ├─ session.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ xmlrpc.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ auth.cpython-313.pyc
   │     │  │  │     ├─ cache.cpython-313.pyc
   │     │  │  │     ├─ download.cpython-313.pyc
   │     │  │  │     ├─ lazy_wheel.cpython-313.pyc
   │     │  │  │     ├─ session.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     ├─ xmlrpc.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ operations
   │     │  │  │  ├─ build
   │     │  │  │  │  ├─ build_tracker.py
   │     │  │  │  │  ├─ metadata.py
   │     │  │  │  │  ├─ metadata_editable.py
   │     │  │  │  │  ├─ metadata_legacy.py
   │     │  │  │  │  ├─ wheel.py
   │     │  │  │  │  ├─ wheel_editable.py
   │     │  │  │  │  ├─ wheel_legacy.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ build_tracker.cpython-313.pyc
   │     │  │  │  │     ├─ metadata.cpython-313.pyc
   │     │  │  │  │     ├─ metadata_editable.cpython-313.pyc
   │     │  │  │  │     ├─ metadata_legacy.cpython-313.pyc
   │     │  │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │  │     ├─ wheel_editable.cpython-313.pyc
   │     │  │  │  │     ├─ wheel_legacy.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ check.py
   │     │  │  │  ├─ freeze.py
   │     │  │  │  ├─ install
   │     │  │  │  │  ├─ editable_legacy.py
   │     │  │  │  │  ├─ wheel.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ editable_legacy.cpython-313.pyc
   │     │  │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ prepare.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ check.cpython-313.pyc
   │     │  │  │     ├─ freeze.cpython-313.pyc
   │     │  │  │     ├─ prepare.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pyproject.py
   │     │  │  ├─ req
   │     │  │  │  ├─ constructors.py
   │     │  │  │  ├─ req_file.py
   │     │  │  │  ├─ req_install.py
   │     │  │  │  ├─ req_set.py
   │     │  │  │  ├─ req_uninstall.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ constructors.cpython-313.pyc
   │     │  │  │     ├─ req_file.cpython-313.pyc
   │     │  │  │     ├─ req_install.cpython-313.pyc
   │     │  │  │     ├─ req_set.cpython-313.pyc
   │     │  │  │     ├─ req_uninstall.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ resolution
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ legacy
   │     │  │  │  │  ├─ resolver.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ resolver.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ resolvelib
   │     │  │  │  │  ├─ base.py
   │     │  │  │  │  ├─ candidates.py
   │     │  │  │  │  ├─ factory.py
   │     │  │  │  │  ├─ found_candidates.py
   │     │  │  │  │  ├─ provider.py
   │     │  │  │  │  ├─ reporter.py
   │     │  │  │  │  ├─ requirements.py
   │     │  │  │  │  ├─ resolver.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │  │     ├─ candidates.cpython-313.pyc
   │     │  │  │  │     ├─ factory.cpython-313.pyc
   │     │  │  │  │     ├─ found_candidates.cpython-313.pyc
   │     │  │  │  │     ├─ provider.cpython-313.pyc
   │     │  │  │  │     ├─ reporter.cpython-313.pyc
   │     │  │  │  │     ├─ requirements.cpython-313.pyc
   │     │  │  │  │     ├─ resolver.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ self_outdated_check.py
   │     │  │  ├─ utils
   │     │  │  │  ├─ appdirs.py
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ compatibility_tags.py
   │     │  │  │  ├─ datetime.py
   │     │  │  │  ├─ deprecation.py
   │     │  │  │  ├─ direct_url_helpers.py
   │     │  │  │  ├─ egg_link.py
   │     │  │  │  ├─ encoding.py
   │     │  │  │  ├─ entrypoints.py
   │     │  │  │  ├─ filesystem.py
   │     │  │  │  ├─ filetypes.py
   │     │  │  │  ├─ glibc.py
   │     │  │  │  ├─ hashes.py
   │     │  │  │  ├─ logging.py
   │     │  │  │  ├─ misc.py
   │     │  │  │  ├─ packaging.py
   │     │  │  │  ├─ retry.py
   │     │  │  │  ├─ setuptools_build.py
   │     │  │  │  ├─ subprocess.py
   │     │  │  │  ├─ temp_dir.py
   │     │  │  │  ├─ unpacking.py
   │     │  │  │  ├─ urls.py
   │     │  │  │  ├─ virtualenv.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ _jaraco_text.py
   │     │  │  │  ├─ _log.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ appdirs.cpython-313.pyc
   │     │  │  │     ├─ compat.cpython-313.pyc
   │     │  │  │     ├─ compatibility_tags.cpython-313.pyc
   │     │  │  │     ├─ datetime.cpython-313.pyc
   │     │  │  │     ├─ deprecation.cpython-313.pyc
   │     │  │  │     ├─ direct_url_helpers.cpython-313.pyc
   │     │  │  │     ├─ egg_link.cpython-313.pyc
   │     │  │  │     ├─ encoding.cpython-313.pyc
   │     │  │  │     ├─ entrypoints.cpython-313.pyc
   │     │  │  │     ├─ filesystem.cpython-313.pyc
   │     │  │  │     ├─ filetypes.cpython-313.pyc
   │     │  │  │     ├─ glibc.cpython-313.pyc
   │     │  │  │     ├─ hashes.cpython-313.pyc
   │     │  │  │     ├─ logging.cpython-313.pyc
   │     │  │  │     ├─ misc.cpython-313.pyc
   │     │  │  │     ├─ packaging.cpython-313.pyc
   │     │  │  │     ├─ retry.cpython-313.pyc
   │     │  │  │     ├─ setuptools_build.cpython-313.pyc
   │     │  │  │     ├─ subprocess.cpython-313.pyc
   │     │  │  │     ├─ temp_dir.cpython-313.pyc
   │     │  │  │     ├─ unpacking.cpython-313.pyc
   │     │  │  │     ├─ urls.cpython-313.pyc
   │     │  │  │     ├─ virtualenv.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     ├─ _jaraco_text.cpython-313.pyc
   │     │  │  │     ├─ _log.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ vcs
   │     │  │  │  ├─ bazaar.py
   │     │  │  │  ├─ git.py
   │     │  │  │  ├─ mercurial.py
   │     │  │  │  ├─ subversion.py
   │     │  │  │  ├─ versioncontrol.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ bazaar.cpython-313.pyc
   │     │  │  │     ├─ git.cpython-313.pyc
   │     │  │  │     ├─ mercurial.cpython-313.pyc
   │     │  │  │     ├─ subversion.cpython-313.pyc
   │     │  │  │     ├─ versioncontrol.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ wheel_builder.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ build_env.cpython-313.pyc
   │     │  │     ├─ cache.cpython-313.pyc
   │     │  │     ├─ configuration.cpython-313.pyc
   │     │  │     ├─ exceptions.cpython-313.pyc
   │     │  │     ├─ main.cpython-313.pyc
   │     │  │     ├─ pyproject.cpython-313.pyc
   │     │  │     ├─ self_outdated_check.cpython-313.pyc
   │     │  │     ├─ wheel_builder.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _vendor
   │     │  │  ├─ cachecontrol
   │     │  │  │  ├─ adapter.py
   │     │  │  │  ├─ cache.py
   │     │  │  │  ├─ caches
   │     │  │  │  │  ├─ file_cache.py
   │     │  │  │  │  ├─ redis_cache.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ file_cache.cpython-313.pyc
   │     │  │  │  │     ├─ redis_cache.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ controller.py
   │     │  │  │  ├─ filewrapper.py
   │     │  │  │  ├─ heuristics.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ serialize.py
   │     │  │  │  ├─ wrapper.py
   │     │  │  │  ├─ _cmd.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ adapter.cpython-313.pyc
   │     │  │  │     ├─ cache.cpython-313.pyc
   │     │  │  │     ├─ controller.cpython-313.pyc
   │     │  │  │     ├─ filewrapper.cpython-313.pyc
   │     │  │  │     ├─ heuristics.cpython-313.pyc
   │     │  │  │     ├─ serialize.cpython-313.pyc
   │     │  │  │     ├─ wrapper.cpython-313.pyc
   │     │  │  │     ├─ _cmd.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ certifi
   │     │  │  │  ├─ cacert.pem
   │     │  │  │  ├─ core.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ distlib
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ database.py
   │     │  │  │  ├─ index.py
   │     │  │  │  ├─ locators.py
   │     │  │  │  ├─ manifest.py
   │     │  │  │  ├─ markers.py
   │     │  │  │  ├─ metadata.py
   │     │  │  │  ├─ resources.py
   │     │  │  │  ├─ scripts.py
   │     │  │  │  ├─ t32.exe
   │     │  │  │  ├─ t64-arm.exe
   │     │  │  │  ├─ t64.exe
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ version.py
   │     │  │  │  ├─ w32.exe
   │     │  │  │  ├─ w64-arm.exe
   │     │  │  │  ├─ w64.exe
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ compat.cpython-313.pyc
   │     │  │  │     ├─ database.cpython-313.pyc
   │     │  │  │     ├─ index.cpython-313.pyc
   │     │  │  │     ├─ locators.cpython-313.pyc
   │     │  │  │     ├─ manifest.cpython-313.pyc
   │     │  │  │     ├─ markers.cpython-313.pyc
   │     │  │  │     ├─ metadata.cpython-313.pyc
   │     │  │  │     ├─ resources.cpython-313.pyc
   │     │  │  │     ├─ scripts.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     ├─ version.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ distro
   │     │  │  │  ├─ distro.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ distro.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ idna
   │     │  │  │  ├─ codec.py
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ core.py
   │     │  │  │  ├─ idnadata.py
   │     │  │  │  ├─ intranges.py
   │     │  │  │  ├─ package_data.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ uts46data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ codec.cpython-313.pyc
   │     │  │  │     ├─ compat.cpython-313.pyc
   │     │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │     ├─ idnadata.cpython-313.pyc
   │     │  │  │     ├─ intranges.cpython-313.pyc
   │     │  │  │     ├─ package_data.cpython-313.pyc
   │     │  │  │     ├─ uts46data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ msgpack
   │     │  │  │  ├─ exceptions.py
   │     │  │  │  ├─ ext.py
   │     │  │  │  ├─ fallback.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ exceptions.cpython-313.pyc
   │     │  │  │     ├─ ext.cpython-313.pyc
   │     │  │  │     ├─ fallback.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ packaging
   │     │  │  │  ├─ markers.py
   │     │  │  │  ├─ metadata.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ requirements.py
   │     │  │  │  ├─ specifiers.py
   │     │  │  │  ├─ tags.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ version.py
   │     │  │  │  ├─ _elffile.py
   │     │  │  │  ├─ _manylinux.py
   │     │  │  │  ├─ _musllinux.py
   │     │  │  │  ├─ _parser.py
   │     │  │  │  ├─ _structures.py
   │     │  │  │  ├─ _tokenizer.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ markers.cpython-313.pyc
   │     │  │  │     ├─ metadata.cpython-313.pyc
   │     │  │  │     ├─ requirements.cpython-313.pyc
   │     │  │  │     ├─ specifiers.cpython-313.pyc
   │     │  │  │     ├─ tags.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     ├─ version.cpython-313.pyc
   │     │  │  │     ├─ _elffile.cpython-313.pyc
   │     │  │  │     ├─ _manylinux.cpython-313.pyc
   │     │  │  │     ├─ _musllinux.cpython-313.pyc
   │     │  │  │     ├─ _parser.cpython-313.pyc
   │     │  │  │     ├─ _structures.cpython-313.pyc
   │     │  │  │     ├─ _tokenizer.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pkg_resources
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ platformdirs
   │     │  │  │  ├─ android.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ macos.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ unix.py
   │     │  │  │  ├─ version.py
   │     │  │  │  ├─ windows.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ android.cpython-313.pyc
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ macos.cpython-313.pyc
   │     │  │  │     ├─ unix.cpython-313.pyc
   │     │  │  │     ├─ version.cpython-313.pyc
   │     │  │  │     ├─ windows.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ pygments
   │     │  │  │  ├─ cmdline.py
   │     │  │  │  ├─ console.py
   │     │  │  │  ├─ filter.py
   │     │  │  │  ├─ filters
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ formatter.py
   │     │  │  │  ├─ formatters
   │     │  │  │  │  ├─ bbcode.py
   │     │  │  │  │  ├─ groff.py
   │     │  │  │  │  ├─ html.py
   │     │  │  │  │  ├─ img.py
   │     │  │  │  │  ├─ irc.py
   │     │  │  │  │  ├─ latex.py
   │     │  │  │  │  ├─ other.py
   │     │  │  │  │  ├─ pangomarkup.py
   │     │  │  │  │  ├─ rtf.py
   │     │  │  │  │  ├─ svg.py
   │     │  │  │  │  ├─ terminal.py
   │     │  │  │  │  ├─ terminal256.py
   │     │  │  │  │  ├─ _mapping.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ bbcode.cpython-313.pyc
   │     │  │  │  │     ├─ groff.cpython-313.pyc
   │     │  │  │  │     ├─ html.cpython-313.pyc
   │     │  │  │  │     ├─ img.cpython-313.pyc
   │     │  │  │  │     ├─ irc.cpython-313.pyc
   │     │  │  │  │     ├─ latex.cpython-313.pyc
   │     │  │  │  │     ├─ other.cpython-313.pyc
   │     │  │  │  │     ├─ pangomarkup.cpython-313.pyc
   │     │  │  │  │     ├─ rtf.cpython-313.pyc
   │     │  │  │  │     ├─ svg.cpython-313.pyc
   │     │  │  │  │     ├─ terminal.cpython-313.pyc
   │     │  │  │  │     ├─ terminal256.cpython-313.pyc
   │     │  │  │  │     ├─ _mapping.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ lexer.py
   │     │  │  │  ├─ lexers
   │     │  │  │  │  ├─ python.py
   │     │  │  │  │  ├─ _mapping.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ python.cpython-313.pyc
   │     │  │  │  │     ├─ _mapping.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ modeline.py
   │     │  │  │  ├─ plugin.py
   │     │  │  │  ├─ regexopt.py
   │     │  │  │  ├─ scanner.py
   │     │  │  │  ├─ sphinxext.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ styles
   │     │  │  │  │  ├─ _mapping.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _mapping.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ token.py
   │     │  │  │  ├─ unistring.py
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cmdline.cpython-313.pyc
   │     │  │  │     ├─ console.cpython-313.pyc
   │     │  │  │     ├─ filter.cpython-313.pyc
   │     │  │  │     ├─ formatter.cpython-313.pyc
   │     │  │  │     ├─ lexer.cpython-313.pyc
   │     │  │  │     ├─ modeline.cpython-313.pyc
   │     │  │  │     ├─ plugin.cpython-313.pyc
   │     │  │  │     ├─ regexopt.cpython-313.pyc
   │     │  │  │     ├─ scanner.cpython-313.pyc
   │     │  │  │     ├─ sphinxext.cpython-313.pyc
   │     │  │  │     ├─ style.cpython-313.pyc
   │     │  │  │     ├─ token.cpython-313.pyc
   │     │  │  │     ├─ unistring.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ pyproject_hooks
   │     │  │  │  ├─ _compat.py
   │     │  │  │  ├─ _impl.py
   │     │  │  │  ├─ _in_process
   │     │  │  │  │  ├─ _in_process.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _in_process.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _compat.cpython-313.pyc
   │     │  │  │     ├─ _impl.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ requests
   │     │  │  │  ├─ adapters.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ auth.py
   │     │  │  │  ├─ certs.py
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ cookies.py
   │     │  │  │  ├─ exceptions.py
   │     │  │  │  ├─ help.py
   │     │  │  │  ├─ hooks.py
   │     │  │  │  ├─ models.py
   │     │  │  │  ├─ packages.py
   │     │  │  │  ├─ sessions.py
   │     │  │  │  ├─ status_codes.py
   │     │  │  │  ├─ structures.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ _internal_utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __pycache__
   │     │  │  │  │  ├─ adapters.cpython-313.pyc
   │     │  │  │  │  ├─ api.cpython-313.pyc
   │     │  │  │  │  ├─ auth.cpython-313.pyc
   │     │  │  │  │  ├─ certs.cpython-313.pyc
   │     │  │  │  │  ├─ compat.cpython-313.pyc
   │     │  │  │  │  ├─ cookies.cpython-313.pyc
   │     │  │  │  │  ├─ exceptions.cpython-313.pyc
   │     │  │  │  │  ├─ help.cpython-313.pyc
   │     │  │  │  │  ├─ hooks.cpython-313.pyc
   │     │  │  │  │  ├─ models.cpython-313.pyc
   │     │  │  │  │  ├─ packages.cpython-313.pyc
   │     │  │  │  │  ├─ sessions.cpython-313.pyc
   │     │  │  │  │  ├─ status_codes.cpython-313.pyc
   │     │  │  │  │  ├─ structures.cpython-313.pyc
   │     │  │  │  │  ├─ utils.cpython-313.pyc
   │     │  │  │  │  ├─ _internal_utils.cpython-313.pyc
   │     │  │  │  │  ├─ __init__.cpython-313.pyc
   │     │  │  │  │  └─ __version__.cpython-313.pyc
   │     │  │  │  └─ __version__.py
   │     │  │  ├─ resolvelib
   │     │  │  │  ├─ compat
   │     │  │  │  │  ├─ collections_abc.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ collections_abc.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ providers.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ reporters.py
   │     │  │  │  ├─ resolvers.py
   │     │  │  │  ├─ structs.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ providers.cpython-313.pyc
   │     │  │  │     ├─ reporters.cpython-313.pyc
   │     │  │  │     ├─ resolvers.cpython-313.pyc
   │     │  │  │     ├─ structs.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ rich
   │     │  │  │  ├─ abc.py
   │     │  │  │  ├─ align.py
   │     │  │  │  ├─ ansi.py
   │     │  │  │  ├─ bar.py
   │     │  │  │  ├─ box.py
   │     │  │  │  ├─ cells.py
   │     │  │  │  ├─ color.py
   │     │  │  │  ├─ color_triplet.py
   │     │  │  │  ├─ columns.py
   │     │  │  │  ├─ console.py
   │     │  │  │  ├─ constrain.py
   │     │  │  │  ├─ containers.py
   │     │  │  │  ├─ control.py
   │     │  │  │  ├─ default_styles.py
   │     │  │  │  ├─ diagnose.py
   │     │  │  │  ├─ emoji.py
   │     │  │  │  ├─ errors.py
   │     │  │  │  ├─ filesize.py
   │     │  │  │  ├─ file_proxy.py
   │     │  │  │  ├─ highlighter.py
   │     │  │  │  ├─ json.py
   │     │  │  │  ├─ jupyter.py
   │     │  │  │  ├─ layout.py
   │     │  │  │  ├─ live.py
   │     │  │  │  ├─ live_render.py
   │     │  │  │  ├─ logging.py
   │     │  │  │  ├─ markup.py
   │     │  │  │  ├─ measure.py
   │     │  │  │  ├─ padding.py
   │     │  │  │  ├─ pager.py
   │     │  │  │  ├─ palette.py
   │     │  │  │  ├─ panel.py
   │     │  │  │  ├─ pretty.py
   │     │  │  │  ├─ progress.py
   │     │  │  │  ├─ progress_bar.py
   │     │  │  │  ├─ prompt.py
   │     │  │  │  ├─ protocol.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ region.py
   │     │  │  │  ├─ repr.py
   │     │  │  │  ├─ rule.py
   │     │  │  │  ├─ scope.py
   │     │  │  │  ├─ screen.py
   │     │  │  │  ├─ segment.py
   │     │  │  │  ├─ spinner.py
   │     │  │  │  ├─ status.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ styled.py
   │     │  │  │  ├─ syntax.py
   │     │  │  │  ├─ table.py
   │     │  │  │  ├─ terminal_theme.py
   │     │  │  │  ├─ text.py
   │     │  │  │  ├─ theme.py
   │     │  │  │  ├─ themes.py
   │     │  │  │  ├─ traceback.py
   │     │  │  │  ├─ tree.py
   │     │  │  │  ├─ _cell_widths.py
   │     │  │  │  ├─ _emoji_codes.py
   │     │  │  │  ├─ _emoji_replace.py
   │     │  │  │  ├─ _export_format.py
   │     │  │  │  ├─ _extension.py
   │     │  │  │  ├─ _fileno.py
   │     │  │  │  ├─ _inspect.py
   │     │  │  │  ├─ _log_render.py
   │     │  │  │  ├─ _loop.py
   │     │  │  │  ├─ _null_file.py
   │     │  │  │  ├─ _palettes.py
   │     │  │  │  ├─ _pick.py
   │     │  │  │  ├─ _ratio.py
   │     │  │  │  ├─ _spinners.py
   │     │  │  │  ├─ _stack.py
   │     │  │  │  ├─ _timer.py
   │     │  │  │  ├─ _win32_console.py
   │     │  │  │  ├─ _windows.py
   │     │  │  │  ├─ _windows_renderer.py
   │     │  │  │  ├─ _wrap.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ abc.cpython-313.pyc
   │     │  │  │     ├─ align.cpython-313.pyc
   │     │  │  │     ├─ ansi.cpython-313.pyc
   │     │  │  │     ├─ bar.cpython-313.pyc
   │     │  │  │     ├─ box.cpython-313.pyc
   │     │  │  │     ├─ cells.cpython-313.pyc
   │     │  │  │     ├─ color.cpython-313.pyc
   │     │  │  │     ├─ color_triplet.cpython-313.pyc
   │     │  │  │     ├─ columns.cpython-313.pyc
   │     │  │  │     ├─ console.cpython-313.pyc
   │     │  │  │     ├─ constrain.cpython-313.pyc
   │     │  │  │     ├─ containers.cpython-313.pyc
   │     │  │  │     ├─ control.cpython-313.pyc
   │     │  │  │     ├─ default_styles.cpython-313.pyc
   │     │  │  │     ├─ diagnose.cpython-313.pyc
   │     │  │  │     ├─ emoji.cpython-313.pyc
   │     │  │  │     ├─ errors.cpython-313.pyc
   │     │  │  │     ├─ filesize.cpython-313.pyc
   │     │  │  │     ├─ file_proxy.cpython-313.pyc
   │     │  │  │     ├─ highlighter.cpython-313.pyc
   │     │  │  │     ├─ json.cpython-313.pyc
   │     │  │  │     ├─ jupyter.cpython-313.pyc
   │     │  │  │     ├─ layout.cpython-313.pyc
   │     │  │  │     ├─ live.cpython-313.pyc
   │     │  │  │     ├─ live_render.cpython-313.pyc
   │     │  │  │     ├─ logging.cpython-313.pyc
   │     │  │  │     ├─ markup.cpython-313.pyc
   │     │  │  │     ├─ measure.cpython-313.pyc
   │     │  │  │     ├─ padding.cpython-313.pyc
   │     │  │  │     ├─ pager.cpython-313.pyc
   │     │  │  │     ├─ palette.cpython-313.pyc
   │     │  │  │     ├─ panel.cpython-313.pyc
   │     │  │  │     ├─ pretty.cpython-313.pyc
   │     │  │  │     ├─ progress.cpython-313.pyc
   │     │  │  │     ├─ progress_bar.cpython-313.pyc
   │     │  │  │     ├─ prompt.cpython-313.pyc
   │     │  │  │     ├─ protocol.cpython-313.pyc
   │     │  │  │     ├─ region.cpython-313.pyc
   │     │  │  │     ├─ repr.cpython-313.pyc
   │     │  │  │     ├─ rule.cpython-313.pyc
   │     │  │  │     ├─ scope.cpython-313.pyc
   │     │  │  │     ├─ screen.cpython-313.pyc
   │     │  │  │     ├─ segment.cpython-313.pyc
   │     │  │  │     ├─ spinner.cpython-313.pyc
   │     │  │  │     ├─ status.cpython-313.pyc
   │     │  │  │     ├─ style.cpython-313.pyc
   │     │  │  │     ├─ styled.cpython-313.pyc
   │     │  │  │     ├─ syntax.cpython-313.pyc
   │     │  │  │     ├─ table.cpython-313.pyc
   │     │  │  │     ├─ terminal_theme.cpython-313.pyc
   │     │  │  │     ├─ text.cpython-313.pyc
   │     │  │  │     ├─ theme.cpython-313.pyc
   │     │  │  │     ├─ themes.cpython-313.pyc
   │     │  │  │     ├─ traceback.cpython-313.pyc
   │     │  │  │     ├─ tree.cpython-313.pyc
   │     │  │  │     ├─ _cell_widths.cpython-313.pyc
   │     │  │  │     ├─ _emoji_codes.cpython-313.pyc
   │     │  │  │     ├─ _emoji_replace.cpython-313.pyc
   │     │  │  │     ├─ _export_format.cpython-313.pyc
   │     │  │  │     ├─ _extension.cpython-313.pyc
   │     │  │  │     ├─ _fileno.cpython-313.pyc
   │     │  │  │     ├─ _inspect.cpython-313.pyc
   │     │  │  │     ├─ _log_render.cpython-313.pyc
   │     │  │  │     ├─ _loop.cpython-313.pyc
   │     │  │  │     ├─ _null_file.cpython-313.pyc
   │     │  │  │     ├─ _palettes.cpython-313.pyc
   │     │  │  │     ├─ _pick.cpython-313.pyc
   │     │  │  │     ├─ _ratio.cpython-313.pyc
   │     │  │  │     ├─ _spinners.cpython-313.pyc
   │     │  │  │     ├─ _stack.cpython-313.pyc
   │     │  │  │     ├─ _timer.cpython-313.pyc
   │     │  │  │     ├─ _win32_console.cpython-313.pyc
   │     │  │  │     ├─ _windows.cpython-313.pyc
   │     │  │  │     ├─ _windows_renderer.cpython-313.pyc
   │     │  │  │     ├─ _wrap.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ tomli
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _parser.py
   │     │  │  │  ├─ _re.py
   │     │  │  │  ├─ _types.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _parser.cpython-313.pyc
   │     │  │  │     ├─ _re.cpython-313.pyc
   │     │  │  │     ├─ _types.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ truststore
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _api.py
   │     │  │  │  ├─ _macos.py
   │     │  │  │  ├─ _openssl.py
   │     │  │  │  ├─ _ssl_constants.py
   │     │  │  │  ├─ _windows.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _api.cpython-313.pyc
   │     │  │  │     ├─ _macos.cpython-313.pyc
   │     │  │  │     ├─ _openssl.cpython-313.pyc
   │     │  │  │     ├─ _ssl_constants.cpython-313.pyc
   │     │  │  │     ├─ _windows.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ typing_extensions.py
   │     │  │  ├─ urllib3
   │     │  │  │  ├─ connection.py
   │     │  │  │  ├─ connectionpool.py
   │     │  │  │  ├─ contrib
   │     │  │  │  │  ├─ appengine.py
   │     │  │  │  │  ├─ ntlmpool.py
   │     │  │  │  │  ├─ pyopenssl.py
   │     │  │  │  │  ├─ securetransport.py
   │     │  │  │  │  ├─ socks.py
   │     │  │  │  │  ├─ _appengine_environ.py
   │     │  │  │  │  ├─ _securetransport
   │     │  │  │  │  │  ├─ bindings.py
   │     │  │  │  │  │  ├─ low_level.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ bindings.cpython-313.pyc
   │     │  │  │  │  │     ├─ low_level.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ appengine.cpython-313.pyc
   │     │  │  │  │     ├─ ntlmpool.cpython-313.pyc
   │     │  │  │  │     ├─ pyopenssl.cpython-313.pyc
   │     │  │  │  │     ├─ securetransport.cpython-313.pyc
   │     │  │  │  │     ├─ socks.cpython-313.pyc
   │     │  │  │  │     ├─ _appengine_environ.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ exceptions.py
   │     │  │  │  ├─ fields.py
   │     │  │  │  ├─ filepost.py
   │     │  │  │  ├─ packages
   │     │  │  │  │  ├─ backports
   │     │  │  │  │  │  ├─ makefile.py
   │     │  │  │  │  │  ├─ weakref_finalize.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ makefile.cpython-313.pyc
   │     │  │  │  │  │     ├─ weakref_finalize.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ six.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ six.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ poolmanager.py
   │     │  │  │  ├─ request.py
   │     │  │  │  ├─ response.py
   │     │  │  │  ├─ util
   │     │  │  │  │  ├─ connection.py
   │     │  │  │  │  ├─ proxy.py
   │     │  │  │  │  ├─ queue.py
   │     │  │  │  │  ├─ request.py
   │     │  │  │  │  ├─ response.py
   │     │  │  │  │  ├─ retry.py
   │     │  │  │  │  ├─ ssltransport.py
   │     │  │  │  │  ├─ ssl_.py
   │     │  │  │  │  ├─ ssl_match_hostname.py
   │     │  │  │  │  ├─ timeout.py
   │     │  │  │  │  ├─ url.py
   │     │  │  │  │  ├─ wait.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ connection.cpython-313.pyc
   │     │  │  │  │     ├─ proxy.cpython-313.pyc
   │     │  │  │  │     ├─ queue.cpython-313.pyc
   │     │  │  │  │     ├─ request.cpython-313.pyc
   │     │  │  │  │     ├─ response.cpython-313.pyc
   │     │  │  │  │     ├─ retry.cpython-313.pyc
   │     │  │  │  │     ├─ ssltransport.cpython-313.pyc
   │     │  │  │  │     ├─ ssl_.cpython-313.pyc
   │     │  │  │  │     ├─ ssl_match_hostname.cpython-313.pyc
   │     │  │  │  │     ├─ timeout.cpython-313.pyc
   │     │  │  │  │     ├─ url.cpython-313.pyc
   │     │  │  │  │     ├─ wait.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _collections.py
   │     │  │  │  ├─ _version.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ connection.cpython-313.pyc
   │     │  │  │     ├─ connectionpool.cpython-313.pyc
   │     │  │  │     ├─ exceptions.cpython-313.pyc
   │     │  │  │     ├─ fields.cpython-313.pyc
   │     │  │  │     ├─ filepost.cpython-313.pyc
   │     │  │  │     ├─ poolmanager.cpython-313.pyc
   │     │  │  │     ├─ request.cpython-313.pyc
   │     │  │  │     ├─ response.cpython-313.pyc
   │     │  │  │     ├─ _collections.cpython-313.pyc
   │     │  │  │     ├─ _version.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ vendor.txt
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ typing_extensions.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  ├─ __pip-runner__.py
   │     │  └─ __pycache__
   │     │     ├─ __init__.cpython-313.pyc
   │     │     ├─ __main__.cpython-313.pyc
   │     │     └─ __pip-runner__.cpython-313.pyc
   │     ├─ pip-24.2.dist-info
   │     │  ├─ AUTHORS.txt
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ psutil
   │     │  ├─ tests
   │     │  │  ├─ test_aix.py
   │     │  │  ├─ test_bsd.py
   │     │  │  ├─ test_connections.py
   │     │  │  ├─ test_contracts.py
   │     │  │  ├─ test_linux.py
   │     │  │  ├─ test_memleaks.py
   │     │  │  ├─ test_misc.py
   │     │  │  ├─ test_osx.py
   │     │  │  ├─ test_posix.py
   │     │  │  ├─ test_process.py
   │     │  │  ├─ test_process_all.py
   │     │  │  ├─ test_scripts.py
   │     │  │  ├─ test_sunos.py
   │     │  │  ├─ test_system.py
   │     │  │  ├─ test_testutils.py
   │     │  │  ├─ test_unicode.py
   │     │  │  ├─ test_windows.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ test_aix.cpython-313.pyc
   │     │  │     ├─ test_bsd.cpython-313.pyc
   │     │  │     ├─ test_connections.cpython-313.pyc
   │     │  │     ├─ test_contracts.cpython-313.pyc
   │     │  │     ├─ test_linux.cpython-313.pyc
   │     │  │     ├─ test_memleaks.cpython-313.pyc
   │     │  │     ├─ test_misc.cpython-313.pyc
   │     │  │     ├─ test_osx.cpython-313.pyc
   │     │  │     ├─ test_posix.cpython-313.pyc
   │     │  │     ├─ test_process.cpython-313.pyc
   │     │  │     ├─ test_process_all.cpython-313.pyc
   │     │  │     ├─ test_scripts.cpython-313.pyc
   │     │  │     ├─ test_sunos.cpython-313.pyc
   │     │  │     ├─ test_system.cpython-313.pyc
   │     │  │     ├─ test_testutils.cpython-313.pyc
   │     │  │     ├─ test_unicode.cpython-313.pyc
   │     │  │     ├─ test_windows.cpython-313.pyc
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ _common.py
   │     │  ├─ _psaix.py
   │     │  ├─ _psbsd.py
   │     │  ├─ _pslinux.py
   │     │  ├─ _psosx.py
   │     │  ├─ _psposix.py
   │     │  ├─ _pssunos.py
   │     │  ├─ _psutil_windows.pyd
   │     │  ├─ _pswindows.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _common.cpython-313.pyc
   │     │     ├─ _psaix.cpython-313.pyc
   │     │     ├─ _psbsd.cpython-313.pyc
   │     │     ├─ _pslinux.cpython-313.pyc
   │     │     ├─ _psosx.cpython-313.pyc
   │     │     ├─ _psposix.cpython-313.pyc
   │     │     ├─ _pssunos.cpython-313.pyc
   │     │     ├─ _pswindows.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ psutil-7.0.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ pydantic
   │     │  ├─ aliases.py
   │     │  ├─ alias_generators.py
   │     │  ├─ annotated_handlers.py
   │     │  ├─ class_validators.py
   │     │  ├─ color.py
   │     │  ├─ config.py
   │     │  ├─ dataclasses.py
   │     │  ├─ datetime_parse.py
   │     │  ├─ decorator.py
   │     │  ├─ deprecated
   │     │  │  ├─ class_validators.py
   │     │  │  ├─ config.py
   │     │  │  ├─ copy_internals.py
   │     │  │  ├─ decorator.py
   │     │  │  ├─ json.py
   │     │  │  ├─ parse.py
   │     │  │  ├─ tools.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ class_validators.cpython-313.pyc
   │     │  │     ├─ config.cpython-313.pyc
   │     │  │     ├─ copy_internals.cpython-313.pyc
   │     │  │     ├─ decorator.cpython-313.pyc
   │     │  │     ├─ json.cpython-313.pyc
   │     │  │     ├─ parse.cpython-313.pyc
   │     │  │     ├─ tools.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ env_settings.py
   │     │  ├─ errors.py
   │     │  ├─ error_wrappers.py
   │     │  ├─ experimental
   │     │  │  ├─ arguments_schema.py
   │     │  │  ├─ pipeline.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ arguments_schema.cpython-313.pyc
   │     │  │     ├─ pipeline.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ fields.py
   │     │  ├─ functional_serializers.py
   │     │  ├─ functional_validators.py
   │     │  ├─ generics.py
   │     │  ├─ json.py
   │     │  ├─ json_schema.py
   │     │  ├─ main.py
   │     │  ├─ mypy.py
   │     │  ├─ networks.py
   │     │  ├─ parse.py
   │     │  ├─ plugin
   │     │  │  ├─ _loader.py
   │     │  │  ├─ _schema_validator.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _loader.cpython-313.pyc
   │     │  │     ├─ _schema_validator.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ root_model.py
   │     │  ├─ schema.py
   │     │  ├─ tools.py
   │     │  ├─ types.py
   │     │  ├─ type_adapter.py
   │     │  ├─ typing.py
   │     │  ├─ utils.py
   │     │  ├─ v1
   │     │  │  ├─ annotated_types.py
   │     │  │  ├─ class_validators.py
   │     │  │  ├─ color.py
   │     │  │  ├─ config.py
   │     │  │  ├─ dataclasses.py
   │     │  │  ├─ datetime_parse.py
   │     │  │  ├─ decorator.py
   │     │  │  ├─ env_settings.py
   │     │  │  ├─ errors.py
   │     │  │  ├─ error_wrappers.py
   │     │  │  ├─ fields.py
   │     │  │  ├─ generics.py
   │     │  │  ├─ json.py
   │     │  │  ├─ main.py
   │     │  │  ├─ mypy.py
   │     │  │  ├─ networks.py
   │     │  │  ├─ parse.py
   │     │  │  ├─ py.typed
   │     │  │  ├─ schema.py
   │     │  │  ├─ tools.py
   │     │  │  ├─ types.py
   │     │  │  ├─ typing.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ validators.py
   │     │  │  ├─ version.py
   │     │  │  ├─ _hypothesis_plugin.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ annotated_types.cpython-313.pyc
   │     │  │     ├─ class_validators.cpython-313.pyc
   │     │  │     ├─ color.cpython-313.pyc
   │     │  │     ├─ config.cpython-313.pyc
   │     │  │     ├─ dataclasses.cpython-313.pyc
   │     │  │     ├─ datetime_parse.cpython-313.pyc
   │     │  │     ├─ decorator.cpython-313.pyc
   │     │  │     ├─ env_settings.cpython-313.pyc
   │     │  │     ├─ errors.cpython-313.pyc
   │     │  │     ├─ error_wrappers.cpython-313.pyc
   │     │  │     ├─ fields.cpython-313.pyc
   │     │  │     ├─ generics.cpython-313.pyc
   │     │  │     ├─ json.cpython-313.pyc
   │     │  │     ├─ main.cpython-313.pyc
   │     │  │     ├─ mypy.cpython-313.pyc
   │     │  │     ├─ networks.cpython-313.pyc
   │     │  │     ├─ parse.cpython-313.pyc
   │     │  │     ├─ schema.cpython-313.pyc
   │     │  │     ├─ tools.cpython-313.pyc
   │     │  │     ├─ types.cpython-313.pyc
   │     │  │     ├─ typing.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ validators.cpython-313.pyc
   │     │  │     ├─ version.cpython-313.pyc
   │     │  │     ├─ _hypothesis_plugin.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ validate_call_decorator.py
   │     │  ├─ validators.py
   │     │  ├─ version.py
   │     │  ├─ warnings.py
   │     │  ├─ _internal
   │     │  │  ├─ _config.py
   │     │  │  ├─ _core_metadata.py
   │     │  │  ├─ _core_utils.py
   │     │  │  ├─ _dataclasses.py
   │     │  │  ├─ _decorators.py
   │     │  │  ├─ _decorators_v1.py
   │     │  │  ├─ _discriminated_union.py
   │     │  │  ├─ _docs_extraction.py
   │     │  │  ├─ _fields.py
   │     │  │  ├─ _forward_ref.py
   │     │  │  ├─ _generate_schema.py
   │     │  │  ├─ _generics.py
   │     │  │  ├─ _git.py
   │     │  │  ├─ _import_utils.py
   │     │  │  ├─ _internal_dataclass.py
   │     │  │  ├─ _known_annotated_metadata.py
   │     │  │  ├─ _mock_val_ser.py
   │     │  │  ├─ _model_construction.py
   │     │  │  ├─ _namespace_utils.py
   │     │  │  ├─ _repr.py
   │     │  │  ├─ _schema_gather.py
   │     │  │  ├─ _schema_generation_shared.py
   │     │  │  ├─ _serializers.py
   │     │  │  ├─ _signature.py
   │     │  │  ├─ _typing_extra.py
   │     │  │  ├─ _utils.py
   │     │  │  ├─ _validate_call.py
   │     │  │  ├─ _validators.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _config.cpython-313.pyc
   │     │  │     ├─ _core_metadata.cpython-313.pyc
   │     │  │     ├─ _core_utils.cpython-313.pyc
   │     │  │     ├─ _dataclasses.cpython-313.pyc
   │     │  │     ├─ _decorators.cpython-313.pyc
   │     │  │     ├─ _decorators_v1.cpython-313.pyc
   │     │  │     ├─ _discriminated_union.cpython-313.pyc
   │     │  │     ├─ _docs_extraction.cpython-313.pyc
   │     │  │     ├─ _fields.cpython-313.pyc
   │     │  │     ├─ _forward_ref.cpython-313.pyc
   │     │  │     ├─ _generate_schema.cpython-313.pyc
   │     │  │     ├─ _generics.cpython-313.pyc
   │     │  │     ├─ _git.cpython-313.pyc
   │     │  │     ├─ _import_utils.cpython-313.pyc
   │     │  │     ├─ _internal_dataclass.cpython-313.pyc
   │     │  │     ├─ _known_annotated_metadata.cpython-313.pyc
   │     │  │     ├─ _mock_val_ser.cpython-313.pyc
   │     │  │     ├─ _model_construction.cpython-313.pyc
   │     │  │     ├─ _namespace_utils.cpython-313.pyc
   │     │  │     ├─ _repr.cpython-313.pyc
   │     │  │     ├─ _schema_gather.cpython-313.pyc
   │     │  │     ├─ _schema_generation_shared.cpython-313.pyc
   │     │  │     ├─ _serializers.cpython-313.pyc
   │     │  │     ├─ _signature.cpython-313.pyc
   │     │  │     ├─ _typing_extra.cpython-313.pyc
   │     │  │     ├─ _utils.cpython-313.pyc
   │     │  │     ├─ _validate_call.cpython-313.pyc
   │     │  │     ├─ _validators.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _migration.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ aliases.cpython-313.pyc
   │     │     ├─ alias_generators.cpython-313.pyc
   │     │     ├─ annotated_handlers.cpython-313.pyc
   │     │     ├─ class_validators.cpython-313.pyc
   │     │     ├─ color.cpython-313.pyc
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ dataclasses.cpython-313.pyc
   │     │     ├─ datetime_parse.cpython-313.pyc
   │     │     ├─ decorator.cpython-313.pyc
   │     │     ├─ env_settings.cpython-313.pyc
   │     │     ├─ errors.cpython-313.pyc
   │     │     ├─ error_wrappers.cpython-313.pyc
   │     │     ├─ fields.cpython-313.pyc
   │     │     ├─ functional_serializers.cpython-313.pyc
   │     │     ├─ functional_validators.cpython-313.pyc
   │     │     ├─ generics.cpython-313.pyc
   │     │     ├─ json.cpython-313.pyc
   │     │     ├─ json_schema.cpython-313.pyc
   │     │     ├─ main.cpython-313.pyc
   │     │     ├─ mypy.cpython-313.pyc
   │     │     ├─ networks.cpython-313.pyc
   │     │     ├─ parse.cpython-313.pyc
   │     │     ├─ root_model.cpython-313.pyc
   │     │     ├─ schema.cpython-313.pyc
   │     │     ├─ tools.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ type_adapter.cpython-313.pyc
   │     │     ├─ typing.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ validate_call_decorator.cpython-313.pyc
   │     │     ├─ validators.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ warnings.cpython-313.pyc
   │     │     ├─ _migration.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pydantic-2.11.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pydantic_core
   │     │  ├─ core_schema.py
   │     │  ├─ py.typed
   │     │  ├─ _pydantic_core.cp313-win_amd64.pyd
   │     │  ├─ _pydantic_core.pyi
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ core_schema.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pydantic_core-2.33.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pylab.py
   │     ├─ pyparsing
   │     │  ├─ actions.py
   │     │  ├─ common.py
   │     │  ├─ core.py
   │     │  ├─ diagram
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ exceptions.py
   │     │  ├─ helpers.py
   │     │  ├─ py.typed
   │     │  ├─ results.py
   │     │  ├─ testing.py
   │     │  ├─ tools
   │     │  │  ├─ cvt_pyparsing_pep8_names.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ cvt_pyparsing_pep8_names.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ unicode.py
   │     │  ├─ util.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ actions.cpython-313.pyc
   │     │     ├─ common.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ helpers.cpython-313.pyc
   │     │     ├─ results.cpython-313.pyc
   │     │     ├─ testing.cpython-313.pyc
   │     │     ├─ unicode.cpython-313.pyc
   │     │     ├─ util.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pyparsing-3.2.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ python_dateutil-2.9.0.post0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  ├─ WHEEL
   │     │  └─ zip-safe
   │     ├─ pytz
   │     │  ├─ exceptions.py
   │     │  ├─ lazy.py
   │     │  ├─ reference.py
   │     │  ├─ tzfile.py
   │     │  ├─ tzinfo.py
   │     │  ├─ zoneinfo
   │     │  │  ├─ Africa
   │     │  │  │  ├─ Abidjan
   │     │  │  │  ├─ Accra
   │     │  │  │  ├─ Addis_Ababa
   │     │  │  │  ├─ Algiers
   │     │  │  │  ├─ Asmara
   │     │  │  │  ├─ Asmera
   │     │  │  │  ├─ Bamako
   │     │  │  │  ├─ Bangui
   │     │  │  │  ├─ Banjul
   │     │  │  │  ├─ Bissau
   │     │  │  │  ├─ Blantyre
   │     │  │  │  ├─ Brazzaville
   │     │  │  │  ├─ Bujumbura
   │     │  │  │  ├─ Cairo
   │     │  │  │  ├─ Casablanca
   │     │  │  │  ├─ Ceuta
   │     │  │  │  ├─ Conakry
   │     │  │  │  ├─ Dakar
   │     │  │  │  ├─ Dar_es_Salaam
   │     │  │  │  ├─ Djibouti
   │     │  │  │  ├─ Douala
   │     │  │  │  ├─ El_Aaiun
   │     │  │  │  ├─ Freetown
   │     │  │  │  ├─ Gaborone
   │     │  │  │  ├─ Harare
   │     │  │  │  ├─ Johannesburg
   │     │  │  │  ├─ Juba
   │     │  │  │  ├─ Kampala
   │     │  │  │  ├─ Khartoum
   │     │  │  │  ├─ Kigali
   │     │  │  │  ├─ Kinshasa
   │     │  │  │  ├─ Lagos
   │     │  │  │  ├─ Libreville
   │     │  │  │  ├─ Lome
   │     │  │  │  ├─ Luanda
   │     │  │  │  ├─ Lubumbashi
   │     │  │  │  ├─ Lusaka
   │     │  │  │  ├─ Malabo
   │     │  │  │  ├─ Maputo
   │     │  │  │  ├─ Maseru
   │     │  │  │  ├─ Mbabane
   │     │  │  │  ├─ Mogadishu
   │     │  │  │  ├─ Monrovia
   │     │  │  │  ├─ Nairobi
   │     │  │  │  ├─ Ndjamena
   │     │  │  │  ├─ Niamey
   │     │  │  │  ├─ Nouakchott
   │     │  │  │  ├─ Ouagadougou
   │     │  │  │  ├─ Porto-Novo
   │     │  │  │  ├─ Sao_Tome
   │     │  │  │  ├─ Timbuktu
   │     │  │  │  ├─ Tripoli
   │     │  │  │  ├─ Tunis
   │     │  │  │  └─ Windhoek
   │     │  │  ├─ America
   │     │  │  │  ├─ Adak
   │     │  │  │  ├─ Anchorage
   │     │  │  │  ├─ Anguilla
   │     │  │  │  ├─ Antigua
   │     │  │  │  ├─ Araguaina
   │     │  │  │  ├─ Argentina
   │     │  │  │  │  ├─ Buenos_Aires
   │     │  │  │  │  ├─ Catamarca
   │     │  │  │  │  ├─ ComodRivadavia
   │     │  │  │  │  ├─ Cordoba
   │     │  │  │  │  ├─ Jujuy
   │     │  │  │  │  ├─ La_Rioja
   │     │  │  │  │  ├─ Mendoza
   │     │  │  │  │  ├─ Rio_Gallegos
   │     │  │  │  │  ├─ Salta
   │     │  │  │  │  ├─ San_Juan
   │     │  │  │  │  ├─ San_Luis
   │     │  │  │  │  ├─ Tucuman
   │     │  │  │  │  └─ Ushuaia
   │     │  │  │  ├─ Aruba
   │     │  │  │  ├─ Asuncion
   │     │  │  │  ├─ Atikokan
   │     │  │  │  ├─ Atka
   │     │  │  │  ├─ Bahia
   │     │  │  │  ├─ Bahia_Banderas
   │     │  │  │  ├─ Barbados
   │     │  │  │  ├─ Belem
   │     │  │  │  ├─ Belize
   │     │  │  │  ├─ Blanc-Sablon
   │     │  │  │  ├─ Boa_Vista
   │     │  │  │  ├─ Bogota
   │     │  │  │  ├─ Boise
   │     │  │  │  ├─ Buenos_Aires
   │     │  │  │  ├─ Cambridge_Bay
   │     │  │  │  ├─ Campo_Grande
   │     │  │  │  ├─ Cancun
   │     │  │  │  ├─ Caracas
   │     │  │  │  ├─ Catamarca
   │     │  │  │  ├─ Cayenne
   │     │  │  │  ├─ Cayman
   │     │  │  │  ├─ Chicago
   │     │  │  │  ├─ Chihuahua
   │     │  │  │  ├─ Ciudad_Juarez
   │     │  │  │  ├─ Coral_Harbour
   │     │  │  │  ├─ Cordoba
   │     │  │  │  ├─ Costa_Rica
   │     │  │  │  ├─ Coyhaique
   │     │  │  │  ├─ Creston
   │     │  │  │  ├─ Cuiaba
   │     │  │  │  ├─ Curacao
   │     │  │  │  ├─ Danmarkshavn
   │     │  │  │  ├─ Dawson
   │     │  │  │  ├─ Dawson_Creek
   │     │  │  │  ├─ Denver
   │     │  │  │  ├─ Detroit
   │     │  │  │  ├─ Dominica
   │     │  │  │  ├─ Edmonton
   │     │  │  │  ├─ Eirunepe
   │     │  │  │  ├─ El_Salvador
   │     │  │  │  ├─ Ensenada
   │     │  │  │  ├─ Fortaleza
   │     │  │  │  ├─ Fort_Nelson
   │     │  │  │  ├─ Fort_Wayne
   │     │  │  │  ├─ Glace_Bay
   │     │  │  │  ├─ Godthab
   │     │  │  │  ├─ Goose_Bay
   │     │  │  │  ├─ Grand_Turk
   │     │  │  │  ├─ Grenada
   │     │  │  │  ├─ Guadeloupe
   │     │  │  │  ├─ Guatemala
   │     │  │  │  ├─ Guayaquil
   │     │  │  │  ├─ Guyana
   │     │  │  │  ├─ Halifax
   │     │  │  │  ├─ Havana
   │     │  │  │  ├─ Hermosillo
   │     │  │  │  ├─ Indiana
   │     │  │  │  │  ├─ Indianapolis
   │     │  │  │  │  ├─ Knox
   │     │  │  │  │  ├─ Marengo
   │     │  │  │  │  ├─ Petersburg
   │     │  │  │  │  ├─ Tell_City
   │     │  │  │  │  ├─ Vevay
   │     │  │  │  │  ├─ Vincennes
   │     │  │  │  │  └─ Winamac
   │     │  │  │  ├─ Indianapolis
   │     │  │  │  ├─ Inuvik
   │     │  │  │  ├─ Iqaluit
   │     │  │  │  ├─ Jamaica
   │     │  │  │  ├─ Jujuy
   │     │  │  │  ├─ Juneau
   │     │  │  │  ├─ Kentucky
   │     │  │  │  │  ├─ Louisville
   │     │  │  │  │  └─ Monticello
   │     │  │  │  ├─ Knox_IN
   │     │  │  │  ├─ Kralendijk
   │     │  │  │  ├─ La_Paz
   │     │  │  │  ├─ Lima
   │     │  │  │  ├─ Los_Angeles
   │     │  │  │  ├─ Louisville
   │     │  │  │  ├─ Lower_Princes
   │     │  │  │  ├─ Maceio
   │     │  │  │  ├─ Managua
   │     │  │  │  ├─ Manaus
   │     │  │  │  ├─ Marigot
   │     │  │  │  ├─ Martinique
   │     │  │  │  ├─ Matamoros
   │     │  │  │  ├─ Mazatlan
   │     │  │  │  ├─ Mendoza
   │     │  │  │  ├─ Menominee
   │     │  │  │  ├─ Merida
   │     │  │  │  ├─ Metlakatla
   │     │  │  │  ├─ Mexico_City
   │     │  │  │  ├─ Miquelon
   │     │  │  │  ├─ Moncton
   │     │  │  │  ├─ Monterrey
   │     │  │  │  ├─ Montevideo
   │     │  │  │  ├─ Montreal
   │     │  │  │  ├─ Montserrat
   │     │  │  │  ├─ Nassau
   │     │  │  │  ├─ New_York
   │     │  │  │  ├─ Nipigon
   │     │  │  │  ├─ Nome
   │     │  │  │  ├─ Noronha
   │     │  │  │  ├─ North_Dakota
   │     │  │  │  │  ├─ Beulah
   │     │  │  │  │  ├─ Center
   │     │  │  │  │  └─ New_Salem
   │     │  │  │  ├─ Nuuk
   │     │  │  │  ├─ Ojinaga
   │     │  │  │  ├─ Panama
   │     │  │  │  ├─ Pangnirtung
   │     │  │  │  ├─ Paramaribo
   │     │  │  │  ├─ Phoenix
   │     │  │  │  ├─ Port-au-Prince
   │     │  │  │  ├─ Porto_Acre
   │     │  │  │  ├─ Porto_Velho
   │     │  │  │  ├─ Port_of_Spain
   │     │  │  │  ├─ Puerto_Rico
   │     │  │  │  ├─ Punta_Arenas
   │     │  │  │  ├─ Rainy_River
   │     │  │  │  ├─ Rankin_Inlet
   │     │  │  │  ├─ Recife
   │     │  │  │  ├─ Regina
   │     │  │  │  ├─ Resolute
   │     │  │  │  ├─ Rio_Branco
   │     │  │  │  ├─ Rosario
   │     │  │  │  ├─ Santarem
   │     │  │  │  ├─ Santa_Isabel
   │     │  │  │  ├─ Santiago
   │     │  │  │  ├─ Santo_Domingo
   │     │  │  │  ├─ Sao_Paulo
   │     │  │  │  ├─ Scoresbysund
   │     │  │  │  ├─ Shiprock
   │     │  │  │  ├─ Sitka
   │     │  │  │  ├─ St_Barthelemy
   │     │  │  │  ├─ St_Johns
   │     │  │  │  ├─ St_Kitts
   │     │  │  │  ├─ St_Lucia
   │     │  │  │  ├─ St_Thomas
   │     │  │  │  ├─ St_Vincent
   │     │  │  │  ├─ Swift_Current
   │     │  │  │  ├─ Tegucigalpa
   │     │  │  │  ├─ Thule
   │     │  │  │  ├─ Thunder_Bay
   │     │  │  │  ├─ Tijuana
   │     │  │  │  ├─ Toronto
   │     │  │  │  ├─ Tortola
   │     │  │  │  ├─ Vancouver
   │     │  │  │  ├─ Virgin
   │     │  │  │  ├─ Whitehorse
   │     │  │  │  ├─ Winnipeg
   │     │  │  │  ├─ Yakutat
   │     │  │  │  └─ Yellowknife
   │     │  │  ├─ Antarctica
   │     │  │  │  ├─ Casey
   │     │  │  │  ├─ Davis
   │     │  │  │  ├─ DumontDUrville
   │     │  │  │  ├─ Macquarie
   │     │  │  │  ├─ Mawson
   │     │  │  │  ├─ McMurdo
   │     │  │  │  ├─ Palmer
   │     │  │  │  ├─ Rothera
   │     │  │  │  ├─ South_Pole
   │     │  │  │  ├─ Syowa
   │     │  │  │  ├─ Troll
   │     │  │  │  └─ Vostok
   │     │  │  ├─ Arctic
   │     │  │  │  └─ Longyearbyen
   │     │  │  ├─ Asia
   │     │  │  │  ├─ Aden
   │     │  │  │  ├─ Almaty
   │     │  │  │  ├─ Amman
   │     │  │  │  ├─ Anadyr
   │     │  │  │  ├─ Aqtau
   │     │  │  │  ├─ Aqtobe
   │     │  │  │  ├─ Ashgabat
   │     │  │  │  ├─ Ashkhabad
   │     │  │  │  ├─ Atyrau
   │     │  │  │  ├─ Baghdad
   │     │  │  │  ├─ Bahrain
   │     │  │  │  ├─ Baku
   │     │  │  │  ├─ Bangkok
   │     │  │  │  ├─ Barnaul
   │     │  │  │  ├─ Beirut
   │     │  │  │  ├─ Bishkek
   │     │  │  │  ├─ Brunei
   │     │  │  │  ├─ Calcutta
   │     │  │  │  ├─ Chita
   │     │  │  │  ├─ Choibalsan
   │     │  │  │  ├─ Chongqing
   │     │  │  │  ├─ Chungking
   │     │  │  │  ├─ Colombo
   │     │  │  │  ├─ Dacca
   │     │  │  │  ├─ Damascus
   │     │  │  │  ├─ Dhaka
   │     │  │  │  ├─ Dili
   │     │  │  │  ├─ Dubai
   │     │  │  │  ├─ Dushanbe
   │     │  │  │  ├─ Famagusta
   │     │  │  │  ├─ Gaza
   │     │  │  │  ├─ Harbin
   │     │  │  │  ├─ Hebron
   │     │  │  │  ├─ Hong_Kong
   │     │  │  │  ├─ Hovd
   │     │  │  │  ├─ Ho_Chi_Minh
   │     │  │  │  ├─ Irkutsk
   │     │  │  │  ├─ Istanbul
   │     │  │  │  ├─ Jakarta
   │     │  │  │  ├─ Jayapura
   │     │  │  │  ├─ Jerusalem
   │     │  │  │  ├─ Kabul
   │     │  │  │  ├─ Kamchatka
   │     │  │  │  ├─ Karachi
   │     │  │  │  ├─ Kashgar
   │     │  │  │  ├─ Kathmandu
   │     │  │  │  ├─ Katmandu
   │     │  │  │  ├─ Khandyga
   │     │  │  │  ├─ Kolkata
   │     │  │  │  ├─ Krasnoyarsk
   │     │  │  │  ├─ Kuala_Lumpur
   │     │  │  │  ├─ Kuching
   │     │  │  │  ├─ Kuwait
   │     │  │  │  ├─ Macao
   │     │  │  │  ├─ Macau
   │     │  │  │  ├─ Magadan
   │     │  │  │  ├─ Makassar
   │     │  │  │  ├─ Manila
   │     │  │  │  ├─ Muscat
   │     │  │  │  ├─ Nicosia
   │     │  │  │  ├─ Novokuznetsk
   │     │  │  │  ├─ Novosibirsk
   │     │  │  │  ├─ Omsk
   │     │  │  │  ├─ Oral
   │     │  │  │  ├─ Phnom_Penh
   │     │  │  │  ├─ Pontianak
   │     │  │  │  ├─ Pyongyang
   │     │  │  │  ├─ Qatar
   │     │  │  │  ├─ Qostanay
   │     │  │  │  ├─ Qyzylorda
   │     │  │  │  ├─ Rangoon
   │     │  │  │  ├─ Riyadh
   │     │  │  │  ├─ Saigon
   │     │  │  │  ├─ Sakhalin
   │     │  │  │  ├─ Samarkand
   │     │  │  │  ├─ Seoul
   │     │  │  │  ├─ Shanghai
   │     │  │  │  ├─ Singapore
   │     │  │  │  ├─ Srednekolymsk
   │     │  │  │  ├─ Taipei
   │     │  │  │  ├─ Tashkent
   │     │  │  │  ├─ Tbilisi
   │     │  │  │  ├─ Tehran
   │     │  │  │  ├─ Tel_Aviv
   │     │  │  │  ├─ Thimbu
   │     │  │  │  ├─ Thimphu
   │     │  │  │  ├─ Tokyo
   │     │  │  │  ├─ Tomsk
   │     │  │  │  ├─ Ujung_Pandang
   │     │  │  │  ├─ Ulaanbaatar
   │     │  │  │  ├─ Ulan_Bator
   │     │  │  │  ├─ Urumqi
   │     │  │  │  ├─ Ust-Nera
   │     │  │  │  ├─ Vientiane
   │     │  │  │  ├─ Vladivostok
   │     │  │  │  ├─ Yakutsk
   │     │  │  │  ├─ Yangon
   │     │  │  │  ├─ Yekaterinburg
   │     │  │  │  └─ Yerevan
   │     │  │  ├─ Atlantic
   │     │  │  │  ├─ Azores
   │     │  │  │  ├─ Bermuda
   │     │  │  │  ├─ Canary
   │     │  │  │  ├─ Cape_Verde
   │     │  │  │  ├─ Faeroe
   │     │  │  │  ├─ Faroe
   │     │  │  │  ├─ Jan_Mayen
   │     │  │  │  ├─ Madeira
   │     │  │  │  ├─ Reykjavik
   │     │  │  │  ├─ South_Georgia
   │     │  │  │  ├─ Stanley
   │     │  │  │  └─ St_Helena
   │     │  │  ├─ Australia
   │     │  │  │  ├─ ACT
   │     │  │  │  ├─ Adelaide
   │     │  │  │  ├─ Brisbane
   │     │  │  │  ├─ Broken_Hill
   │     │  │  │  ├─ Canberra
   │     │  │  │  ├─ Currie
   │     │  │  │  ├─ Darwin
   │     │  │  │  ├─ Eucla
   │     │  │  │  ├─ Hobart
   │     │  │  │  ├─ LHI
   │     │  │  │  ├─ Lindeman
   │     │  │  │  ├─ Lord_Howe
   │     │  │  │  ├─ Melbourne
   │     │  │  │  ├─ North
   │     │  │  │  ├─ NSW
   │     │  │  │  ├─ Perth
   │     │  │  │  ├─ Queensland
   │     │  │  │  ├─ South
   │     │  │  │  ├─ Sydney
   │     │  │  │  ├─ Tasmania
   │     │  │  │  ├─ Victoria
   │     │  │  │  ├─ West
   │     │  │  │  └─ Yancowinna
   │     │  │  ├─ Brazil
   │     │  │  │  ├─ Acre
   │     │  │  │  ├─ DeNoronha
   │     │  │  │  ├─ East
   │     │  │  │  └─ West
   │     │  │  ├─ Canada
   │     │  │  │  ├─ Atlantic
   │     │  │  │  ├─ Central
   │     │  │  │  ├─ Eastern
   │     │  │  │  ├─ Mountain
   │     │  │  │  ├─ Newfoundland
   │     │  │  │  ├─ Pacific
   │     │  │  │  ├─ Saskatchewan
   │     │  │  │  └─ Yukon
   │     │  │  ├─ CET
   │     │  │  ├─ Chile
   │     │  │  │  ├─ Continental
   │     │  │  │  └─ EasterIsland
   │     │  │  ├─ CST6CDT
   │     │  │  ├─ Cuba
   │     │  │  ├─ EET
   │     │  │  ├─ Egypt
   │     │  │  ├─ Eire
   │     │  │  ├─ EST
   │     │  │  ├─ EST5EDT
   │     │  │  ├─ Etc
   │     │  │  │  ├─ GMT
   │     │  │  │  ├─ GMT+0
   │     │  │  │  ├─ GMT+1
   │     │  │  │  ├─ GMT+10
   │     │  │  │  ├─ GMT+11
   │     │  │  │  ├─ GMT+12
   │     │  │  │  ├─ GMT+2
   │     │  │  │  ├─ GMT+3
   │     │  │  │  ├─ GMT+4
   │     │  │  │  ├─ GMT+5
   │     │  │  │  ├─ GMT+6
   │     │  │  │  ├─ GMT+7
   │     │  │  │  ├─ GMT+8
   │     │  │  │  ├─ GMT+9
   │     │  │  │  ├─ GMT-0
   │     │  │  │  ├─ GMT-1
   │     │  │  │  ├─ GMT-10
   │     │  │  │  ├─ GMT-11
   │     │  │  │  ├─ GMT-12
   │     │  │  │  ├─ GMT-13
   │     │  │  │  ├─ GMT-14
   │     │  │  │  ├─ GMT-2
   │     │  │  │  ├─ GMT-3
   │     │  │  │  ├─ GMT-4
   │     │  │  │  ├─ GMT-5
   │     │  │  │  ├─ GMT-6
   │     │  │  │  ├─ GMT-7
   │     │  │  │  ├─ GMT-8
   │     │  │  │  ├─ GMT-9
   │     │  │  │  ├─ GMT0
   │     │  │  │  ├─ Greenwich
   │     │  │  │  ├─ UCT
   │     │  │  │  ├─ Universal
   │     │  │  │  ├─ UTC
   │     │  │  │  └─ Zulu
   │     │  │  ├─ Europe
   │     │  │  │  ├─ Amsterdam
   │     │  │  │  ├─ Andorra
   │     │  │  │  ├─ Astrakhan
   │     │  │  │  ├─ Athens
   │     │  │  │  ├─ Belfast
   │     │  │  │  ├─ Belgrade
   │     │  │  │  ├─ Berlin
   │     │  │  │  ├─ Bratislava
   │     │  │  │  ├─ Brussels
   │     │  │  │  ├─ Bucharest
   │     │  │  │  ├─ Budapest
   │     │  │  │  ├─ Busingen
   │     │  │  │  ├─ Chisinau
   │     │  │  │  ├─ Copenhagen
   │     │  │  │  ├─ Dublin
   │     │  │  │  ├─ Gibraltar
   │     │  │  │  ├─ Guernsey
   │     │  │  │  ├─ Helsinki
   │     │  │  │  ├─ Isle_of_Man
   │     │  │  │  ├─ Istanbul
   │     │  │  │  ├─ Jersey
   │     │  │  │  ├─ Kaliningrad
   │     │  │  │  ├─ Kiev
   │     │  │  │  ├─ Kirov
   │     │  │  │  ├─ Kyiv
   │     │  │  │  ├─ Lisbon
   │     │  │  │  ├─ Ljubljana
   │     │  │  │  ├─ London
   │     │  │  │  ├─ Luxembourg
   │     │  │  │  ├─ Madrid
   │     │  │  │  ├─ Malta
   │     │  │  │  ├─ Mariehamn
   │     │  │  │  ├─ Minsk
   │     │  │  │  ├─ Monaco
   │     │  │  │  ├─ Moscow
   │     │  │  │  ├─ Nicosia
   │     │  │  │  ├─ Oslo
   │     │  │  │  ├─ Paris
   │     │  │  │  ├─ Podgorica
   │     │  │  │  ├─ Prague
   │     │  │  │  ├─ Riga
   │     │  │  │  ├─ Rome
   │     │  │  │  ├─ Samara
   │     │  │  │  ├─ San_Marino
   │     │  │  │  ├─ Sarajevo
   │     │  │  │  ├─ Saratov
   │     │  │  │  ├─ Simferopol
   │     │  │  │  ├─ Skopje
   │     │  │  │  ├─ Sofia
   │     │  │  │  ├─ Stockholm
   │     │  │  │  ├─ Tallinn
   │     │  │  │  ├─ Tirane
   │     │  │  │  ├─ Tiraspol
   │     │  │  │  ├─ Ulyanovsk
   │     │  │  │  ├─ Uzhgorod
   │     │  │  │  ├─ Vaduz
   │     │  │  │  ├─ Vatican
   │     │  │  │  ├─ Vienna
   │     │  │  │  ├─ Vilnius
   │     │  │  │  ├─ Volgograd
   │     │  │  │  ├─ Warsaw
   │     │  │  │  ├─ Zagreb
   │     │  │  │  ├─ Zaporozhye
   │     │  │  │  └─ Zurich
   │     │  │  ├─ Factory
   │     │  │  ├─ GB
   │     │  │  ├─ GB-Eire
   │     │  │  ├─ GMT
   │     │  │  ├─ GMT+0
   │     │  │  ├─ GMT-0
   │     │  │  ├─ GMT0
   │     │  │  ├─ Greenwich
   │     │  │  ├─ Hongkong
   │     │  │  ├─ HST
   │     │  │  ├─ Iceland
   │     │  │  ├─ Indian
   │     │  │  │  ├─ Antananarivo
   │     │  │  │  ├─ Chagos
   │     │  │  │  ├─ Christmas
   │     │  │  │  ├─ Cocos
   │     │  │  │  ├─ Comoro
   │     │  │  │  ├─ Kerguelen
   │     │  │  │  ├─ Mahe
   │     │  │  │  ├─ Maldives
   │     │  │  │  ├─ Mauritius
   │     │  │  │  ├─ Mayotte
   │     │  │  │  └─ Reunion
   │     │  │  ├─ Iran
   │     │  │  ├─ iso3166.tab
   │     │  │  ├─ Israel
   │     │  │  ├─ Jamaica
   │     │  │  ├─ Japan
   │     │  │  ├─ Kwajalein
   │     │  │  ├─ leapseconds
   │     │  │  ├─ Libya
   │     │  │  ├─ MET
   │     │  │  ├─ Mexico
   │     │  │  │  ├─ BajaNorte
   │     │  │  │  ├─ BajaSur
   │     │  │  │  └─ General
   │     │  │  ├─ MST
   │     │  │  ├─ MST7MDT
   │     │  │  ├─ Navajo
   │     │  │  ├─ NZ
   │     │  │  ├─ NZ-CHAT
   │     │  │  ├─ Pacific
   │     │  │  │  ├─ Apia
   │     │  │  │  ├─ Auckland
   │     │  │  │  ├─ Bougainville
   │     │  │  │  ├─ Chatham
   │     │  │  │  ├─ Chuuk
   │     │  │  │  ├─ Easter
   │     │  │  │  ├─ Efate
   │     │  │  │  ├─ Enderbury
   │     │  │  │  ├─ Fakaofo
   │     │  │  │  ├─ Fiji
   │     │  │  │  ├─ Funafuti
   │     │  │  │  ├─ Galapagos
   │     │  │  │  ├─ Gambier
   │     │  │  │  ├─ Guadalcanal
   │     │  │  │  ├─ Guam
   │     │  │  │  ├─ Honolulu
   │     │  │  │  ├─ Johnston
   │     │  │  │  ├─ Kanton
   │     │  │  │  ├─ Kiritimati
   │     │  │  │  ├─ Kosrae
   │     │  │  │  ├─ Kwajalein
   │     │  │  │  ├─ Majuro
   │     │  │  │  ├─ Marquesas
   │     │  │  │  ├─ Midway
   │     │  │  │  ├─ Nauru
   │     │  │  │  ├─ Niue
   │     │  │  │  ├─ Norfolk
   │     │  │  │  ├─ Noumea
   │     │  │  │  ├─ Pago_Pago
   │     │  │  │  ├─ Palau
   │     │  │  │  ├─ Pitcairn
   │     │  │  │  ├─ Pohnpei
   │     │  │  │  ├─ Ponape
   │     │  │  │  ├─ Port_Moresby
   │     │  │  │  ├─ Rarotonga
   │     │  │  │  ├─ Saipan
   │     │  │  │  ├─ Samoa
   │     │  │  │  ├─ Tahiti
   │     │  │  │  ├─ Tarawa
   │     │  │  │  ├─ Tongatapu
   │     │  │  │  ├─ Truk
   │     │  │  │  ├─ Wake
   │     │  │  │  ├─ Wallis
   │     │  │  │  └─ Yap
   │     │  │  ├─ Poland
   │     │  │  ├─ Portugal
   │     │  │  ├─ PRC
   │     │  │  ├─ PST8PDT
   │     │  │  ├─ ROC
   │     │  │  ├─ ROK
   │     │  │  ├─ Singapore
   │     │  │  ├─ Turkey
   │     │  │  ├─ tzdata.zi
   │     │  │  ├─ UCT
   │     │  │  ├─ Universal
   │     │  │  ├─ US
   │     │  │  │  ├─ Alaska
   │     │  │  │  ├─ Aleutian
   │     │  │  │  ├─ Arizona
   │     │  │  │  ├─ Central
   │     │  │  │  ├─ East-Indiana
   │     │  │  │  ├─ Eastern
   │     │  │  │  ├─ Hawaii
   │     │  │  │  ├─ Indiana-Starke
   │     │  │  │  ├─ Michigan
   │     │  │  │  ├─ Mountain
   │     │  │  │  ├─ Pacific
   │     │  │  │  └─ Samoa
   │     │  │  ├─ UTC
   │     │  │  ├─ W-SU
   │     │  │  ├─ WET
   │     │  │  ├─ zone.tab
   │     │  │  ├─ zone1970.tab
   │     │  │  ├─ zonenow.tab
   │     │  │  └─ Zulu
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ lazy.cpython-313.pyc
   │     │     ├─ reference.cpython-313.pyc
   │     │     ├─ tzfile.cpython-313.pyc
   │     │     ├─ tzinfo.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pytz-2025.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  ├─ WHEEL
   │     │  └─ zip-safe
   │     ├─ PyYAML-6.0.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ requests
   │     │  ├─ adapters.py
   │     │  ├─ api.py
   │     │  ├─ auth.py
   │     │  ├─ certs.py
   │     │  ├─ compat.py
   │     │  ├─ cookies.py
   │     │  ├─ exceptions.py
   │     │  ├─ help.py
   │     │  ├─ hooks.py
   │     │  ├─ models.py
   │     │  ├─ packages.py
   │     │  ├─ sessions.py
   │     │  ├─ status_codes.py
   │     │  ├─ structures.py
   │     │  ├─ utils.py
   │     │  ├─ _internal_utils.py
   │     │  ├─ __init__.py
   │     │  ├─ __pycache__
   │     │  │  ├─ adapters.cpython-313.pyc
   │     │  │  ├─ api.cpython-313.pyc
   │     │  │  ├─ auth.cpython-313.pyc
   │     │  │  ├─ certs.cpython-313.pyc
   │     │  │  ├─ compat.cpython-313.pyc
   │     │  │  ├─ cookies.cpython-313.pyc
   │     │  │  ├─ exceptions.cpython-313.pyc
   │     │  │  ├─ help.cpython-313.pyc
   │     │  │  ├─ hooks.cpython-313.pyc
   │     │  │  ├─ models.cpython-313.pyc
   │     │  │  ├─ packages.cpython-313.pyc
   │     │  │  ├─ sessions.cpython-313.pyc
   │     │  │  ├─ status_codes.cpython-313.pyc
   │     │  │  ├─ structures.cpython-313.pyc
   │     │  │  ├─ utils.cpython-313.pyc
   │     │  │  ├─ _internal_utils.cpython-313.pyc
   │     │  │  ├─ __init__.cpython-313.pyc
   │     │  │  └─ __version__.cpython-313.pyc
   │     │  └─ __version__.py
   │     ├─ requests-2.32.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ scikit_learn-1.6.1.dist-info
   │     │  ├─ COPYING
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ scipy
   │     │  ├─ cluster
   │     │  │  ├─ hierarchy.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ hierarchy_test_data.py
   │     │  │  │  ├─ test_disjoint_set.py
   │     │  │  │  ├─ test_hierarchy.py
   │     │  │  │  ├─ test_vq.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ hierarchy_test_data.cpython-313.pyc
   │     │  │  │     ├─ test_disjoint_set.cpython-313.pyc
   │     │  │  │     ├─ test_hierarchy.cpython-313.pyc
   │     │  │  │     ├─ test_vq.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ vq.py
   │     │  │  ├─ _hierarchy.cp313-win_amd64.dll.a
   │     │  │  ├─ _hierarchy.cp313-win_amd64.pyd
   │     │  │  ├─ _optimal_leaf_ordering.cp313-win_amd64.dll.a
   │     │  │  ├─ _optimal_leaf_ordering.cp313-win_amd64.pyd
   │     │  │  ├─ _vq.cp313-win_amd64.dll.a
   │     │  │  ├─ _vq.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ hierarchy.cpython-313.pyc
   │     │  │     ├─ vq.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ conftest.py
   │     │  ├─ constants
   │     │  │  ├─ codata.py
   │     │  │  ├─ constants.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_codata.py
   │     │  │  │  ├─ test_constants.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_codata.cpython-313.pyc
   │     │  │  │     ├─ test_constants.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _codata.py
   │     │  │  ├─ _constants.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ codata.cpython-313.pyc
   │     │  │     ├─ constants.cpython-313.pyc
   │     │  │     ├─ _codata.cpython-313.pyc
   │     │  │     ├─ _constants.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ datasets
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _download_all.py
   │     │  │  ├─ _fetchers.py
   │     │  │  ├─ _registry.py
   │     │  │  ├─ _utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _download_all.cpython-313.pyc
   │     │  │     ├─ _fetchers.cpython-313.pyc
   │     │  │     ├─ _registry.cpython-313.pyc
   │     │  │     ├─ _utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ differentiate
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_differentiate.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_differentiate.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _differentiate.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _differentiate.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ fft
   │     │  │  ├─ tests
   │     │  │  │  ├─ mock_backend.py
   │     │  │  │  ├─ test_backend.py
   │     │  │  │  ├─ test_basic.py
   │     │  │  │  ├─ test_fftlog.py
   │     │  │  │  ├─ test_helper.py
   │     │  │  │  ├─ test_multithreading.py
   │     │  │  │  ├─ test_real_transforms.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ mock_backend.cpython-313.pyc
   │     │  │  │     ├─ test_backend.cpython-313.pyc
   │     │  │  │     ├─ test_basic.cpython-313.pyc
   │     │  │  │     ├─ test_fftlog.cpython-313.pyc
   │     │  │  │     ├─ test_helper.cpython-313.pyc
   │     │  │  │     ├─ test_multithreading.cpython-313.pyc
   │     │  │  │     ├─ test_real_transforms.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _backend.py
   │     │  │  ├─ _basic.py
   │     │  │  ├─ _basic_backend.py
   │     │  │  ├─ _debug_backends.py
   │     │  │  ├─ _fftlog.py
   │     │  │  ├─ _fftlog_backend.py
   │     │  │  ├─ _helper.py
   │     │  │  ├─ _pocketfft
   │     │  │  │  ├─ basic.py
   │     │  │  │  ├─ helper.py
   │     │  │  │  ├─ LICENSE.md
   │     │  │  │  ├─ pypocketfft.cp313-win_amd64.dll.a
   │     │  │  │  ├─ pypocketfft.cp313-win_amd64.pyd
   │     │  │  │  ├─ realtransforms.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_basic.py
   │     │  │  │  │  ├─ test_real_transforms.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_basic.cpython-313.pyc
   │     │  │  │  │     ├─ test_real_transforms.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ basic.cpython-313.pyc
   │     │  │  │     ├─ helper.cpython-313.pyc
   │     │  │  │     ├─ realtransforms.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _realtransforms.py
   │     │  │  ├─ _realtransforms_backend.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _backend.cpython-313.pyc
   │     │  │     ├─ _basic.cpython-313.pyc
   │     │  │     ├─ _basic_backend.cpython-313.pyc
   │     │  │     ├─ _debug_backends.cpython-313.pyc
   │     │  │     ├─ _fftlog.cpython-313.pyc
   │     │  │     ├─ _fftlog_backend.cpython-313.pyc
   │     │  │     ├─ _helper.cpython-313.pyc
   │     │  │     ├─ _realtransforms.cpython-313.pyc
   │     │  │     ├─ _realtransforms_backend.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ fftpack
   │     │  │  ├─ basic.py
   │     │  │  ├─ convolve.cp313-win_amd64.dll.a
   │     │  │  ├─ convolve.cp313-win_amd64.pyd
   │     │  │  ├─ helper.py
   │     │  │  ├─ pseudo_diffs.py
   │     │  │  ├─ realtransforms.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ fftw_double_ref.npz
   │     │  │  │  ├─ fftw_longdouble_ref.npz
   │     │  │  │  ├─ fftw_single_ref.npz
   │     │  │  │  ├─ test.npz
   │     │  │  │  ├─ test_basic.py
   │     │  │  │  ├─ test_helper.py
   │     │  │  │  ├─ test_import.py
   │     │  │  │  ├─ test_pseudo_diffs.py
   │     │  │  │  ├─ test_real_transforms.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_basic.cpython-313.pyc
   │     │  │  │     ├─ test_helper.cpython-313.pyc
   │     │  │  │     ├─ test_import.cpython-313.pyc
   │     │  │  │     ├─ test_pseudo_diffs.cpython-313.pyc
   │     │  │  │     ├─ test_real_transforms.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _basic.py
   │     │  │  ├─ _helper.py
   │     │  │  ├─ _pseudo_diffs.py
   │     │  │  ├─ _realtransforms.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ basic.cpython-313.pyc
   │     │  │     ├─ helper.cpython-313.pyc
   │     │  │     ├─ pseudo_diffs.cpython-313.pyc
   │     │  │     ├─ realtransforms.cpython-313.pyc
   │     │  │     ├─ _basic.cpython-313.pyc
   │     │  │     ├─ _helper.cpython-313.pyc
   │     │  │     ├─ _pseudo_diffs.cpython-313.pyc
   │     │  │     ├─ _realtransforms.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ integrate
   │     │  │  ├─ dop.py
   │     │  │  ├─ lsoda.py
   │     │  │  ├─ odepack.py
   │     │  │  ├─ quadpack.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_banded_ode_solvers.py
   │     │  │  │  ├─ test_bvp.py
   │     │  │  │  ├─ test_cubature.py
   │     │  │  │  ├─ test_integrate.py
   │     │  │  │  ├─ test_odeint_jac.py
   │     │  │  │  ├─ test_quadpack.py
   │     │  │  │  ├─ test_quadrature.py
   │     │  │  │  ├─ test_tanhsinh.py
   │     │  │  │  ├─ test__quad_vec.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_banded_ode_solvers.cpython-313.pyc
   │     │  │  │     ├─ test_bvp.cpython-313.pyc
   │     │  │  │     ├─ test_cubature.cpython-313.pyc
   │     │  │  │     ├─ test_integrate.cpython-313.pyc
   │     │  │  │     ├─ test_odeint_jac.cpython-313.pyc
   │     │  │  │     ├─ test_quadpack.cpython-313.pyc
   │     │  │  │     ├─ test_quadrature.cpython-313.pyc
   │     │  │  │     ├─ test_tanhsinh.cpython-313.pyc
   │     │  │  │     ├─ test__quad_vec.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ vode.py
   │     │  │  ├─ _bvp.py
   │     │  │  ├─ _cubature.py
   │     │  │  ├─ _dop.cp313-win_amd64.dll.a
   │     │  │  ├─ _dop.cp313-win_amd64.pyd
   │     │  │  ├─ _ivp
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ bdf.py
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ dop853_coefficients.py
   │     │  │  │  ├─ ivp.py
   │     │  │  │  ├─ lsoda.py
   │     │  │  │  ├─ radau.py
   │     │  │  │  ├─ rk.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_ivp.py
   │     │  │  │  │  ├─ test_rk.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_ivp.cpython-313.pyc
   │     │  │  │  │     ├─ test_rk.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ bdf.cpython-313.pyc
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ dop853_coefficients.cpython-313.pyc
   │     │  │  │     ├─ ivp.cpython-313.pyc
   │     │  │  │     ├─ lsoda.cpython-313.pyc
   │     │  │  │     ├─ radau.cpython-313.pyc
   │     │  │  │     ├─ rk.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _lebedev.py
   │     │  │  ├─ _lsoda.cp313-win_amd64.dll.a
   │     │  │  ├─ _lsoda.cp313-win_amd64.pyd
   │     │  │  ├─ _ode.py
   │     │  │  ├─ _odepack.cp313-win_amd64.dll.a
   │     │  │  ├─ _odepack.cp313-win_amd64.pyd
   │     │  │  ├─ _odepack_py.py
   │     │  │  ├─ _quadpack.cp313-win_amd64.dll.a
   │     │  │  ├─ _quadpack.cp313-win_amd64.pyd
   │     │  │  ├─ _quadpack_py.py
   │     │  │  ├─ _quadrature.py
   │     │  │  ├─ _quad_vec.py
   │     │  │  ├─ _rules
   │     │  │  │  ├─ _base.py
   │     │  │  │  ├─ _gauss_kronrod.py
   │     │  │  │  ├─ _gauss_legendre.py
   │     │  │  │  ├─ _genz_malik.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _base.cpython-313.pyc
   │     │  │  │     ├─ _gauss_kronrod.cpython-313.pyc
   │     │  │  │     ├─ _gauss_legendre.cpython-313.pyc
   │     │  │  │     ├─ _genz_malik.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _tanhsinh.py
   │     │  │  ├─ _test_multivariate.cp313-win_amd64.dll.a
   │     │  │  ├─ _test_multivariate.cp313-win_amd64.pyd
   │     │  │  ├─ _test_odeint_banded.cp313-win_amd64.dll.a
   │     │  │  ├─ _test_odeint_banded.cp313-win_amd64.pyd
   │     │  │  ├─ _vode.cp313-win_amd64.dll.a
   │     │  │  ├─ _vode.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ dop.cpython-313.pyc
   │     │  │     ├─ lsoda.cpython-313.pyc
   │     │  │     ├─ odepack.cpython-313.pyc
   │     │  │     ├─ quadpack.cpython-313.pyc
   │     │  │     ├─ vode.cpython-313.pyc
   │     │  │     ├─ _bvp.cpython-313.pyc
   │     │  │     ├─ _cubature.cpython-313.pyc
   │     │  │     ├─ _lebedev.cpython-313.pyc
   │     │  │     ├─ _ode.cpython-313.pyc
   │     │  │     ├─ _odepack_py.cpython-313.pyc
   │     │  │     ├─ _quadpack_py.cpython-313.pyc
   │     │  │     ├─ _quadrature.cpython-313.pyc
   │     │  │     ├─ _quad_vec.cpython-313.pyc
   │     │  │     ├─ _tanhsinh.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ interpolate
   │     │  │  ├─ dfitpack.py
   │     │  │  ├─ fitpack.py
   │     │  │  ├─ fitpack2.py
   │     │  │  ├─ interpnd.py
   │     │  │  ├─ interpolate.py
   │     │  │  ├─ ndgriddata.py
   │     │  │  ├─ polyint.py
   │     │  │  ├─ rbf.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ bug-1310.npz
   │     │  │  │  │  ├─ estimate_gradients_hang.npy
   │     │  │  │  │  └─ gcvspl.npz
   │     │  │  │  ├─ test_bary_rational.py
   │     │  │  │  ├─ test_bsplines.py
   │     │  │  │  ├─ test_fitpack.py
   │     │  │  │  ├─ test_fitpack2.py
   │     │  │  │  ├─ test_gil.py
   │     │  │  │  ├─ test_interpnd.py
   │     │  │  │  ├─ test_interpolate.py
   │     │  │  │  ├─ test_ndgriddata.py
   │     │  │  │  ├─ test_pade.py
   │     │  │  │  ├─ test_polyint.py
   │     │  │  │  ├─ test_rbf.py
   │     │  │  │  ├─ test_rbfinterp.py
   │     │  │  │  ├─ test_rgi.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_bary_rational.cpython-313.pyc
   │     │  │  │     ├─ test_bsplines.cpython-313.pyc
   │     │  │  │     ├─ test_fitpack.cpython-313.pyc
   │     │  │  │     ├─ test_fitpack2.cpython-313.pyc
   │     │  │  │     ├─ test_gil.cpython-313.pyc
   │     │  │  │     ├─ test_interpnd.cpython-313.pyc
   │     │  │  │     ├─ test_interpolate.cpython-313.pyc
   │     │  │  │     ├─ test_ndgriddata.cpython-313.pyc
   │     │  │  │     ├─ test_pade.cpython-313.pyc
   │     │  │  │     ├─ test_polyint.cpython-313.pyc
   │     │  │  │     ├─ test_rbf.cpython-313.pyc
   │     │  │  │     ├─ test_rbfinterp.cpython-313.pyc
   │     │  │  │     ├─ test_rgi.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _bary_rational.py
   │     │  │  ├─ _bspl.cp313-win_amd64.dll.a
   │     │  │  ├─ _bspl.cp313-win_amd64.pyd
   │     │  │  ├─ _bsplines.py
   │     │  │  ├─ _cubic.py
   │     │  │  ├─ _dfitpack.cp313-win_amd64.dll.a
   │     │  │  ├─ _dfitpack.cp313-win_amd64.pyd
   │     │  │  ├─ _dierckx.cp313-win_amd64.dll.a
   │     │  │  ├─ _dierckx.cp313-win_amd64.pyd
   │     │  │  ├─ _fitpack.cp313-win_amd64.dll.a
   │     │  │  ├─ _fitpack.cp313-win_amd64.pyd
   │     │  │  ├─ _fitpack2.py
   │     │  │  ├─ _fitpack_impl.py
   │     │  │  ├─ _fitpack_py.py
   │     │  │  ├─ _fitpack_repro.py
   │     │  │  ├─ _interpnd.cp313-win_amd64.dll.a
   │     │  │  ├─ _interpnd.cp313-win_amd64.pyd
   │     │  │  ├─ _interpolate.py
   │     │  │  ├─ _ndbspline.py
   │     │  │  ├─ _ndgriddata.py
   │     │  │  ├─ _pade.py
   │     │  │  ├─ _polyint.py
   │     │  │  ├─ _ppoly.cp313-win_amd64.dll.a
   │     │  │  ├─ _ppoly.cp313-win_amd64.pyd
   │     │  │  ├─ _rbf.py
   │     │  │  ├─ _rbfinterp.py
   │     │  │  ├─ _rbfinterp_pythran.cp313-win_amd64.dll.a
   │     │  │  ├─ _rbfinterp_pythran.cp313-win_amd64.pyd
   │     │  │  ├─ _rgi.py
   │     │  │  ├─ _rgi_cython.cp313-win_amd64.dll.a
   │     │  │  ├─ _rgi_cython.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ dfitpack.cpython-313.pyc
   │     │  │     ├─ fitpack.cpython-313.pyc
   │     │  │     ├─ fitpack2.cpython-313.pyc
   │     │  │     ├─ interpnd.cpython-313.pyc
   │     │  │     ├─ interpolate.cpython-313.pyc
   │     │  │     ├─ ndgriddata.cpython-313.pyc
   │     │  │     ├─ polyint.cpython-313.pyc
   │     │  │     ├─ rbf.cpython-313.pyc
   │     │  │     ├─ _bary_rational.cpython-313.pyc
   │     │  │     ├─ _bsplines.cpython-313.pyc
   │     │  │     ├─ _cubic.cpython-313.pyc
   │     │  │     ├─ _fitpack2.cpython-313.pyc
   │     │  │     ├─ _fitpack_impl.cpython-313.pyc
   │     │  │     ├─ _fitpack_py.cpython-313.pyc
   │     │  │     ├─ _fitpack_repro.cpython-313.pyc
   │     │  │     ├─ _interpolate.cpython-313.pyc
   │     │  │     ├─ _ndbspline.cpython-313.pyc
   │     │  │     ├─ _ndgriddata.cpython-313.pyc
   │     │  │     ├─ _pade.cpython-313.pyc
   │     │  │     ├─ _polyint.cpython-313.pyc
   │     │  │     ├─ _rbf.cpython-313.pyc
   │     │  │     ├─ _rbfinterp.cpython-313.pyc
   │     │  │     ├─ _rgi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ io
   │     │  │  ├─ arff
   │     │  │  │  ├─ arffread.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ data
   │     │  │  │  │  │  ├─ iris.arff
   │     │  │  │  │  │  ├─ missing.arff
   │     │  │  │  │  │  ├─ nodata.arff
   │     │  │  │  │  │  ├─ quoted_nominal.arff
   │     │  │  │  │  │  ├─ quoted_nominal_spaces.arff
   │     │  │  │  │  │  ├─ test1.arff
   │     │  │  │  │  │  ├─ test10.arff
   │     │  │  │  │  │  ├─ test11.arff
   │     │  │  │  │  │  ├─ test2.arff
   │     │  │  │  │  │  ├─ test3.arff
   │     │  │  │  │  │  ├─ test4.arff
   │     │  │  │  │  │  ├─ test5.arff
   │     │  │  │  │  │  ├─ test6.arff
   │     │  │  │  │  │  ├─ test7.arff
   │     │  │  │  │  │  ├─ test8.arff
   │     │  │  │  │  │  └─ test9.arff
   │     │  │  │  │  ├─ test_arffread.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arffread.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _arffread.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ arffread.cpython-313.pyc
   │     │  │  │     ├─ _arffread.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ harwell_boeing.py
   │     │  │  ├─ idl.py
   │     │  │  ├─ matlab
   │     │  │  │  ├─ byteordercodes.py
   │     │  │  │  ├─ mio.py
   │     │  │  │  ├─ mio4.py
   │     │  │  │  ├─ mio5.py
   │     │  │  │  ├─ mio5_params.py
   │     │  │  │  ├─ mio5_utils.py
   │     │  │  │  ├─ miobase.py
   │     │  │  │  ├─ mio_utils.py
   │     │  │  │  ├─ streams.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ data
   │     │  │  │  │  │  ├─ bad_miuint32.mat
   │     │  │  │  │  │  ├─ bad_miutf8_array_name.mat
   │     │  │  │  │  │  ├─ big_endian.mat
   │     │  │  │  │  │  ├─ broken_utf8.mat
   │     │  │  │  │  │  ├─ corrupted_zlib_checksum.mat
   │     │  │  │  │  │  ├─ corrupted_zlib_data.mat
   │     │  │  │  │  │  ├─ debigged_m4.mat
   │     │  │  │  │  │  ├─ japanese_utf8.txt
   │     │  │  │  │  │  ├─ little_endian.mat
   │     │  │  │  │  │  ├─ logical_sparse.mat
   │     │  │  │  │  │  ├─ malformed1.mat
   │     │  │  │  │  │  ├─ miuint32_for_miint32.mat
   │     │  │  │  │  │  ├─ miutf8_array_name.mat
   │     │  │  │  │  │  ├─ nasty_duplicate_fieldnames.mat
   │     │  │  │  │  │  ├─ one_by_zero_char.mat
   │     │  │  │  │  │  ├─ parabola.mat
   │     │  │  │  │  │  ├─ single_empty_string.mat
   │     │  │  │  │  │  ├─ some_functions.mat
   │     │  │  │  │  │  ├─ sqr.mat
   │     │  │  │  │  │  ├─ test3dmatrix_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ test3dmatrix_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ test3dmatrix_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ test3dmatrix_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testbool_8_WIN64.mat
   │     │  │  │  │  │  ├─ testcellnest_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ testcellnest_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testcellnest_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testcellnest_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testcell_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ testcell_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testcell_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testcell_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testcomplex_4.2c_SOL2.mat
   │     │  │  │  │  │  ├─ testcomplex_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ testcomplex_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testcomplex_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testcomplex_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testdouble_4.2c_SOL2.mat
   │     │  │  │  │  │  ├─ testdouble_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ testdouble_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testdouble_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testdouble_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testemptycell_5.3_SOL2.mat
   │     │  │  │  │  │  ├─ testemptycell_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testemptycell_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testemptycell_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testfunc_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testhdf5_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testmatrix_4.2c_SOL2.mat
   │     │  │  │  │  │  ├─ testmatrix_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ testmatrix_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testmatrix_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testmatrix_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testminus_4.2c_SOL2.mat
   │     │  │  │  │  │  ├─ testminus_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ testminus_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testminus_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testminus_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testmulti_4.2c_SOL2.mat
   │     │  │  │  │  │  ├─ testmulti_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testmulti_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testobject_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ testobject_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testobject_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testobject_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testonechar_4.2c_SOL2.mat
   │     │  │  │  │  │  ├─ testonechar_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ testonechar_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testonechar_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testonechar_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testscalarcell_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testsimplecell.mat
   │     │  │  │  │  │  ├─ testsparsecomplex_4.2c_SOL2.mat
   │     │  │  │  │  │  ├─ testsparsecomplex_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ testsparsecomplex_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testsparsecomplex_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testsparsecomplex_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testsparsefloat_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testsparse_4.2c_SOL2.mat
   │     │  │  │  │  │  ├─ testsparse_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ testsparse_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testsparse_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testsparse_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ teststringarray_4.2c_SOL2.mat
   │     │  │  │  │  │  ├─ teststringarray_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ teststringarray_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ teststringarray_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ teststringarray_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ teststring_4.2c_SOL2.mat
   │     │  │  │  │  │  ├─ teststring_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ teststring_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ teststring_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ teststring_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ teststructarr_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ teststructarr_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ teststructarr_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ teststructarr_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ teststructnest_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ teststructnest_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ teststructnest_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ teststructnest_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ teststruct_6.1_SOL2.mat
   │     │  │  │  │  │  ├─ teststruct_6.5.1_GLNX86.mat
   │     │  │  │  │  │  ├─ teststruct_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ teststruct_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testunicode_7.1_GLNX86.mat
   │     │  │  │  │  │  ├─ testunicode_7.4_GLNX86.mat
   │     │  │  │  │  │  ├─ testvec_4_GLNX86.mat
   │     │  │  │  │  │  ├─ test_empty_struct.mat
   │     │  │  │  │  │  ├─ test_mat4_le_floats.mat
   │     │  │  │  │  │  └─ test_skip_variable.mat
   │     │  │  │  │  ├─ test_byteordercodes.py
   │     │  │  │  │  ├─ test_mio.py
   │     │  │  │  │  ├─ test_mio5_utils.py
   │     │  │  │  │  ├─ test_miobase.py
   │     │  │  │  │  ├─ test_mio_funcs.py
   │     │  │  │  │  ├─ test_mio_utils.py
   │     │  │  │  │  ├─ test_pathological.py
   │     │  │  │  │  ├─ test_streams.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_byteordercodes.cpython-313.pyc
   │     │  │  │  │     ├─ test_mio.cpython-313.pyc
   │     │  │  │  │     ├─ test_mio5_utils.cpython-313.pyc
   │     │  │  │  │     ├─ test_miobase.cpython-313.pyc
   │     │  │  │  │     ├─ test_mio_funcs.cpython-313.pyc
   │     │  │  │  │     ├─ test_mio_utils.cpython-313.pyc
   │     │  │  │  │     ├─ test_pathological.cpython-313.pyc
   │     │  │  │  │     ├─ test_streams.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _byteordercodes.py
   │     │  │  │  ├─ _mio.py
   │     │  │  │  ├─ _mio4.py
   │     │  │  │  ├─ _mio5.py
   │     │  │  │  ├─ _mio5_params.py
   │     │  │  │  ├─ _mio5_utils.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _mio5_utils.cp313-win_amd64.pyd
   │     │  │  │  ├─ _miobase.py
   │     │  │  │  ├─ _mio_utils.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _mio_utils.cp313-win_amd64.pyd
   │     │  │  │  ├─ _streams.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _streams.cp313-win_amd64.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ byteordercodes.cpython-313.pyc
   │     │  │  │     ├─ mio.cpython-313.pyc
   │     │  │  │     ├─ mio4.cpython-313.pyc
   │     │  │  │     ├─ mio5.cpython-313.pyc
   │     │  │  │     ├─ mio5_params.cpython-313.pyc
   │     │  │  │     ├─ mio5_utils.cpython-313.pyc
   │     │  │  │     ├─ miobase.cpython-313.pyc
   │     │  │  │     ├─ mio_utils.cpython-313.pyc
   │     │  │  │     ├─ streams.cpython-313.pyc
   │     │  │  │     ├─ _byteordercodes.cpython-313.pyc
   │     │  │  │     ├─ _mio.cpython-313.pyc
   │     │  │  │     ├─ _mio4.cpython-313.pyc
   │     │  │  │     ├─ _mio5.cpython-313.pyc
   │     │  │  │     ├─ _mio5_params.cpython-313.pyc
   │     │  │  │     ├─ _miobase.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ mmio.py
   │     │  │  ├─ netcdf.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ array_float32_1d.sav
   │     │  │  │  │  ├─ array_float32_2d.sav
   │     │  │  │  │  ├─ array_float32_3d.sav
   │     │  │  │  │  ├─ array_float32_4d.sav
   │     │  │  │  │  ├─ array_float32_5d.sav
   │     │  │  │  │  ├─ array_float32_6d.sav
   │     │  │  │  │  ├─ array_float32_7d.sav
   │     │  │  │  │  ├─ array_float32_8d.sav
   │     │  │  │  │  ├─ array_float32_pointer_1d.sav
   │     │  │  │  │  ├─ array_float32_pointer_2d.sav
   │     │  │  │  │  ├─ array_float32_pointer_3d.sav
   │     │  │  │  │  ├─ array_float32_pointer_4d.sav
   │     │  │  │  │  ├─ array_float32_pointer_5d.sav
   │     │  │  │  │  ├─ array_float32_pointer_6d.sav
   │     │  │  │  │  ├─ array_float32_pointer_7d.sav
   │     │  │  │  │  ├─ array_float32_pointer_8d.sav
   │     │  │  │  │  ├─ example_1.nc
   │     │  │  │  │  ├─ example_2.nc
   │     │  │  │  │  ├─ example_3_maskedvals.nc
   │     │  │  │  │  ├─ fortran-3x3d-2i.dat
   │     │  │  │  │  ├─ fortran-mixed.dat
   │     │  │  │  │  ├─ fortran-sf8-11x1x10.dat
   │     │  │  │  │  ├─ fortran-sf8-15x10x22.dat
   │     │  │  │  │  ├─ fortran-sf8-1x1x1.dat
   │     │  │  │  │  ├─ fortran-sf8-1x1x5.dat
   │     │  │  │  │  ├─ fortran-sf8-1x1x7.dat
   │     │  │  │  │  ├─ fortran-sf8-1x3x5.dat
   │     │  │  │  │  ├─ fortran-si4-11x1x10.dat
   │     │  │  │  │  ├─ fortran-si4-15x10x22.dat
   │     │  │  │  │  ├─ fortran-si4-1x1x1.dat
   │     │  │  │  │  ├─ fortran-si4-1x1x5.dat
   │     │  │  │  │  ├─ fortran-si4-1x1x7.dat
   │     │  │  │  │  ├─ fortran-si4-1x3x5.dat
   │     │  │  │  │  ├─ invalid_pointer.sav
   │     │  │  │  │  ├─ null_pointer.sav
   │     │  │  │  │  ├─ scalar_byte.sav
   │     │  │  │  │  ├─ scalar_byte_descr.sav
   │     │  │  │  │  ├─ scalar_complex32.sav
   │     │  │  │  │  ├─ scalar_complex64.sav
   │     │  │  │  │  ├─ scalar_float32.sav
   │     │  │  │  │  ├─ scalar_float64.sav
   │     │  │  │  │  ├─ scalar_heap_pointer.sav
   │     │  │  │  │  ├─ scalar_int16.sav
   │     │  │  │  │  ├─ scalar_int32.sav
   │     │  │  │  │  ├─ scalar_int64.sav
   │     │  │  │  │  ├─ scalar_string.sav
   │     │  │  │  │  ├─ scalar_uint16.sav
   │     │  │  │  │  ├─ scalar_uint32.sav
   │     │  │  │  │  ├─ scalar_uint64.sav
   │     │  │  │  │  ├─ struct_arrays.sav
   │     │  │  │  │  ├─ struct_arrays_byte_idl80.sav
   │     │  │  │  │  ├─ struct_arrays_replicated.sav
   │     │  │  │  │  ├─ struct_arrays_replicated_3d.sav
   │     │  │  │  │  ├─ struct_inherit.sav
   │     │  │  │  │  ├─ struct_pointers.sav
   │     │  │  │  │  ├─ struct_pointers_replicated.sav
   │     │  │  │  │  ├─ struct_pointers_replicated_3d.sav
   │     │  │  │  │  ├─ struct_pointer_arrays.sav
   │     │  │  │  │  ├─ struct_pointer_arrays_replicated.sav
   │     │  │  │  │  ├─ struct_pointer_arrays_replicated_3d.sav
   │     │  │  │  │  ├─ struct_scalars.sav
   │     │  │  │  │  ├─ struct_scalars_replicated.sav
   │     │  │  │  │  ├─ struct_scalars_replicated_3d.sav
   │     │  │  │  │  ├─ test-1234Hz-le-1ch-10S-20bit-extra.wav
   │     │  │  │  │  ├─ test-44100Hz-2ch-32bit-float-be.wav
   │     │  │  │  │  ├─ test-44100Hz-2ch-32bit-float-le.wav
   │     │  │  │  │  ├─ test-44100Hz-be-1ch-4bytes.wav
   │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes-early-eof-no-data.wav
   │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes-early-eof.wav
   │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes-incomplete-chunk.wav
   │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes-rf64.wav
   │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes.wav
   │     │  │  │  │  ├─ test-48000Hz-2ch-64bit-float-le-wavex.wav
   │     │  │  │  │  ├─ test-8000Hz-be-3ch-5S-24bit.wav
   │     │  │  │  │  ├─ test-8000Hz-le-1ch-1byte-ulaw.wav
   │     │  │  │  │  ├─ test-8000Hz-le-2ch-1byteu.wav
   │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-24bit-inconsistent.wav
   │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-24bit-rf64.wav
   │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-24bit.wav
   │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-36bit.wav
   │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-45bit.wav
   │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-53bit.wav
   │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-64bit.wav
   │     │  │  │  │  ├─ test-8000Hz-le-4ch-9S-12bit.wav
   │     │  │  │  │  ├─ test-8000Hz-le-5ch-9S-5bit.wav
   │     │  │  │  │  ├─ Transparent Busy.ani
   │     │  │  │  │  └─ various_compressed.sav
   │     │  │  │  ├─ test_fortran.py
   │     │  │  │  ├─ test_idl.py
   │     │  │  │  ├─ test_mmio.py
   │     │  │  │  ├─ test_netcdf.py
   │     │  │  │  ├─ test_paths.py
   │     │  │  │  ├─ test_wavfile.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_fortran.cpython-313.pyc
   │     │  │  │     ├─ test_idl.cpython-313.pyc
   │     │  │  │     ├─ test_mmio.cpython-313.pyc
   │     │  │  │     ├─ test_netcdf.cpython-313.pyc
   │     │  │  │     ├─ test_paths.cpython-313.pyc
   │     │  │  │     ├─ test_wavfile.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ wavfile.py
   │     │  │  ├─ _fast_matrix_market
   │     │  │  │  ├─ _fmm_core.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _fmm_core.cp313-win_amd64.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _fortran.py
   │     │  │  ├─ _harwell_boeing
   │     │  │  │  ├─ hb.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_fortran_format.py
   │     │  │  │  │  ├─ test_hb.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_fortran_format.cpython-313.pyc
   │     │  │  │  │     ├─ test_hb.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _fortran_format_parser.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ hb.cpython-313.pyc
   │     │  │  │     ├─ _fortran_format_parser.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _idl.py
   │     │  │  ├─ _mmio.py
   │     │  │  ├─ _netcdf.py
   │     │  │  ├─ _test_fortran.cp313-win_amd64.dll.a
   │     │  │  ├─ _test_fortran.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ harwell_boeing.cpython-313.pyc
   │     │  │     ├─ idl.cpython-313.pyc
   │     │  │     ├─ mmio.cpython-313.pyc
   │     │  │     ├─ netcdf.cpython-313.pyc
   │     │  │     ├─ wavfile.cpython-313.pyc
   │     │  │     ├─ _fortran.cpython-313.pyc
   │     │  │     ├─ _idl.cpython-313.pyc
   │     │  │     ├─ _mmio.cpython-313.pyc
   │     │  │     ├─ _netcdf.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ linalg
   │     │  │  ├─ basic.py
   │     │  │  ├─ blas.py
   │     │  │  ├─ cython_blas.cp313-win_amd64.dll.a
   │     │  │  ├─ cython_blas.cp313-win_amd64.pyd
   │     │  │  ├─ cython_blas.pxd
   │     │  │  ├─ cython_blas.pyx
   │     │  │  ├─ cython_lapack.cp313-win_amd64.dll.a
   │     │  │  ├─ cython_lapack.cp313-win_amd64.pyd
   │     │  │  ├─ cython_lapack.pxd
   │     │  │  ├─ cython_lapack.pyx
   │     │  │  ├─ decomp.py
   │     │  │  ├─ decomp_cholesky.py
   │     │  │  ├─ decomp_lu.py
   │     │  │  ├─ decomp_qr.py
   │     │  │  ├─ decomp_schur.py
   │     │  │  ├─ decomp_svd.py
   │     │  │  ├─ interpolative.py
   │     │  │  ├─ lapack.py
   │     │  │  ├─ matfuncs.py
   │     │  │  ├─ misc.py
   │     │  │  ├─ special_matrices.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ carex_15_data.npz
   │     │  │  │  │  ├─ carex_18_data.npz
   │     │  │  │  │  ├─ carex_19_data.npz
   │     │  │  │  │  ├─ carex_20_data.npz
   │     │  │  │  │  ├─ carex_6_data.npz
   │     │  │  │  │  └─ gendare_20170120_data.npz
   │     │  │  │  ├─ test_basic.py
   │     │  │  │  ├─ test_blas.py
   │     │  │  │  ├─ test_cythonized_array_utils.py
   │     │  │  │  ├─ test_cython_blas.py
   │     │  │  │  ├─ test_cython_lapack.py
   │     │  │  │  ├─ test_decomp.py
   │     │  │  │  ├─ test_decomp_cholesky.py
   │     │  │  │  ├─ test_decomp_cossin.py
   │     │  │  │  ├─ test_decomp_ldl.py
   │     │  │  │  ├─ test_decomp_lu.py
   │     │  │  │  ├─ test_decomp_polar.py
   │     │  │  │  ├─ test_decomp_update.py
   │     │  │  │  ├─ test_extending.py
   │     │  │  │  ├─ test_fblas.py
   │     │  │  │  ├─ test_interpolative.py
   │     │  │  │  ├─ test_lapack.py
   │     │  │  │  ├─ test_matfuncs.py
   │     │  │  │  ├─ test_matmul_toeplitz.py
   │     │  │  │  ├─ test_procrustes.py
   │     │  │  │  ├─ test_sketches.py
   │     │  │  │  ├─ test_solvers.py
   │     │  │  │  ├─ test_solve_toeplitz.py
   │     │  │  │  ├─ test_special_matrices.py
   │     │  │  │  ├─ _cython_examples
   │     │  │  │  │  ├─ extending.pyx
   │     │  │  │  │  └─ meson.build
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_basic.cpython-313.pyc
   │     │  │  │     ├─ test_blas.cpython-313.pyc
   │     │  │  │     ├─ test_cythonized_array_utils.cpython-313.pyc
   │     │  │  │     ├─ test_cython_blas.cpython-313.pyc
   │     │  │  │     ├─ test_cython_lapack.cpython-313.pyc
   │     │  │  │     ├─ test_decomp.cpython-313.pyc
   │     │  │  │     ├─ test_decomp_cholesky.cpython-313.pyc
   │     │  │  │     ├─ test_decomp_cossin.cpython-313.pyc
   │     │  │  │     ├─ test_decomp_ldl.cpython-313.pyc
   │     │  │  │     ├─ test_decomp_lu.cpython-313.pyc
   │     │  │  │     ├─ test_decomp_polar.cpython-313.pyc
   │     │  │  │     ├─ test_decomp_update.cpython-313.pyc
   │     │  │  │     ├─ test_extending.cpython-313.pyc
   │     │  │  │     ├─ test_fblas.cpython-313.pyc
   │     │  │  │     ├─ test_interpolative.cpython-313.pyc
   │     │  │  │     ├─ test_lapack.cpython-313.pyc
   │     │  │  │     ├─ test_matfuncs.cpython-313.pyc
   │     │  │  │     ├─ test_matmul_toeplitz.cpython-313.pyc
   │     │  │  │     ├─ test_procrustes.cpython-313.pyc
   │     │  │  │     ├─ test_sketches.cpython-313.pyc
   │     │  │  │     ├─ test_solvers.cpython-313.pyc
   │     │  │  │     ├─ test_solve_toeplitz.cpython-313.pyc
   │     │  │  │     ├─ test_special_matrices.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _basic.py
   │     │  │  ├─ _blas_subroutines.h
   │     │  │  ├─ _cythonized_array_utils.cp313-win_amd64.dll.a
   │     │  │  ├─ _cythonized_array_utils.cp313-win_amd64.pyd
   │     │  │  ├─ _cythonized_array_utils.pxd
   │     │  │  ├─ _cythonized_array_utils.pyi
   │     │  │  ├─ _decomp.py
   │     │  │  ├─ _decomp_cholesky.py
   │     │  │  ├─ _decomp_cossin.py
   │     │  │  ├─ _decomp_interpolative.cp313-win_amd64.dll.a
   │     │  │  ├─ _decomp_interpolative.cp313-win_amd64.pyd
   │     │  │  ├─ _decomp_ldl.py
   │     │  │  ├─ _decomp_lu.py
   │     │  │  ├─ _decomp_lu_cython.cp313-win_amd64.dll.a
   │     │  │  ├─ _decomp_lu_cython.cp313-win_amd64.pyd
   │     │  │  ├─ _decomp_lu_cython.pyi
   │     │  │  ├─ _decomp_polar.py
   │     │  │  ├─ _decomp_qr.py
   │     │  │  ├─ _decomp_qz.py
   │     │  │  ├─ _decomp_schur.py
   │     │  │  ├─ _decomp_svd.py
   │     │  │  ├─ _decomp_update.cp313-win_amd64.dll.a
   │     │  │  ├─ _decomp_update.cp313-win_amd64.pyd
   │     │  │  ├─ _expm_frechet.py
   │     │  │  ├─ _fblas.cp313-win_amd64.dll.a
   │     │  │  ├─ _fblas.cp313-win_amd64.pyd
   │     │  │  ├─ _flapack.cp313-win_amd64.dll.a
   │     │  │  ├─ _flapack.cp313-win_amd64.pyd
   │     │  │  ├─ _lapack_subroutines.h
   │     │  │  ├─ _linalg_pythran.cp313-win_amd64.dll.a
   │     │  │  ├─ _linalg_pythran.cp313-win_amd64.pyd
   │     │  │  ├─ _matfuncs.py
   │     │  │  ├─ _matfuncs_expm.cp313-win_amd64.dll.a
   │     │  │  ├─ _matfuncs_expm.cp313-win_amd64.pyd
   │     │  │  ├─ _matfuncs_expm.pyi
   │     │  │  ├─ _matfuncs_inv_ssq.py
   │     │  │  ├─ _matfuncs_sqrtm.py
   │     │  │  ├─ _matfuncs_sqrtm_triu.cp313-win_amd64.dll.a
   │     │  │  ├─ _matfuncs_sqrtm_triu.cp313-win_amd64.pyd
   │     │  │  ├─ _misc.py
   │     │  │  ├─ _procrustes.py
   │     │  │  ├─ _sketches.py
   │     │  │  ├─ _solvers.py
   │     │  │  ├─ _solve_toeplitz.cp313-win_amd64.dll.a
   │     │  │  ├─ _solve_toeplitz.cp313-win_amd64.pyd
   │     │  │  ├─ _special_matrices.py
   │     │  │  ├─ _testutils.py
   │     │  │  ├─ __init__.pxd
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ basic.cpython-313.pyc
   │     │  │     ├─ blas.cpython-313.pyc
   │     │  │     ├─ decomp.cpython-313.pyc
   │     │  │     ├─ decomp_cholesky.cpython-313.pyc
   │     │  │     ├─ decomp_lu.cpython-313.pyc
   │     │  │     ├─ decomp_qr.cpython-313.pyc
   │     │  │     ├─ decomp_schur.cpython-313.pyc
   │     │  │     ├─ decomp_svd.cpython-313.pyc
   │     │  │     ├─ interpolative.cpython-313.pyc
   │     │  │     ├─ lapack.cpython-313.pyc
   │     │  │     ├─ matfuncs.cpython-313.pyc
   │     │  │     ├─ misc.cpython-313.pyc
   │     │  │     ├─ special_matrices.cpython-313.pyc
   │     │  │     ├─ _basic.cpython-313.pyc
   │     │  │     ├─ _decomp.cpython-313.pyc
   │     │  │     ├─ _decomp_cholesky.cpython-313.pyc
   │     │  │     ├─ _decomp_cossin.cpython-313.pyc
   │     │  │     ├─ _decomp_ldl.cpython-313.pyc
   │     │  │     ├─ _decomp_lu.cpython-313.pyc
   │     │  │     ├─ _decomp_polar.cpython-313.pyc
   │     │  │     ├─ _decomp_qr.cpython-313.pyc
   │     │  │     ├─ _decomp_qz.cpython-313.pyc
   │     │  │     ├─ _decomp_schur.cpython-313.pyc
   │     │  │     ├─ _decomp_svd.cpython-313.pyc
   │     │  │     ├─ _expm_frechet.cpython-313.pyc
   │     │  │     ├─ _matfuncs.cpython-313.pyc
   │     │  │     ├─ _matfuncs_inv_ssq.cpython-313.pyc
   │     │  │     ├─ _matfuncs_sqrtm.cpython-313.pyc
   │     │  │     ├─ _misc.cpython-313.pyc
   │     │  │     ├─ _procrustes.cpython-313.pyc
   │     │  │     ├─ _sketches.cpython-313.pyc
   │     │  │     ├─ _solvers.cpython-313.pyc
   │     │  │     ├─ _special_matrices.cpython-313.pyc
   │     │  │     ├─ _testutils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ misc
   │     │  │  ├─ common.py
   │     │  │  ├─ doccer.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ common.cpython-313.pyc
   │     │  │     ├─ doccer.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ ndimage
   │     │  │  ├─ filters.py
   │     │  │  ├─ fourier.py
   │     │  │  ├─ interpolation.py
   │     │  │  ├─ measurements.py
   │     │  │  ├─ morphology.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ label_inputs.txt
   │     │  │  │  │  ├─ label_results.txt
   │     │  │  │  │  └─ label_strels.txt
   │     │  │  │  ├─ dots.png
   │     │  │  │  ├─ test_c_api.py
   │     │  │  │  ├─ test_datatypes.py
   │     │  │  │  ├─ test_filters.py
   │     │  │  │  ├─ test_fourier.py
   │     │  │  │  ├─ test_interpolation.py
   │     │  │  │  ├─ test_measurements.py
   │     │  │  │  ├─ test_morphology.py
   │     │  │  │  ├─ test_ni_support.py
   │     │  │  │  ├─ test_splines.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_c_api.cpython-313.pyc
   │     │  │  │     ├─ test_datatypes.cpython-313.pyc
   │     │  │  │     ├─ test_filters.cpython-313.pyc
   │     │  │  │     ├─ test_fourier.cpython-313.pyc
   │     │  │  │     ├─ test_interpolation.cpython-313.pyc
   │     │  │  │     ├─ test_measurements.cpython-313.pyc
   │     │  │  │     ├─ test_morphology.cpython-313.pyc
   │     │  │  │     ├─ test_ni_support.cpython-313.pyc
   │     │  │  │     ├─ test_splines.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _ctest.cp313-win_amd64.dll.a
   │     │  │  ├─ _ctest.cp313-win_amd64.pyd
   │     │  │  ├─ _cytest.cp313-win_amd64.dll.a
   │     │  │  ├─ _cytest.cp313-win_amd64.pyd
   │     │  │  ├─ _delegators.py
   │     │  │  ├─ _filters.py
   │     │  │  ├─ _fourier.py
   │     │  │  ├─ _interpolation.py
   │     │  │  ├─ _measurements.py
   │     │  │  ├─ _morphology.py
   │     │  │  ├─ _ndimage_api.py
   │     │  │  ├─ _nd_image.cp313-win_amd64.dll.a
   │     │  │  ├─ _nd_image.cp313-win_amd64.pyd
   │     │  │  ├─ _ni_docstrings.py
   │     │  │  ├─ _ni_label.cp313-win_amd64.dll.a
   │     │  │  ├─ _ni_label.cp313-win_amd64.pyd
   │     │  │  ├─ _ni_support.py
   │     │  │  ├─ _rank_filter_1d.cp313-win_amd64.dll.a
   │     │  │  ├─ _rank_filter_1d.cp313-win_amd64.pyd
   │     │  │  ├─ _support_alternative_backends.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ filters.cpython-313.pyc
   │     │  │     ├─ fourier.cpython-313.pyc
   │     │  │     ├─ interpolation.cpython-313.pyc
   │     │  │     ├─ measurements.cpython-313.pyc
   │     │  │     ├─ morphology.cpython-313.pyc
   │     │  │     ├─ _delegators.cpython-313.pyc
   │     │  │     ├─ _filters.cpython-313.pyc
   │     │  │     ├─ _fourier.cpython-313.pyc
   │     │  │     ├─ _interpolation.cpython-313.pyc
   │     │  │     ├─ _measurements.cpython-313.pyc
   │     │  │     ├─ _morphology.cpython-313.pyc
   │     │  │     ├─ _ndimage_api.cpython-313.pyc
   │     │  │     ├─ _ni_docstrings.cpython-313.pyc
   │     │  │     ├─ _ni_support.cpython-313.pyc
   │     │  │     ├─ _support_alternative_backends.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ odr
   │     │  │  ├─ models.py
   │     │  │  ├─ odrpack.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_odr.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_odr.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _add_newdocs.py
   │     │  │  ├─ _models.py
   │     │  │  ├─ _odrpack.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __odrpack.cp313-win_amd64.dll.a
   │     │  │  ├─ __odrpack.cp313-win_amd64.pyd
   │     │  │  └─ __pycache__
   │     │  │     ├─ models.cpython-313.pyc
   │     │  │     ├─ odrpack.cpython-313.pyc
   │     │  │     ├─ _add_newdocs.cpython-313.pyc
   │     │  │     ├─ _models.cpython-313.pyc
   │     │  │     ├─ _odrpack.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ optimize
   │     │  │  ├─ cobyla.py
   │     │  │  ├─ cython_optimize
   │     │  │  │  ├─ c_zeros.pxd
   │     │  │  │  ├─ _zeros.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _zeros.cp313-win_amd64.pyd
   │     │  │  │  ├─ _zeros.pxd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ cython_optimize.pxd
   │     │  │  ├─ elementwise.py
   │     │  │  ├─ lbfgsb.py
   │     │  │  ├─ linesearch.py
   │     │  │  ├─ minpack.py
   │     │  │  ├─ minpack2.py
   │     │  │  ├─ moduleTNC.py
   │     │  │  ├─ nonlin.py
   │     │  │  ├─ optimize.py
   │     │  │  ├─ slsqp.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_bracket.py
   │     │  │  │  ├─ test_chandrupatla.py
   │     │  │  │  ├─ test_cobyla.py
   │     │  │  │  ├─ test_cobyqa.py
   │     │  │  │  ├─ test_constraints.py
   │     │  │  │  ├─ test_constraint_conversion.py
   │     │  │  │  ├─ test_cython_optimize.py
   │     │  │  │  ├─ test_differentiable_functions.py
   │     │  │  │  ├─ test_direct.py
   │     │  │  │  ├─ test_extending.py
   │     │  │  │  ├─ test_hessian_update_strategy.py
   │     │  │  │  ├─ test_isotonic_regression.py
   │     │  │  │  ├─ test_lbfgsb_hessinv.py
   │     │  │  │  ├─ test_lbfgsb_setulb.py
   │     │  │  │  ├─ test_least_squares.py
   │     │  │  │  ├─ test_linear_assignment.py
   │     │  │  │  ├─ test_linesearch.py
   │     │  │  │  ├─ test_linprog.py
   │     │  │  │  ├─ test_lsq_common.py
   │     │  │  │  ├─ test_lsq_linear.py
   │     │  │  │  ├─ test_milp.py
   │     │  │  │  ├─ test_minimize_constrained.py
   │     │  │  │  ├─ test_minpack.py
   │     │  │  │  ├─ test_nnls.py
   │     │  │  │  ├─ test_nonlin.py
   │     │  │  │  ├─ test_optimize.py
   │     │  │  │  ├─ test_quadratic_assignment.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_slsqp.py
   │     │  │  │  ├─ test_tnc.py
   │     │  │  │  ├─ test_trustregion.py
   │     │  │  │  ├─ test_trustregion_exact.py
   │     │  │  │  ├─ test_trustregion_krylov.py
   │     │  │  │  ├─ test_zeros.py
   │     │  │  │  ├─ test__basinhopping.py
   │     │  │  │  ├─ test__differential_evolution.py
   │     │  │  │  ├─ test__dual_annealing.py
   │     │  │  │  ├─ test__linprog_clean_inputs.py
   │     │  │  │  ├─ test__numdiff.py
   │     │  │  │  ├─ test__remove_redundancy.py
   │     │  │  │  ├─ test__root.py
   │     │  │  │  ├─ test__shgo.py
   │     │  │  │  ├─ test__spectral.py
   │     │  │  │  ├─ _cython_examples
   │     │  │  │  │  ├─ extending.pyx
   │     │  │  │  │  └─ meson.build
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_bracket.cpython-313.pyc
   │     │  │  │     ├─ test_chandrupatla.cpython-313.pyc
   │     │  │  │     ├─ test_cobyla.cpython-313.pyc
   │     │  │  │     ├─ test_cobyqa.cpython-313.pyc
   │     │  │  │     ├─ test_constraints.cpython-313.pyc
   │     │  │  │     ├─ test_constraint_conversion.cpython-313.pyc
   │     │  │  │     ├─ test_cython_optimize.cpython-313.pyc
   │     │  │  │     ├─ test_differentiable_functions.cpython-313.pyc
   │     │  │  │     ├─ test_direct.cpython-313.pyc
   │     │  │  │     ├─ test_extending.cpython-313.pyc
   │     │  │  │     ├─ test_hessian_update_strategy.cpython-313.pyc
   │     │  │  │     ├─ test_isotonic_regression.cpython-313.pyc
   │     │  │  │     ├─ test_lbfgsb_hessinv.cpython-313.pyc
   │     │  │  │     ├─ test_lbfgsb_setulb.cpython-313.pyc
   │     │  │  │     ├─ test_least_squares.cpython-313.pyc
   │     │  │  │     ├─ test_linear_assignment.cpython-313.pyc
   │     │  │  │     ├─ test_linesearch.cpython-313.pyc
   │     │  │  │     ├─ test_linprog.cpython-313.pyc
   │     │  │  │     ├─ test_lsq_common.cpython-313.pyc
   │     │  │  │     ├─ test_lsq_linear.cpython-313.pyc
   │     │  │  │     ├─ test_milp.cpython-313.pyc
   │     │  │  │     ├─ test_minimize_constrained.cpython-313.pyc
   │     │  │  │     ├─ test_minpack.cpython-313.pyc
   │     │  │  │     ├─ test_nnls.cpython-313.pyc
   │     │  │  │     ├─ test_nonlin.cpython-313.pyc
   │     │  │  │     ├─ test_optimize.cpython-313.pyc
   │     │  │  │     ├─ test_quadratic_assignment.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_slsqp.cpython-313.pyc
   │     │  │  │     ├─ test_tnc.cpython-313.pyc
   │     │  │  │     ├─ test_trustregion.cpython-313.pyc
   │     │  │  │     ├─ test_trustregion_exact.cpython-313.pyc
   │     │  │  │     ├─ test_trustregion_krylov.cpython-313.pyc
   │     │  │  │     ├─ test_zeros.cpython-313.pyc
   │     │  │  │     ├─ test__basinhopping.cpython-313.pyc
   │     │  │  │     ├─ test__differential_evolution.cpython-313.pyc
   │     │  │  │     ├─ test__dual_annealing.cpython-313.pyc
   │     │  │  │     ├─ test__linprog_clean_inputs.cpython-313.pyc
   │     │  │  │     ├─ test__numdiff.cpython-313.pyc
   │     │  │  │     ├─ test__remove_redundancy.cpython-313.pyc
   │     │  │  │     ├─ test__root.cpython-313.pyc
   │     │  │  │     ├─ test__shgo.cpython-313.pyc
   │     │  │  │     ├─ test__spectral.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tnc.py
   │     │  │  ├─ zeros.py
   │     │  │  ├─ _basinhopping.py
   │     │  │  ├─ _bglu_dense.cp313-win_amd64.dll.a
   │     │  │  ├─ _bglu_dense.cp313-win_amd64.pyd
   │     │  │  ├─ _bracket.py
   │     │  │  ├─ _chandrupatla.py
   │     │  │  ├─ _cobyla.cp313-win_amd64.dll.a
   │     │  │  ├─ _cobyla.cp313-win_amd64.pyd
   │     │  │  ├─ _cobyla_py.py
   │     │  │  ├─ _cobyqa_py.py
   │     │  │  ├─ _constraints.py
   │     │  │  ├─ _cython_nnls.cp313-win_amd64.dll.a
   │     │  │  ├─ _cython_nnls.cp313-win_amd64.pyd
   │     │  │  ├─ _dcsrch.py
   │     │  │  ├─ _differentiable_functions.py
   │     │  │  ├─ _differentialevolution.py
   │     │  │  ├─ _direct.cp313-win_amd64.dll.a
   │     │  │  ├─ _direct.cp313-win_amd64.pyd
   │     │  │  ├─ _direct_py.py
   │     │  │  ├─ _dual_annealing.py
   │     │  │  ├─ _elementwise.py
   │     │  │  ├─ _group_columns.cp313-win_amd64.dll.a
   │     │  │  ├─ _group_columns.cp313-win_amd64.pyd
   │     │  │  ├─ _hessian_update_strategy.py
   │     │  │  ├─ _highspy
   │     │  │  │  ├─ _core.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _core.cp313-win_amd64.pyd
   │     │  │  │  ├─ _highs_options.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _highs_options.cp313-win_amd64.pyd
   │     │  │  │  ├─ _highs_wrapper.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _highs_wrapper.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _isotonic.py
   │     │  │  ├─ _lbfgsb.cp313-win_amd64.dll.a
   │     │  │  ├─ _lbfgsb.cp313-win_amd64.pyd
   │     │  │  ├─ _lbfgsb_py.py
   │     │  │  ├─ _linesearch.py
   │     │  │  ├─ _linprog.py
   │     │  │  ├─ _linprog_doc.py
   │     │  │  ├─ _linprog_highs.py
   │     │  │  ├─ _linprog_ip.py
   │     │  │  ├─ _linprog_rs.py
   │     │  │  ├─ _linprog_simplex.py
   │     │  │  ├─ _linprog_util.py
   │     │  │  ├─ _lsap.cp313-win_amd64.dll.a
   │     │  │  ├─ _lsap.cp313-win_amd64.pyd
   │     │  │  ├─ _lsq
   │     │  │  │  ├─ bvls.py
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ dogbox.py
   │     │  │  │  ├─ givens_elimination.cp313-win_amd64.dll.a
   │     │  │  │  ├─ givens_elimination.cp313-win_amd64.pyd
   │     │  │  │  ├─ least_squares.py
   │     │  │  │  ├─ lsq_linear.py
   │     │  │  │  ├─ trf.py
   │     │  │  │  ├─ trf_linear.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ bvls.cpython-313.pyc
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ dogbox.cpython-313.pyc
   │     │  │  │     ├─ least_squares.cpython-313.pyc
   │     │  │  │     ├─ lsq_linear.cpython-313.pyc
   │     │  │  │     ├─ trf.cpython-313.pyc
   │     │  │  │     ├─ trf_linear.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _milp.py
   │     │  │  ├─ _minimize.py
   │     │  │  ├─ _minpack.cp313-win_amd64.dll.a
   │     │  │  ├─ _minpack.cp313-win_amd64.pyd
   │     │  │  ├─ _minpack_py.py
   │     │  │  ├─ _moduleTNC.cp313-win_amd64.dll.a
   │     │  │  ├─ _moduleTNC.cp313-win_amd64.pyd
   │     │  │  ├─ _nnls.py
   │     │  │  ├─ _nonlin.py
   │     │  │  ├─ _numdiff.py
   │     │  │  ├─ _optimize.py
   │     │  │  ├─ _pava_pybind.cp313-win_amd64.dll.a
   │     │  │  ├─ _pava_pybind.cp313-win_amd64.pyd
   │     │  │  ├─ _qap.py
   │     │  │  ├─ _remove_redundancy.py
   │     │  │  ├─ _root.py
   │     │  │  ├─ _root_scalar.py
   │     │  │  ├─ _shgo.py
   │     │  │  ├─ _shgo_lib
   │     │  │  │  ├─ _complex.py
   │     │  │  │  ├─ _vertex.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _complex.cpython-313.pyc
   │     │  │  │     ├─ _vertex.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _slsqp.cp313-win_amd64.dll.a
   │     │  │  ├─ _slsqp.cp313-win_amd64.pyd
   │     │  │  ├─ _slsqp_py.py
   │     │  │  ├─ _spectral.py
   │     │  │  ├─ _tnc.py
   │     │  │  ├─ _trlib
   │     │  │  │  ├─ _trlib.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _trlib.cp313-win_amd64.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _trustregion.py
   │     │  │  ├─ _trustregion_constr
   │     │  │  │  ├─ canonical_constraint.py
   │     │  │  │  ├─ equality_constrained_sqp.py
   │     │  │  │  ├─ minimize_trustregion_constr.py
   │     │  │  │  ├─ projections.py
   │     │  │  │  ├─ qp_subproblem.py
   │     │  │  │  ├─ report.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_canonical_constraint.py
   │     │  │  │  │  ├─ test_nested_minimize.py
   │     │  │  │  │  ├─ test_projections.py
   │     │  │  │  │  ├─ test_qp_subproblem.py
   │     │  │  │  │  ├─ test_report.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_canonical_constraint.cpython-313.pyc
   │     │  │  │  │     ├─ test_nested_minimize.cpython-313.pyc
   │     │  │  │  │     ├─ test_projections.cpython-313.pyc
   │     │  │  │  │     ├─ test_qp_subproblem.cpython-313.pyc
   │     │  │  │  │     ├─ test_report.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ tr_interior_point.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ canonical_constraint.cpython-313.pyc
   │     │  │  │     ├─ equality_constrained_sqp.cpython-313.pyc
   │     │  │  │     ├─ minimize_trustregion_constr.cpython-313.pyc
   │     │  │  │     ├─ projections.cpython-313.pyc
   │     │  │  │     ├─ qp_subproblem.cpython-313.pyc
   │     │  │  │     ├─ report.cpython-313.pyc
   │     │  │  │     ├─ tr_interior_point.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _trustregion_dogleg.py
   │     │  │  ├─ _trustregion_exact.py
   │     │  │  ├─ _trustregion_krylov.py
   │     │  │  ├─ _trustregion_ncg.py
   │     │  │  ├─ _tstutils.py
   │     │  │  ├─ _zeros.cp313-win_amd64.dll.a
   │     │  │  ├─ _zeros.cp313-win_amd64.pyd
   │     │  │  ├─ _zeros_py.py
   │     │  │  ├─ __init__.pxd
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ cobyla.cpython-313.pyc
   │     │  │     ├─ elementwise.cpython-313.pyc
   │     │  │     ├─ lbfgsb.cpython-313.pyc
   │     │  │     ├─ linesearch.cpython-313.pyc
   │     │  │     ├─ minpack.cpython-313.pyc
   │     │  │     ├─ minpack2.cpython-313.pyc
   │     │  │     ├─ moduleTNC.cpython-313.pyc
   │     │  │     ├─ nonlin.cpython-313.pyc
   │     │  │     ├─ optimize.cpython-313.pyc
   │     │  │     ├─ slsqp.cpython-313.pyc
   │     │  │     ├─ tnc.cpython-313.pyc
   │     │  │     ├─ zeros.cpython-313.pyc
   │     │  │     ├─ _basinhopping.cpython-313.pyc
   │     │  │     ├─ _bracket.cpython-313.pyc
   │     │  │     ├─ _chandrupatla.cpython-313.pyc
   │     │  │     ├─ _cobyla_py.cpython-313.pyc
   │     │  │     ├─ _cobyqa_py.cpython-313.pyc
   │     │  │     ├─ _constraints.cpython-313.pyc
   │     │  │     ├─ _dcsrch.cpython-313.pyc
   │     │  │     ├─ _differentiable_functions.cpython-313.pyc
   │     │  │     ├─ _differentialevolution.cpython-313.pyc
   │     │  │     ├─ _direct_py.cpython-313.pyc
   │     │  │     ├─ _dual_annealing.cpython-313.pyc
   │     │  │     ├─ _elementwise.cpython-313.pyc
   │     │  │     ├─ _hessian_update_strategy.cpython-313.pyc
   │     │  │     ├─ _isotonic.cpython-313.pyc
   │     │  │     ├─ _lbfgsb_py.cpython-313.pyc
   │     │  │     ├─ _linesearch.cpython-313.pyc
   │     │  │     ├─ _linprog.cpython-313.pyc
   │     │  │     ├─ _linprog_doc.cpython-313.pyc
   │     │  │     ├─ _linprog_highs.cpython-313.pyc
   │     │  │     ├─ _linprog_ip.cpython-313.pyc
   │     │  │     ├─ _linprog_rs.cpython-313.pyc
   │     │  │     ├─ _linprog_simplex.cpython-313.pyc
   │     │  │     ├─ _linprog_util.cpython-313.pyc
   │     │  │     ├─ _milp.cpython-313.pyc
   │     │  │     ├─ _minimize.cpython-313.pyc
   │     │  │     ├─ _minpack_py.cpython-313.pyc
   │     │  │     ├─ _nnls.cpython-313.pyc
   │     │  │     ├─ _nonlin.cpython-313.pyc
   │     │  │     ├─ _numdiff.cpython-313.pyc
   │     │  │     ├─ _optimize.cpython-313.pyc
   │     │  │     ├─ _qap.cpython-313.pyc
   │     │  │     ├─ _remove_redundancy.cpython-313.pyc
   │     │  │     ├─ _root.cpython-313.pyc
   │     │  │     ├─ _root_scalar.cpython-313.pyc
   │     │  │     ├─ _shgo.cpython-313.pyc
   │     │  │     ├─ _slsqp_py.cpython-313.pyc
   │     │  │     ├─ _spectral.cpython-313.pyc
   │     │  │     ├─ _tnc.cpython-313.pyc
   │     │  │     ├─ _trustregion.cpython-313.pyc
   │     │  │     ├─ _trustregion_dogleg.cpython-313.pyc
   │     │  │     ├─ _trustregion_exact.cpython-313.pyc
   │     │  │     ├─ _trustregion_krylov.cpython-313.pyc
   │     │  │     ├─ _trustregion_ncg.cpython-313.pyc
   │     │  │     ├─ _tstutils.cpython-313.pyc
   │     │  │     ├─ _zeros_py.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ signal
   │     │  │  ├─ bsplines.py
   │     │  │  ├─ filter_design.py
   │     │  │  ├─ fir_filter_design.py
   │     │  │  ├─ ltisys.py
   │     │  │  ├─ lti_conversion.py
   │     │  │  ├─ signaltools.py
   │     │  │  ├─ spectral.py
   │     │  │  ├─ spline.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ mpsig.py
   │     │  │  │  ├─ test_array_tools.py
   │     │  │  │  ├─ test_bsplines.py
   │     │  │  │  ├─ test_cont2discrete.py
   │     │  │  │  ├─ test_czt.py
   │     │  │  │  ├─ test_dltisys.py
   │     │  │  │  ├─ test_filter_design.py
   │     │  │  │  ├─ test_fir_filter_design.py
   │     │  │  │  ├─ test_ltisys.py
   │     │  │  │  ├─ test_max_len_seq.py
   │     │  │  │  ├─ test_peak_finding.py
   │     │  │  │  ├─ test_result_type.py
   │     │  │  │  ├─ test_savitzky_golay.py
   │     │  │  │  ├─ test_short_time_fft.py
   │     │  │  │  ├─ test_signaltools.py
   │     │  │  │  ├─ test_spectral.py
   │     │  │  │  ├─ test_splines.py
   │     │  │  │  ├─ test_upfirdn.py
   │     │  │  │  ├─ test_waveforms.py
   │     │  │  │  ├─ test_wavelets.py
   │     │  │  │  ├─ test_windows.py
   │     │  │  │  ├─ _scipy_spectral_test_shim.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ mpsig.cpython-313.pyc
   │     │  │  │     ├─ test_array_tools.cpython-313.pyc
   │     │  │  │     ├─ test_bsplines.cpython-313.pyc
   │     │  │  │     ├─ test_cont2discrete.cpython-313.pyc
   │     │  │  │     ├─ test_czt.cpython-313.pyc
   │     │  │  │     ├─ test_dltisys.cpython-313.pyc
   │     │  │  │     ├─ test_filter_design.cpython-313.pyc
   │     │  │  │     ├─ test_fir_filter_design.cpython-313.pyc
   │     │  │  │     ├─ test_ltisys.cpython-313.pyc
   │     │  │  │     ├─ test_max_len_seq.cpython-313.pyc
   │     │  │  │     ├─ test_peak_finding.cpython-313.pyc
   │     │  │  │     ├─ test_result_type.cpython-313.pyc
   │     │  │  │     ├─ test_savitzky_golay.cpython-313.pyc
   │     │  │  │     ├─ test_short_time_fft.cpython-313.pyc
   │     │  │  │     ├─ test_signaltools.cpython-313.pyc
   │     │  │  │     ├─ test_spectral.cpython-313.pyc
   │     │  │  │     ├─ test_splines.cpython-313.pyc
   │     │  │  │     ├─ test_upfirdn.cpython-313.pyc
   │     │  │  │     ├─ test_waveforms.cpython-313.pyc
   │     │  │  │     ├─ test_wavelets.cpython-313.pyc
   │     │  │  │     ├─ test_windows.cpython-313.pyc
   │     │  │  │     ├─ _scipy_spectral_test_shim.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ waveforms.py
   │     │  │  ├─ wavelets.py
   │     │  │  ├─ windows
   │     │  │  │  ├─ windows.py
   │     │  │  │  ├─ _windows.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ windows.cpython-313.pyc
   │     │  │  │     ├─ _windows.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _arraytools.py
   │     │  │  ├─ _czt.py
   │     │  │  ├─ _filter_design.py
   │     │  │  ├─ _fir_filter_design.py
   │     │  │  ├─ _ltisys.py
   │     │  │  ├─ _lti_conversion.py
   │     │  │  ├─ _max_len_seq.py
   │     │  │  ├─ _max_len_seq_inner.cp313-win_amd64.dll.a
   │     │  │  ├─ _max_len_seq_inner.cp313-win_amd64.pyd
   │     │  │  ├─ _peak_finding.py
   │     │  │  ├─ _peak_finding_utils.cp313-win_amd64.dll.a
   │     │  │  ├─ _peak_finding_utils.cp313-win_amd64.pyd
   │     │  │  ├─ _savitzky_golay.py
   │     │  │  ├─ _short_time_fft.py
   │     │  │  ├─ _signaltools.py
   │     │  │  ├─ _sigtools.cp313-win_amd64.dll.a
   │     │  │  ├─ _sigtools.cp313-win_amd64.pyd
   │     │  │  ├─ _sosfilt.cp313-win_amd64.dll.a
   │     │  │  ├─ _sosfilt.cp313-win_amd64.pyd
   │     │  │  ├─ _spectral_py.py
   │     │  │  ├─ _spline.cp313-win_amd64.dll.a
   │     │  │  ├─ _spline.cp313-win_amd64.pyd
   │     │  │  ├─ _spline.pyi
   │     │  │  ├─ _spline_filters.py
   │     │  │  ├─ _upfirdn.py
   │     │  │  ├─ _upfirdn_apply.cp313-win_amd64.dll.a
   │     │  │  ├─ _upfirdn_apply.cp313-win_amd64.pyd
   │     │  │  ├─ _waveforms.py
   │     │  │  ├─ _wavelets.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ bsplines.cpython-313.pyc
   │     │  │     ├─ filter_design.cpython-313.pyc
   │     │  │     ├─ fir_filter_design.cpython-313.pyc
   │     │  │     ├─ ltisys.cpython-313.pyc
   │     │  │     ├─ lti_conversion.cpython-313.pyc
   │     │  │     ├─ signaltools.cpython-313.pyc
   │     │  │     ├─ spectral.cpython-313.pyc
   │     │  │     ├─ spline.cpython-313.pyc
   │     │  │     ├─ waveforms.cpython-313.pyc
   │     │  │     ├─ wavelets.cpython-313.pyc
   │     │  │     ├─ _arraytools.cpython-313.pyc
   │     │  │     ├─ _czt.cpython-313.pyc
   │     │  │     ├─ _filter_design.cpython-313.pyc
   │     │  │     ├─ _fir_filter_design.cpython-313.pyc
   │     │  │     ├─ _ltisys.cpython-313.pyc
   │     │  │     ├─ _lti_conversion.cpython-313.pyc
   │     │  │     ├─ _max_len_seq.cpython-313.pyc
   │     │  │     ├─ _peak_finding.cpython-313.pyc
   │     │  │     ├─ _savitzky_golay.cpython-313.pyc
   │     │  │     ├─ _short_time_fft.cpython-313.pyc
   │     │  │     ├─ _signaltools.cpython-313.pyc
   │     │  │     ├─ _spectral_py.cpython-313.pyc
   │     │  │     ├─ _spline_filters.cpython-313.pyc
   │     │  │     ├─ _upfirdn.cpython-313.pyc
   │     │  │     ├─ _waveforms.cpython-313.pyc
   │     │  │     ├─ _wavelets.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ sparse
   │     │  │  ├─ base.py
   │     │  │  ├─ bsr.py
   │     │  │  ├─ compressed.py
   │     │  │  ├─ construct.py
   │     │  │  ├─ coo.py
   │     │  │  ├─ csc.py
   │     │  │  ├─ csgraph
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_connected_components.py
   │     │  │  │  │  ├─ test_conversions.py
   │     │  │  │  │  ├─ test_flow.py
   │     │  │  │  │  ├─ test_graph_laplacian.py
   │     │  │  │  │  ├─ test_matching.py
   │     │  │  │  │  ├─ test_pydata_sparse.py
   │     │  │  │  │  ├─ test_reordering.py
   │     │  │  │  │  ├─ test_shortest_path.py
   │     │  │  │  │  ├─ test_spanning_tree.py
   │     │  │  │  │  ├─ test_traversal.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_connected_components.cpython-313.pyc
   │     │  │  │  │     ├─ test_conversions.cpython-313.pyc
   │     │  │  │  │     ├─ test_flow.cpython-313.pyc
   │     │  │  │  │     ├─ test_graph_laplacian.cpython-313.pyc
   │     │  │  │  │     ├─ test_matching.cpython-313.pyc
   │     │  │  │  │     ├─ test_pydata_sparse.cpython-313.pyc
   │     │  │  │  │     ├─ test_reordering.cpython-313.pyc
   │     │  │  │  │     ├─ test_shortest_path.cpython-313.pyc
   │     │  │  │  │     ├─ test_spanning_tree.cpython-313.pyc
   │     │  │  │  │     ├─ test_traversal.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _flow.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _flow.cp313-win_amd64.pyd
   │     │  │  │  ├─ _laplacian.py
   │     │  │  │  ├─ _matching.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _matching.cp313-win_amd64.pyd
   │     │  │  │  ├─ _min_spanning_tree.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _min_spanning_tree.cp313-win_amd64.pyd
   │     │  │  │  ├─ _reordering.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _reordering.cp313-win_amd64.pyd
   │     │  │  │  ├─ _shortest_path.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _shortest_path.cp313-win_amd64.pyd
   │     │  │  │  ├─ _tools.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _tools.cp313-win_amd64.pyd
   │     │  │  │  ├─ _traversal.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _traversal.cp313-win_amd64.pyd
   │     │  │  │  ├─ _validation.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _laplacian.cpython-313.pyc
   │     │  │  │     ├─ _validation.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ csr.py
   │     │  │  ├─ data.py
   │     │  │  ├─ dia.py
   │     │  │  ├─ dok.py
   │     │  │  ├─ extract.py
   │     │  │  ├─ lil.py
   │     │  │  ├─ linalg
   │     │  │  │  ├─ dsolve.py
   │     │  │  │  ├─ eigen.py
   │     │  │  │  ├─ interface.py
   │     │  │  │  ├─ isolve.py
   │     │  │  │  ├─ matfuncs.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ propack_test_data.npz
   │     │  │  │  │  ├─ test_expm_multiply.py
   │     │  │  │  │  ├─ test_interface.py
   │     │  │  │  │  ├─ test_matfuncs.py
   │     │  │  │  │  ├─ test_norm.py
   │     │  │  │  │  ├─ test_onenormest.py
   │     │  │  │  │  ├─ test_propack.py
   │     │  │  │  │  ├─ test_pydata_sparse.py
   │     │  │  │  │  ├─ test_special_sparse_arrays.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_expm_multiply.cpython-313.pyc
   │     │  │  │  │     ├─ test_interface.cpython-313.pyc
   │     │  │  │  │     ├─ test_matfuncs.cpython-313.pyc
   │     │  │  │  │     ├─ test_norm.cpython-313.pyc
   │     │  │  │  │     ├─ test_onenormest.cpython-313.pyc
   │     │  │  │  │     ├─ test_propack.cpython-313.pyc
   │     │  │  │  │     ├─ test_pydata_sparse.cpython-313.pyc
   │     │  │  │  │     ├─ test_special_sparse_arrays.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _dsolve
   │     │  │  │  │  ├─ linsolve.py
   │     │  │  │  │  ├─ tests
   │     │  │  │  │  │  ├─ test_linsolve.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_linsolve.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ _add_newdocs.py
   │     │  │  │  │  ├─ _superlu.cp313-win_amd64.dll.a
   │     │  │  │  │  ├─ _superlu.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ linsolve.cpython-313.pyc
   │     │  │  │  │     ├─ _add_newdocs.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _eigen
   │     │  │  │  │  ├─ arpack
   │     │  │  │  │  │  ├─ arpack.py
   │     │  │  │  │  │  ├─ COPYING
   │     │  │  │  │  │  ├─ tests
   │     │  │  │  │  │  │  ├─ test_arpack.py
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     ├─ test_arpack.cpython-313.pyc
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ _arpack.cp313-win_amd64.dll.a
   │     │  │  │  │  │  ├─ _arpack.cp313-win_amd64.pyd
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ arpack.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ lobpcg
   │     │  │  │  │  │  ├─ lobpcg.py
   │     │  │  │  │  │  ├─ tests
   │     │  │  │  │  │  │  ├─ test_lobpcg.py
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     ├─ test_lobpcg.cpython-313.pyc
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ lobpcg.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ tests
   │     │  │  │  │  │  ├─ test_svds.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_svds.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ _svds.py
   │     │  │  │  │  ├─ _svds_doc.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _svds.cpython-313.pyc
   │     │  │  │  │     ├─ _svds_doc.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _expm_multiply.py
   │     │  │  │  ├─ _interface.py
   │     │  │  │  ├─ _isolve
   │     │  │  │  │  ├─ iterative.py
   │     │  │  │  │  ├─ lgmres.py
   │     │  │  │  │  ├─ lsmr.py
   │     │  │  │  │  ├─ lsqr.py
   │     │  │  │  │  ├─ minres.py
   │     │  │  │  │  ├─ tests
   │     │  │  │  │  │  ├─ test_gcrotmk.py
   │     │  │  │  │  │  ├─ test_iterative.py
   │     │  │  │  │  │  ├─ test_lgmres.py
   │     │  │  │  │  │  ├─ test_lsmr.py
   │     │  │  │  │  │  ├─ test_lsqr.py
   │     │  │  │  │  │  ├─ test_minres.py
   │     │  │  │  │  │  ├─ test_utils.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_gcrotmk.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_iterative.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_lgmres.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_lsmr.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_lsqr.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_minres.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_utils.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ tfqmr.py
   │     │  │  │  │  ├─ utils.py
   │     │  │  │  │  ├─ _gcrotmk.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ iterative.cpython-313.pyc
   │     │  │  │  │     ├─ lgmres.cpython-313.pyc
   │     │  │  │  │     ├─ lsmr.cpython-313.pyc
   │     │  │  │  │     ├─ lsqr.cpython-313.pyc
   │     │  │  │  │     ├─ minres.cpython-313.pyc
   │     │  │  │  │     ├─ tfqmr.cpython-313.pyc
   │     │  │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │  │     ├─ _gcrotmk.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _matfuncs.py
   │     │  │  │  ├─ _norm.py
   │     │  │  │  ├─ _onenormest.py
   │     │  │  │  ├─ _propack
   │     │  │  │  │  ├─ _cpropack.cp313-win_amd64.dll.a
   │     │  │  │  │  ├─ _cpropack.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ _dpropack.cp313-win_amd64.dll.a
   │     │  │  │  │  ├─ _dpropack.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ _spropack.cp313-win_amd64.dll.a
   │     │  │  │  │  ├─ _spropack.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ _zpropack.cp313-win_amd64.dll.a
   │     │  │  │  │  └─ _zpropack.cp313-win_amd64.pyd
   │     │  │  │  ├─ _special_sparse_arrays.py
   │     │  │  │  ├─ _svdp.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ dsolve.cpython-313.pyc
   │     │  │  │     ├─ eigen.cpython-313.pyc
   │     │  │  │     ├─ interface.cpython-313.pyc
   │     │  │  │     ├─ isolve.cpython-313.pyc
   │     │  │  │     ├─ matfuncs.cpython-313.pyc
   │     │  │  │     ├─ _expm_multiply.cpython-313.pyc
   │     │  │  │     ├─ _interface.cpython-313.pyc
   │     │  │  │     ├─ _matfuncs.cpython-313.pyc
   │     │  │  │     ├─ _norm.cpython-313.pyc
   │     │  │  │     ├─ _onenormest.cpython-313.pyc
   │     │  │  │     ├─ _special_sparse_arrays.cpython-313.pyc
   │     │  │  │     ├─ _svdp.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ sparsetools.py
   │     │  │  ├─ spfuncs.py
   │     │  │  ├─ sputils.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ csc_py2.npz
   │     │  │  │  │  └─ csc_py3.npz
   │     │  │  │  ├─ test_arithmetic1d.py
   │     │  │  │  ├─ test_array_api.py
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_common1d.py
   │     │  │  │  ├─ test_construct.py
   │     │  │  │  ├─ test_coo.py
   │     │  │  │  ├─ test_csc.py
   │     │  │  │  ├─ test_csr.py
   │     │  │  │  ├─ test_dok.py
   │     │  │  │  ├─ test_extract.py
   │     │  │  │  ├─ test_indexing1d.py
   │     │  │  │  ├─ test_matrix_io.py
   │     │  │  │  ├─ test_minmax1d.py
   │     │  │  │  ├─ test_sparsetools.py
   │     │  │  │  ├─ test_spfuncs.py
   │     │  │  │  ├─ test_sputils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_arithmetic1d.cpython-313.pyc
   │     │  │  │     ├─ test_array_api.cpython-313.pyc
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_common1d.cpython-313.pyc
   │     │  │  │     ├─ test_construct.cpython-313.pyc
   │     │  │  │     ├─ test_coo.cpython-313.pyc
   │     │  │  │     ├─ test_csc.cpython-313.pyc
   │     │  │  │     ├─ test_csr.cpython-313.pyc
   │     │  │  │     ├─ test_dok.cpython-313.pyc
   │     │  │  │     ├─ test_extract.cpython-313.pyc
   │     │  │  │     ├─ test_indexing1d.cpython-313.pyc
   │     │  │  │     ├─ test_matrix_io.cpython-313.pyc
   │     │  │  │     ├─ test_minmax1d.cpython-313.pyc
   │     │  │  │     ├─ test_sparsetools.cpython-313.pyc
   │     │  │  │     ├─ test_spfuncs.cpython-313.pyc
   │     │  │  │     ├─ test_sputils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _base.py
   │     │  │  ├─ _bsr.py
   │     │  │  ├─ _compressed.py
   │     │  │  ├─ _construct.py
   │     │  │  ├─ _coo.py
   │     │  │  ├─ _csc.py
   │     │  │  ├─ _csparsetools.cp313-win_amd64.dll.a
   │     │  │  ├─ _csparsetools.cp313-win_amd64.pyd
   │     │  │  ├─ _csr.py
   │     │  │  ├─ _data.py
   │     │  │  ├─ _dia.py
   │     │  │  ├─ _dok.py
   │     │  │  ├─ _extract.py
   │     │  │  ├─ _index.py
   │     │  │  ├─ _lil.py
   │     │  │  ├─ _matrix.py
   │     │  │  ├─ _matrix_io.py
   │     │  │  ├─ _sparsetools.cp313-win_amd64.dll.a
   │     │  │  ├─ _sparsetools.cp313-win_amd64.pyd
   │     │  │  ├─ _spfuncs.py
   │     │  │  ├─ _sputils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ bsr.cpython-313.pyc
   │     │  │     ├─ compressed.cpython-313.pyc
   │     │  │     ├─ construct.cpython-313.pyc
   │     │  │     ├─ coo.cpython-313.pyc
   │     │  │     ├─ csc.cpython-313.pyc
   │     │  │     ├─ csr.cpython-313.pyc
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ dia.cpython-313.pyc
   │     │  │     ├─ dok.cpython-313.pyc
   │     │  │     ├─ extract.cpython-313.pyc
   │     │  │     ├─ lil.cpython-313.pyc
   │     │  │     ├─ sparsetools.cpython-313.pyc
   │     │  │     ├─ spfuncs.cpython-313.pyc
   │     │  │     ├─ sputils.cpython-313.pyc
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _bsr.cpython-313.pyc
   │     │  │     ├─ _compressed.cpython-313.pyc
   │     │  │     ├─ _construct.cpython-313.pyc
   │     │  │     ├─ _coo.cpython-313.pyc
   │     │  │     ├─ _csc.cpython-313.pyc
   │     │  │     ├─ _csr.cpython-313.pyc
   │     │  │     ├─ _data.cpython-313.pyc
   │     │  │     ├─ _dia.cpython-313.pyc
   │     │  │     ├─ _dok.cpython-313.pyc
   │     │  │     ├─ _extract.cpython-313.pyc
   │     │  │     ├─ _index.cpython-313.pyc
   │     │  │     ├─ _lil.cpython-313.pyc
   │     │  │     ├─ _matrix.cpython-313.pyc
   │     │  │     ├─ _matrix_io.cpython-313.pyc
   │     │  │     ├─ _spfuncs.cpython-313.pyc
   │     │  │     ├─ _sputils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ spatial
   │     │  │  ├─ ckdtree.py
   │     │  │  ├─ distance.py
   │     │  │  ├─ distance.pyi
   │     │  │  ├─ kdtree.py
   │     │  │  ├─ qhull.py
   │     │  │  ├─ qhull_src
   │     │  │  │  └─ COPYING.txt
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ cdist-X1.txt
   │     │  │  │  │  ├─ cdist-X2.txt
   │     │  │  │  │  ├─ degenerate_pointset.npz
   │     │  │  │  │  ├─ iris.txt
   │     │  │  │  │  ├─ pdist-boolean-inp.txt
   │     │  │  │  │  ├─ pdist-chebyshev-ml-iris.txt
   │     │  │  │  │  ├─ pdist-chebyshev-ml.txt
   │     │  │  │  │  ├─ pdist-cityblock-ml-iris.txt
   │     │  │  │  │  ├─ pdist-cityblock-ml.txt
   │     │  │  │  │  ├─ pdist-correlation-ml-iris.txt
   │     │  │  │  │  ├─ pdist-correlation-ml.txt
   │     │  │  │  │  ├─ pdist-cosine-ml-iris.txt
   │     │  │  │  │  ├─ pdist-cosine-ml.txt
   │     │  │  │  │  ├─ pdist-double-inp.txt
   │     │  │  │  │  ├─ pdist-euclidean-ml-iris.txt
   │     │  │  │  │  ├─ pdist-euclidean-ml.txt
   │     │  │  │  │  ├─ pdist-hamming-ml.txt
   │     │  │  │  │  ├─ pdist-jaccard-ml.txt
   │     │  │  │  │  ├─ pdist-jensenshannon-ml-iris.txt
   │     │  │  │  │  ├─ pdist-jensenshannon-ml.txt
   │     │  │  │  │  ├─ pdist-minkowski-3.2-ml-iris.txt
   │     │  │  │  │  ├─ pdist-minkowski-3.2-ml.txt
   │     │  │  │  │  ├─ pdist-minkowski-5.8-ml-iris.txt
   │     │  │  │  │  ├─ pdist-seuclidean-ml-iris.txt
   │     │  │  │  │  ├─ pdist-seuclidean-ml.txt
   │     │  │  │  │  ├─ pdist-spearman-ml.txt
   │     │  │  │  │  ├─ random-bool-data.txt
   │     │  │  │  │  ├─ random-double-data.txt
   │     │  │  │  │  ├─ random-int-data.txt
   │     │  │  │  │  ├─ random-uint-data.txt
   │     │  │  │  │  └─ selfdual-4d-polytope.txt
   │     │  │  │  ├─ test_distance.py
   │     │  │  │  ├─ test_hausdorff.py
   │     │  │  │  ├─ test_kdtree.py
   │     │  │  │  ├─ test_qhull.py
   │     │  │  │  ├─ test_slerp.py
   │     │  │  │  ├─ test_spherical_voronoi.py
   │     │  │  │  ├─ test__plotutils.py
   │     │  │  │  ├─ test__procrustes.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_distance.cpython-313.pyc
   │     │  │  │     ├─ test_hausdorff.cpython-313.pyc
   │     │  │  │     ├─ test_kdtree.cpython-313.pyc
   │     │  │  │     ├─ test_qhull.cpython-313.pyc
   │     │  │  │     ├─ test_slerp.cpython-313.pyc
   │     │  │  │     ├─ test_spherical_voronoi.cpython-313.pyc
   │     │  │  │     ├─ test__plotutils.cpython-313.pyc
   │     │  │  │     ├─ test__procrustes.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ transform
   │     │  │  │  ├─ rotation.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_rotation.py
   │     │  │  │  │  ├─ test_rotation_groups.py
   │     │  │  │  │  ├─ test_rotation_spline.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_rotation.cpython-313.pyc
   │     │  │  │  │     ├─ test_rotation_groups.cpython-313.pyc
   │     │  │  │  │     ├─ test_rotation_spline.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _rotation.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _rotation.cp313-win_amd64.pyd
   │     │  │  │  ├─ _rotation_groups.py
   │     │  │  │  ├─ _rotation_spline.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ rotation.cpython-313.pyc
   │     │  │  │     ├─ _rotation_groups.cpython-313.pyc
   │     │  │  │     ├─ _rotation_spline.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _ckdtree.cp313-win_amd64.dll.a
   │     │  │  ├─ _ckdtree.cp313-win_amd64.pyd
   │     │  │  ├─ _distance_pybind.cp313-win_amd64.dll.a
   │     │  │  ├─ _distance_pybind.cp313-win_amd64.pyd
   │     │  │  ├─ _distance_wrap.cp313-win_amd64.dll.a
   │     │  │  ├─ _distance_wrap.cp313-win_amd64.pyd
   │     │  │  ├─ _geometric_slerp.py
   │     │  │  ├─ _hausdorff.cp313-win_amd64.dll.a
   │     │  │  ├─ _hausdorff.cp313-win_amd64.pyd
   │     │  │  ├─ _kdtree.py
   │     │  │  ├─ _plotutils.py
   │     │  │  ├─ _procrustes.py
   │     │  │  ├─ _qhull.cp313-win_amd64.dll.a
   │     │  │  ├─ _qhull.cp313-win_amd64.pyd
   │     │  │  ├─ _qhull.pyi
   │     │  │  ├─ _spherical_voronoi.py
   │     │  │  ├─ _voronoi.cp313-win_amd64.dll.a
   │     │  │  ├─ _voronoi.cp313-win_amd64.pyd
   │     │  │  ├─ _voronoi.pyi
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ ckdtree.cpython-313.pyc
   │     │  │     ├─ distance.cpython-313.pyc
   │     │  │     ├─ kdtree.cpython-313.pyc
   │     │  │     ├─ qhull.cpython-313.pyc
   │     │  │     ├─ _geometric_slerp.cpython-313.pyc
   │     │  │     ├─ _kdtree.cpython-313.pyc
   │     │  │     ├─ _plotutils.cpython-313.pyc
   │     │  │     ├─ _procrustes.cpython-313.pyc
   │     │  │     ├─ _spherical_voronoi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ special
   │     │  │  ├─ add_newdocs.py
   │     │  │  ├─ basic.py
   │     │  │  ├─ cython_special.cp313-win_amd64.dll.a
   │     │  │  ├─ cython_special.cp313-win_amd64.pyd
   │     │  │  ├─ cython_special.pxd
   │     │  │  ├─ cython_special.pyi
   │     │  │  ├─ libsf_error_state.dll
   │     │  │  ├─ libsf_error_state.dll.a
   │     │  │  ├─ orthogonal.py
   │     │  │  ├─ sf_error.py
   │     │  │  ├─ specfun.py
   │     │  │  ├─ spfun_stats.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ boost.npz
   │     │  │  │  │  ├─ gsl.npz
   │     │  │  │  │  ├─ local.npz
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_basic.py
   │     │  │  │  ├─ test_bdtr.py
   │     │  │  │  ├─ test_boost_ufuncs.py
   │     │  │  │  ├─ test_boxcox.py
   │     │  │  │  ├─ test_cdflib.py
   │     │  │  │  ├─ test_cdft_asymptotic.py
   │     │  │  │  ├─ test_cephes_intp_cast.py
   │     │  │  │  ├─ test_cosine_distr.py
   │     │  │  │  ├─ test_cython_special.py
   │     │  │  │  ├─ test_data.py
   │     │  │  │  ├─ test_dd.py
   │     │  │  │  ├─ test_digamma.py
   │     │  │  │  ├─ test_ellip_harm.py
   │     │  │  │  ├─ test_erfinv.py
   │     │  │  │  ├─ test_exponential_integrals.py
   │     │  │  │  ├─ test_extending.py
   │     │  │  │  ├─ test_faddeeva.py
   │     │  │  │  ├─ test_gamma.py
   │     │  │  │  ├─ test_gammainc.py
   │     │  │  │  ├─ test_hyp2f1.py
   │     │  │  │  ├─ test_hypergeometric.py
   │     │  │  │  ├─ test_iv_ratio.py
   │     │  │  │  ├─ test_kolmogorov.py
   │     │  │  │  ├─ test_lambertw.py
   │     │  │  │  ├─ test_legendre.py
   │     │  │  │  ├─ test_loggamma.py
   │     │  │  │  ├─ test_logit.py
   │     │  │  │  ├─ test_logsumexp.py
   │     │  │  │  ├─ test_log_softmax.py
   │     │  │  │  ├─ test_mpmath.py
   │     │  │  │  ├─ test_nan_inputs.py
   │     │  │  │  ├─ test_ndtr.py
   │     │  │  │  ├─ test_ndtri_exp.py
   │     │  │  │  ├─ test_orthogonal.py
   │     │  │  │  ├─ test_orthogonal_eval.py
   │     │  │  │  ├─ test_owens_t.py
   │     │  │  │  ├─ test_pcf.py
   │     │  │  │  ├─ test_pdtr.py
   │     │  │  │  ├─ test_powm1.py
   │     │  │  │  ├─ test_precompute_expn_asy.py
   │     │  │  │  ├─ test_precompute_gammainc.py
   │     │  │  │  ├─ test_precompute_utils.py
   │     │  │  │  ├─ test_round.py
   │     │  │  │  ├─ test_sf_error.py
   │     │  │  │  ├─ test_sici.py
   │     │  │  │  ├─ test_specfun.py
   │     │  │  │  ├─ test_spence.py
   │     │  │  │  ├─ test_spfun_stats.py
   │     │  │  │  ├─ test_spherical_bessel.py
   │     │  │  │  ├─ test_sph_harm.py
   │     │  │  │  ├─ test_support_alternative_backends.py
   │     │  │  │  ├─ test_trig.py
   │     │  │  │  ├─ test_ufunc_signatures.py
   │     │  │  │  ├─ test_wrightomega.py
   │     │  │  │  ├─ test_wright_bessel.py
   │     │  │  │  ├─ test_xsf_cuda.py
   │     │  │  │  ├─ test_zeta.py
   │     │  │  │  ├─ _cython_examples
   │     │  │  │  │  ├─ extending.pyx
   │     │  │  │  │  └─ meson.build
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_basic.cpython-313.pyc
   │     │  │  │     ├─ test_bdtr.cpython-313.pyc
   │     │  │  │     ├─ test_boost_ufuncs.cpython-313.pyc
   │     │  │  │     ├─ test_boxcox.cpython-313.pyc
   │     │  │  │     ├─ test_cdflib.cpython-313.pyc
   │     │  │  │     ├─ test_cdft_asymptotic.cpython-313.pyc
   │     │  │  │     ├─ test_cephes_intp_cast.cpython-313.pyc
   │     │  │  │     ├─ test_cosine_distr.cpython-313.pyc
   │     │  │  │     ├─ test_cython_special.cpython-313.pyc
   │     │  │  │     ├─ test_data.cpython-313.pyc
   │     │  │  │     ├─ test_dd.cpython-313.pyc
   │     │  │  │     ├─ test_digamma.cpython-313.pyc
   │     │  │  │     ├─ test_ellip_harm.cpython-313.pyc
   │     │  │  │     ├─ test_erfinv.cpython-313.pyc
   │     │  │  │     ├─ test_exponential_integrals.cpython-313.pyc
   │     │  │  │     ├─ test_extending.cpython-313.pyc
   │     │  │  │     ├─ test_faddeeva.cpython-313.pyc
   │     │  │  │     ├─ test_gamma.cpython-313.pyc
   │     │  │  │     ├─ test_gammainc.cpython-313.pyc
   │     │  │  │     ├─ test_hyp2f1.cpython-313.pyc
   │     │  │  │     ├─ test_hypergeometric.cpython-313.pyc
   │     │  │  │     ├─ test_iv_ratio.cpython-313.pyc
   │     │  │  │     ├─ test_kolmogorov.cpython-313.pyc
   │     │  │  │     ├─ test_lambertw.cpython-313.pyc
   │     │  │  │     ├─ test_legendre.cpython-313.pyc
   │     │  │  │     ├─ test_loggamma.cpython-313.pyc
   │     │  │  │     ├─ test_logit.cpython-313.pyc
   │     │  │  │     ├─ test_logsumexp.cpython-313.pyc
   │     │  │  │     ├─ test_log_softmax.cpython-313.pyc
   │     │  │  │     ├─ test_mpmath.cpython-313.pyc
   │     │  │  │     ├─ test_nan_inputs.cpython-313.pyc
   │     │  │  │     ├─ test_ndtr.cpython-313.pyc
   │     │  │  │     ├─ test_ndtri_exp.cpython-313.pyc
   │     │  │  │     ├─ test_orthogonal.cpython-313.pyc
   │     │  │  │     ├─ test_orthogonal_eval.cpython-313.pyc
   │     │  │  │     ├─ test_owens_t.cpython-313.pyc
   │     │  │  │     ├─ test_pcf.cpython-313.pyc
   │     │  │  │     ├─ test_pdtr.cpython-313.pyc
   │     │  │  │     ├─ test_powm1.cpython-313.pyc
   │     │  │  │     ├─ test_precompute_expn_asy.cpython-313.pyc
   │     │  │  │     ├─ test_precompute_gammainc.cpython-313.pyc
   │     │  │  │     ├─ test_precompute_utils.cpython-313.pyc
   │     │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │     ├─ test_sf_error.cpython-313.pyc
   │     │  │  │     ├─ test_sici.cpython-313.pyc
   │     │  │  │     ├─ test_specfun.cpython-313.pyc
   │     │  │  │     ├─ test_spence.cpython-313.pyc
   │     │  │  │     ├─ test_spfun_stats.cpython-313.pyc
   │     │  │  │     ├─ test_spherical_bessel.cpython-313.pyc
   │     │  │  │     ├─ test_sph_harm.cpython-313.pyc
   │     │  │  │     ├─ test_support_alternative_backends.cpython-313.pyc
   │     │  │  │     ├─ test_trig.cpython-313.pyc
   │     │  │  │     ├─ test_ufunc_signatures.cpython-313.pyc
   │     │  │  │     ├─ test_wrightomega.cpython-313.pyc
   │     │  │  │     ├─ test_wright_bessel.cpython-313.pyc
   │     │  │  │     ├─ test_xsf_cuda.cpython-313.pyc
   │     │  │  │     ├─ test_zeta.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ xsf
   │     │  │  │  ├─ binom.h
   │     │  │  │  ├─ cdflib.h
   │     │  │  │  ├─ cephes
   │     │  │  │  │  ├─ airy.h
   │     │  │  │  │  ├─ besselpoly.h
   │     │  │  │  │  ├─ beta.h
   │     │  │  │  │  ├─ cbrt.h
   │     │  │  │  │  ├─ chbevl.h
   │     │  │  │  │  ├─ chdtr.h
   │     │  │  │  │  ├─ const.h
   │     │  │  │  │  ├─ ellie.h
   │     │  │  │  │  ├─ ellik.h
   │     │  │  │  │  ├─ ellpe.h
   │     │  │  │  │  ├─ ellpk.h
   │     │  │  │  │  ├─ expn.h
   │     │  │  │  │  ├─ gamma.h
   │     │  │  │  │  ├─ hyp2f1.h
   │     │  │  │  │  ├─ hyperg.h
   │     │  │  │  │  ├─ i0.h
   │     │  │  │  │  ├─ i1.h
   │     │  │  │  │  ├─ igam.h
   │     │  │  │  │  ├─ igami.h
   │     │  │  │  │  ├─ igam_asymp_coeff.h
   │     │  │  │  │  ├─ j0.h
   │     │  │  │  │  ├─ j1.h
   │     │  │  │  │  ├─ jv.h
   │     │  │  │  │  ├─ k0.h
   │     │  │  │  │  ├─ k1.h
   │     │  │  │  │  ├─ kn.h
   │     │  │  │  │  ├─ lanczos.h
   │     │  │  │  │  ├─ ndtr.h
   │     │  │  │  │  ├─ poch.h
   │     │  │  │  │  ├─ polevl.h
   │     │  │  │  │  ├─ psi.h
   │     │  │  │  │  ├─ rgamma.h
   │     │  │  │  │  ├─ scipy_iv.h
   │     │  │  │  │  ├─ shichi.h
   │     │  │  │  │  ├─ sici.h
   │     │  │  │  │  ├─ sindg.h
   │     │  │  │  │  ├─ tandg.h
   │     │  │  │  │  ├─ trig.h
   │     │  │  │  │  ├─ unity.h
   │     │  │  │  │  └─ zeta.h
   │     │  │  │  ├─ config.h
   │     │  │  │  ├─ digamma.h
   │     │  │  │  ├─ error.h
   │     │  │  │  ├─ evalpoly.h
   │     │  │  │  ├─ expint.h
   │     │  │  │  ├─ hyp2f1.h
   │     │  │  │  ├─ iv_ratio.h
   │     │  │  │  ├─ lambertw.h
   │     │  │  │  ├─ loggamma.h
   │     │  │  │  ├─ sici.h
   │     │  │  │  ├─ tools.h
   │     │  │  │  ├─ trig.h
   │     │  │  │  ├─ wright_bessel.h
   │     │  │  │  └─ zlog1.h
   │     │  │  ├─ _add_newdocs.py
   │     │  │  ├─ _basic.py
   │     │  │  ├─ _comb.cp313-win_amd64.dll.a
   │     │  │  ├─ _comb.cp313-win_amd64.pyd
   │     │  │  ├─ _ellip_harm.py
   │     │  │  ├─ _ellip_harm_2.cp313-win_amd64.dll.a
   │     │  │  ├─ _ellip_harm_2.cp313-win_amd64.pyd
   │     │  │  ├─ _gufuncs.cp313-win_amd64.dll.a
   │     │  │  ├─ _gufuncs.cp313-win_amd64.pyd
   │     │  │  ├─ _input_validation.py
   │     │  │  ├─ _lambertw.py
   │     │  │  ├─ _logsumexp.py
   │     │  │  ├─ _mptestutils.py
   │     │  │  ├─ _multiufuncs.py
   │     │  │  ├─ _orthogonal.py
   │     │  │  ├─ _orthogonal.pyi
   │     │  │  ├─ _precompute
   │     │  │  │  ├─ cosine_cdf.py
   │     │  │  │  ├─ expn_asy.py
   │     │  │  │  ├─ gammainc_asy.py
   │     │  │  │  ├─ gammainc_data.py
   │     │  │  │  ├─ hyp2f1_data.py
   │     │  │  │  ├─ lambertw.py
   │     │  │  │  ├─ loggamma.py
   │     │  │  │  ├─ struve_convergence.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ wrightomega.py
   │     │  │  │  ├─ wright_bessel.py
   │     │  │  │  ├─ wright_bessel_data.py
   │     │  │  │  ├─ zetac.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cosine_cdf.cpython-313.pyc
   │     │  │  │     ├─ expn_asy.cpython-313.pyc
   │     │  │  │     ├─ gammainc_asy.cpython-313.pyc
   │     │  │  │     ├─ gammainc_data.cpython-313.pyc
   │     │  │  │     ├─ hyp2f1_data.cpython-313.pyc
   │     │  │  │     ├─ lambertw.cpython-313.pyc
   │     │  │  │     ├─ loggamma.cpython-313.pyc
   │     │  │  │     ├─ struve_convergence.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     ├─ wrightomega.cpython-313.pyc
   │     │  │  │     ├─ wright_bessel.cpython-313.pyc
   │     │  │  │     ├─ wright_bessel_data.cpython-313.pyc
   │     │  │  │     ├─ zetac.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _sf_error.py
   │     │  │  ├─ _specfun.cp313-win_amd64.dll.a
   │     │  │  ├─ _specfun.cp313-win_amd64.pyd
   │     │  │  ├─ _special_ufuncs.cp313-win_amd64.dll.a
   │     │  │  ├─ _special_ufuncs.cp313-win_amd64.pyd
   │     │  │  ├─ _spfun_stats.py
   │     │  │  ├─ _spherical_bessel.py
   │     │  │  ├─ _support_alternative_backends.py
   │     │  │  ├─ _testutils.py
   │     │  │  ├─ _test_internal.cp313-win_amd64.dll.a
   │     │  │  ├─ _test_internal.cp313-win_amd64.pyd
   │     │  │  ├─ _test_internal.pyi
   │     │  │  ├─ _ufuncs.cp313-win_amd64.dll.a
   │     │  │  ├─ _ufuncs.cp313-win_amd64.pyd
   │     │  │  ├─ _ufuncs.pyi
   │     │  │  ├─ _ufuncs.pyx
   │     │  │  ├─ _ufuncs_cxx.cp313-win_amd64.dll.a
   │     │  │  ├─ _ufuncs_cxx.cp313-win_amd64.pyd
   │     │  │  ├─ _ufuncs_cxx.pxd
   │     │  │  ├─ _ufuncs_cxx.pyx
   │     │  │  ├─ _ufuncs_cxx_defs.h
   │     │  │  ├─ _ufuncs_defs.h
   │     │  │  ├─ __init__.pxd
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ add_newdocs.cpython-313.pyc
   │     │  │     ├─ basic.cpython-313.pyc
   │     │  │     ├─ orthogonal.cpython-313.pyc
   │     │  │     ├─ sf_error.cpython-313.pyc
   │     │  │     ├─ specfun.cpython-313.pyc
   │     │  │     ├─ spfun_stats.cpython-313.pyc
   │     │  │     ├─ _add_newdocs.cpython-313.pyc
   │     │  │     ├─ _basic.cpython-313.pyc
   │     │  │     ├─ _ellip_harm.cpython-313.pyc
   │     │  │     ├─ _input_validation.cpython-313.pyc
   │     │  │     ├─ _lambertw.cpython-313.pyc
   │     │  │     ├─ _logsumexp.cpython-313.pyc
   │     │  │     ├─ _mptestutils.cpython-313.pyc
   │     │  │     ├─ _multiufuncs.cpython-313.pyc
   │     │  │     ├─ _orthogonal.cpython-313.pyc
   │     │  │     ├─ _sf_error.cpython-313.pyc
   │     │  │     ├─ _spfun_stats.cpython-313.pyc
   │     │  │     ├─ _spherical_bessel.cpython-313.pyc
   │     │  │     ├─ _support_alternative_backends.cpython-313.pyc
   │     │  │     ├─ _testutils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ stats
   │     │  │  ├─ biasedurn.py
   │     │  │  ├─ contingency.py
   │     │  │  ├─ distributions.py
   │     │  │  ├─ kde.py
   │     │  │  ├─ morestats.py
   │     │  │  ├─ mstats.py
   │     │  │  ├─ mstats_basic.py
   │     │  │  ├─ mstats_extras.py
   │     │  │  ├─ mvn.py
   │     │  │  ├─ qmc.py
   │     │  │  ├─ sampling.py
   │     │  │  ├─ stats.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ common_tests.py
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ fisher_exact_results_from_r.py
   │     │  │  │  │  ├─ jf_skew_t_gamlss_pdf_data.npy
   │     │  │  │  │  ├─ levy_stable
   │     │  │  │  │  │  ├─ stable-loc-scale-sample-data.npy
   │     │  │  │  │  │  ├─ stable-Z1-cdf-sample-data.npy
   │     │  │  │  │  │  └─ stable-Z1-pdf-sample-data.npy
   │     │  │  │  │  ├─ nist_anova
   │     │  │  │  │  │  ├─ AtmWtAg.dat
   │     │  │  │  │  │  ├─ SiRstv.dat
   │     │  │  │  │  │  ├─ SmLs01.dat
   │     │  │  │  │  │  ├─ SmLs02.dat
   │     │  │  │  │  │  ├─ SmLs03.dat
   │     │  │  │  │  │  ├─ SmLs04.dat
   │     │  │  │  │  │  ├─ SmLs05.dat
   │     │  │  │  │  │  ├─ SmLs06.dat
   │     │  │  │  │  │  ├─ SmLs07.dat
   │     │  │  │  │  │  ├─ SmLs08.dat
   │     │  │  │  │  │  └─ SmLs09.dat
   │     │  │  │  │  ├─ nist_linregress
   │     │  │  │  │  │  └─ Norris.dat
   │     │  │  │  │  ├─ rel_breitwigner_pdf_sample_data_ROOT.npy
   │     │  │  │  │  ├─ studentized_range_mpmath_ref.json
   │     │  │  │  │  ├─ _mvt.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ fisher_exact_results_from_r.cpython-313.pyc
   │     │  │  │  │     └─ _mvt.cpython-313.pyc
   │     │  │  │  ├─ test_axis_nan_policy.py
   │     │  │  │  ├─ test_binned_statistic.py
   │     │  │  │  ├─ test_censored_data.py
   │     │  │  │  ├─ test_contingency.py
   │     │  │  │  ├─ test_continuous.py
   │     │  │  │  ├─ test_continuous_basic.py
   │     │  │  │  ├─ test_continuous_fit_censored.py
   │     │  │  │  ├─ test_correlation.py
   │     │  │  │  ├─ test_crosstab.py
   │     │  │  │  ├─ test_discrete_basic.py
   │     │  │  │  ├─ test_discrete_distns.py
   │     │  │  │  ├─ test_distributions.py
   │     │  │  │  ├─ test_entropy.py
   │     │  │  │  ├─ test_fast_gen_inversion.py
   │     │  │  │  ├─ test_fit.py
   │     │  │  │  ├─ test_hypotests.py
   │     │  │  │  ├─ test_kdeoth.py
   │     │  │  │  ├─ test_mgc.py
   │     │  │  │  ├─ test_morestats.py
   │     │  │  │  ├─ test_mstats_basic.py
   │     │  │  │  ├─ test_mstats_extras.py
   │     │  │  │  ├─ test_multicomp.py
   │     │  │  │  ├─ test_multivariate.py
   │     │  │  │  ├─ test_odds_ratio.py
   │     │  │  │  ├─ test_qmc.py
   │     │  │  │  ├─ test_rank.py
   │     │  │  │  ├─ test_relative_risk.py
   │     │  │  │  ├─ test_resampling.py
   │     │  │  │  ├─ test_sampling.py
   │     │  │  │  ├─ test_sensitivity_analysis.py
   │     │  │  │  ├─ test_stats.py
   │     │  │  │  ├─ test_survival.py
   │     │  │  │  ├─ test_tukeylambda_stats.py
   │     │  │  │  ├─ test_variation.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common_tests.cpython-313.pyc
   │     │  │  │     ├─ test_axis_nan_policy.cpython-313.pyc
   │     │  │  │     ├─ test_binned_statistic.cpython-313.pyc
   │     │  │  │     ├─ test_censored_data.cpython-313.pyc
   │     │  │  │     ├─ test_contingency.cpython-313.pyc
   │     │  │  │     ├─ test_continuous.cpython-313.pyc
   │     │  │  │     ├─ test_continuous_basic.cpython-313.pyc
   │     │  │  │     ├─ test_continuous_fit_censored.cpython-313.pyc
   │     │  │  │     ├─ test_correlation.cpython-313.pyc
   │     │  │  │     ├─ test_crosstab.cpython-313.pyc
   │     │  │  │     ├─ test_discrete_basic.cpython-313.pyc
   │     │  │  │     ├─ test_discrete_distns.cpython-313.pyc
   │     │  │  │     ├─ test_distributions.cpython-313.pyc
   │     │  │  │     ├─ test_entropy.cpython-313.pyc
   │     │  │  │     ├─ test_fast_gen_inversion.cpython-313.pyc
   │     │  │  │     ├─ test_fit.cpython-313.pyc
   │     │  │  │     ├─ test_hypotests.cpython-313.pyc
   │     │  │  │     ├─ test_kdeoth.cpython-313.pyc
   │     │  │  │     ├─ test_mgc.cpython-313.pyc
   │     │  │  │     ├─ test_morestats.cpython-313.pyc
   │     │  │  │     ├─ test_mstats_basic.cpython-313.pyc
   │     │  │  │     ├─ test_mstats_extras.cpython-313.pyc
   │     │  │  │     ├─ test_multicomp.cpython-313.pyc
   │     │  │  │     ├─ test_multivariate.cpython-313.pyc
   │     │  │  │     ├─ test_odds_ratio.cpython-313.pyc
   │     │  │  │     ├─ test_qmc.cpython-313.pyc
   │     │  │  │     ├─ test_rank.cpython-313.pyc
   │     │  │  │     ├─ test_relative_risk.cpython-313.pyc
   │     │  │  │     ├─ test_resampling.cpython-313.pyc
   │     │  │  │     ├─ test_sampling.cpython-313.pyc
   │     │  │  │     ├─ test_sensitivity_analysis.cpython-313.pyc
   │     │  │  │     ├─ test_stats.cpython-313.pyc
   │     │  │  │     ├─ test_survival.cpython-313.pyc
   │     │  │  │     ├─ test_tukeylambda_stats.cpython-313.pyc
   │     │  │  │     ├─ test_variation.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _ansari_swilk_statistics.cp313-win_amd64.dll.a
   │     │  │  ├─ _ansari_swilk_statistics.cp313-win_amd64.pyd
   │     │  │  ├─ _axis_nan_policy.py
   │     │  │  ├─ _biasedurn.cp313-win_amd64.dll.a
   │     │  │  ├─ _biasedurn.cp313-win_amd64.pyd
   │     │  │  ├─ _biasedurn.pxd
   │     │  │  ├─ _binned_statistic.py
   │     │  │  ├─ _binomtest.py
   │     │  │  ├─ _bws_test.py
   │     │  │  ├─ _censored_data.py
   │     │  │  ├─ _common.py
   │     │  │  ├─ _constants.py
   │     │  │  ├─ _continuous_distns.py
   │     │  │  ├─ _correlation.py
   │     │  │  ├─ _covariance.py
   │     │  │  ├─ _crosstab.py
   │     │  │  ├─ _discrete_distns.py
   │     │  │  ├─ _distn_infrastructure.py
   │     │  │  ├─ _distribution_infrastructure.py
   │     │  │  ├─ _distr_params.py
   │     │  │  ├─ _entropy.py
   │     │  │  ├─ _fit.py
   │     │  │  ├─ _hypotests.py
   │     │  │  ├─ _kde.py
   │     │  │  ├─ _ksstats.py
   │     │  │  ├─ _levy_stable
   │     │  │  │  ├─ levyst.cp313-win_amd64.dll.a
   │     │  │  │  ├─ levyst.cp313-win_amd64.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _mannwhitneyu.py
   │     │  │  ├─ _mgc.py
   │     │  │  ├─ _morestats.py
   │     │  │  ├─ _mstats_basic.py
   │     │  │  ├─ _mstats_extras.py
   │     │  │  ├─ _multicomp.py
   │     │  │  ├─ _multivariate.py
   │     │  │  ├─ _mvn.cp313-win_amd64.dll.a
   │     │  │  ├─ _mvn.cp313-win_amd64.pyd
   │     │  │  ├─ _new_distributions.py
   │     │  │  ├─ _odds_ratio.py
   │     │  │  ├─ _page_trend_test.py
   │     │  │  ├─ _probability_distribution.py
   │     │  │  ├─ _qmc.py
   │     │  │  ├─ _qmc_cy.cp313-win_amd64.dll.a
   │     │  │  ├─ _qmc_cy.cp313-win_amd64.pyd
   │     │  │  ├─ _qmc_cy.pyi
   │     │  │  ├─ _qmvnt.py
   │     │  │  ├─ _rcont
   │     │  │  │  ├─ rcont.cp313-win_amd64.dll.a
   │     │  │  │  ├─ rcont.cp313-win_amd64.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _relative_risk.py
   │     │  │  ├─ _resampling.py
   │     │  │  ├─ _result_classes.py
   │     │  │  ├─ _sampling.py
   │     │  │  ├─ _sensitivity_analysis.py
   │     │  │  ├─ _sobol.cp313-win_amd64.dll.a
   │     │  │  ├─ _sobol.cp313-win_amd64.pyd
   │     │  │  ├─ _sobol.pyi
   │     │  │  ├─ _sobol_direction_numbers.npz
   │     │  │  ├─ _stats.cp313-win_amd64.dll.a
   │     │  │  ├─ _stats.cp313-win_amd64.pyd
   │     │  │  ├─ _stats.pxd
   │     │  │  ├─ _stats_mstats_common.py
   │     │  │  ├─ _stats_py.py
   │     │  │  ├─ _stats_pythran.cp313-win_amd64.dll.a
   │     │  │  ├─ _stats_pythran.cp313-win_amd64.pyd
   │     │  │  ├─ _survival.py
   │     │  │  ├─ _tukeylambda_stats.py
   │     │  │  ├─ _unuran
   │     │  │  │  ├─ unuran_wrapper.cp313-win_amd64.dll.a
   │     │  │  │  ├─ unuran_wrapper.cp313-win_amd64.pyd
   │     │  │  │  ├─ unuran_wrapper.pyi
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _variation.py
   │     │  │  ├─ _warnings_errors.py
   │     │  │  ├─ _wilcoxon.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ biasedurn.cpython-313.pyc
   │     │  │     ├─ contingency.cpython-313.pyc
   │     │  │     ├─ distributions.cpython-313.pyc
   │     │  │     ├─ kde.cpython-313.pyc
   │     │  │     ├─ morestats.cpython-313.pyc
   │     │  │     ├─ mstats.cpython-313.pyc
   │     │  │     ├─ mstats_basic.cpython-313.pyc
   │     │  │     ├─ mstats_extras.cpython-313.pyc
   │     │  │     ├─ mvn.cpython-313.pyc
   │     │  │     ├─ qmc.cpython-313.pyc
   │     │  │     ├─ sampling.cpython-313.pyc
   │     │  │     ├─ stats.cpython-313.pyc
   │     │  │     ├─ _axis_nan_policy.cpython-313.pyc
   │     │  │     ├─ _binned_statistic.cpython-313.pyc
   │     │  │     ├─ _binomtest.cpython-313.pyc
   │     │  │     ├─ _bws_test.cpython-313.pyc
   │     │  │     ├─ _censored_data.cpython-313.pyc
   │     │  │     ├─ _common.cpython-313.pyc
   │     │  │     ├─ _constants.cpython-313.pyc
   │     │  │     ├─ _continuous_distns.cpython-313.pyc
   │     │  │     ├─ _correlation.cpython-313.pyc
   │     │  │     ├─ _covariance.cpython-313.pyc
   │     │  │     ├─ _crosstab.cpython-313.pyc
   │     │  │     ├─ _discrete_distns.cpython-313.pyc
   │     │  │     ├─ _distn_infrastructure.cpython-313.pyc
   │     │  │     ├─ _distribution_infrastructure.cpython-313.pyc
   │     │  │     ├─ _distr_params.cpython-313.pyc
   │     │  │     ├─ _entropy.cpython-313.pyc
   │     │  │     ├─ _fit.cpython-313.pyc
   │     │  │     ├─ _hypotests.cpython-313.pyc
   │     │  │     ├─ _kde.cpython-313.pyc
   │     │  │     ├─ _ksstats.cpython-313.pyc
   │     │  │     ├─ _mannwhitneyu.cpython-313.pyc
   │     │  │     ├─ _mgc.cpython-313.pyc
   │     │  │     ├─ _morestats.cpython-313.pyc
   │     │  │     ├─ _mstats_basic.cpython-313.pyc
   │     │  │     ├─ _mstats_extras.cpython-313.pyc
   │     │  │     ├─ _multicomp.cpython-313.pyc
   │     │  │     ├─ _multivariate.cpython-313.pyc
   │     │  │     ├─ _new_distributions.cpython-313.pyc
   │     │  │     ├─ _odds_ratio.cpython-313.pyc
   │     │  │     ├─ _page_trend_test.cpython-313.pyc
   │     │  │     ├─ _probability_distribution.cpython-313.pyc
   │     │  │     ├─ _qmc.cpython-313.pyc
   │     │  │     ├─ _qmvnt.cpython-313.pyc
   │     │  │     ├─ _relative_risk.cpython-313.pyc
   │     │  │     ├─ _resampling.cpython-313.pyc
   │     │  │     ├─ _result_classes.cpython-313.pyc
   │     │  │     ├─ _sampling.cpython-313.pyc
   │     │  │     ├─ _sensitivity_analysis.cpython-313.pyc
   │     │  │     ├─ _stats_mstats_common.cpython-313.pyc
   │     │  │     ├─ _stats_py.cpython-313.pyc
   │     │  │     ├─ _survival.cpython-313.pyc
   │     │  │     ├─ _tukeylambda_stats.cpython-313.pyc
   │     │  │     ├─ _variation.cpython-313.pyc
   │     │  │     ├─ _warnings_errors.cpython-313.pyc
   │     │  │     ├─ _wilcoxon.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ version.py
   │     │  ├─ _distributor_init.py
   │     │  ├─ _lib
   │     │  │  ├─ array_api_compat
   │     │  │  │  ├─ common
   │     │  │  │  │  ├─ _aliases.py
   │     │  │  │  │  ├─ _fft.py
   │     │  │  │  │  ├─ _helpers.py
   │     │  │  │  │  ├─ _linalg.py
   │     │  │  │  │  ├─ _typing.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _aliases.cpython-313.pyc
   │     │  │  │  │     ├─ _fft.cpython-313.pyc
   │     │  │  │  │     ├─ _helpers.cpython-313.pyc
   │     │  │  │  │     ├─ _linalg.cpython-313.pyc
   │     │  │  │  │     ├─ _typing.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ cupy
   │     │  │  │  │  ├─ fft.py
   │     │  │  │  │  ├─ linalg.py
   │     │  │  │  │  ├─ _aliases.py
   │     │  │  │  │  ├─ _info.py
   │     │  │  │  │  ├─ _typing.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ fft.cpython-313.pyc
   │     │  │  │  │     ├─ linalg.cpython-313.pyc
   │     │  │  │  │     ├─ _aliases.cpython-313.pyc
   │     │  │  │  │     ├─ _info.cpython-313.pyc
   │     │  │  │  │     ├─ _typing.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ dask
   │     │  │  │  │  ├─ array
   │     │  │  │  │  │  ├─ fft.py
   │     │  │  │  │  │  ├─ linalg.py
   │     │  │  │  │  │  ├─ _aliases.py
   │     │  │  │  │  │  ├─ _info.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ fft.cpython-313.pyc
   │     │  │  │  │  │     ├─ linalg.cpython-313.pyc
   │     │  │  │  │  │     ├─ _aliases.cpython-313.pyc
   │     │  │  │  │  │     ├─ _info.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ numpy
   │     │  │  │  │  ├─ fft.py
   │     │  │  │  │  ├─ linalg.py
   │     │  │  │  │  ├─ _aliases.py
   │     │  │  │  │  ├─ _info.py
   │     │  │  │  │  ├─ _typing.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ fft.cpython-313.pyc
   │     │  │  │  │     ├─ linalg.cpython-313.pyc
   │     │  │  │  │     ├─ _aliases.cpython-313.pyc
   │     │  │  │  │     ├─ _info.cpython-313.pyc
   │     │  │  │  │     ├─ _typing.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ torch
   │     │  │  │  │  ├─ fft.py
   │     │  │  │  │  ├─ linalg.py
   │     │  │  │  │  ├─ _aliases.py
   │     │  │  │  │  ├─ _info.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ fft.cpython-313.pyc
   │     │  │  │  │     ├─ linalg.cpython-313.pyc
   │     │  │  │  │     ├─ _aliases.cpython-313.pyc
   │     │  │  │  │     ├─ _info.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _internal.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _internal.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ array_api_extra
   │     │  │  │  ├─ _funcs.py
   │     │  │  │  ├─ _typing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _funcs.cpython-313.pyc
   │     │  │  │     ├─ _typing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ cobyqa
   │     │  │  │  ├─ framework.py
   │     │  │  │  ├─ main.py
   │     │  │  │  ├─ models.py
   │     │  │  │  ├─ problem.py
   │     │  │  │  ├─ settings.py
   │     │  │  │  ├─ subsolvers
   │     │  │  │  │  ├─ geometry.py
   │     │  │  │  │  ├─ optim.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ geometry.cpython-313.pyc
   │     │  │  │  │     ├─ optim.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ utils
   │     │  │  │  │  ├─ exceptions.py
   │     │  │  │  │  ├─ math.py
   │     │  │  │  │  ├─ versions.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ exceptions.cpython-313.pyc
   │     │  │  │  │     ├─ math.cpython-313.pyc
   │     │  │  │  │     ├─ versions.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ framework.cpython-313.pyc
   │     │  │  │     ├─ main.cpython-313.pyc
   │     │  │  │     ├─ models.cpython-313.pyc
   │     │  │  │     ├─ problem.cpython-313.pyc
   │     │  │  │     ├─ settings.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ decorator.py
   │     │  │  ├─ deprecation.py
   │     │  │  ├─ doccer.py
   │     │  │  ├─ messagestream.cp313-win_amd64.dll.a
   │     │  │  ├─ messagestream.cp313-win_amd64.pyd
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_array_api.py
   │     │  │  │  ├─ test_bunch.py
   │     │  │  │  ├─ test_ccallback.py
   │     │  │  │  ├─ test_config.py
   │     │  │  │  ├─ test_deprecation.py
   │     │  │  │  ├─ test_doccer.py
   │     │  │  │  ├─ test_import_cycles.py
   │     │  │  │  ├─ test_public_api.py
   │     │  │  │  ├─ test_scipy_version.py
   │     │  │  │  ├─ test_tmpdirs.py
   │     │  │  │  ├─ test_warnings.py
   │     │  │  │  ├─ test__gcutils.py
   │     │  │  │  ├─ test__pep440.py
   │     │  │  │  ├─ test__testutils.py
   │     │  │  │  ├─ test__threadsafety.py
   │     │  │  │  ├─ test__util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_array_api.cpython-313.pyc
   │     │  │  │     ├─ test_bunch.cpython-313.pyc
   │     │  │  │     ├─ test_ccallback.cpython-313.pyc
   │     │  │  │     ├─ test_config.cpython-313.pyc
   │     │  │  │     ├─ test_deprecation.cpython-313.pyc
   │     │  │  │     ├─ test_doccer.cpython-313.pyc
   │     │  │  │     ├─ test_import_cycles.cpython-313.pyc
   │     │  │  │     ├─ test_public_api.cpython-313.pyc
   │     │  │  │     ├─ test_scipy_version.cpython-313.pyc
   │     │  │  │     ├─ test_tmpdirs.cpython-313.pyc
   │     │  │  │     ├─ test_warnings.cpython-313.pyc
   │     │  │  │     ├─ test__gcutils.cpython-313.pyc
   │     │  │  │     ├─ test__pep440.cpython-313.pyc
   │     │  │  │     ├─ test__testutils.cpython-313.pyc
   │     │  │  │     ├─ test__threadsafety.cpython-313.pyc
   │     │  │  │     ├─ test__util.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ uarray.py
   │     │  │  ├─ _array_api.py
   │     │  │  ├─ _array_api_no_0d.py
   │     │  │  ├─ _bunch.py
   │     │  │  ├─ _ccallback.py
   │     │  │  ├─ _ccallback_c.cp313-win_amd64.dll.a
   │     │  │  ├─ _ccallback_c.cp313-win_amd64.pyd
   │     │  │  ├─ _disjoint_set.py
   │     │  │  ├─ _docscrape.py
   │     │  │  ├─ _elementwise_iterative_method.py
   │     │  │  ├─ _finite_differences.py
   │     │  │  ├─ _fpumode.cp313-win_amd64.dll.a
   │     │  │  ├─ _fpumode.cp313-win_amd64.pyd
   │     │  │  ├─ _gcutils.py
   │     │  │  ├─ _pep440.py
   │     │  │  ├─ _testutils.py
   │     │  │  ├─ _test_ccallback.cp313-win_amd64.dll.a
   │     │  │  ├─ _test_ccallback.cp313-win_amd64.pyd
   │     │  │  ├─ _test_deprecation_call.cp313-win_amd64.dll.a
   │     │  │  ├─ _test_deprecation_call.cp313-win_amd64.pyd
   │     │  │  ├─ _test_deprecation_def.cp313-win_amd64.dll.a
   │     │  │  ├─ _test_deprecation_def.cp313-win_amd64.pyd
   │     │  │  ├─ _threadsafety.py
   │     │  │  ├─ _tmpdirs.py
   │     │  │  ├─ _uarray
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ _backend.py
   │     │  │  │  ├─ _uarray.cp313-win_amd64.dll.a
   │     │  │  │  ├─ _uarray.cp313-win_amd64.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _backend.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _util.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ decorator.cpython-313.pyc
   │     │  │     ├─ deprecation.cpython-313.pyc
   │     │  │     ├─ doccer.cpython-313.pyc
   │     │  │     ├─ uarray.cpython-313.pyc
   │     │  │     ├─ _array_api.cpython-313.pyc
   │     │  │     ├─ _array_api_no_0d.cpython-313.pyc
   │     │  │     ├─ _bunch.cpython-313.pyc
   │     │  │     ├─ _ccallback.cpython-313.pyc
   │     │  │     ├─ _disjoint_set.cpython-313.pyc
   │     │  │     ├─ _docscrape.cpython-313.pyc
   │     │  │     ├─ _elementwise_iterative_method.cpython-313.pyc
   │     │  │     ├─ _finite_differences.cpython-313.pyc
   │     │  │     ├─ _gcutils.cpython-313.pyc
   │     │  │     ├─ _pep440.cpython-313.pyc
   │     │  │     ├─ _testutils.cpython-313.pyc
   │     │  │     ├─ _threadsafety.cpython-313.pyc
   │     │  │     ├─ _tmpdirs.cpython-313.pyc
   │     │  │     ├─ _util.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __config__.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ _distributor_init.cpython-313.pyc
   │     │     ├─ __config__.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ scipy-1.15.2-cp313-cp313-win_amd64.whl
   │     ├─ scipy-1.15.2.dist-info
   │     │  ├─ DELVEWHEEL
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ scipy.libs
   │     │  └─ libscipy_openblas-f07f5a5d207a3a47104dca54d6d0c86a.dll
   │     ├─ seaborn
   │     │  ├─ algorithms.py
   │     │  ├─ axisgrid.py
   │     │  ├─ categorical.py
   │     │  ├─ cm.py
   │     │  ├─ colors
   │     │  │  ├─ crayons.py
   │     │  │  ├─ xkcd_rgb.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ crayons.cpython-313.pyc
   │     │  │     ├─ xkcd_rgb.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ distributions.py
   │     │  ├─ external
   │     │  │  ├─ appdirs.py
   │     │  │  ├─ docscrape.py
   │     │  │  ├─ husl.py
   │     │  │  ├─ kde.py
   │     │  │  ├─ version.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ appdirs.cpython-313.pyc
   │     │  │     ├─ docscrape.cpython-313.pyc
   │     │  │     ├─ husl.cpython-313.pyc
   │     │  │     ├─ kde.cpython-313.pyc
   │     │  │     ├─ version.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ matrix.py
   │     │  ├─ miscplot.py
   │     │  ├─ objects.py
   │     │  ├─ palettes.py
   │     │  ├─ rcmod.py
   │     │  ├─ regression.py
   │     │  ├─ relational.py
   │     │  ├─ utils.py
   │     │  ├─ widgets.py
   │     │  ├─ _base.py
   │     │  ├─ _compat.py
   │     │  ├─ _core
   │     │  │  ├─ data.py
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ groupby.py
   │     │  │  ├─ moves.py
   │     │  │  ├─ plot.py
   │     │  │  ├─ properties.py
   │     │  │  ├─ rules.py
   │     │  │  ├─ scales.py
   │     │  │  ├─ subplots.py
   │     │  │  ├─ typing.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ exceptions.cpython-313.pyc
   │     │  │     ├─ groupby.cpython-313.pyc
   │     │  │     ├─ moves.cpython-313.pyc
   │     │  │     ├─ plot.cpython-313.pyc
   │     │  │     ├─ properties.cpython-313.pyc
   │     │  │     ├─ rules.cpython-313.pyc
   │     │  │     ├─ scales.cpython-313.pyc
   │     │  │     ├─ subplots.cpython-313.pyc
   │     │  │     ├─ typing.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _docstrings.py
   │     │  ├─ _marks
   │     │  │  ├─ area.py
   │     │  │  ├─ bar.py
   │     │  │  ├─ base.py
   │     │  │  ├─ dot.py
   │     │  │  ├─ line.py
   │     │  │  ├─ text.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ area.cpython-313.pyc
   │     │  │     ├─ bar.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ dot.cpython-313.pyc
   │     │  │     ├─ line.cpython-313.pyc
   │     │  │     ├─ text.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _statistics.py
   │     │  ├─ _stats
   │     │  │  ├─ aggregation.py
   │     │  │  ├─ base.py
   │     │  │  ├─ counting.py
   │     │  │  ├─ density.py
   │     │  │  ├─ order.py
   │     │  │  ├─ regression.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ aggregation.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ counting.cpython-313.pyc
   │     │  │     ├─ density.cpython-313.pyc
   │     │  │     ├─ order.cpython-313.pyc
   │     │  │     ├─ regression.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _testing.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ algorithms.cpython-313.pyc
   │     │     ├─ axisgrid.cpython-313.pyc
   │     │     ├─ categorical.cpython-313.pyc
   │     │     ├─ cm.cpython-313.pyc
   │     │     ├─ distributions.cpython-313.pyc
   │     │     ├─ matrix.cpython-313.pyc
   │     │     ├─ miscplot.cpython-313.pyc
   │     │     ├─ objects.cpython-313.pyc
   │     │     ├─ palettes.cpython-313.pyc
   │     │     ├─ rcmod.cpython-313.pyc
   │     │     ├─ regression.cpython-313.pyc
   │     │     ├─ relational.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ widgets.cpython-313.pyc
   │     │     ├─ _base.cpython-313.pyc
   │     │     ├─ _compat.cpython-313.pyc
   │     │     ├─ _docstrings.cpython-313.pyc
   │     │     ├─ _statistics.cpython-313.pyc
   │     │     ├─ _testing.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ seaborn-0.13.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ six-1.17.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ six.py
   │     ├─ sklearn
   │     │  ├─ .libs
   │     │  │  ├─ msvcp140.dll
   │     │  │  └─ vcomp140.dll
   │     │  ├─ base.py
   │     │  ├─ calibration.py
   │     │  ├─ cluster
   │     │  │  ├─ meson.build
   │     │  │  ├─ tests
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ test_affinity_propagation.py
   │     │  │  │  ├─ test_bicluster.py
   │     │  │  │  ├─ test_birch.py
   │     │  │  │  ├─ test_bisect_k_means.py
   │     │  │  │  ├─ test_dbscan.py
   │     │  │  │  ├─ test_feature_agglomeration.py
   │     │  │  │  ├─ test_hdbscan.py
   │     │  │  │  ├─ test_hierarchical.py
   │     │  │  │  ├─ test_k_means.py
   │     │  │  │  ├─ test_mean_shift.py
   │     │  │  │  ├─ test_optics.py
   │     │  │  │  ├─ test_spectral.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ test_affinity_propagation.cpython-313.pyc
   │     │  │  │     ├─ test_bicluster.cpython-313.pyc
   │     │  │  │     ├─ test_birch.cpython-313.pyc
   │     │  │  │     ├─ test_bisect_k_means.cpython-313.pyc
   │     │  │  │     ├─ test_dbscan.cpython-313.pyc
   │     │  │  │     ├─ test_feature_agglomeration.cpython-313.pyc
   │     │  │  │     ├─ test_hdbscan.cpython-313.pyc
   │     │  │  │     ├─ test_hierarchical.cpython-313.pyc
   │     │  │  │     ├─ test_k_means.cpython-313.pyc
   │     │  │  │     ├─ test_mean_shift.cpython-313.pyc
   │     │  │  │     ├─ test_optics.cpython-313.pyc
   │     │  │  │     ├─ test_spectral.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _affinity_propagation.py
   │     │  │  ├─ _agglomerative.py
   │     │  │  ├─ _bicluster.py
   │     │  │  ├─ _birch.py
   │     │  │  ├─ _bisect_k_means.py
   │     │  │  ├─ _dbscan.py
   │     │  │  ├─ _dbscan_inner.cp313-win_amd64.lib
   │     │  │  ├─ _dbscan_inner.cp313-win_amd64.pyd
   │     │  │  ├─ _dbscan_inner.pyx
   │     │  │  ├─ _feature_agglomeration.py
   │     │  │  ├─ _hdbscan
   │     │  │  │  ├─ hdbscan.py
   │     │  │  │  ├─ meson.build
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_reachibility.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_reachibility.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _linkage.cp313-win_amd64.lib
   │     │  │  │  ├─ _linkage.cp313-win_amd64.pyd
   │     │  │  │  ├─ _linkage.pyx
   │     │  │  │  ├─ _reachability.cp313-win_amd64.lib
   │     │  │  │  ├─ _reachability.cp313-win_amd64.pyd
   │     │  │  │  ├─ _reachability.pyx
   │     │  │  │  ├─ _tree.cp313-win_amd64.lib
   │     │  │  │  ├─ _tree.cp313-win_amd64.pyd
   │     │  │  │  ├─ _tree.pxd
   │     │  │  │  ├─ _tree.pyx
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ hdbscan.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _hierarchical_fast.cp313-win_amd64.lib
   │     │  │  ├─ _hierarchical_fast.cp313-win_amd64.pyd
   │     │  │  ├─ _hierarchical_fast.pxd
   │     │  │  ├─ _hierarchical_fast.pyx
   │     │  │  ├─ _kmeans.py
   │     │  │  ├─ _k_means_common.cp313-win_amd64.lib
   │     │  │  ├─ _k_means_common.cp313-win_amd64.pyd
   │     │  │  ├─ _k_means_common.pxd
   │     │  │  ├─ _k_means_common.pyx
   │     │  │  ├─ _k_means_elkan.cp313-win_amd64.lib
   │     │  │  ├─ _k_means_elkan.cp313-win_amd64.pyd
   │     │  │  ├─ _k_means_elkan.pyx
   │     │  │  ├─ _k_means_lloyd.cp313-win_amd64.lib
   │     │  │  ├─ _k_means_lloyd.cp313-win_amd64.pyd
   │     │  │  ├─ _k_means_lloyd.pyx
   │     │  │  ├─ _k_means_minibatch.cp313-win_amd64.lib
   │     │  │  ├─ _k_means_minibatch.cp313-win_amd64.pyd
   │     │  │  ├─ _k_means_minibatch.pyx
   │     │  │  ├─ _mean_shift.py
   │     │  │  ├─ _optics.py
   │     │  │  ├─ _spectral.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _affinity_propagation.cpython-313.pyc
   │     │  │     ├─ _agglomerative.cpython-313.pyc
   │     │  │     ├─ _bicluster.cpython-313.pyc
   │     │  │     ├─ _birch.cpython-313.pyc
   │     │  │     ├─ _bisect_k_means.cpython-313.pyc
   │     │  │     ├─ _dbscan.cpython-313.pyc
   │     │  │     ├─ _feature_agglomeration.cpython-313.pyc
   │     │  │     ├─ _kmeans.cpython-313.pyc
   │     │  │     ├─ _mean_shift.cpython-313.pyc
   │     │  │     ├─ _optics.cpython-313.pyc
   │     │  │     ├─ _spectral.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ compose
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_column_transformer.py
   │     │  │  │  ├─ test_target.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_column_transformer.cpython-313.pyc
   │     │  │  │     ├─ test_target.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _column_transformer.py
   │     │  │  ├─ _target.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _column_transformer.cpython-313.pyc
   │     │  │     ├─ _target.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ conftest.py
   │     │  ├─ covariance
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_covariance.py
   │     │  │  │  ├─ test_elliptic_envelope.py
   │     │  │  │  ├─ test_graphical_lasso.py
   │     │  │  │  ├─ test_robust_covariance.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_covariance.cpython-313.pyc
   │     │  │  │     ├─ test_elliptic_envelope.cpython-313.pyc
   │     │  │  │     ├─ test_graphical_lasso.cpython-313.pyc
   │     │  │  │     ├─ test_robust_covariance.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _elliptic_envelope.py
   │     │  │  ├─ _empirical_covariance.py
   │     │  │  ├─ _graph_lasso.py
   │     │  │  ├─ _robust_covariance.py
   │     │  │  ├─ _shrunk_covariance.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _elliptic_envelope.cpython-313.pyc
   │     │  │     ├─ _empirical_covariance.cpython-313.pyc
   │     │  │     ├─ _graph_lasso.cpython-313.pyc
   │     │  │     ├─ _robust_covariance.cpython-313.pyc
   │     │  │     ├─ _shrunk_covariance.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ cross_decomposition
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_pls.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_pls.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _pls.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _pls.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ datasets
   │     │  │  ├─ data
   │     │  │  │  ├─ boston_house_prices.csv
   │     │  │  │  ├─ breast_cancer.csv
   │     │  │  │  ├─ diabetes_data_raw.csv.gz
   │     │  │  │  ├─ diabetes_target.csv.gz
   │     │  │  │  ├─ digits.csv.gz
   │     │  │  │  ├─ iris.csv
   │     │  │  │  ├─ linnerud_exercise.csv
   │     │  │  │  ├─ linnerud_physiological.csv
   │     │  │  │  ├─ wine_data.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ descr
   │     │  │  │  ├─ breast_cancer.rst
   │     │  │  │  ├─ california_housing.rst
   │     │  │  │  ├─ covtype.rst
   │     │  │  │  ├─ diabetes.rst
   │     │  │  │  ├─ digits.rst
   │     │  │  │  ├─ iris.rst
   │     │  │  │  ├─ kddcup99.rst
   │     │  │  │  ├─ lfw.rst
   │     │  │  │  ├─ linnerud.rst
   │     │  │  │  ├─ olivetti_faces.rst
   │     │  │  │  ├─ rcv1.rst
   │     │  │  │  ├─ species_distributions.rst
   │     │  │  │  ├─ twenty_newsgroups.rst
   │     │  │  │  ├─ wine_data.rst
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ images
   │     │  │  │  ├─ china.jpg
   │     │  │  │  ├─ flower.jpg
   │     │  │  │  ├─ README.txt
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ meson.build
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ openml
   │     │  │  │  │  │  ├─ id_1
   │     │  │  │  │  │  │  ├─ api-v1-jd-1.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-1.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-1.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-1.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_1119
   │     │  │  │  │  │  │  ├─ api-v1-jd-1119.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-1119.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-adult-census-l-2-dv-1.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-adult-census-l-2-s-act-.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-1119.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-54002.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_1590
   │     │  │  │  │  │  │  ├─ api-v1-jd-1590.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-1590.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-1590.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-1595261.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_2
   │     │  │  │  │  │  │  ├─ api-v1-jd-2.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-2.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-anneal-l-2-dv-1.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-anneal-l-2-s-act-.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-2.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-1666876.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_292
   │     │  │  │  │  │  │  ├─ api-v1-jd-292.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jd-40981.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-292.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-40981.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-australian-l-2-dv-1-s-dact.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-australian-l-2-dv-1.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-australian-l-2-s-act-.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-49822.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_3
   │     │  │  │  │  │  │  ├─ api-v1-jd-3.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-3.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-3.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-3.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_40589
   │     │  │  │  │  │  │  ├─ api-v1-jd-40589.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-40589.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-emotions-l-2-dv-3.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-emotions-l-2-s-act-.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-40589.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-4644182.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_40675
   │     │  │  │  │  │  │  ├─ api-v1-jd-40675.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-40675.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-glass2-l-2-dv-1-s-dact.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-glass2-l-2-dv-1.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-glass2-l-2-s-act-.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-40675.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-4965250.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_40945
   │     │  │  │  │  │  │  ├─ api-v1-jd-40945.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-40945.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-40945.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-16826755.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_40966
   │     │  │  │  │  │  │  ├─ api-v1-jd-40966.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-40966.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-miceprotein-l-2-dv-4.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-miceprotein-l-2-s-act-.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-40966.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-17928620.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_42074
   │     │  │  │  │  │  │  ├─ api-v1-jd-42074.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-42074.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-42074.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-21552912.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_42585
   │     │  │  │  │  │  │  ├─ api-v1-jd-42585.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-42585.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-42585.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-21854866.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_561
   │     │  │  │  │  │  │  ├─ api-v1-jd-561.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-561.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-cpu-l-2-dv-1.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-cpu-l-2-s-act-.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-561.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-52739.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_61
   │     │  │  │  │  │  │  ├─ api-v1-jd-61.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-61.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-iris-l-2-dv-1.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-iris-l-2-s-act-.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-61.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-61.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ id_62
   │     │  │  │  │  │  │  ├─ api-v1-jd-62.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdf-62.json.gz
   │     │  │  │  │  │  │  ├─ api-v1-jdq-62.json.gz
   │     │  │  │  │  │  │  ├─ data-v1-dl-52352.arff.gz
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ svmlight_classification.txt
   │     │  │  │  │  ├─ svmlight_invalid.txt
   │     │  │  │  │  ├─ svmlight_invalid_order.txt
   │     │  │  │  │  ├─ svmlight_multilabel.txt
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_20news.py
   │     │  │  │  ├─ test_arff_parser.py
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_california_housing.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_covtype.py
   │     │  │  │  ├─ test_kddcup99.py
   │     │  │  │  ├─ test_lfw.py
   │     │  │  │  ├─ test_olivetti_faces.py
   │     │  │  │  ├─ test_openml.py
   │     │  │  │  ├─ test_rcv1.py
   │     │  │  │  ├─ test_samples_generator.py
   │     │  │  │  ├─ test_svmlight_format.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_20news.cpython-313.pyc
   │     │  │  │     ├─ test_arff_parser.cpython-313.pyc
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_california_housing.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_covtype.cpython-313.pyc
   │     │  │  │     ├─ test_kddcup99.cpython-313.pyc
   │     │  │  │     ├─ test_lfw.cpython-313.pyc
   │     │  │  │     ├─ test_olivetti_faces.cpython-313.pyc
   │     │  │  │     ├─ test_openml.cpython-313.pyc
   │     │  │  │     ├─ test_rcv1.cpython-313.pyc
   │     │  │  │     ├─ test_samples_generator.cpython-313.pyc
   │     │  │  │     ├─ test_svmlight_format.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _arff_parser.py
   │     │  │  ├─ _base.py
   │     │  │  ├─ _california_housing.py
   │     │  │  ├─ _covtype.py
   │     │  │  ├─ _kddcup99.py
   │     │  │  ├─ _lfw.py
   │     │  │  ├─ _olivetti_faces.py
   │     │  │  ├─ _openml.py
   │     │  │  ├─ _rcv1.py
   │     │  │  ├─ _samples_generator.py
   │     │  │  ├─ _species_distributions.py
   │     │  │  ├─ _svmlight_format_fast.cp313-win_amd64.lib
   │     │  │  ├─ _svmlight_format_fast.cp313-win_amd64.pyd
   │     │  │  ├─ _svmlight_format_fast.pyx
   │     │  │  ├─ _svmlight_format_io.py
   │     │  │  ├─ _twenty_newsgroups.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _arff_parser.cpython-313.pyc
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _california_housing.cpython-313.pyc
   │     │  │     ├─ _covtype.cpython-313.pyc
   │     │  │     ├─ _kddcup99.cpython-313.pyc
   │     │  │     ├─ _lfw.cpython-313.pyc
   │     │  │     ├─ _olivetti_faces.cpython-313.pyc
   │     │  │     ├─ _openml.cpython-313.pyc
   │     │  │     ├─ _rcv1.cpython-313.pyc
   │     │  │     ├─ _samples_generator.cpython-313.pyc
   │     │  │     ├─ _species_distributions.cpython-313.pyc
   │     │  │     ├─ _svmlight_format_io.cpython-313.pyc
   │     │  │     ├─ _twenty_newsgroups.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ decomposition
   │     │  │  ├─ meson.build
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_dict_learning.py
   │     │  │  │  ├─ test_factor_analysis.py
   │     │  │  │  ├─ test_fastica.py
   │     │  │  │  ├─ test_incremental_pca.py
   │     │  │  │  ├─ test_kernel_pca.py
   │     │  │  │  ├─ test_nmf.py
   │     │  │  │  ├─ test_online_lda.py
   │     │  │  │  ├─ test_pca.py
   │     │  │  │  ├─ test_sparse_pca.py
   │     │  │  │  ├─ test_truncated_svd.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_dict_learning.cpython-313.pyc
   │     │  │  │     ├─ test_factor_analysis.cpython-313.pyc
   │     │  │  │     ├─ test_fastica.cpython-313.pyc
   │     │  │  │     ├─ test_incremental_pca.cpython-313.pyc
   │     │  │  │     ├─ test_kernel_pca.cpython-313.pyc
   │     │  │  │     ├─ test_nmf.cpython-313.pyc
   │     │  │  │     ├─ test_online_lda.cpython-313.pyc
   │     │  │  │     ├─ test_pca.cpython-313.pyc
   │     │  │  │     ├─ test_sparse_pca.cpython-313.pyc
   │     │  │  │     ├─ test_truncated_svd.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _base.py
   │     │  │  ├─ _cdnmf_fast.cp313-win_amd64.lib
   │     │  │  ├─ _cdnmf_fast.cp313-win_amd64.pyd
   │     │  │  ├─ _cdnmf_fast.pyx
   │     │  │  ├─ _dict_learning.py
   │     │  │  ├─ _factor_analysis.py
   │     │  │  ├─ _fastica.py
   │     │  │  ├─ _incremental_pca.py
   │     │  │  ├─ _kernel_pca.py
   │     │  │  ├─ _lda.py
   │     │  │  ├─ _nmf.py
   │     │  │  ├─ _online_lda_fast.cp313-win_amd64.lib
   │     │  │  ├─ _online_lda_fast.cp313-win_amd64.pyd
   │     │  │  ├─ _online_lda_fast.pyx
   │     │  │  ├─ _pca.py
   │     │  │  ├─ _sparse_pca.py
   │     │  │  ├─ _truncated_svd.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _dict_learning.cpython-313.pyc
   │     │  │     ├─ _factor_analysis.cpython-313.pyc
   │     │  │     ├─ _fastica.cpython-313.pyc
   │     │  │     ├─ _incremental_pca.cpython-313.pyc
   │     │  │     ├─ _kernel_pca.cpython-313.pyc
   │     │  │     ├─ _lda.cpython-313.pyc
   │     │  │     ├─ _nmf.cpython-313.pyc
   │     │  │     ├─ _pca.cpython-313.pyc
   │     │  │     ├─ _sparse_pca.cpython-313.pyc
   │     │  │     ├─ _truncated_svd.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ discriminant_analysis.py
   │     │  ├─ dummy.py
   │     │  ├─ ensemble
   │     │  │  ├─ meson.build
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_bagging.py
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_forest.py
   │     │  │  │  ├─ test_gradient_boosting.py
   │     │  │  │  ├─ test_iforest.py
   │     │  │  │  ├─ test_stacking.py
   │     │  │  │  ├─ test_voting.py
   │     │  │  │  ├─ test_weight_boosting.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_bagging.cpython-313.pyc
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_forest.cpython-313.pyc
   │     │  │  │     ├─ test_gradient_boosting.cpython-313.pyc
   │     │  │  │     ├─ test_iforest.cpython-313.pyc
   │     │  │  │     ├─ test_stacking.cpython-313.pyc
   │     │  │  │     ├─ test_voting.cpython-313.pyc
   │     │  │  │     ├─ test_weight_boosting.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _bagging.py
   │     │  │  ├─ _base.py
   │     │  │  ├─ _forest.py
   │     │  │  ├─ _gb.py
   │     │  │  ├─ _gradient_boosting.cp313-win_amd64.lib
   │     │  │  ├─ _gradient_boosting.cp313-win_amd64.pyd
   │     │  │  ├─ _gradient_boosting.pyx
   │     │  │  ├─ _hist_gradient_boosting
   │     │  │  │  ├─ binning.py
   │     │  │  │  ├─ common.cp313-win_amd64.lib
   │     │  │  │  ├─ common.cp313-win_amd64.pyd
   │     │  │  │  ├─ common.pxd
   │     │  │  │  ├─ common.pyx
   │     │  │  │  ├─ gradient_boosting.py
   │     │  │  │  ├─ grower.py
   │     │  │  │  ├─ histogram.cp313-win_amd64.lib
   │     │  │  │  ├─ histogram.cp313-win_amd64.pyd
   │     │  │  │  ├─ histogram.pyx
   │     │  │  │  ├─ meson.build
   │     │  │  │  ├─ predictor.py
   │     │  │  │  ├─ splitting.cp313-win_amd64.lib
   │     │  │  │  ├─ splitting.cp313-win_amd64.pyd
   │     │  │  │  ├─ splitting.pyx
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_binning.py
   │     │  │  │  │  ├─ test_bitset.py
   │     │  │  │  │  ├─ test_compare_lightgbm.py
   │     │  │  │  │  ├─ test_gradient_boosting.py
   │     │  │  │  │  ├─ test_grower.py
   │     │  │  │  │  ├─ test_histogram.py
   │     │  │  │  │  ├─ test_monotonic_constraints.py
   │     │  │  │  │  ├─ test_predictor.py
   │     │  │  │  │  ├─ test_splitting.py
   │     │  │  │  │  ├─ test_warm_start.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_binning.cpython-313.pyc
   │     │  │  │  │     ├─ test_bitset.cpython-313.pyc
   │     │  │  │  │     ├─ test_compare_lightgbm.cpython-313.pyc
   │     │  │  │  │     ├─ test_gradient_boosting.cpython-313.pyc
   │     │  │  │  │     ├─ test_grower.cpython-313.pyc
   │     │  │  │  │     ├─ test_histogram.cpython-313.pyc
   │     │  │  │  │     ├─ test_monotonic_constraints.cpython-313.pyc
   │     │  │  │  │     ├─ test_predictor.cpython-313.pyc
   │     │  │  │  │     ├─ test_splitting.cpython-313.pyc
   │     │  │  │  │     ├─ test_warm_start.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ _binning.cp313-win_amd64.lib
   │     │  │  │  ├─ _binning.cp313-win_amd64.pyd
   │     │  │  │  ├─ _binning.pyx
   │     │  │  │  ├─ _bitset.cp313-win_amd64.lib
   │     │  │  │  ├─ _bitset.cp313-win_amd64.pyd
   │     │  │  │  ├─ _bitset.pxd
   │     │  │  │  ├─ _bitset.pyx
   │     │  │  │  ├─ _gradient_boosting.cp313-win_amd64.lib
   │     │  │  │  ├─ _gradient_boosting.cp313-win_amd64.pyd
   │     │  │  │  ├─ _gradient_boosting.pyx
   │     │  │  │  ├─ _predictor.cp313-win_amd64.lib
   │     │  │  │  ├─ _predictor.cp313-win_amd64.pyd
   │     │  │  │  ├─ _predictor.pyx
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ binning.cpython-313.pyc
   │     │  │  │     ├─ gradient_boosting.cpython-313.pyc
   │     │  │  │     ├─ grower.cpython-313.pyc
   │     │  │  │     ├─ predictor.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _iforest.py
   │     │  │  ├─ _stacking.py
   │     │  │  ├─ _voting.py
   │     │  │  ├─ _weight_boosting.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _bagging.cpython-313.pyc
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _forest.cpython-313.pyc
   │     │  │     ├─ _gb.cpython-313.pyc
   │     │  │     ├─ _iforest.cpython-313.pyc
   │     │  │     ├─ _stacking.cpython-313.pyc
   │     │  │     ├─ _voting.cpython-313.pyc
   │     │  │     ├─ _weight_boosting.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ exceptions.py
   │     │  ├─ experimental
   │     │  │  ├─ enable_halving_search_cv.py
   │     │  │  ├─ enable_hist_gradient_boosting.py
   │     │  │  ├─ enable_iterative_imputer.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_enable_hist_gradient_boosting.py
   │     │  │  │  ├─ test_enable_iterative_imputer.py
   │     │  │  │  ├─ test_enable_successive_halving.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_enable_hist_gradient_boosting.cpython-313.pyc
   │     │  │  │     ├─ test_enable_iterative_imputer.cpython-313.pyc
   │     │  │  │     ├─ test_enable_successive_halving.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ enable_halving_search_cv.cpython-313.pyc
   │     │  │     ├─ enable_hist_gradient_boosting.cpython-313.pyc
   │     │  │     ├─ enable_iterative_imputer.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ externals
   │     │  │  ├─ conftest.py
   │     │  │  ├─ README
   │     │  │  ├─ _arff.py
   │     │  │  ├─ _packaging
   │     │  │  │  ├─ version.py
   │     │  │  │  ├─ _structures.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ version.cpython-313.pyc
   │     │  │  │     ├─ _structures.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _scipy
   │     │  │  │  ├─ sparse
   │     │  │  │  │  ├─ csgraph
   │     │  │  │  │  │  ├─ _laplacian.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ _laplacian.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ conftest.cpython-313.pyc
   │     │  │     ├─ _arff.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ feature_extraction
   │     │  │  ├─ image.py
   │     │  │  ├─ meson.build
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_dict_vectorizer.py
   │     │  │  │  ├─ test_feature_hasher.py
   │     │  │  │  ├─ test_image.py
   │     │  │  │  ├─ test_text.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_dict_vectorizer.cpython-313.pyc
   │     │  │  │     ├─ test_feature_hasher.cpython-313.pyc
   │     │  │  │     ├─ test_image.cpython-313.pyc
   │     │  │  │     ├─ test_text.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ text.py
   │     │  │  ├─ _dict_vectorizer.py
   │     │  │  ├─ _hash.py
   │     │  │  ├─ _hashing_fast.cp313-win_amd64.lib
   │     │  │  ├─ _hashing_fast.cp313-win_amd64.pyd
   │     │  │  ├─ _hashing_fast.pyx
   │     │  │  ├─ _stop_words.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ image.cpython-313.pyc
   │     │  │     ├─ text.cpython-313.pyc
   │     │  │     ├─ _dict_vectorizer.cpython-313.pyc
   │     │  │     ├─ _hash.cpython-313.pyc
   │     │  │     ├─ _stop_words.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ feature_selection
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_chi2.py
   │     │  │  │  ├─ test_feature_select.py
   │     │  │  │  ├─ test_from_model.py
   │     │  │  │  ├─ test_mutual_info.py
   │     │  │  │  ├─ test_rfe.py
   │     │  │  │  ├─ test_sequential.py
   │     │  │  │  ├─ test_variance_threshold.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_chi2.cpython-313.pyc
   │     │  │  │     ├─ test_feature_select.cpython-313.pyc
   │     │  │  │     ├─ test_from_model.cpython-313.pyc
   │     │  │  │     ├─ test_mutual_info.cpython-313.pyc
   │     │  │  │     ├─ test_rfe.cpython-313.pyc
   │     │  │  │     ├─ test_sequential.cpython-313.pyc
   │     │  │  │     ├─ test_variance_threshold.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _base.py
   │     │  │  ├─ _from_model.py
   │     │  │  ├─ _mutual_info.py
   │     │  │  ├─ _rfe.py
   │     │  │  ├─ _sequential.py
   │     │  │  ├─ _univariate_selection.py
   │     │  │  ├─ _variance_threshold.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _from_model.cpython-313.pyc
   │     │  │     ├─ _mutual_info.cpython-313.pyc
   │     │  │     ├─ _rfe.cpython-313.pyc
   │     │  │     ├─ _sequential.cpython-313.pyc
   │     │  │     ├─ _univariate_selection.cpython-313.pyc
   │     │  │     ├─ _variance_threshold.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ frozen
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_frozen.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_frozen.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _frozen.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _frozen.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ gaussian_process
   │     │  │  ├─ kernels.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_gpc.py
   │     │  │  │  ├─ test_gpr.py
   │     │  │  │  ├─ test_kernels.py
   │     │  │  │  ├─ _mini_sequence_kernel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_gpc.cpython-313.pyc
   │     │  │  │     ├─ test_gpr.cpython-313.pyc
   │     │  │  │     ├─ test_kernels.cpython-313.pyc
   │     │  │  │     ├─ _mini_sequence_kernel.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _gpc.py
   │     │  │  ├─ _gpr.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ kernels.cpython-313.pyc
   │     │  │     ├─ _gpc.cpython-313.pyc
   │     │  │     ├─ _gpr.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ impute
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_impute.py
   │     │  │  │  ├─ test_knn.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_impute.cpython-313.pyc
   │     │  │  │     ├─ test_knn.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _base.py
   │     │  │  ├─ _iterative.py
   │     │  │  ├─ _knn.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _iterative.cpython-313.pyc
   │     │  │     ├─ _knn.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ inspection
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_partial_dependence.py
   │     │  │  │  ├─ test_pd_utils.py
   │     │  │  │  ├─ test_permutation_importance.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_partial_dependence.cpython-313.pyc
   │     │  │  │     ├─ test_pd_utils.cpython-313.pyc
   │     │  │  │     ├─ test_permutation_importance.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _partial_dependence.py
   │     │  │  ├─ _pd_utils.py
   │     │  │  ├─ _permutation_importance.py
   │     │  │  ├─ _plot
   │     │  │  │  ├─ decision_boundary.py
   │     │  │  │  ├─ partial_dependence.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_boundary_decision_display.py
   │     │  │  │  │  ├─ test_plot_partial_dependence.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_boundary_decision_display.cpython-313.pyc
   │     │  │  │  │     ├─ test_plot_partial_dependence.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ decision_boundary.cpython-313.pyc
   │     │  │  │     ├─ partial_dependence.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _partial_dependence.cpython-313.pyc
   │     │  │     ├─ _pd_utils.cpython-313.pyc
   │     │  │     ├─ _permutation_importance.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ isotonic.py
   │     │  ├─ kernel_approximation.py
   │     │  ├─ kernel_ridge.py
   │     │  ├─ linear_model
   │     │  │  ├─ meson.build
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_bayes.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_coordinate_descent.py
   │     │  │  │  ├─ test_huber.py
   │     │  │  │  ├─ test_least_angle.py
   │     │  │  │  ├─ test_linear_loss.py
   │     │  │  │  ├─ test_logistic.py
   │     │  │  │  ├─ test_omp.py
   │     │  │  │  ├─ test_passive_aggressive.py
   │     │  │  │  ├─ test_perceptron.py
   │     │  │  │  ├─ test_quantile.py
   │     │  │  │  ├─ test_ransac.py
   │     │  │  │  ├─ test_ridge.py
   │     │  │  │  ├─ test_sag.py
   │     │  │  │  ├─ test_sgd.py
   │     │  │  │  ├─ test_sparse_coordinate_descent.py
   │     │  │  │  ├─ test_theil_sen.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_bayes.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_coordinate_descent.cpython-313.pyc
   │     │  │  │     ├─ test_huber.cpython-313.pyc
   │     │  │  │     ├─ test_least_angle.cpython-313.pyc
   │     │  │  │     ├─ test_linear_loss.cpython-313.pyc
   │     │  │  │     ├─ test_logistic.cpython-313.pyc
   │     │  │  │     ├─ test_omp.cpython-313.pyc
   │     │  │  │     ├─ test_passive_aggressive.cpython-313.pyc
   │     │  │  │     ├─ test_perceptron.cpython-313.pyc
   │     │  │  │     ├─ test_quantile.cpython-313.pyc
   │     │  │  │     ├─ test_ransac.cpython-313.pyc
   │     │  │  │     ├─ test_ridge.cpython-313.pyc
   │     │  │  │     ├─ test_sag.cpython-313.pyc
   │     │  │  │     ├─ test_sgd.cpython-313.pyc
   │     │  │  │     ├─ test_sparse_coordinate_descent.cpython-313.pyc
   │     │  │  │     ├─ test_theil_sen.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _base.py
   │     │  │  ├─ _bayes.py
   │     │  │  ├─ _cd_fast.cp313-win_amd64.lib
   │     │  │  ├─ _cd_fast.cp313-win_amd64.pyd
   │     │  │  ├─ _cd_fast.pyx
   │     │  │  ├─ _coordinate_descent.py
   │     │  │  ├─ _glm
   │     │  │  │  ├─ glm.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_glm.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_glm.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _newton_solver.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ glm.cpython-313.pyc
   │     │  │  │     ├─ _newton_solver.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _huber.py
   │     │  │  ├─ _least_angle.py
   │     │  │  ├─ _linear_loss.py
   │     │  │  ├─ _logistic.py
   │     │  │  ├─ _omp.py
   │     │  │  ├─ _passive_aggressive.py
   │     │  │  ├─ _perceptron.py
   │     │  │  ├─ _quantile.py
   │     │  │  ├─ _ransac.py
   │     │  │  ├─ _ridge.py
   │     │  │  ├─ _sag.py
   │     │  │  ├─ _sag_fast.cp313-win_amd64.lib
   │     │  │  ├─ _sag_fast.cp313-win_amd64.pyd
   │     │  │  ├─ _sag_fast.pyx.tp
   │     │  │  ├─ _sgd_fast.cp313-win_amd64.lib
   │     │  │  ├─ _sgd_fast.cp313-win_amd64.pyd
   │     │  │  ├─ _sgd_fast.pyx.tp
   │     │  │  ├─ _stochastic_gradient.py
   │     │  │  ├─ _theil_sen.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _bayes.cpython-313.pyc
   │     │  │     ├─ _coordinate_descent.cpython-313.pyc
   │     │  │     ├─ _huber.cpython-313.pyc
   │     │  │     ├─ _least_angle.cpython-313.pyc
   │     │  │     ├─ _linear_loss.cpython-313.pyc
   │     │  │     ├─ _logistic.cpython-313.pyc
   │     │  │     ├─ _omp.cpython-313.pyc
   │     │  │     ├─ _passive_aggressive.cpython-313.pyc
   │     │  │     ├─ _perceptron.cpython-313.pyc
   │     │  │     ├─ _quantile.cpython-313.pyc
   │     │  │     ├─ _ransac.cpython-313.pyc
   │     │  │     ├─ _ridge.cpython-313.pyc
   │     │  │     ├─ _sag.cpython-313.pyc
   │     │  │     ├─ _stochastic_gradient.cpython-313.pyc
   │     │  │     ├─ _theil_sen.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ manifold
   │     │  │  ├─ meson.build
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_isomap.py
   │     │  │  │  ├─ test_locally_linear.py
   │     │  │  │  ├─ test_mds.py
   │     │  │  │  ├─ test_spectral_embedding.py
   │     │  │  │  ├─ test_t_sne.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_isomap.cpython-313.pyc
   │     │  │  │     ├─ test_locally_linear.cpython-313.pyc
   │     │  │  │     ├─ test_mds.cpython-313.pyc
   │     │  │  │     ├─ test_spectral_embedding.cpython-313.pyc
   │     │  │  │     ├─ test_t_sne.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _barnes_hut_tsne.cp313-win_amd64.lib
   │     │  │  ├─ _barnes_hut_tsne.cp313-win_amd64.pyd
   │     │  │  ├─ _barnes_hut_tsne.pyx
   │     │  │  ├─ _isomap.py
   │     │  │  ├─ _locally_linear.py
   │     │  │  ├─ _mds.py
   │     │  │  ├─ _spectral_embedding.py
   │     │  │  ├─ _t_sne.py
   │     │  │  ├─ _utils.cp313-win_amd64.lib
   │     │  │  ├─ _utils.cp313-win_amd64.pyd
   │     │  │  ├─ _utils.pyx
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _isomap.cpython-313.pyc
   │     │  │     ├─ _locally_linear.cpython-313.pyc
   │     │  │     ├─ _mds.cpython-313.pyc
   │     │  │     ├─ _spectral_embedding.cpython-313.pyc
   │     │  │     ├─ _t_sne.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ meson.build
   │     │  ├─ metrics
   │     │  │  ├─ cluster
   │     │  │  │  ├─ meson.build
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_bicluster.py
   │     │  │  │  │  ├─ test_common.py
   │     │  │  │  │  ├─ test_supervised.py
   │     │  │  │  │  ├─ test_unsupervised.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_bicluster.cpython-313.pyc
   │     │  │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │  │     ├─ test_supervised.cpython-313.pyc
   │     │  │  │  │     ├─ test_unsupervised.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _bicluster.py
   │     │  │  │  ├─ _expected_mutual_info_fast.cp313-win_amd64.lib
   │     │  │  │  ├─ _expected_mutual_info_fast.cp313-win_amd64.pyd
   │     │  │  │  ├─ _expected_mutual_info_fast.pyx
   │     │  │  │  ├─ _supervised.py
   │     │  │  │  ├─ _unsupervised.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _bicluster.cpython-313.pyc
   │     │  │  │     ├─ _supervised.cpython-313.pyc
   │     │  │  │     ├─ _unsupervised.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ meson.build
   │     │  │  ├─ pairwise.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_classification.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_dist_metrics.py
   │     │  │  │  ├─ test_pairwise.py
   │     │  │  │  ├─ test_pairwise_distances_reduction.py
   │     │  │  │  ├─ test_ranking.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_score_objects.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_classification.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_dist_metrics.cpython-313.pyc
   │     │  │  │     ├─ test_pairwise.cpython-313.pyc
   │     │  │  │     ├─ test_pairwise_distances_reduction.cpython-313.pyc
   │     │  │  │     ├─ test_ranking.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_score_objects.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _base.py
   │     │  │  ├─ _classification.py
   │     │  │  ├─ _dist_metrics.cp313-win_amd64.lib
   │     │  │  ├─ _dist_metrics.cp313-win_amd64.pyd
   │     │  │  ├─ _dist_metrics.pxd
   │     │  │  ├─ _dist_metrics.pxd.tp
   │     │  │  ├─ _dist_metrics.pyx.tp
   │     │  │  ├─ _pairwise_distances_reduction
   │     │  │  │  ├─ meson.build
   │     │  │  │  ├─ _argkmin.cp313-win_amd64.lib
   │     │  │  │  ├─ _argkmin.cp313-win_amd64.pyd
   │     │  │  │  ├─ _argkmin.pxd.tp
   │     │  │  │  ├─ _argkmin.pyx.tp
   │     │  │  │  ├─ _argkmin_classmode.cp313-win_amd64.lib
   │     │  │  │  ├─ _argkmin_classmode.cp313-win_amd64.pyd
   │     │  │  │  ├─ _argkmin_classmode.pyx.tp
   │     │  │  │  ├─ _base.cp313-win_amd64.lib
   │     │  │  │  ├─ _base.cp313-win_amd64.pyd
   │     │  │  │  ├─ _base.pxd.tp
   │     │  │  │  ├─ _base.pyx.tp
   │     │  │  │  ├─ _classmode.pxd
   │     │  │  │  ├─ _datasets_pair.cp313-win_amd64.lib
   │     │  │  │  ├─ _datasets_pair.cp313-win_amd64.pyd
   │     │  │  │  ├─ _datasets_pair.pxd.tp
   │     │  │  │  ├─ _datasets_pair.pyx.tp
   │     │  │  │  ├─ _dispatcher.py
   │     │  │  │  ├─ _middle_term_computer.cp313-win_amd64.lib
   │     │  │  │  ├─ _middle_term_computer.cp313-win_amd64.pyd
   │     │  │  │  ├─ _middle_term_computer.pxd.tp
   │     │  │  │  ├─ _middle_term_computer.pyx.tp
   │     │  │  │  ├─ _radius_neighbors.cp313-win_amd64.lib
   │     │  │  │  ├─ _radius_neighbors.cp313-win_amd64.pyd
   │     │  │  │  ├─ _radius_neighbors.pxd.tp
   │     │  │  │  ├─ _radius_neighbors.pyx.tp
   │     │  │  │  ├─ _radius_neighbors_classmode.cp313-win_amd64.lib
   │     │  │  │  ├─ _radius_neighbors_classmode.cp313-win_amd64.pyd
   │     │  │  │  ├─ _radius_neighbors_classmode.pyx.tp
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _dispatcher.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _pairwise_fast.cp313-win_amd64.lib
   │     │  │  ├─ _pairwise_fast.cp313-win_amd64.pyd
   │     │  │  ├─ _pairwise_fast.pyx
   │     │  │  ├─ _plot
   │     │  │  │  ├─ confusion_matrix.py
   │     │  │  │  ├─ det_curve.py
   │     │  │  │  ├─ precision_recall_curve.py
   │     │  │  │  ├─ regression.py
   │     │  │  │  ├─ roc_curve.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_common_curve_display.py
   │     │  │  │  │  ├─ test_confusion_matrix_display.py
   │     │  │  │  │  ├─ test_det_curve_display.py
   │     │  │  │  │  ├─ test_precision_recall_display.py
   │     │  │  │  │  ├─ test_predict_error_display.py
   │     │  │  │  │  ├─ test_roc_curve_display.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_common_curve_display.cpython-313.pyc
   │     │  │  │  │     ├─ test_confusion_matrix_display.cpython-313.pyc
   │     │  │  │  │     ├─ test_det_curve_display.cpython-313.pyc
   │     │  │  │  │     ├─ test_precision_recall_display.cpython-313.pyc
   │     │  │  │  │     ├─ test_predict_error_display.cpython-313.pyc
   │     │  │  │  │     ├─ test_roc_curve_display.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ confusion_matrix.cpython-313.pyc
   │     │  │  │     ├─ det_curve.cpython-313.pyc
   │     │  │  │     ├─ precision_recall_curve.cpython-313.pyc
   │     │  │  │     ├─ regression.cpython-313.pyc
   │     │  │  │     ├─ roc_curve.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _ranking.py
   │     │  │  ├─ _regression.py
   │     │  │  ├─ _scorer.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ pairwise.cpython-313.pyc
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _classification.cpython-313.pyc
   │     │  │     ├─ _ranking.cpython-313.pyc
   │     │  │     ├─ _regression.cpython-313.pyc
   │     │  │     ├─ _scorer.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ mixture
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_bayesian_mixture.py
   │     │  │  │  ├─ test_gaussian_mixture.py
   │     │  │  │  ├─ test_mixture.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_bayesian_mixture.cpython-313.pyc
   │     │  │  │     ├─ test_gaussian_mixture.cpython-313.pyc
   │     │  │  │     ├─ test_mixture.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _base.py
   │     │  │  ├─ _bayesian_mixture.py
   │     │  │  ├─ _gaussian_mixture.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _bayesian_mixture.cpython-313.pyc
   │     │  │     ├─ _gaussian_mixture.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ model_selection
   │     │  │  ├─ tests
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ test_classification_threshold.py
   │     │  │  │  ├─ test_plot.py
   │     │  │  │  ├─ test_search.py
   │     │  │  │  ├─ test_split.py
   │     │  │  │  ├─ test_successive_halving.py
   │     │  │  │  ├─ test_validation.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ test_classification_threshold.cpython-313.pyc
   │     │  │  │     ├─ test_plot.cpython-313.pyc
   │     │  │  │     ├─ test_search.cpython-313.pyc
   │     │  │  │     ├─ test_split.cpython-313.pyc
   │     │  │  │     ├─ test_successive_halving.cpython-313.pyc
   │     │  │  │     ├─ test_validation.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _classification_threshold.py
   │     │  │  ├─ _plot.py
   │     │  │  ├─ _search.py
   │     │  │  ├─ _search_successive_halving.py
   │     │  │  ├─ _split.py
   │     │  │  ├─ _validation.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _classification_threshold.cpython-313.pyc
   │     │  │     ├─ _plot.cpython-313.pyc
   │     │  │     ├─ _search.cpython-313.pyc
   │     │  │     ├─ _search_successive_halving.cpython-313.pyc
   │     │  │     ├─ _split.cpython-313.pyc
   │     │  │     ├─ _validation.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ multiclass.py
   │     │  ├─ multioutput.py
   │     │  ├─ naive_bayes.py
   │     │  ├─ neighbors
   │     │  │  ├─ meson.build
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_ball_tree.py
   │     │  │  │  ├─ test_graph.py
   │     │  │  │  ├─ test_kde.py
   │     │  │  │  ├─ test_kd_tree.py
   │     │  │  │  ├─ test_lof.py
   │     │  │  │  ├─ test_nca.py
   │     │  │  │  ├─ test_nearest_centroid.py
   │     │  │  │  ├─ test_neighbors.py
   │     │  │  │  ├─ test_neighbors_pipeline.py
   │     │  │  │  ├─ test_neighbors_tree.py
   │     │  │  │  ├─ test_quad_tree.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_ball_tree.cpython-313.pyc
   │     │  │  │     ├─ test_graph.cpython-313.pyc
   │     │  │  │     ├─ test_kde.cpython-313.pyc
   │     │  │  │     ├─ test_kd_tree.cpython-313.pyc
   │     │  │  │     ├─ test_lof.cpython-313.pyc
   │     │  │  │     ├─ test_nca.cpython-313.pyc
   │     │  │  │     ├─ test_nearest_centroid.cpython-313.pyc
   │     │  │  │     ├─ test_neighbors.cpython-313.pyc
   │     │  │  │     ├─ test_neighbors_pipeline.cpython-313.pyc
   │     │  │  │     ├─ test_neighbors_tree.cpython-313.pyc
   │     │  │  │     ├─ test_quad_tree.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _ball_tree.cp313-win_amd64.lib
   │     │  │  ├─ _ball_tree.cp313-win_amd64.pyd
   │     │  │  ├─ _ball_tree.pyx.tp
   │     │  │  ├─ _base.py
   │     │  │  ├─ _binary_tree.pxi.tp
   │     │  │  ├─ _classification.py
   │     │  │  ├─ _graph.py
   │     │  │  ├─ _kde.py
   │     │  │  ├─ _kd_tree.cp313-win_amd64.lib
   │     │  │  ├─ _kd_tree.cp313-win_amd64.pyd
   │     │  │  ├─ _kd_tree.pyx.tp
   │     │  │  ├─ _lof.py
   │     │  │  ├─ _nca.py
   │     │  │  ├─ _nearest_centroid.py
   │     │  │  ├─ _partition_nodes.cp313-win_amd64.lib
   │     │  │  ├─ _partition_nodes.cp313-win_amd64.pyd
   │     │  │  ├─ _partition_nodes.pxd
   │     │  │  ├─ _partition_nodes.pyx
   │     │  │  ├─ _quad_tree.cp313-win_amd64.lib
   │     │  │  ├─ _quad_tree.cp313-win_amd64.pyd
   │     │  │  ├─ _quad_tree.pxd
   │     │  │  ├─ _quad_tree.pyx
   │     │  │  ├─ _regression.py
   │     │  │  ├─ _unsupervised.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _classification.cpython-313.pyc
   │     │  │     ├─ _graph.cpython-313.pyc
   │     │  │     ├─ _kde.cpython-313.pyc
   │     │  │     ├─ _lof.cpython-313.pyc
   │     │  │     ├─ _nca.cpython-313.pyc
   │     │  │     ├─ _nearest_centroid.cpython-313.pyc
   │     │  │     ├─ _regression.cpython-313.pyc
   │     │  │     ├─ _unsupervised.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ neural_network
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_mlp.py
   │     │  │  │  ├─ test_rbm.py
   │     │  │  │  ├─ test_stochastic_optimizers.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_mlp.cpython-313.pyc
   │     │  │  │     ├─ test_rbm.cpython-313.pyc
   │     │  │  │     ├─ test_stochastic_optimizers.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _base.py
   │     │  │  ├─ _multilayer_perceptron.py
   │     │  │  ├─ _rbm.py
   │     │  │  ├─ _stochastic_optimizers.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _multilayer_perceptron.cpython-313.pyc
   │     │  │     ├─ _rbm.cpython-313.pyc
   │     │  │     ├─ _stochastic_optimizers.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ pipeline.py
   │     │  ├─ preprocessing
   │     │  │  ├─ meson.build
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_data.py
   │     │  │  │  ├─ test_discretization.py
   │     │  │  │  ├─ test_encoders.py
   │     │  │  │  ├─ test_function_transformer.py
   │     │  │  │  ├─ test_label.py
   │     │  │  │  ├─ test_polynomial.py
   │     │  │  │  ├─ test_target_encoder.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_data.cpython-313.pyc
   │     │  │  │     ├─ test_discretization.cpython-313.pyc
   │     │  │  │     ├─ test_encoders.cpython-313.pyc
   │     │  │  │     ├─ test_function_transformer.cpython-313.pyc
   │     │  │  │     ├─ test_label.cpython-313.pyc
   │     │  │  │     ├─ test_polynomial.cpython-313.pyc
   │     │  │  │     ├─ test_target_encoder.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _csr_polynomial_expansion.cp313-win_amd64.lib
   │     │  │  ├─ _csr_polynomial_expansion.cp313-win_amd64.pyd
   │     │  │  ├─ _csr_polynomial_expansion.pyx
   │     │  │  ├─ _data.py
   │     │  │  ├─ _discretization.py
   │     │  │  ├─ _encoders.py
   │     │  │  ├─ _function_transformer.py
   │     │  │  ├─ _label.py
   │     │  │  ├─ _polynomial.py
   │     │  │  ├─ _target_encoder.py
   │     │  │  ├─ _target_encoder_fast.cp313-win_amd64.lib
   │     │  │  ├─ _target_encoder_fast.cp313-win_amd64.pyd
   │     │  │  ├─ _target_encoder_fast.pyx
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _data.cpython-313.pyc
   │     │  │     ├─ _discretization.cpython-313.pyc
   │     │  │     ├─ _encoders.cpython-313.pyc
   │     │  │     ├─ _function_transformer.cpython-313.pyc
   │     │  │     ├─ _label.cpython-313.pyc
   │     │  │     ├─ _polynomial.cpython-313.pyc
   │     │  │     ├─ _target_encoder.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ random_projection.py
   │     │  ├─ semi_supervised
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_label_propagation.py
   │     │  │  │  ├─ test_self_training.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_label_propagation.cpython-313.pyc
   │     │  │  │     ├─ test_self_training.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _label_propagation.py
   │     │  │  ├─ _self_training.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _label_propagation.cpython-313.pyc
   │     │  │     ├─ _self_training.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ svm
   │     │  │  ├─ meson.build
   │     │  │  ├─ src
   │     │  │  │  ├─ liblinear
   │     │  │  │  │  ├─ COPYRIGHT
   │     │  │  │  │  ├─ liblinear_helper.c
   │     │  │  │  │  ├─ linear.cpp
   │     │  │  │  │  ├─ linear.h
   │     │  │  │  │  ├─ tron.cpp
   │     │  │  │  │  ├─ tron.h
   │     │  │  │  │  └─ _cython_blas_helpers.h
   │     │  │  │  ├─ libsvm
   │     │  │  │  │  ├─ LIBSVM_CHANGES
   │     │  │  │  │  ├─ libsvm_helper.c
   │     │  │  │  │  ├─ libsvm_sparse_helper.c
   │     │  │  │  │  ├─ libsvm_template.cpp
   │     │  │  │  │  ├─ svm.cpp
   │     │  │  │  │  ├─ svm.h
   │     │  │  │  │  └─ _svm_cython_blas_helpers.h
   │     │  │  │  └─ newrand
   │     │  │  │     └─ newrand.h
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_bounds.py
   │     │  │  │  ├─ test_sparse.py
   │     │  │  │  ├─ test_svm.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_bounds.cpython-313.pyc
   │     │  │  │     ├─ test_sparse.cpython-313.pyc
   │     │  │  │     ├─ test_svm.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _base.py
   │     │  │  ├─ _bounds.py
   │     │  │  ├─ _classes.py
   │     │  │  ├─ _liblinear.cp313-win_amd64.lib
   │     │  │  ├─ _liblinear.cp313-win_amd64.pyd
   │     │  │  ├─ _liblinear.pxi
   │     │  │  ├─ _liblinear.pyx
   │     │  │  ├─ _libsvm.cp313-win_amd64.lib
   │     │  │  ├─ _libsvm.cp313-win_amd64.pyd
   │     │  │  ├─ _libsvm.pxi
   │     │  │  ├─ _libsvm.pyx
   │     │  │  ├─ _libsvm_sparse.cp313-win_amd64.lib
   │     │  │  ├─ _libsvm_sparse.cp313-win_amd64.pyd
   │     │  │  ├─ _libsvm_sparse.pyx
   │     │  │  ├─ _newrand.cp313-win_amd64.lib
   │     │  │  ├─ _newrand.cp313-win_amd64.pyd
   │     │  │  ├─ _newrand.pyx
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _base.cpython-313.pyc
   │     │  │     ├─ _bounds.cpython-313.pyc
   │     │  │     ├─ _classes.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tests
   │     │  │  ├─ metadata_routing_common.py
   │     │  │  ├─ test_base.py
   │     │  │  ├─ test_build.py
   │     │  │  ├─ test_calibration.py
   │     │  │  ├─ test_check_build.py
   │     │  │  ├─ test_common.py
   │     │  │  ├─ test_config.py
   │     │  │  ├─ test_discriminant_analysis.py
   │     │  │  ├─ test_docstrings.py
   │     │  │  ├─ test_docstring_parameters.py
   │     │  │  ├─ test_dummy.py
   │     │  │  ├─ test_init.py
   │     │  │  ├─ test_isotonic.py
   │     │  │  ├─ test_kernel_approximation.py
   │     │  │  ├─ test_kernel_ridge.py
   │     │  │  ├─ test_metadata_routing.py
   │     │  │  ├─ test_metaestimators.py
   │     │  │  ├─ test_metaestimators_metadata_routing.py
   │     │  │  ├─ test_min_dependencies_readme.py
   │     │  │  ├─ test_multiclass.py
   │     │  │  ├─ test_multioutput.py
   │     │  │  ├─ test_naive_bayes.py
   │     │  │  ├─ test_pipeline.py
   │     │  │  ├─ test_public_functions.py
   │     │  │  ├─ test_random_projection.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ metadata_routing_common.cpython-313.pyc
   │     │  │     ├─ test_base.cpython-313.pyc
   │     │  │     ├─ test_build.cpython-313.pyc
   │     │  │     ├─ test_calibration.cpython-313.pyc
   │     │  │     ├─ test_check_build.cpython-313.pyc
   │     │  │     ├─ test_common.cpython-313.pyc
   │     │  │     ├─ test_config.cpython-313.pyc
   │     │  │     ├─ test_discriminant_analysis.cpython-313.pyc
   │     │  │     ├─ test_docstrings.cpython-313.pyc
   │     │  │     ├─ test_docstring_parameters.cpython-313.pyc
   │     │  │     ├─ test_dummy.cpython-313.pyc
   │     │  │     ├─ test_init.cpython-313.pyc
   │     │  │     ├─ test_isotonic.cpython-313.pyc
   │     │  │     ├─ test_kernel_approximation.cpython-313.pyc
   │     │  │     ├─ test_kernel_ridge.cpython-313.pyc
   │     │  │     ├─ test_metadata_routing.cpython-313.pyc
   │     │  │     ├─ test_metaestimators.cpython-313.pyc
   │     │  │     ├─ test_metaestimators_metadata_routing.cpython-313.pyc
   │     │  │     ├─ test_min_dependencies_readme.cpython-313.pyc
   │     │  │     ├─ test_multiclass.cpython-313.pyc
   │     │  │     ├─ test_multioutput.cpython-313.pyc
   │     │  │     ├─ test_naive_bayes.cpython-313.pyc
   │     │  │     ├─ test_pipeline.cpython-313.pyc
   │     │  │     ├─ test_public_functions.cpython-313.pyc
   │     │  │     ├─ test_random_projection.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tree
   │     │  │  ├─ meson.build
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_export.py
   │     │  │  │  ├─ test_monotonic_tree.py
   │     │  │  │  ├─ test_reingold_tilford.py
   │     │  │  │  ├─ test_tree.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_export.cpython-313.pyc
   │     │  │  │     ├─ test_monotonic_tree.cpython-313.pyc
   │     │  │  │     ├─ test_reingold_tilford.cpython-313.pyc
   │     │  │  │     ├─ test_tree.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _classes.py
   │     │  │  ├─ _criterion.cp313-win_amd64.lib
   │     │  │  ├─ _criterion.cp313-win_amd64.pyd
   │     │  │  ├─ _criterion.pxd
   │     │  │  ├─ _criterion.pyx
   │     │  │  ├─ _export.py
   │     │  │  ├─ _partitioner.cp313-win_amd64.lib
   │     │  │  ├─ _partitioner.cp313-win_amd64.pyd
   │     │  │  ├─ _partitioner.pxd
   │     │  │  ├─ _partitioner.pyx
   │     │  │  ├─ _reingold_tilford.py
   │     │  │  ├─ _splitter.cp313-win_amd64.lib
   │     │  │  ├─ _splitter.cp313-win_amd64.pyd
   │     │  │  ├─ _splitter.pxd
   │     │  │  ├─ _splitter.pyx
   │     │  │  ├─ _tree.cp313-win_amd64.lib
   │     │  │  ├─ _tree.cp313-win_amd64.pyd
   │     │  │  ├─ _tree.pxd
   │     │  │  ├─ _tree.pyx
   │     │  │  ├─ _utils.cp313-win_amd64.lib
   │     │  │  ├─ _utils.cp313-win_amd64.pyd
   │     │  │  ├─ _utils.pxd
   │     │  │  ├─ _utils.pyx
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _classes.cpython-313.pyc
   │     │  │     ├─ _export.cpython-313.pyc
   │     │  │     ├─ _reingold_tilford.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ utils
   │     │  │  ├─ arrayfuncs.cp313-win_amd64.lib
   │     │  │  ├─ arrayfuncs.cp313-win_amd64.pyd
   │     │  │  ├─ arrayfuncs.pyx
   │     │  │  ├─ class_weight.py
   │     │  │  ├─ deprecation.py
   │     │  │  ├─ discovery.py
   │     │  │  ├─ estimator_checks.py
   │     │  │  ├─ extmath.py
   │     │  │  ├─ fixes.py
   │     │  │  ├─ graph.py
   │     │  │  ├─ meson.build
   │     │  │  ├─ metadata_routing.py
   │     │  │  ├─ metaestimators.py
   │     │  │  ├─ multiclass.py
   │     │  │  ├─ murmurhash.cp313-win_amd64.lib
   │     │  │  ├─ murmurhash.cp313-win_amd64.pyd
   │     │  │  ├─ murmurhash.pxd
   │     │  │  ├─ murmurhash.pyx
   │     │  │  ├─ optimize.py
   │     │  │  ├─ parallel.py
   │     │  │  ├─ random.py
   │     │  │  ├─ sparsefuncs.py
   │     │  │  ├─ sparsefuncs_fast.cp313-win_amd64.lib
   │     │  │  ├─ sparsefuncs_fast.cp313-win_amd64.pyd
   │     │  │  ├─ sparsefuncs_fast.pyx
   │     │  │  ├─ src
   │     │  │  │  ├─ MurmurHash3.cpp
   │     │  │  │  └─ MurmurHash3.h
   │     │  │  ├─ stats.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_arpack.py
   │     │  │  │  ├─ test_arrayfuncs.py
   │     │  │  │  ├─ test_array_api.py
   │     │  │  │  ├─ test_bunch.py
   │     │  │  │  ├─ test_chunking.py
   │     │  │  │  ├─ test_class_weight.py
   │     │  │  │  ├─ test_cython_blas.py
   │     │  │  │  ├─ test_deprecation.py
   │     │  │  │  ├─ test_encode.py
   │     │  │  │  ├─ test_estimator_checks.py
   │     │  │  │  ├─ test_estimator_html_repr.py
   │     │  │  │  ├─ test_extmath.py
   │     │  │  │  ├─ test_fast_dict.py
   │     │  │  │  ├─ test_fixes.py
   │     │  │  │  ├─ test_graph.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_mask.py
   │     │  │  │  ├─ test_metaestimators.py
   │     │  │  │  ├─ test_missing.py
   │     │  │  │  ├─ test_mocking.py
   │     │  │  │  ├─ test_multiclass.py
   │     │  │  │  ├─ test_murmurhash.py
   │     │  │  │  ├─ test_optimize.py
   │     │  │  │  ├─ test_parallel.py
   │     │  │  │  ├─ test_param_validation.py
   │     │  │  │  ├─ test_plotting.py
   │     │  │  │  ├─ test_pprint.py
   │     │  │  │  ├─ test_random.py
   │     │  │  │  ├─ test_response.py
   │     │  │  │  ├─ test_seq_dataset.py
   │     │  │  │  ├─ test_set_output.py
   │     │  │  │  ├─ test_shortest_path.py
   │     │  │  │  ├─ test_show_versions.py
   │     │  │  │  ├─ test_sparsefuncs.py
   │     │  │  │  ├─ test_stats.py
   │     │  │  │  ├─ test_tags.py
   │     │  │  │  ├─ test_testing.py
   │     │  │  │  ├─ test_typedefs.py
   │     │  │  │  ├─ test_unique.py
   │     │  │  │  ├─ test_user_interface.py
   │     │  │  │  ├─ test_utils.py
   │     │  │  │  ├─ test_validation.py
   │     │  │  │  ├─ test_weight_vector.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_arpack.cpython-313.pyc
   │     │  │  │     ├─ test_arrayfuncs.cpython-313.pyc
   │     │  │  │     ├─ test_array_api.cpython-313.pyc
   │     │  │  │     ├─ test_bunch.cpython-313.pyc
   │     │  │  │     ├─ test_chunking.cpython-313.pyc
   │     │  │  │     ├─ test_class_weight.cpython-313.pyc
   │     │  │  │     ├─ test_cython_blas.cpython-313.pyc
   │     │  │  │     ├─ test_deprecation.cpython-313.pyc
   │     │  │  │     ├─ test_encode.cpython-313.pyc
   │     │  │  │     ├─ test_estimator_checks.cpython-313.pyc
   │     │  │  │     ├─ test_estimator_html_repr.cpython-313.pyc
   │     │  │  │     ├─ test_extmath.cpython-313.pyc
   │     │  │  │     ├─ test_fast_dict.cpython-313.pyc
   │     │  │  │     ├─ test_fixes.cpython-313.pyc
   │     │  │  │     ├─ test_graph.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_mask.cpython-313.pyc
   │     │  │  │     ├─ test_metaestimators.cpython-313.pyc
   │     │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │     ├─ test_mocking.cpython-313.pyc
   │     │  │  │     ├─ test_multiclass.cpython-313.pyc
   │     │  │  │     ├─ test_murmurhash.cpython-313.pyc
   │     │  │  │     ├─ test_optimize.cpython-313.pyc
   │     │  │  │     ├─ test_parallel.cpython-313.pyc
   │     │  │  │     ├─ test_param_validation.cpython-313.pyc
   │     │  │  │     ├─ test_plotting.cpython-313.pyc
   │     │  │  │     ├─ test_pprint.cpython-313.pyc
   │     │  │  │     ├─ test_random.cpython-313.pyc
   │     │  │  │     ├─ test_response.cpython-313.pyc
   │     │  │  │     ├─ test_seq_dataset.cpython-313.pyc
   │     │  │  │     ├─ test_set_output.cpython-313.pyc
   │     │  │  │     ├─ test_shortest_path.cpython-313.pyc
   │     │  │  │     ├─ test_show_versions.cpython-313.pyc
   │     │  │  │     ├─ test_sparsefuncs.cpython-313.pyc
   │     │  │  │     ├─ test_stats.cpython-313.pyc
   │     │  │  │     ├─ test_tags.cpython-313.pyc
   │     │  │  │     ├─ test_testing.cpython-313.pyc
   │     │  │  │     ├─ test_typedefs.cpython-313.pyc
   │     │  │  │     ├─ test_unique.cpython-313.pyc
   │     │  │  │     ├─ test_user_interface.cpython-313.pyc
   │     │  │  │     ├─ test_utils.cpython-313.pyc
   │     │  │  │     ├─ test_validation.cpython-313.pyc
   │     │  │  │     ├─ test_weight_vector.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ validation.py
   │     │  │  ├─ _arpack.py
   │     │  │  ├─ _array_api.py
   │     │  │  ├─ _available_if.py
   │     │  │  ├─ _bunch.py
   │     │  │  ├─ _chunking.py
   │     │  │  ├─ _cython_blas.cp313-win_amd64.lib
   │     │  │  ├─ _cython_blas.cp313-win_amd64.pyd
   │     │  │  ├─ _cython_blas.pxd
   │     │  │  ├─ _cython_blas.pyx
   │     │  │  ├─ _encode.py
   │     │  │  ├─ _estimator_html_repr.css
   │     │  │  ├─ _estimator_html_repr.py
   │     │  │  ├─ _fast_dict.cp313-win_amd64.lib
   │     │  │  ├─ _fast_dict.cp313-win_amd64.pyd
   │     │  │  ├─ _fast_dict.pxd
   │     │  │  ├─ _fast_dict.pyx
   │     │  │  ├─ _heap.cp313-win_amd64.lib
   │     │  │  ├─ _heap.cp313-win_amd64.pyd
   │     │  │  ├─ _heap.pxd
   │     │  │  ├─ _heap.pyx
   │     │  │  ├─ _indexing.py
   │     │  │  ├─ _isfinite.cp313-win_amd64.lib
   │     │  │  ├─ _isfinite.cp313-win_amd64.pyd
   │     │  │  ├─ _isfinite.pyx
   │     │  │  ├─ _joblib.py
   │     │  │  ├─ _mask.py
   │     │  │  ├─ _metadata_requests.py
   │     │  │  ├─ _missing.py
   │     │  │  ├─ _mocking.py
   │     │  │  ├─ _openmp_helpers.cp313-win_amd64.lib
   │     │  │  ├─ _openmp_helpers.cp313-win_amd64.pyd
   │     │  │  ├─ _openmp_helpers.pxd
   │     │  │  ├─ _openmp_helpers.pyx
   │     │  │  ├─ _optional_dependencies.py
   │     │  │  ├─ _param_validation.py
   │     │  │  ├─ _plotting.py
   │     │  │  ├─ _pprint.py
   │     │  │  ├─ _random.cp313-win_amd64.lib
   │     │  │  ├─ _random.cp313-win_amd64.pyd
   │     │  │  ├─ _random.pxd
   │     │  │  ├─ _random.pyx
   │     │  │  ├─ _response.py
   │     │  │  ├─ _seq_dataset.cp313-win_amd64.lib
   │     │  │  ├─ _seq_dataset.cp313-win_amd64.pyd
   │     │  │  ├─ _seq_dataset.pxd.tp
   │     │  │  ├─ _seq_dataset.pyx.tp
   │     │  │  ├─ _set_output.py
   │     │  │  ├─ _show_versions.py
   │     │  │  ├─ _sorting.cp313-win_amd64.lib
   │     │  │  ├─ _sorting.cp313-win_amd64.pyd
   │     │  │  ├─ _sorting.pxd
   │     │  │  ├─ _sorting.pyx
   │     │  │  ├─ _tags.py
   │     │  │  ├─ _testing.py
   │     │  │  ├─ _test_common
   │     │  │  │  ├─ instance_generator.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ instance_generator.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _typedefs.cp313-win_amd64.lib
   │     │  │  ├─ _typedefs.cp313-win_amd64.pyd
   │     │  │  ├─ _typedefs.pxd
   │     │  │  ├─ _typedefs.pyx
   │     │  │  ├─ _unique.py
   │     │  │  ├─ _user_interface.py
   │     │  │  ├─ _vector_sentinel.cp313-win_amd64.lib
   │     │  │  ├─ _vector_sentinel.cp313-win_amd64.pyd
   │     │  │  ├─ _vector_sentinel.pxd
   │     │  │  ├─ _vector_sentinel.pyx
   │     │  │  ├─ _weight_vector.cp313-win_amd64.lib
   │     │  │  ├─ _weight_vector.cp313-win_amd64.pyd
   │     │  │  ├─ _weight_vector.pxd.tp
   │     │  │  ├─ _weight_vector.pyx.tp
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ class_weight.cpython-313.pyc
   │     │  │     ├─ deprecation.cpython-313.pyc
   │     │  │     ├─ discovery.cpython-313.pyc
   │     │  │     ├─ estimator_checks.cpython-313.pyc
   │     │  │     ├─ extmath.cpython-313.pyc
   │     │  │     ├─ fixes.cpython-313.pyc
   │     │  │     ├─ graph.cpython-313.pyc
   │     │  │     ├─ metadata_routing.cpython-313.pyc
   │     │  │     ├─ metaestimators.cpython-313.pyc
   │     │  │     ├─ multiclass.cpython-313.pyc
   │     │  │     ├─ optimize.cpython-313.pyc
   │     │  │     ├─ parallel.cpython-313.pyc
   │     │  │     ├─ random.cpython-313.pyc
   │     │  │     ├─ sparsefuncs.cpython-313.pyc
   │     │  │     ├─ stats.cpython-313.pyc
   │     │  │     ├─ validation.cpython-313.pyc
   │     │  │     ├─ _arpack.cpython-313.pyc
   │     │  │     ├─ _array_api.cpython-313.pyc
   │     │  │     ├─ _available_if.cpython-313.pyc
   │     │  │     ├─ _bunch.cpython-313.pyc
   │     │  │     ├─ _chunking.cpython-313.pyc
   │     │  │     ├─ _encode.cpython-313.pyc
   │     │  │     ├─ _estimator_html_repr.cpython-313.pyc
   │     │  │     ├─ _indexing.cpython-313.pyc
   │     │  │     ├─ _joblib.cpython-313.pyc
   │     │  │     ├─ _mask.cpython-313.pyc
   │     │  │     ├─ _metadata_requests.cpython-313.pyc
   │     │  │     ├─ _missing.cpython-313.pyc
   │     │  │     ├─ _mocking.cpython-313.pyc
   │     │  │     ├─ _optional_dependencies.cpython-313.pyc
   │     │  │     ├─ _param_validation.cpython-313.pyc
   │     │  │     ├─ _plotting.cpython-313.pyc
   │     │  │     ├─ _pprint.cpython-313.pyc
   │     │  │     ├─ _response.cpython-313.pyc
   │     │  │     ├─ _set_output.cpython-313.pyc
   │     │  │     ├─ _show_versions.cpython-313.pyc
   │     │  │     ├─ _tags.cpython-313.pyc
   │     │  │     ├─ _testing.cpython-313.pyc
   │     │  │     ├─ _unique.cpython-313.pyc
   │     │  │     ├─ _user_interface.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _build_utils
   │     │  │  ├─ tempita.py
   │     │  │  ├─ version.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ tempita.cpython-313.pyc
   │     │  │     ├─ version.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _built_with_meson.py
   │     │  ├─ _config.py
   │     │  ├─ _distributor_init.py
   │     │  ├─ _isotonic.cp313-win_amd64.lib
   │     │  ├─ _isotonic.cp313-win_amd64.pyd
   │     │  ├─ _isotonic.pyx
   │     │  ├─ _loss
   │     │  │  ├─ link.py
   │     │  │  ├─ loss.py
   │     │  │  ├─ meson.build
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_link.py
   │     │  │  │  ├─ test_loss.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_link.cpython-313.pyc
   │     │  │  │     ├─ test_loss.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _loss.cp313-win_amd64.lib
   │     │  │  ├─ _loss.cp313-win_amd64.pyd
   │     │  │  ├─ _loss.pxd
   │     │  │  ├─ _loss.pyx.tp
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ link.cpython-313.pyc
   │     │  │     ├─ loss.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _min_dependencies.py
   │     │  ├─ __check_build
   │     │  │  ├─ meson.build
   │     │  │  ├─ _check_build.cp313-win_amd64.lib
   │     │  │  ├─ _check_build.cp313-win_amd64.pyd
   │     │  │  ├─ _check_build.pyx
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ base.cpython-313.pyc
   │     │     ├─ calibration.cpython-313.pyc
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ discriminant_analysis.cpython-313.pyc
   │     │     ├─ dummy.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ isotonic.cpython-313.pyc
   │     │     ├─ kernel_approximation.cpython-313.pyc
   │     │     ├─ kernel_ridge.cpython-313.pyc
   │     │     ├─ multiclass.cpython-313.pyc
   │     │     ├─ multioutput.cpython-313.pyc
   │     │     ├─ naive_bayes.cpython-313.pyc
   │     │     ├─ pipeline.cpython-313.pyc
   │     │     ├─ random_projection.cpython-313.pyc
   │     │     ├─ _built_with_meson.cpython-313.pyc
   │     │     ├─ _config.cpython-313.pyc
   │     │     ├─ _distributor_init.cpython-313.pyc
   │     │     ├─ _min_dependencies.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ sniffio
   │     │  ├─ py.typed
   │     │  ├─ _impl.py
   │     │  ├─ _tests
   │     │  │  ├─ test_sniffio.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ test_sniffio.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _impl.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ sniffio-1.3.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ LICENSE.APACHE2
   │     │  ├─ LICENSE.MIT
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ sortedcontainers
   │     │  ├─ sorteddict.py
   │     │  ├─ sortedlist.py
   │     │  ├─ sortedset.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ sorteddict.cpython-313.pyc
   │     │     ├─ sortedlist.cpython-313.pyc
   │     │     ├─ sortedset.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ sortedcontainers-2.4.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ starlette
   │     │  ├─ applications.py
   │     │  ├─ authentication.py
   │     │  ├─ background.py
   │     │  ├─ concurrency.py
   │     │  ├─ config.py
   │     │  ├─ convertors.py
   │     │  ├─ datastructures.py
   │     │  ├─ endpoints.py
   │     │  ├─ exceptions.py
   │     │  ├─ formparsers.py
   │     │  ├─ middleware
   │     │  │  ├─ authentication.py
   │     │  │  ├─ base.py
   │     │  │  ├─ cors.py
   │     │  │  ├─ errors.py
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ gzip.py
   │     │  │  ├─ httpsredirect.py
   │     │  │  ├─ sessions.py
   │     │  │  ├─ trustedhost.py
   │     │  │  ├─ wsgi.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ authentication.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ cors.cpython-313.pyc
   │     │  │     ├─ errors.cpython-313.pyc
   │     │  │     ├─ exceptions.cpython-313.pyc
   │     │  │     ├─ gzip.cpython-313.pyc
   │     │  │     ├─ httpsredirect.cpython-313.pyc
   │     │  │     ├─ sessions.cpython-313.pyc
   │     │  │     ├─ trustedhost.cpython-313.pyc
   │     │  │     ├─ wsgi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ requests.py
   │     │  ├─ responses.py
   │     │  ├─ routing.py
   │     │  ├─ schemas.py
   │     │  ├─ staticfiles.py
   │     │  ├─ status.py
   │     │  ├─ templating.py
   │     │  ├─ testclient.py
   │     │  ├─ types.py
   │     │  ├─ websockets.py
   │     │  ├─ _exception_handler.py
   │     │  ├─ _utils.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ applications.cpython-313.pyc
   │     │     ├─ authentication.cpython-313.pyc
   │     │     ├─ background.cpython-313.pyc
   │     │     ├─ concurrency.cpython-313.pyc
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ convertors.cpython-313.pyc
   │     │     ├─ datastructures.cpython-313.pyc
   │     │     ├─ endpoints.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ formparsers.cpython-313.pyc
   │     │     ├─ requests.cpython-313.pyc
   │     │     ├─ responses.cpython-313.pyc
   │     │     ├─ routing.cpython-313.pyc
   │     │     ├─ schemas.cpython-313.pyc
   │     │     ├─ staticfiles.cpython-313.pyc
   │     │     ├─ status.cpython-313.pyc
   │     │     ├─ templating.cpython-313.pyc
   │     │     ├─ testclient.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ websockets.cpython-313.pyc
   │     │     ├─ _exception_handler.cpython-313.pyc
   │     │     ├─ _utils.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ starlette-0.46.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ statsmodels
   │     │  ├─ api.py
   │     │  ├─ base
   │     │  │  ├─ covtype.py
   │     │  │  ├─ data.py
   │     │  │  ├─ distributed_estimation.py
   │     │  │  ├─ elastic_net.py
   │     │  │  ├─ l1_cvxopt.py
   │     │  │  ├─ l1_slsqp.py
   │     │  │  ├─ l1_solvers_common.py
   │     │  │  ├─ model.py
   │     │  │  ├─ optimizer.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_data.py
   │     │  │  │  ├─ test_distributed_estimation.py
   │     │  │  │  ├─ test_generic_methods.py
   │     │  │  │  ├─ test_optimize.py
   │     │  │  │  ├─ test_penalized.py
   │     │  │  │  ├─ test_penalties.py
   │     │  │  │  ├─ test_predict.py
   │     │  │  │  ├─ test_screening.py
   │     │  │  │  ├─ test_shrink_pickle.py
   │     │  │  │  ├─ test_transform.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_data.cpython-313.pyc
   │     │  │  │     ├─ test_distributed_estimation.cpython-313.pyc
   │     │  │  │     ├─ test_generic_methods.cpython-313.pyc
   │     │  │  │     ├─ test_optimize.cpython-313.pyc
   │     │  │  │     ├─ test_penalized.cpython-313.pyc
   │     │  │  │     ├─ test_penalties.cpython-313.pyc
   │     │  │  │     ├─ test_predict.cpython-313.pyc
   │     │  │  │     ├─ test_screening.cpython-313.pyc
   │     │  │  │     ├─ test_shrink_pickle.cpython-313.pyc
   │     │  │  │     ├─ test_transform.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ transform.py
   │     │  │  ├─ wrapper.py
   │     │  │  ├─ _constraints.py
   │     │  │  ├─ _parameter_inference.py
   │     │  │  ├─ _penalized.py
   │     │  │  ├─ _penalties.py
   │     │  │  ├─ _prediction_inference.py
   │     │  │  ├─ _screening.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ covtype.cpython-313.pyc
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ distributed_estimation.cpython-313.pyc
   │     │  │     ├─ elastic_net.cpython-313.pyc
   │     │  │     ├─ l1_cvxopt.cpython-313.pyc
   │     │  │     ├─ l1_slsqp.cpython-313.pyc
   │     │  │     ├─ l1_solvers_common.cpython-313.pyc
   │     │  │     ├─ model.cpython-313.pyc
   │     │  │     ├─ optimizer.cpython-313.pyc
   │     │  │     ├─ transform.cpython-313.pyc
   │     │  │     ├─ wrapper.cpython-313.pyc
   │     │  │     ├─ _constraints.cpython-313.pyc
   │     │  │     ├─ _parameter_inference.cpython-313.pyc
   │     │  │     ├─ _penalized.cpython-313.pyc
   │     │  │     ├─ _penalties.cpython-313.pyc
   │     │  │     ├─ _prediction_inference.cpython-313.pyc
   │     │  │     ├─ _screening.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ compat
   │     │  │  ├─ numpy.py
   │     │  │  ├─ pandas.py
   │     │  │  ├─ patsy.py
   │     │  │  ├─ platform.py
   │     │  │  ├─ pytest.py
   │     │  │  ├─ python.py
   │     │  │  ├─ scipy.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_itercompat.py
   │     │  │  │  ├─ test_pandas.py
   │     │  │  │  ├─ test_scipy_compat.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_itercompat.cpython-313.pyc
   │     │  │  │     ├─ test_pandas.cpython-313.pyc
   │     │  │  │     ├─ test_scipy_compat.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _scipy_multivariate_t.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ numpy.cpython-313.pyc
   │     │  │     ├─ pandas.cpython-313.pyc
   │     │  │     ├─ patsy.cpython-313.pyc
   │     │  │     ├─ platform.cpython-313.pyc
   │     │  │     ├─ pytest.cpython-313.pyc
   │     │  │     ├─ python.cpython-313.pyc
   │     │  │     ├─ scipy.cpython-313.pyc
   │     │  │     ├─ _scipy_multivariate_t.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ conftest.py
   │     │  ├─ datasets
   │     │  │  ├─ anes96
   │     │  │  │  ├─ anes96.csv
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ cancer
   │     │  │  │  ├─ cancer.csv
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ ccard
   │     │  │  │  ├─ ccard.csv
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ china_smoking
   │     │  │  │  ├─ china_smoking.csv
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ co2
   │     │  │  │  ├─ co2.csv
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ committee
   │     │  │  │  ├─ committee.csv
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ copper
   │     │  │  │  ├─ copper.csv
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ cpunish
   │     │  │  │  ├─ cpunish.csv
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ danish_data
   │     │  │  │  ├─ data.csv
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ elec_equip
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ elec_equip.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ elnino
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ elnino.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ engel
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ engel.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ fair
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ fair.csv
   │     │  │  │  ├─ fair_pt.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ fertility
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ fertility.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ grunfeld
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ grunfeld.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ heart
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ heart.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ interest_inflation
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ E6.csv
   │     │  │  │  ├─ E6_jmulti.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ longley
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ longley.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ macrodata
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ macrodata.csv
   │     │  │  │  ├─ macrodata.dta
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ modechoice
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ modechoice.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ nile
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ nile.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ randhie
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ randhie.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ scotland
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ scotvote.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ spector
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ spector.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ stackloss
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ stackloss.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ star98
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ star98.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ statecrime
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ statecrime.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ strikes
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ strikes.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ sunspots
   │     │  │  │  ├─ data.py
   │     │  │  │  ├─ sunspots.csv
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ template_data.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_data.py
   │     │  │  │  ├─ test_utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_data.cpython-313.pyc
   │     │  │  │     ├─ test_utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ template_data.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ discrete
   │     │  │  ├─ conditional_models.py
   │     │  │  ├─ count_model.py
   │     │  │  ├─ diagnostic.py
   │     │  │  ├─ discrete_margins.py
   │     │  │  ├─ discrete_model.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ mnlogit_resid.csv
   │     │  │  │  │  ├─ mn_logit_summary.txt
   │     │  │  │  │  ├─ nbinom_resids.csv
   │     │  │  │  │  ├─ phat_mnlogit.csv
   │     │  │  │  │  ├─ poisson_resid.csv
   │     │  │  │  │  ├─ predict_prob_poisson.csv
   │     │  │  │  │  ├─ results_count_margins.py
   │     │  │  │  │  ├─ results_count_robust_cluster.py
   │     │  │  │  │  ├─ results_discrete.py
   │     │  │  │  │  ├─ results_glm_logit_constrained.py
   │     │  │  │  │  ├─ results_poisson_constrained.py
   │     │  │  │  │  ├─ results_predict.py
   │     │  │  │  │  ├─ results_truncated.py
   │     │  │  │  │  ├─ results_truncated_st.py
   │     │  │  │  │  ├─ ships.csv
   │     │  │  │  │  ├─ sm3533.csv
   │     │  │  │  │  ├─ yhat_mnlogit.csv
   │     │  │  │  │  ├─ yhat_poisson.csv
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ results_count_margins.cpython-313.pyc
   │     │  │  │  │     ├─ results_count_robust_cluster.cpython-313.pyc
   │     │  │  │  │     ├─ results_discrete.cpython-313.pyc
   │     │  │  │  │     ├─ results_glm_logit_constrained.cpython-313.pyc
   │     │  │  │  │     ├─ results_poisson_constrained.cpython-313.pyc
   │     │  │  │  │     ├─ results_predict.cpython-313.pyc
   │     │  │  │  │     ├─ results_truncated.cpython-313.pyc
   │     │  │  │  │     ├─ results_truncated_st.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_conditional.py
   │     │  │  │  ├─ test_constrained.py
   │     │  │  │  ├─ test_count_model.py
   │     │  │  │  ├─ test_diagnostic.py
   │     │  │  │  ├─ test_discrete.py
   │     │  │  │  ├─ test_margins.py
   │     │  │  │  ├─ test_predict.py
   │     │  │  │  ├─ test_sandwich_cov.py
   │     │  │  │  ├─ test_truncated_model.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_conditional.cpython-313.pyc
   │     │  │  │     ├─ test_constrained.cpython-313.pyc
   │     │  │  │     ├─ test_count_model.cpython-313.pyc
   │     │  │  │     ├─ test_diagnostic.cpython-313.pyc
   │     │  │  │     ├─ test_discrete.cpython-313.pyc
   │     │  │  │     ├─ test_margins.cpython-313.pyc
   │     │  │  │     ├─ test_predict.cpython-313.pyc
   │     │  │  │     ├─ test_sandwich_cov.cpython-313.pyc
   │     │  │  │     ├─ test_truncated_model.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ truncated_model.py
   │     │  │  ├─ _diagnostics_count.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ conditional_models.cpython-313.pyc
   │     │  │     ├─ count_model.cpython-313.pyc
   │     │  │     ├─ diagnostic.cpython-313.pyc
   │     │  │     ├─ discrete_margins.cpython-313.pyc
   │     │  │     ├─ discrete_model.cpython-313.pyc
   │     │  │     ├─ truncated_model.cpython-313.pyc
   │     │  │     ├─ _diagnostics_count.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ distributions
   │     │  │  ├─ bernstein.py
   │     │  │  ├─ copula
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ archimedean.py
   │     │  │  │  ├─ copulas.py
   │     │  │  │  ├─ depfunc_ev.py
   │     │  │  │  ├─ elliptical.py
   │     │  │  │  ├─ extreme_value.py
   │     │  │  │  ├─ other_copulas.py
   │     │  │  │  ├─ transforms.py
   │     │  │  │  ├─ _special.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ archimedean.cpython-313.pyc
   │     │  │  │     ├─ copulas.cpython-313.pyc
   │     │  │  │     ├─ depfunc_ev.cpython-313.pyc
   │     │  │  │     ├─ elliptical.cpython-313.pyc
   │     │  │  │     ├─ extreme_value.cpython-313.pyc
   │     │  │  │     ├─ other_copulas.cpython-313.pyc
   │     │  │  │     ├─ transforms.cpython-313.pyc
   │     │  │  │     ├─ _special.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ discrete.py
   │     │  │  ├─ edgeworth.py
   │     │  │  ├─ empirical_distribution.py
   │     │  │  ├─ mixture_rvs.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_bernstein.py
   │     │  │  │  ├─ test_discrete.py
   │     │  │  │  ├─ test_ecdf.py
   │     │  │  │  ├─ test_edgeworth.py
   │     │  │  │  ├─ test_mixture.py
   │     │  │  │  ├─ test_tools.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_bernstein.cpython-313.pyc
   │     │  │  │     ├─ test_discrete.cpython-313.pyc
   │     │  │  │     ├─ test_ecdf.cpython-313.pyc
   │     │  │  │     ├─ test_edgeworth.cpython-313.pyc
   │     │  │  │     ├─ test_mixture.cpython-313.pyc
   │     │  │  │     ├─ test_tools.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tools.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ bernstein.cpython-313.pyc
   │     │  │     ├─ discrete.cpython-313.pyc
   │     │  │     ├─ edgeworth.cpython-313.pyc
   │     │  │     ├─ empirical_distribution.cpython-313.pyc
   │     │  │     ├─ mixture_rvs.cpython-313.pyc
   │     │  │     ├─ tools.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ duration
   │     │  │  ├─ api.py
   │     │  │  ├─ hazard_regression.py
   │     │  │  ├─ survfunc.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ bmt.csv
   │     │  │  │  │  ├─ bmt_results.csv
   │     │  │  │  │  ├─ phreg_gentests.py
   │     │  │  │  │  ├─ survival_data_1000_10.csv
   │     │  │  │  │  ├─ survival_data_100_5.csv
   │     │  │  │  │  ├─ survival_data_20_1.csv
   │     │  │  │  │  ├─ survival_data_50_1.csv
   │     │  │  │  │  ├─ survival_data_50_2.csv
   │     │  │  │  │  ├─ survival_enet_r_results.py
   │     │  │  │  │  ├─ survival_r_results.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ phreg_gentests.cpython-313.pyc
   │     │  │  │  │     ├─ survival_enet_r_results.cpython-313.pyc
   │     │  │  │  │     ├─ survival_r_results.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_phreg.py
   │     │  │  │  ├─ test_survfunc.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_phreg.cpython-313.pyc
   │     │  │  │     ├─ test_survfunc.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _kernel_estimates.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ hazard_regression.cpython-313.pyc
   │     │  │     ├─ survfunc.cpython-313.pyc
   │     │  │     ├─ _kernel_estimates.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ emplike
   │     │  │  ├─ aft_el.py
   │     │  │  ├─ api.py
   │     │  │  ├─ descriptive.py
   │     │  │  ├─ elanova.py
   │     │  │  ├─ elregress.py
   │     │  │  ├─ originregress.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ el_results.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ el_results.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_aft.py
   │     │  │  │  ├─ test_anova.py
   │     │  │  │  ├─ test_descriptive.py
   │     │  │  │  ├─ test_origin.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_aft.cpython-313.pyc
   │     │  │  │     ├─ test_anova.cpython-313.pyc
   │     │  │  │     ├─ test_descriptive.cpython-313.pyc
   │     │  │  │     ├─ test_origin.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ aft_el.cpython-313.pyc
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ descriptive.cpython-313.pyc
   │     │  │     ├─ elanova.cpython-313.pyc
   │     │  │     ├─ elregress.cpython-313.pyc
   │     │  │     ├─ originregress.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ formula
   │     │  │  ├─ api.py
   │     │  │  ├─ formulatools.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_formula.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_formula.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ formulatools.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ gam
   │     │  │  ├─ api.py
   │     │  │  ├─ gam_cross_validation
   │     │  │  │  ├─ cross_validators.py
   │     │  │  │  ├─ gam_cross_validation.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cross_validators.cpython-313.pyc
   │     │  │  │     ├─ gam_cross_validation.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ gam_penalties.py
   │     │  │  ├─ generalized_additive_model.py
   │     │  │  ├─ smooth_basis.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ autos.csv
   │     │  │  │  │  ├─ autos_exog.csv
   │     │  │  │  │  ├─ autos_predict.csv
   │     │  │  │  │  ├─ cubic_cyclic_splines_from_mgcv.csv
   │     │  │  │  │  ├─ gam_PIRLS_results.csv
   │     │  │  │  │  ├─ logit_gam_mgcv.csv
   │     │  │  │  │  ├─ motorcycle.csv
   │     │  │  │  │  ├─ prediction_from_mgcv.csv
   │     │  │  │  │  ├─ results_mpg_bs.py
   │     │  │  │  │  ├─ results_mpg_bs_poisson.py
   │     │  │  │  │  ├─ results_pls.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ results_mpg_bs.cpython-313.pyc
   │     │  │  │  │     ├─ results_mpg_bs_poisson.cpython-313.pyc
   │     │  │  │  │     ├─ results_pls.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_gam.py
   │     │  │  │  ├─ test_penalized.py
   │     │  │  │  ├─ test_smooth_basis.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_gam.cpython-313.pyc
   │     │  │  │     ├─ test_penalized.cpython-313.pyc
   │     │  │  │     ├─ test_smooth_basis.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ gam_penalties.cpython-313.pyc
   │     │  │     ├─ generalized_additive_model.cpython-313.pyc
   │     │  │     ├─ smooth_basis.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ genmod
   │     │  │  ├─ api.py
   │     │  │  ├─ bayes_mixed_glm.py
   │     │  │  ├─ cov_struct.py
   │     │  │  ├─ families
   │     │  │  │  ├─ family.py
   │     │  │  │  ├─ links.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_family.py
   │     │  │  │  │  ├─ test_link.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_family.cpython-313.pyc
   │     │  │  │  │     ├─ test_link.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ varfuncs.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ family.cpython-313.pyc
   │     │  │  │     ├─ links.cpython-313.pyc
   │     │  │  │     ├─ varfuncs.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ generalized_estimating_equations.py
   │     │  │  ├─ generalized_linear_model.py
   │     │  │  ├─ qif.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ gee_categorical_simulation_check.py
   │     │  │  │  ├─ gee_gaussian_simulation_check.py
   │     │  │  │  ├─ gee_poisson_simulation_check.py
   │     │  │  │  ├─ gee_simulation_check.py
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ elastic_net_generate_tests.py
   │     │  │  │  │  ├─ enet_binomial.csv
   │     │  │  │  │  ├─ enet_poisson.csv
   │     │  │  │  │  ├─ epil.csv
   │     │  │  │  │  ├─ gee_generate_tests.py
   │     │  │  │  │  ├─ gee_linear_1.csv
   │     │  │  │  │  ├─ gee_logistic_1.csv
   │     │  │  │  │  ├─ gee_nested_linear_1.csv
   │     │  │  │  │  ├─ gee_nominal_1.csv
   │     │  │  │  │  ├─ gee_ordinal_1.csv
   │     │  │  │  │  ├─ gee_poisson_1.csv
   │     │  │  │  │  ├─ glmnet_r_results.py
   │     │  │  │  │  ├─ glm_test_resids.py
   │     │  │  │  │  ├─ igaussident_resids.csv
   │     │  │  │  │  ├─ inv_gaussian.csv
   │     │  │  │  │  ├─ iris.csv
   │     │  │  │  │  ├─ medparlogresids.csv
   │     │  │  │  │  ├─ results_glm.py
   │     │  │  │  │  ├─ results_glm_poisson_weights.py
   │     │  │  │  │  ├─ results_tweedie_aweights_nonrobust.csv
   │     │  │  │  │  ├─ res_R_var_weight.py
   │     │  │  │  │  ├─ stata_cancer_glm.csv
   │     │  │  │  │  ├─ stata_lbw_glm.csv
   │     │  │  │  │  ├─ stata_medpar1_glm.csv
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ elastic_net_generate_tests.cpython-313.pyc
   │     │  │  │  │     ├─ gee_generate_tests.cpython-313.pyc
   │     │  │  │  │     ├─ glmnet_r_results.cpython-313.pyc
   │     │  │  │  │     ├─ glm_test_resids.cpython-313.pyc
   │     │  │  │  │     ├─ results_glm.cpython-313.pyc
   │     │  │  │  │     ├─ results_glm_poisson_weights.cpython-313.pyc
   │     │  │  │  │     ├─ res_R_var_weight.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_bayes_mixed_glm.py
   │     │  │  │  ├─ test_constrained.py
   │     │  │  │  ├─ test_gee.py
   │     │  │  │  ├─ test_gee_glm.py
   │     │  │  │  ├─ test_glm.py
   │     │  │  │  ├─ test_glm_weights.py
   │     │  │  │  ├─ test_qif.py
   │     │  │  │  ├─ test_score_test.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ gee_categorical_simulation_check.cpython-313.pyc
   │     │  │  │     ├─ gee_gaussian_simulation_check.cpython-313.pyc
   │     │  │  │     ├─ gee_poisson_simulation_check.cpython-313.pyc
   │     │  │  │     ├─ gee_simulation_check.cpython-313.pyc
   │     │  │  │     ├─ test_bayes_mixed_glm.cpython-313.pyc
   │     │  │  │     ├─ test_constrained.cpython-313.pyc
   │     │  │  │     ├─ test_gee.cpython-313.pyc
   │     │  │  │     ├─ test_gee_glm.cpython-313.pyc
   │     │  │  │     ├─ test_glm.cpython-313.pyc
   │     │  │  │     ├─ test_glm_weights.cpython-313.pyc
   │     │  │  │     ├─ test_qif.cpython-313.pyc
   │     │  │  │     ├─ test_score_test.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _tweedie_compound_poisson.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ bayes_mixed_glm.cpython-313.pyc
   │     │  │     ├─ cov_struct.cpython-313.pyc
   │     │  │     ├─ generalized_estimating_equations.cpython-313.pyc
   │     │  │     ├─ generalized_linear_model.cpython-313.pyc
   │     │  │     ├─ qif.cpython-313.pyc
   │     │  │     ├─ _tweedie_compound_poisson.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ graphics
   │     │  │  ├─ agreement.py
   │     │  │  ├─ api.py
   │     │  │  ├─ boxplots.py
   │     │  │  ├─ correlation.py
   │     │  │  ├─ dotplots.py
   │     │  │  ├─ factorplots.py
   │     │  │  ├─ functional.py
   │     │  │  ├─ gofplots.py
   │     │  │  ├─ mosaicplot.py
   │     │  │  ├─ plottools.py
   │     │  │  ├─ plot_grids.py
   │     │  │  ├─ regressionplots.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_agreement.py
   │     │  │  │  ├─ test_boxplots.py
   │     │  │  │  ├─ test_correlation.py
   │     │  │  │  ├─ test_dotplot.py
   │     │  │  │  ├─ test_factorplots.py
   │     │  │  │  ├─ test_functional.py
   │     │  │  │  ├─ test_gofplots.py
   │     │  │  │  ├─ test_mosaicplot.py
   │     │  │  │  ├─ test_regressionplots.py
   │     │  │  │  ├─ test_tsaplots.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_agreement.cpython-313.pyc
   │     │  │  │     ├─ test_boxplots.cpython-313.pyc
   │     │  │  │     ├─ test_correlation.cpython-313.pyc
   │     │  │  │     ├─ test_dotplot.cpython-313.pyc
   │     │  │  │     ├─ test_factorplots.cpython-313.pyc
   │     │  │  │     ├─ test_functional.cpython-313.pyc
   │     │  │  │     ├─ test_gofplots.cpython-313.pyc
   │     │  │  │     ├─ test_mosaicplot.cpython-313.pyc
   │     │  │  │     ├─ test_regressionplots.cpython-313.pyc
   │     │  │  │     ├─ test_tsaplots.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tsaplots.py
   │     │  │  ├─ tukeyplot.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ _regressionplots_doc.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ agreement.cpython-313.pyc
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ boxplots.cpython-313.pyc
   │     │  │     ├─ correlation.cpython-313.pyc
   │     │  │     ├─ dotplots.cpython-313.pyc
   │     │  │     ├─ factorplots.cpython-313.pyc
   │     │  │     ├─ functional.cpython-313.pyc
   │     │  │     ├─ gofplots.cpython-313.pyc
   │     │  │     ├─ mosaicplot.cpython-313.pyc
   │     │  │     ├─ plottools.cpython-313.pyc
   │     │  │     ├─ plot_grids.cpython-313.pyc
   │     │  │     ├─ regressionplots.cpython-313.pyc
   │     │  │     ├─ tsaplots.cpython-313.pyc
   │     │  │     ├─ tukeyplot.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ _regressionplots_doc.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ imputation
   │     │  │  ├─ bayes_mi.py
   │     │  │  ├─ mice.py
   │     │  │  ├─ ros.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_bayes_mi.py
   │     │  │  │  ├─ test_mice.py
   │     │  │  │  ├─ test_ros.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_bayes_mi.cpython-313.pyc
   │     │  │  │     ├─ test_mice.cpython-313.pyc
   │     │  │  │     ├─ test_ros.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ bayes_mi.cpython-313.pyc
   │     │  │     ├─ mice.cpython-313.pyc
   │     │  │     ├─ ros.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ interface
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ iolib
   │     │  │  ├─ api.py
   │     │  │  ├─ foreign.py
   │     │  │  ├─ openfile.py
   │     │  │  ├─ smpickle.py
   │     │  │  ├─ stata_summary_examples.py
   │     │  │  ├─ summary.py
   │     │  │  ├─ summary2.py
   │     │  │  ├─ table.py
   │     │  │  ├─ tableformatting.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ data_missing.dta
   │     │  │  │  │  ├─ macrodata.py
   │     │  │  │  │  ├─ time_series_examples.dta
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ macrodata.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_pickle.py
   │     │  │  │  ├─ test_summary.py
   │     │  │  │  ├─ test_summary2.py
   │     │  │  │  ├─ test_summary_old.py
   │     │  │  │  ├─ test_table.py
   │     │  │  │  ├─ test_table_econpy.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │     ├─ test_summary.cpython-313.pyc
   │     │  │  │     ├─ test_summary2.cpython-313.pyc
   │     │  │  │     ├─ test_summary_old.cpython-313.pyc
   │     │  │  │     ├─ test_table.cpython-313.pyc
   │     │  │  │     ├─ test_table_econpy.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ foreign.cpython-313.pyc
   │     │  │     ├─ openfile.cpython-313.pyc
   │     │  │     ├─ smpickle.cpython-313.pyc
   │     │  │     ├─ stata_summary_examples.cpython-313.pyc
   │     │  │     ├─ summary.cpython-313.pyc
   │     │  │     ├─ summary2.cpython-313.pyc
   │     │  │     ├─ table.cpython-313.pyc
   │     │  │     ├─ tableformatting.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ LICENSE.txt
   │     │  ├─ miscmodels
   │     │  │  ├─ api.py
   │     │  │  ├─ count.py
   │     │  │  ├─ nonlinls.py
   │     │  │  ├─ ordinal_model.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ ologit_ucla.csv
   │     │  │  │  │  ├─ results_ordinal_model.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ results_ordinal_model.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ results_tmodel.py
   │     │  │  │  ├─ test_generic_mle.py
   │     │  │  │  ├─ test_ordinal_model.py
   │     │  │  │  ├─ test_poisson.py
   │     │  │  │  ├─ test_tmodel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ results_tmodel.cpython-313.pyc
   │     │  │  │     ├─ test_generic_mle.cpython-313.pyc
   │     │  │  │     ├─ test_ordinal_model.cpython-313.pyc
   │     │  │  │     ├─ test_poisson.cpython-313.pyc
   │     │  │  │     ├─ test_tmodel.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tmodel.py
   │     │  │  ├─ try_mlecov.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ count.cpython-313.pyc
   │     │  │     ├─ nonlinls.cpython-313.pyc
   │     │  │     ├─ ordinal_model.cpython-313.pyc
   │     │  │     ├─ tmodel.cpython-313.pyc
   │     │  │     ├─ try_mlecov.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ multivariate
   │     │  │  ├─ api.py
   │     │  │  ├─ cancorr.py
   │     │  │  ├─ factor.py
   │     │  │  ├─ factor_rotation
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_rotation.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_rotation.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _analytic_rotation.py
   │     │  │  │  ├─ _gpa_rotation.py
   │     │  │  │  ├─ _wrappers.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _analytic_rotation.cpython-313.pyc
   │     │  │  │     ├─ _gpa_rotation.cpython-313.pyc
   │     │  │  │     ├─ _wrappers.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ manova.py
   │     │  │  ├─ multivariate_ols.py
   │     │  │  ├─ pca.py
   │     │  │  ├─ plots.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ datamlw.py
   │     │  │  │  │  ├─ factors_stata.csv
   │     │  │  │  │  ├─ factor_data.csv
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ datamlw.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_cancorr.py
   │     │  │  │  ├─ test_factor.py
   │     │  │  │  ├─ test_manova.py
   │     │  │  │  ├─ test_ml_factor.py
   │     │  │  │  ├─ test_multivariate_ols.py
   │     │  │  │  ├─ test_pca.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_cancorr.cpython-313.pyc
   │     │  │  │     ├─ test_factor.cpython-313.pyc
   │     │  │  │     ├─ test_manova.cpython-313.pyc
   │     │  │  │     ├─ test_ml_factor.cpython-313.pyc
   │     │  │  │     ├─ test_multivariate_ols.cpython-313.pyc
   │     │  │  │     ├─ test_pca.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ cancorr.cpython-313.pyc
   │     │  │     ├─ factor.cpython-313.pyc
   │     │  │     ├─ manova.cpython-313.pyc
   │     │  │     ├─ multivariate_ols.cpython-313.pyc
   │     │  │     ├─ pca.cpython-313.pyc
   │     │  │     ├─ plots.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ nonparametric
   │     │  │  ├─ api.py
   │     │  │  ├─ bandwidths.py
   │     │  │  ├─ kde.py
   │     │  │  ├─ kdetools.py
   │     │  │  ├─ kernels.py
   │     │  │  ├─ kernels_asymmetric.py
   │     │  │  ├─ kernel_density.py
   │     │  │  ├─ kernel_regression.py
   │     │  │  ├─ linbin.cp313-win_amd64.pyd
   │     │  │  ├─ smoothers_lowess.py
   │     │  │  ├─ smoothers_lowess_old.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ results_kcde.csv
   │     │  │  │  │  ├─ results_kde.csv
   │     │  │  │  │  ├─ results_kde_fft.csv
   │     │  │  │  │  ├─ results_kde_univ_weights.csv
   │     │  │  │  │  ├─ results_kde_weights.csv
   │     │  │  │  │  ├─ results_kernel_regression.csv
   │     │  │  │  │  ├─ test_lowess_delta.csv
   │     │  │  │  │  ├─ test_lowess_frac.csv
   │     │  │  │  │  ├─ test_lowess_iter.csv
   │     │  │  │  │  ├─ test_lowess_simple.csv
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_asymmetric.py
   │     │  │  │  ├─ test_bandwidths.py
   │     │  │  │  ├─ test_kde.py
   │     │  │  │  ├─ test_kernels.py
   │     │  │  │  ├─ test_kernel_density.py
   │     │  │  │  ├─ test_kernel_regression.py
   │     │  │  │  ├─ test_lowess.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_asymmetric.cpython-313.pyc
   │     │  │  │     ├─ test_bandwidths.cpython-313.pyc
   │     │  │  │     ├─ test_kde.cpython-313.pyc
   │     │  │  │     ├─ test_kernels.cpython-313.pyc
   │     │  │  │     ├─ test_kernel_density.cpython-313.pyc
   │     │  │  │     ├─ test_kernel_regression.cpython-313.pyc
   │     │  │  │     ├─ test_lowess.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _kernel_base.py
   │     │  │  ├─ _smoothers_lowess.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ bandwidths.cpython-313.pyc
   │     │  │     ├─ kde.cpython-313.pyc
   │     │  │     ├─ kdetools.cpython-313.pyc
   │     │  │     ├─ kernels.cpython-313.pyc
   │     │  │     ├─ kernels_asymmetric.cpython-313.pyc
   │     │  │     ├─ kernel_density.cpython-313.pyc
   │     │  │     ├─ kernel_regression.cpython-313.pyc
   │     │  │     ├─ smoothers_lowess.cpython-313.pyc
   │     │  │     ├─ smoothers_lowess_old.cpython-313.pyc
   │     │  │     ├─ _kernel_base.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ othermod
   │     │  │  ├─ api.py
   │     │  │  ├─ betareg.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ foodexpenditure.csv
   │     │  │  │  │  ├─ methylation-test.csv
   │     │  │  │  │  ├─ resid_methylation.csv
   │     │  │  │  │  ├─ results_betareg.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ results_betareg.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_beta.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_beta.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ betareg.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ regression
   │     │  │  ├─ dimred.py
   │     │  │  ├─ feasible_gls.py
   │     │  │  ├─ linear_model.py
   │     │  │  ├─ mixed_linear_model.py
   │     │  │  ├─ process_regression.py
   │     │  │  ├─ quantile_regression.py
   │     │  │  ├─ recursive_ls.py
   │     │  │  ├─ rolling.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ dietox.csv
   │     │  │  │  │  ├─ generate_lasso.py
   │     │  │  │  │  ├─ generate_lme.py
   │     │  │  │  │  ├─ glmnet_r_results.py
   │     │  │  │  │  ├─ lasso_data.csv
   │     │  │  │  │  ├─ leverage_influence_ols_nostars.txt
   │     │  │  │  │  ├─ lme00.csv
   │     │  │  │  │  ├─ lme01.csv
   │     │  │  │  │  ├─ lme02.csv
   │     │  │  │  │  ├─ lme03.csv
   │     │  │  │  │  ├─ lme04.csv
   │     │  │  │  │  ├─ lme05.csv
   │     │  │  │  │  ├─ lme06.csv
   │     │  │  │  │  ├─ lme07.csv
   │     │  │  │  │  ├─ lme08.csv
   │     │  │  │  │  ├─ lme09.csv
   │     │  │  │  │  ├─ lme10.csv
   │     │  │  │  │  ├─ lme11.csv
   │     │  │  │  │  ├─ lme_r_results.py
   │     │  │  │  │  ├─ macro_gr_corc_stata.py
   │     │  │  │  │  ├─ pastes.csv
   │     │  │  │  │  ├─ results_grunfeld_ols_robust_cluster.py
   │     │  │  │  │  ├─ results_macro_ols_robust.py
   │     │  │  │  │  ├─ results_quantile_regression.py
   │     │  │  │  │  ├─ results_regression.py
   │     │  │  │  │  ├─ results_rls_R.csv
   │     │  │  │  │  ├─ results_rls_stata.csv
   │     │  │  │  │  ├─ results_theil_textile.py
   │     │  │  │  │  ├─ theil_textile_predict.csv
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ generate_lasso.cpython-313.pyc
   │     │  │  │  │     ├─ generate_lme.cpython-313.pyc
   │     │  │  │  │     ├─ glmnet_r_results.cpython-313.pyc
   │     │  │  │  │     ├─ lme_r_results.cpython-313.pyc
   │     │  │  │  │     ├─ macro_gr_corc_stata.cpython-313.pyc
   │     │  │  │  │     ├─ results_grunfeld_ols_robust_cluster.cpython-313.pyc
   │     │  │  │  │     ├─ results_macro_ols_robust.cpython-313.pyc
   │     │  │  │  │     ├─ results_quantile_regression.cpython-313.pyc
   │     │  │  │  │     ├─ results_regression.cpython-313.pyc
   │     │  │  │  │     ├─ results_theil_textile.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_cov.py
   │     │  │  │  ├─ test_dimred.py
   │     │  │  │  ├─ test_glsar_gretl.py
   │     │  │  │  ├─ test_glsar_stata.py
   │     │  │  │  ├─ test_lme.py
   │     │  │  │  ├─ test_predict.py
   │     │  │  │  ├─ test_processreg.py
   │     │  │  │  ├─ test_quantile_regression.py
   │     │  │  │  ├─ test_recursive_ls.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_robustcov.py
   │     │  │  │  ├─ test_rolling.py
   │     │  │  │  ├─ test_theil.py
   │     │  │  │  ├─ test_tools.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_cov.cpython-313.pyc
   │     │  │  │     ├─ test_dimred.cpython-313.pyc
   │     │  │  │     ├─ test_glsar_gretl.cpython-313.pyc
   │     │  │  │     ├─ test_glsar_stata.cpython-313.pyc
   │     │  │  │     ├─ test_lme.cpython-313.pyc
   │     │  │  │     ├─ test_predict.cpython-313.pyc
   │     │  │  │     ├─ test_processreg.cpython-313.pyc
   │     │  │  │     ├─ test_quantile_regression.cpython-313.pyc
   │     │  │  │     ├─ test_recursive_ls.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_robustcov.cpython-313.pyc
   │     │  │  │     ├─ test_rolling.cpython-313.pyc
   │     │  │  │     ├─ test_theil.cpython-313.pyc
   │     │  │  │     ├─ test_tools.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _prediction.py
   │     │  │  ├─ _tools.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ dimred.cpython-313.pyc
   │     │  │     ├─ feasible_gls.cpython-313.pyc
   │     │  │     ├─ linear_model.cpython-313.pyc
   │     │  │     ├─ mixed_linear_model.cpython-313.pyc
   │     │  │     ├─ process_regression.cpython-313.pyc
   │     │  │     ├─ quantile_regression.cpython-313.pyc
   │     │  │     ├─ recursive_ls.cpython-313.pyc
   │     │  │     ├─ rolling.cpython-313.pyc
   │     │  │     ├─ _prediction.cpython-313.pyc
   │     │  │     ├─ _tools.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ robust
   │     │  │  ├─ norms.py
   │     │  │  ├─ robust_linear_model.py
   │     │  │  ├─ scale.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ results_norms.py
   │     │  │  │  │  ├─ results_rlm.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ results_norms.cpython-313.pyc
   │     │  │  │  │     ├─ results_rlm.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_mquantiles.py
   │     │  │  │  ├─ test_norms.py
   │     │  │  │  ├─ test_rlm.py
   │     │  │  │  ├─ test_scale.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_mquantiles.cpython-313.pyc
   │     │  │  │     ├─ test_norms.cpython-313.pyc
   │     │  │  │     ├─ test_rlm.cpython-313.pyc
   │     │  │  │     ├─ test_scale.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _qn.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ norms.cpython-313.pyc
   │     │  │     ├─ robust_linear_model.cpython-313.pyc
   │     │  │     ├─ scale.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ sandbox
   │     │  │  ├─ archive
   │     │  │  │  ├─ linalg_covmat.py
   │     │  │  │  ├─ linalg_decomp_1.py
   │     │  │  │  ├─ tsa.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ linalg_covmat.cpython-313.pyc
   │     │  │  │     ├─ linalg_decomp_1.cpython-313.pyc
   │     │  │  │     ├─ tsa.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ bspline.py
   │     │  │  ├─ datarich
   │     │  │  │  ├─ factormodels.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ factormodels.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ descstats.py
   │     │  │  ├─ distributions
   │     │  │  │  ├─ estimators.py
   │     │  │  │  ├─ examples
   │     │  │  │  │  ├─ ex_extras.py
   │     │  │  │  │  ├─ ex_fitfr.py
   │     │  │  │  │  ├─ ex_gof.py
   │     │  │  │  │  ├─ ex_mvelliptical.py
   │     │  │  │  │  ├─ ex_transf2.py
   │     │  │  │  │  ├─ matchdist.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ ex_extras.cpython-313.pyc
   │     │  │  │  │     ├─ ex_fitfr.cpython-313.pyc
   │     │  │  │  │     ├─ ex_gof.cpython-313.pyc
   │     │  │  │  │     ├─ ex_mvelliptical.cpython-313.pyc
   │     │  │  │  │     ├─ ex_transf2.cpython-313.pyc
   │     │  │  │  │     ├─ matchdist.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ extras.py
   │     │  │  │  ├─ genpareto.py
   │     │  │  │  ├─ gof_new.py
   │     │  │  │  ├─ multivariate.py
   │     │  │  │  ├─ mv_measures.py
   │     │  │  │  ├─ mv_normal.py
   │     │  │  │  ├─ otherdist.py
   │     │  │  │  ├─ quantize.py
   │     │  │  │  ├─ sppatch.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ check_moments.py
   │     │  │  │  │  ├─ distparams.py
   │     │  │  │  │  ├─ test_extras.py
   │     │  │  │  │  ├─ test_gof_new.py
   │     │  │  │  │  ├─ test_multivariate.py
   │     │  │  │  │  ├─ test_norm_expan.py
   │     │  │  │  │  ├─ test_transf.py
   │     │  │  │  │  ├─ _est_fit.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ check_moments.cpython-313.pyc
   │     │  │  │  │     ├─ distparams.cpython-313.pyc
   │     │  │  │  │     ├─ test_extras.cpython-313.pyc
   │     │  │  │  │     ├─ test_gof_new.cpython-313.pyc
   │     │  │  │  │     ├─ test_multivariate.cpython-313.pyc
   │     │  │  │  │     ├─ test_norm_expan.cpython-313.pyc
   │     │  │  │  │     ├─ test_transf.cpython-313.pyc
   │     │  │  │  │     ├─ _est_fit.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ transformed.py
   │     │  │  │  ├─ transform_functions.py
   │     │  │  │  ├─ try_max.py
   │     │  │  │  ├─ try_pot.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ estimators.cpython-313.pyc
   │     │  │  │     ├─ extras.cpython-313.pyc
   │     │  │  │     ├─ genpareto.cpython-313.pyc
   │     │  │  │     ├─ gof_new.cpython-313.pyc
   │     │  │  │     ├─ multivariate.cpython-313.pyc
   │     │  │  │     ├─ mv_measures.cpython-313.pyc
   │     │  │  │     ├─ mv_normal.cpython-313.pyc
   │     │  │  │     ├─ otherdist.cpython-313.pyc
   │     │  │  │     ├─ quantize.cpython-313.pyc
   │     │  │  │     ├─ sppatch.cpython-313.pyc
   │     │  │  │     ├─ transformed.cpython-313.pyc
   │     │  │  │     ├─ transform_functions.cpython-313.pyc
   │     │  │  │     ├─ try_max.cpython-313.pyc
   │     │  │  │     ├─ try_pot.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ gam.py
   │     │  │  ├─ infotheo.py
   │     │  │  ├─ mcevaluate
   │     │  │  │  ├─ arma.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ arma.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ mle.py
   │     │  │  ├─ multilinear.py
   │     │  │  ├─ nonparametric
   │     │  │  │  ├─ densityorthopoly.py
   │     │  │  │  ├─ dgp_examples.py
   │     │  │  │  ├─ kde2.py
   │     │  │  │  ├─ kdecovclass.py
   │     │  │  │  ├─ kernels.py
   │     │  │  │  ├─ kernel_extras.py
   │     │  │  │  ├─ smoothers.py
   │     │  │  │  ├─ testdata.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ ex_gam_am_new.py
   │     │  │  │  │  ├─ ex_gam_new.py
   │     │  │  │  │  ├─ ex_smoothers.py
   │     │  │  │  │  ├─ test_kernel_extras.py
   │     │  │  │  │  ├─ test_smoothers.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ ex_gam_am_new.cpython-313.pyc
   │     │  │  │  │     ├─ ex_gam_new.cpython-313.pyc
   │     │  │  │  │     ├─ ex_smoothers.cpython-313.pyc
   │     │  │  │  │     ├─ test_kernel_extras.cpython-313.pyc
   │     │  │  │  │     ├─ test_smoothers.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ densityorthopoly.cpython-313.pyc
   │     │  │  │     ├─ dgp_examples.cpython-313.pyc
   │     │  │  │     ├─ kde2.cpython-313.pyc
   │     │  │  │     ├─ kdecovclass.cpython-313.pyc
   │     │  │  │     ├─ kernels.cpython-313.pyc
   │     │  │  │     ├─ kernel_extras.cpython-313.pyc
   │     │  │  │     ├─ smoothers.cpython-313.pyc
   │     │  │  │     ├─ testdata.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ panel
   │     │  │  │  ├─ correlation_structures.py
   │     │  │  │  ├─ mixed.py
   │     │  │  │  ├─ panelmod.py
   │     │  │  │  ├─ panel_short.py
   │     │  │  │  ├─ random_panel.py
   │     │  │  │  ├─ sandwich_covariance_generic.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_random_panel.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_random_panel.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ correlation_structures.cpython-313.pyc
   │     │  │  │     ├─ mixed.cpython-313.pyc
   │     │  │  │     ├─ panelmod.cpython-313.pyc
   │     │  │  │     ├─ panel_short.cpython-313.pyc
   │     │  │  │     ├─ random_panel.cpython-313.pyc
   │     │  │  │     ├─ sandwich_covariance_generic.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pca.py
   │     │  │  ├─ predict_functional.py
   │     │  │  ├─ regression
   │     │  │  │  ├─ anova_nistcertified.py
   │     │  │  │  ├─ ar_panel.py
   │     │  │  │  ├─ example_kernridge.py
   │     │  │  │  ├─ gmm.py
   │     │  │  │  ├─ kernridgeregress_class.py
   │     │  │  │  ├─ ols_anova_original.py
   │     │  │  │  ├─ onewaygls.py
   │     │  │  │  ├─ penalized.py
   │     │  │  │  ├─ predstd.py
   │     │  │  │  ├─ runmnl.py
   │     │  │  │  ├─ sympy_diff.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ griliches76.dta
   │     │  │  │  │  ├─ racd10data_with_transformed.csv
   │     │  │  │  │  ├─ results_gmm_griliches.py
   │     │  │  │  │  ├─ results_gmm_griliches_iter.py
   │     │  │  │  │  ├─ results_gmm_poisson.py
   │     │  │  │  │  ├─ results_ivreg2_griliches.py
   │     │  │  │  │  ├─ test_gmm.py
   │     │  │  │  │  ├─ test_gmm_poisson.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ results_gmm_griliches.cpython-313.pyc
   │     │  │  │  │     ├─ results_gmm_griliches_iter.cpython-313.pyc
   │     │  │  │  │     ├─ results_gmm_poisson.cpython-313.pyc
   │     │  │  │  │     ├─ results_ivreg2_griliches.cpython-313.pyc
   │     │  │  │  │     ├─ test_gmm.cpython-313.pyc
   │     │  │  │  │     ├─ test_gmm_poisson.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ tools.py
   │     │  │  │  ├─ treewalkerclass.py
   │     │  │  │  ├─ try_catdata.py
   │     │  │  │  ├─ try_ols_anova.py
   │     │  │  │  ├─ try_treewalker.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ anova_nistcertified.cpython-313.pyc
   │     │  │  │     ├─ ar_panel.cpython-313.pyc
   │     │  │  │     ├─ example_kernridge.cpython-313.pyc
   │     │  │  │     ├─ gmm.cpython-313.pyc
   │     │  │  │     ├─ kernridgeregress_class.cpython-313.pyc
   │     │  │  │     ├─ ols_anova_original.cpython-313.pyc
   │     │  │  │     ├─ onewaygls.cpython-313.pyc
   │     │  │  │     ├─ penalized.cpython-313.pyc
   │     │  │  │     ├─ predstd.cpython-313.pyc
   │     │  │  │     ├─ runmnl.cpython-313.pyc
   │     │  │  │     ├─ sympy_diff.cpython-313.pyc
   │     │  │  │     ├─ tools.cpython-313.pyc
   │     │  │  │     ├─ treewalkerclass.cpython-313.pyc
   │     │  │  │     ├─ try_catdata.cpython-313.pyc
   │     │  │  │     ├─ try_ols_anova.cpython-313.pyc
   │     │  │  │     ├─ try_treewalker.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ rls.py
   │     │  │  ├─ stats
   │     │  │  │  ├─ contrast_tools.py
   │     │  │  │  ├─ diagnostic.py
   │     │  │  │  ├─ ex_newtests.py
   │     │  │  │  ├─ multicomp.py
   │     │  │  │  ├─ runs.py
   │     │  │  │  ├─ stats_dhuard.py
   │     │  │  │  ├─ stats_mstats_short.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_multicomp.py
   │     │  │  │  │  ├─ test_runs.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_multicomp.cpython-313.pyc
   │     │  │  │  │     ├─ test_runs.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ contrast_tools.cpython-313.pyc
   │     │  │  │     ├─ diagnostic.cpython-313.pyc
   │     │  │  │     ├─ ex_newtests.cpython-313.pyc
   │     │  │  │     ├─ multicomp.cpython-313.pyc
   │     │  │  │     ├─ runs.cpython-313.pyc
   │     │  │  │     ├─ stats_dhuard.cpython-313.pyc
   │     │  │  │     ├─ stats_mstats_short.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ sysreg.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ maketests_mlabwrap.py
   │     │  │  │  ├─ savervs.py
   │     │  │  │  ├─ test_gam.py
   │     │  │  │  ├─ test_pca.py
   │     │  │  │  ├─ test_predict_functional.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ maketests_mlabwrap.cpython-313.pyc
   │     │  │  │     ├─ savervs.cpython-313.pyc
   │     │  │  │     ├─ test_gam.cpython-313.pyc
   │     │  │  │     ├─ test_pca.cpython-313.pyc
   │     │  │  │     ├─ test_predict_functional.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tools
   │     │  │  │  ├─ cross_val.py
   │     │  │  │  ├─ mctools.py
   │     │  │  │  ├─ tools_pca.py
   │     │  │  │  ├─ try_mctools.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cross_val.cpython-313.pyc
   │     │  │  │     ├─ mctools.cpython-313.pyc
   │     │  │  │     ├─ tools_pca.cpython-313.pyc
   │     │  │  │     ├─ try_mctools.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tsa
   │     │  │  │  ├─ diffusion.py
   │     │  │  │  ├─ diffusion2.py
   │     │  │  │  ├─ example_arma.py
   │     │  │  │  ├─ fftarma.py
   │     │  │  │  ├─ movstat.py
   │     │  │  │  ├─ try_arma_more.py
   │     │  │  │  ├─ try_fi.py
   │     │  │  │  ├─ try_var_convolve.py
   │     │  │  │  ├─ varma.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ diffusion.cpython-313.pyc
   │     │  │  │     ├─ diffusion2.cpython-313.pyc
   │     │  │  │     ├─ example_arma.cpython-313.pyc
   │     │  │  │     ├─ fftarma.cpython-313.pyc
   │     │  │  │     ├─ movstat.cpython-313.pyc
   │     │  │  │     ├─ try_arma_more.cpython-313.pyc
   │     │  │  │     ├─ try_fi.cpython-313.pyc
   │     │  │  │     ├─ try_var_convolve.cpython-313.pyc
   │     │  │  │     ├─ varma.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ bspline.cpython-313.pyc
   │     │  │     ├─ descstats.cpython-313.pyc
   │     │  │     ├─ gam.cpython-313.pyc
   │     │  │     ├─ infotheo.cpython-313.pyc
   │     │  │     ├─ mle.cpython-313.pyc
   │     │  │     ├─ multilinear.cpython-313.pyc
   │     │  │     ├─ pca.cpython-313.pyc
   │     │  │     ├─ predict_functional.cpython-313.pyc
   │     │  │     ├─ rls.cpython-313.pyc
   │     │  │     ├─ sysreg.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ setup.cfg
   │     │  ├─ src
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ stats
   │     │  │  ├─ anova.py
   │     │  │  ├─ api.py
   │     │  │  ├─ base.py
   │     │  │  ├─ contingency_tables.py
   │     │  │  ├─ contrast.py
   │     │  │  ├─ correlation_tools.py
   │     │  │  ├─ descriptivestats.py
   │     │  │  ├─ diagnostic.py
   │     │  │  ├─ diagnostic_gen.py
   │     │  │  ├─ dist_dependence_measures.py
   │     │  │  ├─ effect_size.py
   │     │  │  ├─ gof.py
   │     │  │  ├─ inter_rater.py
   │     │  │  ├─ knockoff_regeffects.py
   │     │  │  ├─ libqsturng
   │     │  │  │  ├─ CH.r
   │     │  │  │  ├─ LICENSE.txt
   │     │  │  │  ├─ make_tbls.py
   │     │  │  │  ├─ qsturng_.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ bootleg.dat
   │     │  │  │  │  ├─ test_qsturng.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_qsturng.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ make_tbls.cpython-313.pyc
   │     │  │  │     ├─ qsturng_.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ mediation.py
   │     │  │  ├─ meta_analysis.py
   │     │  │  ├─ moment_helpers.py
   │     │  │  ├─ multicomp.py
   │     │  │  ├─ multitest.py
   │     │  │  ├─ multivariate.py
   │     │  │  ├─ multivariate_tools.py
   │     │  │  ├─ nonparametric.py
   │     │  │  ├─ oaxaca.py
   │     │  │  ├─ oneway.py
   │     │  │  ├─ outliers_influence.py
   │     │  │  ├─ power.py
   │     │  │  ├─ proportion.py
   │     │  │  ├─ rates.py
   │     │  │  ├─ regularized_covariance.py
   │     │  │  ├─ robust_compare.py
   │     │  │  ├─ sandwich_covariance.py
   │     │  │  ├─ stattools.py
   │     │  │  ├─ tabledist.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ binary_constrict.csv
   │     │  │  │  │  ├─ bootleg.csv
   │     │  │  │  │  ├─ contingency_table_r_results.csv
   │     │  │  │  │  ├─ data.dat
   │     │  │  │  │  ├─ framing.csv
   │     │  │  │  │  ├─ influence_lsdiag_R.json
   │     │  │  │  │  ├─ influence_measures_bool_R.csv
   │     │  │  │  │  ├─ influence_measures_R.csv
   │     │  │  │  │  ├─ lilliefors_critical_value_simulation.py
   │     │  │  │  │  ├─ results_influence_logit.csv
   │     │  │  │  │  ├─ results_meta.py
   │     │  │  │  │  ├─ results_multinomial_proportions.py
   │     │  │  │  │  ├─ results_panelrobust.py
   │     │  │  │  │  ├─ results_power.py
   │     │  │  │  │  ├─ results_proportion.py
   │     │  │  │  │  ├─ results_rates.py
   │     │  │  │  │  ├─ wspec1.csv
   │     │  │  │  │  ├─ wspec2.csv
   │     │  │  │  │  ├─ wspec3.csv
   │     │  │  │  │  ├─ wspec4.csv
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ lilliefors_critical_value_simulation.cpython-313.pyc
   │     │  │  │  │     ├─ results_meta.cpython-313.pyc
   │     │  │  │  │     ├─ results_multinomial_proportions.cpython-313.pyc
   │     │  │  │  │     ├─ results_panelrobust.cpython-313.pyc
   │     │  │  │  │     ├─ results_power.cpython-313.pyc
   │     │  │  │  │     ├─ results_proportion.cpython-313.pyc
   │     │  │  │  │     ├─ results_rates.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_anova.py
   │     │  │  │  ├─ test_anova_rm.py
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_contingency_tables.py
   │     │  │  │  ├─ test_contrast.py
   │     │  │  │  ├─ test_correlation.py
   │     │  │  │  ├─ test_corrpsd.py
   │     │  │  │  ├─ test_data.txt
   │     │  │  │  ├─ test_deltacov.py
   │     │  │  │  ├─ test_descriptivestats.py
   │     │  │  │  ├─ test_diagnostic.py
   │     │  │  │  ├─ test_diagnostic_other.py
   │     │  │  │  ├─ test_dist_dependant_measures.py
   │     │  │  │  ├─ test_effectsize.py
   │     │  │  │  ├─ test_gof.py
   │     │  │  │  ├─ test_groups_sw.py
   │     │  │  │  ├─ test_influence.py
   │     │  │  │  ├─ test_inter_rater.py
   │     │  │  │  ├─ test_knockoff.py
   │     │  │  │  ├─ test_lilliefors.py
   │     │  │  │  ├─ test_mediation.py
   │     │  │  │  ├─ test_meta.py
   │     │  │  │  ├─ test_moment_helpers.py
   │     │  │  │  ├─ test_multi.py
   │     │  │  │  ├─ test_multivariate.py
   │     │  │  │  ├─ test_nonparametric.py
   │     │  │  │  ├─ test_oaxaca.py
   │     │  │  │  ├─ test_oneway.py
   │     │  │  │  ├─ test_outliers_influence.py
   │     │  │  │  ├─ test_pairwise.py
   │     │  │  │  ├─ test_panel_robustcov.py
   │     │  │  │  ├─ test_power.py
   │     │  │  │  ├─ test_proportion.py
   │     │  │  │  ├─ test_qsturng.py
   │     │  │  │  ├─ test_rates_poisson.py
   │     │  │  │  ├─ test_regularized_covariance.py
   │     │  │  │  ├─ test_robust_compare.py
   │     │  │  │  ├─ test_sandwich.py
   │     │  │  │  ├─ test_statstools.py
   │     │  │  │  ├─ test_tabledist.py
   │     │  │  │  ├─ test_tost.py
   │     │  │  │  ├─ test_weightstats.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_anova.cpython-313.pyc
   │     │  │  │     ├─ test_anova_rm.cpython-313.pyc
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_contingency_tables.cpython-313.pyc
   │     │  │  │     ├─ test_contrast.cpython-313.pyc
   │     │  │  │     ├─ test_correlation.cpython-313.pyc
   │     │  │  │     ├─ test_corrpsd.cpython-313.pyc
   │     │  │  │     ├─ test_deltacov.cpython-313.pyc
   │     │  │  │     ├─ test_descriptivestats.cpython-313.pyc
   │     │  │  │     ├─ test_diagnostic.cpython-313.pyc
   │     │  │  │     ├─ test_diagnostic_other.cpython-313.pyc
   │     │  │  │     ├─ test_dist_dependant_measures.cpython-313.pyc
   │     │  │  │     ├─ test_effectsize.cpython-313.pyc
   │     │  │  │     ├─ test_gof.cpython-313.pyc
   │     │  │  │     ├─ test_groups_sw.cpython-313.pyc
   │     │  │  │     ├─ test_influence.cpython-313.pyc
   │     │  │  │     ├─ test_inter_rater.cpython-313.pyc
   │     │  │  │     ├─ test_knockoff.cpython-313.pyc
   │     │  │  │     ├─ test_lilliefors.cpython-313.pyc
   │     │  │  │     ├─ test_mediation.cpython-313.pyc
   │     │  │  │     ├─ test_meta.cpython-313.pyc
   │     │  │  │     ├─ test_moment_helpers.cpython-313.pyc
   │     │  │  │     ├─ test_multi.cpython-313.pyc
   │     │  │  │     ├─ test_multivariate.cpython-313.pyc
   │     │  │  │     ├─ test_nonparametric.cpython-313.pyc
   │     │  │  │     ├─ test_oaxaca.cpython-313.pyc
   │     │  │  │     ├─ test_oneway.cpython-313.pyc
   │     │  │  │     ├─ test_outliers_influence.cpython-313.pyc
   │     │  │  │     ├─ test_pairwise.cpython-313.pyc
   │     │  │  │     ├─ test_panel_robustcov.cpython-313.pyc
   │     │  │  │     ├─ test_power.cpython-313.pyc
   │     │  │  │     ├─ test_proportion.cpython-313.pyc
   │     │  │  │     ├─ test_qsturng.cpython-313.pyc
   │     │  │  │     ├─ test_rates_poisson.cpython-313.pyc
   │     │  │  │     ├─ test_regularized_covariance.cpython-313.pyc
   │     │  │  │     ├─ test_robust_compare.cpython-313.pyc
   │     │  │  │     ├─ test_sandwich.cpython-313.pyc
   │     │  │  │     ├─ test_statstools.cpython-313.pyc
   │     │  │  │     ├─ test_tabledist.cpython-313.pyc
   │     │  │  │     ├─ test_tost.cpython-313.pyc
   │     │  │  │     ├─ test_weightstats.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ weightstats.py
   │     │  │  ├─ _adnorm.py
   │     │  │  ├─ _delta_method.py
   │     │  │  ├─ _diagnostic_other.py
   │     │  │  ├─ _inference_tools.py
   │     │  │  ├─ _knockoff.py
   │     │  │  ├─ _lilliefors.py
   │     │  │  ├─ _lilliefors_critical_values.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ anova.cpython-313.pyc
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ contingency_tables.cpython-313.pyc
   │     │  │     ├─ contrast.cpython-313.pyc
   │     │  │     ├─ correlation_tools.cpython-313.pyc
   │     │  │     ├─ descriptivestats.cpython-313.pyc
   │     │  │     ├─ diagnostic.cpython-313.pyc
   │     │  │     ├─ diagnostic_gen.cpython-313.pyc
   │     │  │     ├─ dist_dependence_measures.cpython-313.pyc
   │     │  │     ├─ effect_size.cpython-313.pyc
   │     │  │     ├─ gof.cpython-313.pyc
   │     │  │     ├─ inter_rater.cpython-313.pyc
   │     │  │     ├─ knockoff_regeffects.cpython-313.pyc
   │     │  │     ├─ mediation.cpython-313.pyc
   │     │  │     ├─ meta_analysis.cpython-313.pyc
   │     │  │     ├─ moment_helpers.cpython-313.pyc
   │     │  │     ├─ multicomp.cpython-313.pyc
   │     │  │     ├─ multitest.cpython-313.pyc
   │     │  │     ├─ multivariate.cpython-313.pyc
   │     │  │     ├─ multivariate_tools.cpython-313.pyc
   │     │  │     ├─ nonparametric.cpython-313.pyc
   │     │  │     ├─ oaxaca.cpython-313.pyc
   │     │  │     ├─ oneway.cpython-313.pyc
   │     │  │     ├─ outliers_influence.cpython-313.pyc
   │     │  │     ├─ power.cpython-313.pyc
   │     │  │     ├─ proportion.cpython-313.pyc
   │     │  │     ├─ rates.cpython-313.pyc
   │     │  │     ├─ regularized_covariance.cpython-313.pyc
   │     │  │     ├─ robust_compare.cpython-313.pyc
   │     │  │     ├─ sandwich_covariance.cpython-313.pyc
   │     │  │     ├─ stattools.cpython-313.pyc
   │     │  │     ├─ tabledist.cpython-313.pyc
   │     │  │     ├─ weightstats.cpython-313.pyc
   │     │  │     ├─ _adnorm.cpython-313.pyc
   │     │  │     ├─ _delta_method.cpython-313.pyc
   │     │  │     ├─ _diagnostic_other.cpython-313.pyc
   │     │  │     ├─ _inference_tools.cpython-313.pyc
   │     │  │     ├─ _knockoff.cpython-313.pyc
   │     │  │     ├─ _lilliefors.cpython-313.pyc
   │     │  │     ├─ _lilliefors_critical_values.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tests
   │     │  │  ├─ test_package.py
   │     │  │  ├─ test_x13.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ test_package.cpython-313.pyc
   │     │  │     ├─ test_x13.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tools
   │     │  │  ├─ catadd.py
   │     │  │  ├─ data.py
   │     │  │  ├─ decorators.py
   │     │  │  ├─ docstring.py
   │     │  │  ├─ eval_measures.py
   │     │  │  ├─ grouputils.py
   │     │  │  ├─ linalg.py
   │     │  │  ├─ numdiff.py
   │     │  │  ├─ parallel.py
   │     │  │  ├─ print_version.py
   │     │  │  ├─ rng_qrng.py
   │     │  │  ├─ rootfinding.py
   │     │  │  ├─ sequences.py
   │     │  │  ├─ sm_exceptions.py
   │     │  │  ├─ testing.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_catadd.py
   │     │  │  │  ├─ test_data.py
   │     │  │  │  ├─ test_decorators.py
   │     │  │  │  ├─ test_docstring.py
   │     │  │  │  ├─ test_eval_measures.py
   │     │  │  │  ├─ test_grouputils.py
   │     │  │  │  ├─ test_linalg.py
   │     │  │  │  ├─ test_numdiff.py
   │     │  │  │  ├─ test_parallel.py
   │     │  │  │  ├─ test_rootfinding.py
   │     │  │  │  ├─ test_sequences.py
   │     │  │  │  ├─ test_testing.py
   │     │  │  │  ├─ test_tools.py
   │     │  │  │  ├─ test_transform_model.py
   │     │  │  │  ├─ test_web.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_catadd.cpython-313.pyc
   │     │  │  │     ├─ test_data.cpython-313.pyc
   │     │  │  │     ├─ test_decorators.cpython-313.pyc
   │     │  │  │     ├─ test_docstring.cpython-313.pyc
   │     │  │  │     ├─ test_eval_measures.cpython-313.pyc
   │     │  │  │     ├─ test_grouputils.cpython-313.pyc
   │     │  │  │     ├─ test_linalg.cpython-313.pyc
   │     │  │  │     ├─ test_numdiff.cpython-313.pyc
   │     │  │  │     ├─ test_parallel.cpython-313.pyc
   │     │  │  │     ├─ test_rootfinding.cpython-313.pyc
   │     │  │  │     ├─ test_sequences.cpython-313.pyc
   │     │  │  │     ├─ test_testing.cpython-313.pyc
   │     │  │  │     ├─ test_tools.cpython-313.pyc
   │     │  │  │     ├─ test_transform_model.cpython-313.pyc
   │     │  │  │     ├─ test_web.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tools.py
   │     │  │  ├─ transform_model.py
   │     │  │  ├─ typing.py
   │     │  │  ├─ validation
   │     │  │  │  ├─ decorators.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_validation.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_validation.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ validation.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ decorators.cpython-313.pyc
   │     │  │  │     ├─ validation.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ web.py
   │     │  │  ├─ _testing.py
   │     │  │  ├─ _test_runner.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ catadd.cpython-313.pyc
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ decorators.cpython-313.pyc
   │     │  │     ├─ docstring.cpython-313.pyc
   │     │  │     ├─ eval_measures.cpython-313.pyc
   │     │  │     ├─ grouputils.cpython-313.pyc
   │     │  │     ├─ linalg.cpython-313.pyc
   │     │  │     ├─ numdiff.cpython-313.pyc
   │     │  │     ├─ parallel.cpython-313.pyc
   │     │  │     ├─ print_version.cpython-313.pyc
   │     │  │     ├─ rng_qrng.cpython-313.pyc
   │     │  │     ├─ rootfinding.cpython-313.pyc
   │     │  │     ├─ sequences.cpython-313.pyc
   │     │  │     ├─ sm_exceptions.cpython-313.pyc
   │     │  │     ├─ testing.cpython-313.pyc
   │     │  │     ├─ tools.cpython-313.pyc
   │     │  │     ├─ transform_model.cpython-313.pyc
   │     │  │     ├─ typing.cpython-313.pyc
   │     │  │     ├─ web.cpython-313.pyc
   │     │  │     ├─ _testing.cpython-313.pyc
   │     │  │     ├─ _test_runner.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ treatment
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ cataneo2.csv
   │     │  │  │  │  ├─ results_teffects.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ results_teffects.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_teffects.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_teffects.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ treatment_effects.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ treatment_effects.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tsa
   │     │  │  ├─ adfvalues.py
   │     │  │  ├─ api.py
   │     │  │  ├─ ardl
   │     │  │  │  ├─ model.py
   │     │  │  │  ├─ pss_critical_values.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_ardl.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_ardl.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _pss_critical_values
   │     │  │  │  │  ├─ pss-process.py
   │     │  │  │  │  ├─ pss.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ pss-process.cpython-313.pyc
   │     │  │  │  │     ├─ pss.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ model.cpython-313.pyc
   │     │  │  │     ├─ pss_critical_values.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ arima
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ datasets
   │     │  │  │  │  ├─ brockwell_davis_2002
   │     │  │  │  │  │  ├─ data
   │     │  │  │  │  │  │  ├─ dowj.py
   │     │  │  │  │  │  │  ├─ lake.py
   │     │  │  │  │  │  │  ├─ oshorts.py
   │     │  │  │  │  │  │  ├─ sbl.py
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     ├─ dowj.cpython-313.pyc
   │     │  │  │  │  │  │     ├─ lake.cpython-313.pyc
   │     │  │  │  │  │  │     ├─ oshorts.cpython-313.pyc
   │     │  │  │  │  │  │     ├─ sbl.cpython-313.pyc
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ estimators
   │     │  │  │  │  ├─ burg.py
   │     │  │  │  │  ├─ durbin_levinson.py
   │     │  │  │  │  ├─ gls.py
   │     │  │  │  │  ├─ hannan_rissanen.py
   │     │  │  │  │  ├─ innovations.py
   │     │  │  │  │  ├─ statespace.py
   │     │  │  │  │  ├─ tests
   │     │  │  │  │  │  ├─ test_burg.py
   │     │  │  │  │  │  ├─ test_durbin_levinson.py
   │     │  │  │  │  │  ├─ test_gls.py
   │     │  │  │  │  │  ├─ test_hannan_rissanen.py
   │     │  │  │  │  │  ├─ test_innovations.py
   │     │  │  │  │  │  ├─ test_statespace.py
   │     │  │  │  │  │  ├─ test_yule_walker.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_burg.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_durbin_levinson.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_gls.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_hannan_rissanen.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_innovations.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_statespace.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_yule_walker.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ yule_walker.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ burg.cpython-313.pyc
   │     │  │  │  │     ├─ durbin_levinson.cpython-313.pyc
   │     │  │  │  │     ├─ gls.cpython-313.pyc
   │     │  │  │  │     ├─ hannan_rissanen.cpython-313.pyc
   │     │  │  │  │     ├─ innovations.cpython-313.pyc
   │     │  │  │  │     ├─ statespace.cpython-313.pyc
   │     │  │  │  │     ├─ yule_walker.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ model.py
   │     │  │  │  ├─ params.py
   │     │  │  │  ├─ specification.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_model.py
   │     │  │  │  │  ├─ test_params.py
   │     │  │  │  │  ├─ test_specification.py
   │     │  │  │  │  ├─ test_tools.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_model.cpython-313.pyc
   │     │  │  │  │     ├─ test_params.cpython-313.pyc
   │     │  │  │  │     ├─ test_specification.cpython-313.pyc
   │     │  │  │  │     ├─ test_tools.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ tools.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ model.cpython-313.pyc
   │     │  │  │     ├─ params.cpython-313.pyc
   │     │  │  │     ├─ specification.cpython-313.pyc
   │     │  │  │     ├─ tools.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ arima_model.py
   │     │  │  ├─ arima_process.py
   │     │  │  ├─ arma_mle.py
   │     │  │  ├─ ar_model.py
   │     │  │  ├─ base
   │     │  │  │  ├─ datetools.py
   │     │  │  │  ├─ prediction.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_base.py
   │     │  │  │  │  ├─ test_datetools.py
   │     │  │  │  │  ├─ test_prediction.py
   │     │  │  │  │  ├─ test_tsa_indexes.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │  │     ├─ test_datetools.cpython-313.pyc
   │     │  │  │  │     ├─ test_prediction.cpython-313.pyc
   │     │  │  │  │     ├─ test_tsa_indexes.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ tsa_model.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ datetools.cpython-313.pyc
   │     │  │  │     ├─ prediction.cpython-313.pyc
   │     │  │  │     ├─ tsa_model.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ coint_tables.py
   │     │  │  ├─ descriptivestats.py
   │     │  │  ├─ deterministic.py
   │     │  │  ├─ exponential_smoothing
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ ets.py
   │     │  │  │  ├─ initialization.py
   │     │  │  │  ├─ _ets_smooth.cp313-win_amd64.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ ets.cpython-313.pyc
   │     │  │  │     ├─ initialization.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ filters
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ bk_filter.py
   │     │  │  │  ├─ cf_filter.py
   │     │  │  │  ├─ filtertools.py
   │     │  │  │  ├─ hp_filter.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ results
   │     │  │  │  │  │  ├─ filter_results.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ filter_results.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_filters.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_filters.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ bk_filter.cpython-313.pyc
   │     │  │  │     ├─ cf_filter.cpython-313.pyc
   │     │  │  │     ├─ filtertools.cpython-313.pyc
   │     │  │  │     ├─ hp_filter.cpython-313.pyc
   │     │  │  │     ├─ _utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ forecasting
   │     │  │  │  ├─ stl.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_stl.py
   │     │  │  │  │  ├─ test_theta.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_stl.cpython-313.pyc
   │     │  │  │  │     ├─ test_theta.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ theta.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ stl.cpython-313.pyc
   │     │  │  │     ├─ theta.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ holtwinters
   │     │  │  │  ├─ model.py
   │     │  │  │  ├─ results.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ results
   │     │  │  │  │  │  ├─ housing-data.csv
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_holtwinters.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_holtwinters.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _exponential_smoothers.cp313-win_amd64.pyd
   │     │  │  │  ├─ _smoothers.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ model.cpython-313.pyc
   │     │  │  │     ├─ results.cpython-313.pyc
   │     │  │  │     ├─ _smoothers.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ innovations
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ arma_innovations.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_arma_innovations.py
   │     │  │  │  │  ├─ test_cython_arma_innovations_fast.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arma_innovations.cpython-313.pyc
   │     │  │  │  │     ├─ test_cython_arma_innovations_fast.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _arma_innovations.cp313-win_amd64.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ arma_innovations.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ interp
   │     │  │  │  ├─ denton.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ test_denton.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_denton.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ denton.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ mlemodel.py
   │     │  │  ├─ regime_switching
   │     │  │  │  ├─ markov_autoregression.py
   │     │  │  │  ├─ markov_regression.py
   │     │  │  │  ├─ markov_switching.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ results
   │     │  │  │  │  │  ├─ mar_filardo.csv
   │     │  │  │  │  │  ├─ results_predict_fedfunds.csv
   │     │  │  │  │  │  ├─ results_predict_rgnp.csv
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_markov_autoregression.py
   │     │  │  │  │  ├─ test_markov_regression.py
   │     │  │  │  │  ├─ test_markov_switching.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_markov_autoregression.cpython-313.pyc
   │     │  │  │  │     ├─ test_markov_regression.cpython-313.pyc
   │     │  │  │  │     ├─ test_markov_switching.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _hamilton_filter.cp313-win_amd64.pyd
   │     │  │  │  ├─ _kim_smoother.cp313-win_amd64.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ markov_autoregression.cpython-313.pyc
   │     │  │  │     ├─ markov_regression.cpython-313.pyc
   │     │  │  │     ├─ markov_switching.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ seasonal.py
   │     │  │  ├─ statespace
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ cfa_simulation_smoother.py
   │     │  │  │  ├─ dynamic_factor.py
   │     │  │  │  ├─ dynamic_factor_mq.py
   │     │  │  │  ├─ exponential_smoothing.py
   │     │  │  │  ├─ initialization.py
   │     │  │  │  ├─ kalman_filter.py
   │     │  │  │  ├─ kalman_smoother.py
   │     │  │  │  ├─ mlemodel.py
   │     │  │  │  ├─ news.py
   │     │  │  │  ├─ representation.py
   │     │  │  │  ├─ sarimax.py
   │     │  │  │  ├─ simulation_smoother.py
   │     │  │  │  ├─ structural.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ kfas_helpers.py
   │     │  │  │  │  ├─ results
   │     │  │  │  │  │  ├─ cfa_tvpvar_beta.csv
   │     │  │  │  │  │  ├─ cfa_tvpvar_invP.csv
   │     │  │  │  │  │  ├─ cfa_tvpvar_Omega_11.csv
   │     │  │  │  │  │  ├─ cfa_tvpvar_Omega_22.csv
   │     │  │  │  │  │  ├─ cfa_tvpvar_posterior_mean.csv
   │     │  │  │  │  │  ├─ cfa_tvpvar_S10.csv
   │     │  │  │  │  │  ├─ cfa_tvpvar_Si0.csv
   │     │  │  │  │  │  ├─ cfa_tvpvar_state_variates.csv
   │     │  │  │  │  │  ├─ cfa_tvpvar_v10.csv
   │     │  │  │  │  │  ├─ cfa_tvpvar_vi0.csv
   │     │  │  │  │  │  ├─ clark1989.csv
   │     │  │  │  │  │  ├─ exponential_smoothing_params.csv
   │     │  │  │  │  │  ├─ exponential_smoothing_predict.csv
   │     │  │  │  │  │  ├─ exponential_smoothing_states.csv
   │     │  │  │  │  │  ├─ frbny_nowcast
   │     │  │  │  │  │  │  ├─ Nowcasting
   │     │  │  │  │  │  │  │  ├─ data
   │     │  │  │  │  │  │  │  │  ├─ US
   │     │  │  │  │  │  │  │  │  │  ├─ 2016-06-29.csv
   │     │  │  │  │  │  │  │  │  │  ├─ 2016-07-29.csv
   │     │  │  │  │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  │  │  ├─ functions
   │     │  │  │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  │  ├─ test_dfm_111.mat
   │     │  │  │  │  │  │  ├─ test_dfm_112.mat
   │     │  │  │  │  │  │  ├─ test_dfm_11F.mat
   │     │  │  │  │  │  │  ├─ test_dfm_221.mat
   │     │  │  │  │  │  │  ├─ test_dfm_222.mat
   │     │  │  │  │  │  │  ├─ test_dfm_22F.mat
   │     │  │  │  │  │  │  ├─ test_dfm_blocks_111.mat
   │     │  │  │  │  │  │  ├─ test_dfm_blocks_112.mat
   │     │  │  │  │  │  │  ├─ test_dfm_blocks_221.mat
   │     │  │  │  │  │  │  ├─ test_dfm_blocks_222.mat
   │     │  │  │  │  │  │  ├─ test_news_112.mat
   │     │  │  │  │  │  │  ├─ test_news_222.mat
   │     │  │  │  │  │  │  ├─ test_news_blocks_112.mat
   │     │  │  │  │  │  │  ├─ test_news_blocks_222.mat
   │     │  │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  │  ├─ manufac.dta
   │     │  │  │  │  │  ├─ results_clark1989_R.csv
   │     │  │  │  │  │  ├─ results_dynamic_factor.py
   │     │  │  │  │  │  ├─ results_dynamic_factor_stata.csv
   │     │  │  │  │  │  ├─ results_exact_initial_common_level_R.csv
   │     │  │  │  │  │  ├─ results_exact_initial_common_level_restricted_R.csv
   │     │  │  │  │  │  ├─ results_exact_initial_dfm_R.csv
   │     │  │  │  │  │  ├─ results_exact_initial_local_level_R.csv
   │     │  │  │  │  │  ├─ results_exact_initial_local_linear_trend_missing_R.csv
   │     │  │  │  │  │  ├─ results_exact_initial_local_linear_trend_R.csv
   │     │  │  │  │  │  ├─ results_exact_initial_var1_measurement_error_R.csv
   │     │  │  │  │  │  ├─ results_exact_initial_var1_missing_R.csv
   │     │  │  │  │  │  ├─ results_exact_initial_var1_mixed_R.csv
   │     │  │  │  │  │  ├─ results_exact_initial_var1_R.csv
   │     │  │  │  │  │  ├─ results_intercepts_R.csv
   │     │  │  │  │  │  ├─ results_kalman_filter.py
   │     │  │  │  │  │  ├─ results_realgdpar_stata.csv
   │     │  │  │  │  │  ├─ results_sarimax.py
   │     │  │  │  │  │  ├─ results_sarimax_coverage.csv
   │     │  │  │  │  │  ├─ results_simulation_smoothing0.csv
   │     │  │  │  │  │  ├─ results_simulation_smoothing1.csv
   │     │  │  │  │  │  ├─ results_simulation_smoothing2.csv
   │     │  │  │  │  │  ├─ results_simulation_smoothing3.csv
   │     │  │  │  │  │  ├─ results_simulation_smoothing3_variates.csv
   │     │  │  │  │  │  ├─ results_simulation_smoothing4.csv
   │     │  │  │  │  │  ├─ results_simulation_smoothing5.csv
   │     │  │  │  │  │  ├─ results_simulation_smoothing6.csv
   │     │  │  │  │  │  ├─ results_smoothing2_R.csv
   │     │  │  │  │  │  ├─ results_smoothing3_R.csv
   │     │  │  │  │  │  ├─ results_smoothing_generalobscov_R.csv
   │     │  │  │  │  │  ├─ results_smoothing_R.csv
   │     │  │  │  │  │  ├─ results_structural.py
   │     │  │  │  │  │  ├─ results_varmax.py
   │     │  │  │  │  │  ├─ results_varmax_stata.csv
   │     │  │  │  │  │  ├─ results_var_misc.py
   │     │  │  │  │  │  ├─ results_var_R.py
   │     │  │  │  │  │  ├─ results_var_R_output.csv
   │     │  │  │  │  │  ├─ results_var_stata.csv
   │     │  │  │  │  │  ├─ results_wpi1_ar3_matlab_ssm.csv
   │     │  │  │  │  │  ├─ results_wpi1_ar3_stata.csv
   │     │  │  │  │  │  ├─ results_wpi1_missing_ar3_matlab_ssm.csv
   │     │  │  │  │  │  ├─ sm-0.9-sarimax.pkl
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ results_dynamic_factor.cpython-313.pyc
   │     │  │  │  │  │     ├─ results_kalman_filter.cpython-313.pyc
   │     │  │  │  │  │     ├─ results_sarimax.cpython-313.pyc
   │     │  │  │  │  │     ├─ results_structural.cpython-313.pyc
   │     │  │  │  │  │     ├─ results_varmax.cpython-313.pyc
   │     │  │  │  │  │     ├─ results_var_misc.cpython-313.pyc
   │     │  │  │  │  │     ├─ results_var_R.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_cfa_simulation_smoothing.py
   │     │  │  │  │  ├─ test_cfa_tvpvar.py
   │     │  │  │  │  ├─ test_chandrasekhar.py
   │     │  │  │  │  ├─ test_collapsed.py
   │     │  │  │  │  ├─ test_concentrated.py
   │     │  │  │  │  ├─ test_conserve_memory.py
   │     │  │  │  │  ├─ test_decompose.py
   │     │  │  │  │  ├─ test_dynamic_factor.py
   │     │  │  │  │  ├─ test_dynamic_factor_mq.py
   │     │  │  │  │  ├─ test_dynamic_factor_mq_frbny_nowcast.py
   │     │  │  │  │  ├─ test_dynamic_factor_mq_monte_carlo.py
   │     │  │  │  │  ├─ test_exact_diffuse_filtering.py
   │     │  │  │  │  ├─ test_exponential_smoothing.py
   │     │  │  │  │  ├─ test_fixed_params.py
   │     │  │  │  │  ├─ test_forecasting.py
   │     │  │  │  │  ├─ test_impulse_responses.py
   │     │  │  │  │  ├─ test_initialization.py
   │     │  │  │  │  ├─ test_kalman.py
   │     │  │  │  │  ├─ test_mlemodel.py
   │     │  │  │  │  ├─ test_models.py
   │     │  │  │  │  ├─ test_multivariate_switch_univariate.py
   │     │  │  │  │  ├─ test_news.py
   │     │  │  │  │  ├─ test_options.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_prediction.py
   │     │  │  │  │  ├─ test_representation.py
   │     │  │  │  │  ├─ test_sarimax.py
   │     │  │  │  │  ├─ test_save.py
   │     │  │  │  │  ├─ test_simulate.py
   │     │  │  │  │  ├─ test_simulation_smoothing.py
   │     │  │  │  │  ├─ test_smoothing.py
   │     │  │  │  │  ├─ test_structural.py
   │     │  │  │  │  ├─ test_tools.py
   │     │  │  │  │  ├─ test_univariate.py
   │     │  │  │  │  ├─ test_var.py
   │     │  │  │  │  ├─ test_varmax.py
   │     │  │  │  │  ├─ test_weights.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ kfas_helpers.cpython-313.pyc
   │     │  │  │  │     ├─ test_cfa_simulation_smoothing.cpython-313.pyc
   │     │  │  │  │     ├─ test_cfa_tvpvar.cpython-313.pyc
   │     │  │  │  │     ├─ test_chandrasekhar.cpython-313.pyc
   │     │  │  │  │     ├─ test_collapsed.cpython-313.pyc
   │     │  │  │  │     ├─ test_concentrated.cpython-313.pyc
   │     │  │  │  │     ├─ test_conserve_memory.cpython-313.pyc
   │     │  │  │  │     ├─ test_decompose.cpython-313.pyc
   │     │  │  │  │     ├─ test_dynamic_factor.cpython-313.pyc
   │     │  │  │  │     ├─ test_dynamic_factor_mq.cpython-313.pyc
   │     │  │  │  │     ├─ test_dynamic_factor_mq_frbny_nowcast.cpython-313.pyc
   │     │  │  │  │     ├─ test_dynamic_factor_mq_monte_carlo.cpython-313.pyc
   │     │  │  │  │     ├─ test_exact_diffuse_filtering.cpython-313.pyc
   │     │  │  │  │     ├─ test_exponential_smoothing.cpython-313.pyc
   │     │  │  │  │     ├─ test_fixed_params.cpython-313.pyc
   │     │  │  │  │     ├─ test_forecasting.cpython-313.pyc
   │     │  │  │  │     ├─ test_impulse_responses.cpython-313.pyc
   │     │  │  │  │     ├─ test_initialization.cpython-313.pyc
   │     │  │  │  │     ├─ test_kalman.cpython-313.pyc
   │     │  │  │  │     ├─ test_mlemodel.cpython-313.pyc
   │     │  │  │  │     ├─ test_models.cpython-313.pyc
   │     │  │  │  │     ├─ test_multivariate_switch_univariate.cpython-313.pyc
   │     │  │  │  │     ├─ test_news.cpython-313.pyc
   │     │  │  │  │     ├─ test_options.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_prediction.cpython-313.pyc
   │     │  │  │  │     ├─ test_representation.cpython-313.pyc
   │     │  │  │  │     ├─ test_sarimax.cpython-313.pyc
   │     │  │  │  │     ├─ test_save.cpython-313.pyc
   │     │  │  │  │     ├─ test_simulate.cpython-313.pyc
   │     │  │  │  │     ├─ test_simulation_smoothing.cpython-313.pyc
   │     │  │  │  │     ├─ test_smoothing.cpython-313.pyc
   │     │  │  │  │     ├─ test_structural.cpython-313.pyc
   │     │  │  │  │     ├─ test_tools.cpython-313.pyc
   │     │  │  │  │     ├─ test_univariate.cpython-313.pyc
   │     │  │  │  │     ├─ test_var.cpython-313.pyc
   │     │  │  │  │     ├─ test_varmax.cpython-313.pyc
   │     │  │  │  │     ├─ test_weights.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ tools.py
   │     │  │  │  ├─ varmax.py
   │     │  │  │  ├─ _cfa_simulation_smoother.cp313-win_amd64.pyd
   │     │  │  │  ├─ _filters
   │     │  │  │  │  ├─ _conventional.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ _inversions.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ _univariate.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ _univariate_diffuse.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _initialization.cp313-win_amd64.pyd
   │     │  │  │  ├─ _kalman_filter.cp313-win_amd64.pyd
   │     │  │  │  ├─ _kalman_smoother.cp313-win_amd64.pyd
   │     │  │  │  ├─ _pykalman_smoother.py
   │     │  │  │  ├─ _quarterly_ar1.py
   │     │  │  │  ├─ _representation.cp313-win_amd64.pyd
   │     │  │  │  ├─ _simulation_smoother.cp313-win_amd64.pyd
   │     │  │  │  ├─ _smoothers
   │     │  │  │  │  ├─ _alternative.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ _classical.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ _conventional.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ _univariate.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ _univariate_diffuse.cp313-win_amd64.pyd
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _tools.cp313-win_amd64.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ cfa_simulation_smoother.cpython-313.pyc
   │     │  │  │     ├─ dynamic_factor.cpython-313.pyc
   │     │  │  │     ├─ dynamic_factor_mq.cpython-313.pyc
   │     │  │  │     ├─ exponential_smoothing.cpython-313.pyc
   │     │  │  │     ├─ initialization.cpython-313.pyc
   │     │  │  │     ├─ kalman_filter.cpython-313.pyc
   │     │  │  │     ├─ kalman_smoother.cpython-313.pyc
   │     │  │  │     ├─ mlemodel.cpython-313.pyc
   │     │  │  │     ├─ news.cpython-313.pyc
   │     │  │  │     ├─ representation.cpython-313.pyc
   │     │  │  │     ├─ sarimax.cpython-313.pyc
   │     │  │  │     ├─ simulation_smoother.cpython-313.pyc
   │     │  │  │     ├─ structural.cpython-313.pyc
   │     │  │  │     ├─ tools.cpython-313.pyc
   │     │  │  │     ├─ varmax.cpython-313.pyc
   │     │  │  │     ├─ _pykalman_smoother.cpython-313.pyc
   │     │  │  │     ├─ _quarterly_ar1.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ stattools.py
   │     │  │  ├─ stl
   │     │  │  │  ├─ mstl.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ results
   │     │  │  │  │  │  ├─ mstl_elec_vic.csv
   │     │  │  │  │  │  ├─ mstl_test_results.csv
   │     │  │  │  │  │  ├─ stl_co2.csv
   │     │  │  │  │  │  ├─ stl_test_results.csv
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_mstl.py
   │     │  │  │  │  ├─ test_stl.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_mstl.cpython-313.pyc
   │     │  │  │  │     ├─ test_stl.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _stl.cp313-win_amd64.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ mstl.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tests
   │     │  │  │  ├─ results
   │     │  │  │  │  ├─ arima111nc_css_results.py
   │     │  │  │  │  ├─ arima111nc_results.py
   │     │  │  │  │  ├─ arima111_css_results.py
   │     │  │  │  │  ├─ arima111_forecasts.csv
   │     │  │  │  │  ├─ arima111_results.py
   │     │  │  │  │  ├─ arima112nc_css_results.py
   │     │  │  │  │  ├─ arima112nc_results.py
   │     │  │  │  │  ├─ arima112_css_results.py
   │     │  │  │  │  ├─ arima112_results.py
   │     │  │  │  │  ├─ arima211nc_css_results.py
   │     │  │  │  │  ├─ arima211nc_results.py
   │     │  │  │  │  ├─ arima211_css_results.py
   │     │  │  │  │  ├─ arima211_results.py
   │     │  │  │  │  ├─ arima212_forecast.csv
   │     │  │  │  │  ├─ ARMLEConstantPredict.csv
   │     │  │  │  │  ├─ AROLSConstantPredict.csv
   │     │  │  │  │  ├─ AROLSNoConstantPredict.csv
   │     │  │  │  │  ├─ bds_data.csv
   │     │  │  │  │  ├─ bds_results.csv
   │     │  │  │  │  ├─ datamlw_tls.py
   │     │  │  │  │  ├─ fit_ets_results.json
   │     │  │  │  │  ├─ fit_ets_results_nonseasonal.json
   │     │  │  │  │  ├─ fit_ets_results_seasonal.json
   │     │  │  │  │  ├─ gnpdef.csv
   │     │  │  │  │  ├─ lutkepohl2.dta
   │     │  │  │  │  ├─ make_arma.py
   │     │  │  │  │  ├─ rand10000.csv
   │     │  │  │  │  ├─ resids_css_c.csv
   │     │  │  │  │  ├─ resids_css_nc.csv
   │     │  │  │  │  ├─ resids_exact_c.csv
   │     │  │  │  │  ├─ resids_exact_nc.csv
   │     │  │  │  │  ├─ results_ar.py
   │     │  │  │  │  ├─ results_arima.py
   │     │  │  │  │  ├─ results_arima_exog_forecasts_css.csv
   │     │  │  │  │  ├─ results_arima_exog_forecasts_mle.csv
   │     │  │  │  │  ├─ results_arima_forecasts.csv
   │     │  │  │  │  ├─ results_arima_forecasts_all_css.csv
   │     │  │  │  │  ├─ results_arima_forecasts_all_css_diff.csv
   │     │  │  │  │  ├─ results_arima_forecasts_all_mle.csv
   │     │  │  │  │  ├─ results_arima_forecasts_all_mle_diff.csv
   │     │  │  │  │  ├─ results_arma.py
   │     │  │  │  │  ├─ results_arma_acf.py
   │     │  │  │  │  ├─ results_arma_forecasts.csv
   │     │  │  │  │  ├─ results_ar_forecast_mle_dynamic.csv
   │     │  │  │  │  ├─ results_ccf.csv
   │     │  │  │  │  ├─ results_corrgram.csv
   │     │  │  │  │  ├─ results_process.py
   │     │  │  │  │  ├─ rgnp.csv
   │     │  │  │  │  ├─ rgnpq.csv
   │     │  │  │  │  ├─ savedrvs.py
   │     │  │  │  │  ├─ stkprc.csv
   │     │  │  │  │  ├─ yhat_css_c.csv
   │     │  │  │  │  ├─ yhat_css_nc.csv
   │     │  │  │  │  ├─ yhat_exact_c.csv
   │     │  │  │  │  ├─ yhat_exact_nc.csv
   │     │  │  │  │  ├─ y_arma_data.csv
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ arima111nc_css_results.cpython-313.pyc
   │     │  │  │  │     ├─ arima111nc_results.cpython-313.pyc
   │     │  │  │  │     ├─ arima111_css_results.cpython-313.pyc
   │     │  │  │  │     ├─ arima111_results.cpython-313.pyc
   │     │  │  │  │     ├─ arima112nc_css_results.cpython-313.pyc
   │     │  │  │  │     ├─ arima112nc_results.cpython-313.pyc
   │     │  │  │  │     ├─ arima112_css_results.cpython-313.pyc
   │     │  │  │  │     ├─ arima112_results.cpython-313.pyc
   │     │  │  │  │     ├─ arima211nc_css_results.cpython-313.pyc
   │     │  │  │  │     ├─ arima211nc_results.cpython-313.pyc
   │     │  │  │  │     ├─ arima211_css_results.cpython-313.pyc
   │     │  │  │  │     ├─ arima211_results.cpython-313.pyc
   │     │  │  │  │     ├─ datamlw_tls.cpython-313.pyc
   │     │  │  │  │     ├─ make_arma.cpython-313.pyc
   │     │  │  │  │     ├─ results_ar.cpython-313.pyc
   │     │  │  │  │     ├─ results_arima.cpython-313.pyc
   │     │  │  │  │     ├─ results_arma.cpython-313.pyc
   │     │  │  │  │     ├─ results_arma_acf.cpython-313.pyc
   │     │  │  │  │     ├─ results_process.cpython-313.pyc
   │     │  │  │  │     ├─ savedrvs.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_adfuller_lag.py
   │     │  │  │  ├─ test_ar.py
   │     │  │  │  ├─ test_arima_process.py
   │     │  │  │  ├─ test_bds.py
   │     │  │  │  ├─ test_deterministic.py
   │     │  │  │  ├─ test_exponential_smoothing.py
   │     │  │  │  ├─ test_seasonal.py
   │     │  │  │  ├─ test_stattools.py
   │     │  │  │  ├─ test_tsa_tools.py
   │     │  │  │  ├─ test_x13.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_adfuller_lag.cpython-313.pyc
   │     │  │  │     ├─ test_ar.cpython-313.pyc
   │     │  │  │     ├─ test_arima_process.cpython-313.pyc
   │     │  │  │     ├─ test_bds.cpython-313.pyc
   │     │  │  │     ├─ test_deterministic.cpython-313.pyc
   │     │  │  │     ├─ test_exponential_smoothing.cpython-313.pyc
   │     │  │  │     ├─ test_seasonal.cpython-313.pyc
   │     │  │  │     ├─ test_stattools.cpython-313.pyc
   │     │  │  │     ├─ test_tsa_tools.cpython-313.pyc
   │     │  │  │     ├─ test_x13.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tsatools.py
   │     │  │  ├─ varma_process.py
   │     │  │  ├─ vector_ar
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ hypothesis_test_results.py
   │     │  │  │  ├─ irf.py
   │     │  │  │  ├─ output.py
   │     │  │  │  ├─ plotting.py
   │     │  │  │  ├─ svar_model.py
   │     │  │  │  ├─ tests
   │     │  │  │  │  ├─ example_svar.py
   │     │  │  │  │  ├─ JMulTi_results
   │     │  │  │  │  │  ├─ macrodata_jmulti_c.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cs.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cst.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cst_diag.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cst_fc5.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cst_granger_causality_realcons.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cst_granger_causality_realcons_realgdp.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cst_granger_causality_realcons_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cst_granger_causality_realgdp.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cst_granger_causality_realgdp_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cst_granger_causality_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cst_ir.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cst_lagorder.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cst_Sigmau.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cs_diag.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cs_fc5.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cs_granger_causality_realcons.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cs_granger_causality_realcons_realgdp.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cs_granger_causality_realcons_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cs_granger_causality_realgdp.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cs_granger_causality_realgdp_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cs_granger_causality_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cs_ir.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cs_lagorder.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_cs_Sigmau.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ct.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ct_diag.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ct_fc5.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ct_granger_causality_realcons.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ct_granger_causality_realcons_realgdp.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ct_granger_causality_realcons_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ct_granger_causality_realgdp.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ct_granger_causality_realgdp_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ct_granger_causality_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ct_ir.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ct_lagorder.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ct_Sigmau.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_c_diag.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_c_fc5.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_c_granger_causality_realcons.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_c_granger_causality_realcons_realgdp.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_c_granger_causality_realcons_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_c_granger_causality_realgdp.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_c_granger_causality_realgdp_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_c_granger_causality_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_c_ir.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_c_lagorder.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_c_Sigmau.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_nc.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ncs.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ncs_diag.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ncs_fc5.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ncs_granger_causality_realcons.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ncs_granger_causality_realcons_realgdp.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ncs_granger_causality_realcons_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ncs_granger_causality_realgdp.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ncs_granger_causality_realgdp_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ncs_granger_causality_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ncs_ir.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ncs_lagorder.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_ncs_Sigmau.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_nc_diag.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_nc_fc5.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_nc_granger_causality_realcons.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_nc_granger_causality_realcons_realgdp.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_nc_granger_causality_realcons_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_nc_granger_causality_realgdp.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_nc_granger_causality_realgdp_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_nc_granger_causality_realinv.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_nc_ir.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_nc_lagorder.txt
   │     │  │  │  │  │  ├─ macrodata_jmulti_nc_Sigmau.txt
   │     │  │  │  │  │  ├─ parse_jmulti_var_output.py
   │     │  │  │  │  │  ├─ parse_jmulti_vecm_output.py
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ci.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cili.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cili_diag.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cili_fc5.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cili_granger_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cili_granger_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cili_inst_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cili_inst_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cili_ir.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cili_lagorder.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cili_Sigmau.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cis.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cisli.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cisli_diag.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cisli_fc5.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cisli_granger_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cisli_granger_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cisli_inst_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cisli_inst_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cisli_ir.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cisli_lagorder.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cisli_Sigmau.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cis_diag.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cis_fc5.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cis_granger_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cis_granger_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cis_inst_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cis_inst_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cis_ir.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cis_lagorder.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cis_Sigmau.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ci_diag.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ci_fc5.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ci_granger_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ci_granger_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ci_inst_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ci_inst_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ci_ir.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ci_lagorder.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ci_Sigmau.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_co.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_colo.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_colo_diag.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_colo_fc5.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_colo_granger_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_colo_granger_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_colo_inst_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_colo_inst_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_colo_ir.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_colo_lagorder.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_colo_Sigmau.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cos.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_coslo.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_coslo_diag.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_coslo_fc5.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_coslo_granger_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_coslo_granger_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_coslo_inst_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_coslo_inst_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_coslo_ir.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_coslo_lagorder.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_coslo_Sigmau.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cos_diag.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cos_fc5.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cos_granger_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cos_granger_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cos_inst_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cos_inst_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cos_ir.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cos_lagorder.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_cos_Sigmau.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_co_diag.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_co_fc5.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_co_granger_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_co_granger_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_co_inst_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_co_inst_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_co_ir.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_co_lagorder.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_co_Sigmau.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_nc.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ncs.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ncs_diag.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ncs_fc5.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ncs_granger_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ncs_granger_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ncs_inst_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ncs_inst_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ncs_ir.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ncs_lagorder.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_ncs_Sigmau.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_nc_diag.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_nc_fc5.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_nc_granger_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_nc_granger_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_nc_inst_causality_dp_r.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_nc_inst_causality_r_dp.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_nc_ir.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_nc_lagorder.txt
   │     │  │  │  │  │  ├─ vecm_e6_jmulti_nc_Sigmau.txt
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ parse_jmulti_var_output.cpython-313.pyc
   │     │  │  │  │  │     ├─ parse_jmulti_vecm_output.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ Matlab_results
   │     │  │  │  │  │  ├─ test_coint.csv
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ results
   │     │  │  │  │  │  ├─ e1.dat
   │     │  │  │  │  │  ├─ e2.dat
   │     │  │  │  │  │  ├─ e3.dat
   │     │  │  │  │  │  ├─ e4.dat
   │     │  │  │  │  │  ├─ e5.dat
   │     │  │  │  │  │  ├─ e6.dat
   │     │  │  │  │  │  ├─ results_svar.py
   │     │  │  │  │  │  ├─ results_svar_st.py
   │     │  │  │  │  │  ├─ results_var.py
   │     │  │  │  │  │  ├─ results_var_data.py
   │     │  │  │  │  │  ├─ vars_results.npz
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ results_svar.cpython-313.pyc
   │     │  │  │  │  │     ├─ results_svar_st.cpython-313.pyc
   │     │  │  │  │  │     ├─ results_var.cpython-313.pyc
   │     │  │  │  │  │     ├─ results_var_data.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_coint.py
   │     │  │  │  │  ├─ test_svar.py
   │     │  │  │  │  ├─ test_var.py
   │     │  │  │  │  ├─ test_var_jmulti.py
   │     │  │  │  │  ├─ test_vecm.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ example_svar.cpython-313.pyc
   │     │  │  │  │     ├─ test_coint.cpython-313.pyc
   │     │  │  │  │     ├─ test_svar.cpython-313.pyc
   │     │  │  │  │     ├─ test_var.cpython-313.pyc
   │     │  │  │  │     ├─ test_var_jmulti.cpython-313.pyc
   │     │  │  │  │     ├─ test_vecm.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ var_model.py
   │     │  │  │  ├─ vecm.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ hypothesis_test_results.cpython-313.pyc
   │     │  │  │     ├─ irf.cpython-313.pyc
   │     │  │  │     ├─ output.cpython-313.pyc
   │     │  │  │     ├─ plotting.cpython-313.pyc
   │     │  │  │     ├─ svar_model.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     ├─ var_model.cpython-313.pyc
   │     │  │  │     ├─ vecm.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ x13.py
   │     │  │  ├─ _bds.py
   │     │  │  ├─ _innovations.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ adfvalues.cpython-313.pyc
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ arima_model.cpython-313.pyc
   │     │  │     ├─ arima_process.cpython-313.pyc
   │     │  │     ├─ arma_mle.cpython-313.pyc
   │     │  │     ├─ ar_model.cpython-313.pyc
   │     │  │     ├─ coint_tables.cpython-313.pyc
   │     │  │     ├─ descriptivestats.cpython-313.pyc
   │     │  │     ├─ deterministic.cpython-313.pyc
   │     │  │     ├─ mlemodel.cpython-313.pyc
   │     │  │     ├─ seasonal.cpython-313.pyc
   │     │  │     ├─ stattools.cpython-313.pyc
   │     │  │     ├─ tsatools.cpython-313.pyc
   │     │  │     ├─ varma_process.cpython-313.pyc
   │     │  │     ├─ x13.cpython-313.pyc
   │     │  │     ├─ _bds.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ api.cpython-313.pyc
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ statsmodels-0.14.4.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ tblib
   │     │  ├─ decorators.py
   │     │  ├─ pickling_support.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ decorators.cpython-313.pyc
   │     │     ├─ pickling_support.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ tblib-3.0.0.dist-info
   │     │  ├─ AUTHORS.rst
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ threadpoolctl-3.6.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ threadpoolctl.py
   │     ├─ tlz
   │     │  ├─ _build_tlz.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _build_tlz.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ toolz
   │     │  ├─ compatibility.py
   │     │  ├─ curried
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ operator.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ exceptions.cpython-313.pyc
   │     │  │     ├─ operator.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ dicttoolz.py
   │     │  ├─ functoolz.py
   │     │  ├─ itertoolz.py
   │     │  ├─ recipes.py
   │     │  ├─ sandbox
   │     │  │  ├─ core.py
   │     │  │  ├─ parallel.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ parallel.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tests
   │     │  │  ├─ test_compatibility.py
   │     │  │  ├─ test_curried.py
   │     │  │  ├─ test_curried_doctests.py
   │     │  │  ├─ test_dicttoolz.py
   │     │  │  ├─ test_functoolz.py
   │     │  │  ├─ test_inspect_args.py
   │     │  │  ├─ test_itertoolz.py
   │     │  │  ├─ test_recipes.py
   │     │  │  ├─ test_serialization.py
   │     │  │  ├─ test_signatures.py
   │     │  │  ├─ test_tlz.py
   │     │  │  ├─ test_utils.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ test_compatibility.cpython-313.pyc
   │     │  │     ├─ test_curried.cpython-313.pyc
   │     │  │     ├─ test_curried_doctests.cpython-313.pyc
   │     │  │     ├─ test_dicttoolz.cpython-313.pyc
   │     │  │     ├─ test_functoolz.cpython-313.pyc
   │     │  │     ├─ test_inspect_args.cpython-313.pyc
   │     │  │     ├─ test_itertoolz.cpython-313.pyc
   │     │  │     ├─ test_recipes.cpython-313.pyc
   │     │  │     ├─ test_serialization.cpython-313.pyc
   │     │  │     ├─ test_signatures.cpython-313.pyc
   │     │  │     ├─ test_tlz.cpython-313.pyc
   │     │  │     └─ test_utils.cpython-313.pyc
   │     │  ├─ utils.py
   │     │  ├─ _signatures.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ compatibility.cpython-313.pyc
   │     │     ├─ dicttoolz.cpython-313.pyc
   │     │     ├─ functoolz.cpython-313.pyc
   │     │     ├─ itertoolz.cpython-313.pyc
   │     │     ├─ recipes.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ _signatures.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ toolz-1.0.0.dist-info
   │     │  ├─ AUTHORS.md
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ tornado
   │     │  ├─ auth.py
   │     │  ├─ autoreload.py
   │     │  ├─ concurrent.py
   │     │  ├─ curl_httpclient.py
   │     │  ├─ escape.py
   │     │  ├─ gen.py
   │     │  ├─ http1connection.py
   │     │  ├─ httpclient.py
   │     │  ├─ httpserver.py
   │     │  ├─ httputil.py
   │     │  ├─ ioloop.py
   │     │  ├─ iostream.py
   │     │  ├─ locale.py
   │     │  ├─ locks.py
   │     │  ├─ log.py
   │     │  ├─ netutil.py
   │     │  ├─ options.py
   │     │  ├─ platform
   │     │  │  ├─ asyncio.py
   │     │  │  ├─ caresresolver.py
   │     │  │  ├─ twisted.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asyncio.cpython-313.pyc
   │     │  │     ├─ caresresolver.cpython-313.pyc
   │     │  │     ├─ twisted.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ process.py
   │     │  ├─ py.typed
   │     │  ├─ queues.py
   │     │  ├─ routing.py
   │     │  ├─ simple_httpclient.py
   │     │  ├─ speedups.pyd
   │     │  ├─ speedups.pyi
   │     │  ├─ tcpclient.py
   │     │  ├─ tcpserver.py
   │     │  ├─ template.py
   │     │  ├─ test
   │     │  │  ├─ asyncio_test.py
   │     │  │  ├─ auth_test.py
   │     │  │  ├─ autoreload_test.py
   │     │  │  ├─ circlerefs_test.py
   │     │  │  ├─ concurrent_test.py
   │     │  │  ├─ csv_translations
   │     │  │  │  └─ fr_FR.csv
   │     │  │  ├─ curl_httpclient_test.py
   │     │  │  ├─ escape_test.py
   │     │  │  ├─ gen_test.py
   │     │  │  ├─ gettext_translations
   │     │  │  │  └─ fr_FR
   │     │  │  │     └─ LC_MESSAGES
   │     │  │  │        ├─ tornado_test.mo
   │     │  │  │        └─ tornado_test.po
   │     │  │  ├─ http1connection_test.py
   │     │  │  ├─ httpclient_test.py
   │     │  │  ├─ httpserver_test.py
   │     │  │  ├─ httputil_test.py
   │     │  │  ├─ import_test.py
   │     │  │  ├─ ioloop_test.py
   │     │  │  ├─ iostream_test.py
   │     │  │  ├─ locale_test.py
   │     │  │  ├─ locks_test.py
   │     │  │  ├─ log_test.py
   │     │  │  ├─ netutil_test.py
   │     │  │  ├─ options_test.cfg
   │     │  │  ├─ options_test.py
   │     │  │  ├─ options_test_types.cfg
   │     │  │  ├─ options_test_types_str.cfg
   │     │  │  ├─ process_test.py
   │     │  │  ├─ queues_test.py
   │     │  │  ├─ resolve_test_helper.py
   │     │  │  ├─ routing_test.py
   │     │  │  ├─ runtests.py
   │     │  │  ├─ simple_httpclient_test.py
   │     │  │  ├─ static
   │     │  │  │  ├─ dir
   │     │  │  │  │  └─ index.html
   │     │  │  │  ├─ robots.txt
   │     │  │  │  ├─ sample.xml
   │     │  │  │  ├─ sample.xml.bz2
   │     │  │  │  └─ sample.xml.gz
   │     │  │  ├─ static_foo.txt
   │     │  │  ├─ tcpclient_test.py
   │     │  │  ├─ tcpserver_test.py
   │     │  │  ├─ templates
   │     │  │  │  └─ utf8.html
   │     │  │  ├─ template_test.py
   │     │  │  ├─ test.crt
   │     │  │  ├─ test.key
   │     │  │  ├─ testing_test.py
   │     │  │  ├─ twisted_test.py
   │     │  │  ├─ util.py
   │     │  │  ├─ util_test.py
   │     │  │  ├─ websocket_test.py
   │     │  │  ├─ web_test.py
   │     │  │  ├─ wsgi_test.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asyncio_test.cpython-313.pyc
   │     │  │     ├─ auth_test.cpython-313.pyc
   │     │  │     ├─ autoreload_test.cpython-313.pyc
   │     │  │     ├─ circlerefs_test.cpython-313.pyc
   │     │  │     ├─ concurrent_test.cpython-313.pyc
   │     │  │     ├─ curl_httpclient_test.cpython-313.pyc
   │     │  │     ├─ escape_test.cpython-313.pyc
   │     │  │     ├─ gen_test.cpython-313.pyc
   │     │  │     ├─ http1connection_test.cpython-313.pyc
   │     │  │     ├─ httpclient_test.cpython-313.pyc
   │     │  │     ├─ httpserver_test.cpython-313.pyc
   │     │  │     ├─ httputil_test.cpython-313.pyc
   │     │  │     ├─ import_test.cpython-313.pyc
   │     │  │     ├─ ioloop_test.cpython-313.pyc
   │     │  │     ├─ iostream_test.cpython-313.pyc
   │     │  │     ├─ locale_test.cpython-313.pyc
   │     │  │     ├─ locks_test.cpython-313.pyc
   │     │  │     ├─ log_test.cpython-313.pyc
   │     │  │     ├─ netutil_test.cpython-313.pyc
   │     │  │     ├─ options_test.cpython-313.pyc
   │     │  │     ├─ process_test.cpython-313.pyc
   │     │  │     ├─ queues_test.cpython-313.pyc
   │     │  │     ├─ resolve_test_helper.cpython-313.pyc
   │     │  │     ├─ routing_test.cpython-313.pyc
   │     │  │     ├─ runtests.cpython-313.pyc
   │     │  │     ├─ simple_httpclient_test.cpython-313.pyc
   │     │  │     ├─ tcpclient_test.cpython-313.pyc
   │     │  │     ├─ tcpserver_test.cpython-313.pyc
   │     │  │     ├─ template_test.cpython-313.pyc
   │     │  │     ├─ testing_test.cpython-313.pyc
   │     │  │     ├─ twisted_test.cpython-313.pyc
   │     │  │     ├─ util.cpython-313.pyc
   │     │  │     ├─ util_test.cpython-313.pyc
   │     │  │     ├─ websocket_test.cpython-313.pyc
   │     │  │     ├─ web_test.cpython-313.pyc
   │     │  │     ├─ wsgi_test.cpython-313.pyc
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ testing.py
   │     │  ├─ util.py
   │     │  ├─ web.py
   │     │  ├─ websocket.py
   │     │  ├─ wsgi.py
   │     │  ├─ _locale_data.py
   │     │  ├─ __init__.py
   │     │  ├─ __init__.pyi
   │     │  └─ __pycache__
   │     │     ├─ auth.cpython-313.pyc
   │     │     ├─ autoreload.cpython-313.pyc
   │     │     ├─ concurrent.cpython-313.pyc
   │     │     ├─ curl_httpclient.cpython-313.pyc
   │     │     ├─ escape.cpython-313.pyc
   │     │     ├─ gen.cpython-313.pyc
   │     │     ├─ http1connection.cpython-313.pyc
   │     │     ├─ httpclient.cpython-313.pyc
   │     │     ├─ httpserver.cpython-313.pyc
   │     │     ├─ httputil.cpython-313.pyc
   │     │     ├─ ioloop.cpython-313.pyc
   │     │     ├─ iostream.cpython-313.pyc
   │     │     ├─ locale.cpython-313.pyc
   │     │     ├─ locks.cpython-313.pyc
   │     │     ├─ log.cpython-313.pyc
   │     │     ├─ netutil.cpython-313.pyc
   │     │     ├─ options.cpython-313.pyc
   │     │     ├─ process.cpython-313.pyc
   │     │     ├─ queues.cpython-313.pyc
   │     │     ├─ routing.cpython-313.pyc
   │     │     ├─ simple_httpclient.cpython-313.pyc
   │     │     ├─ tcpclient.cpython-313.pyc
   │     │     ├─ tcpserver.cpython-313.pyc
   │     │     ├─ template.cpython-313.pyc
   │     │     ├─ testing.cpython-313.pyc
   │     │     ├─ util.cpython-313.pyc
   │     │     ├─ web.cpython-313.pyc
   │     │     ├─ websocket.cpython-313.pyc
   │     │     ├─ wsgi.cpython-313.pyc
   │     │     ├─ _locale_data.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ tornado-6.4.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ typing_extensions-4.13.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ typing_extensions.py
   │     ├─ typing_inspection
   │     │  ├─ introspection.py
   │     │  ├─ py.typed
   │     │  ├─ typing_objects.py
   │     │  ├─ typing_objects.pyi
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ introspection.cpython-313.pyc
   │     │     ├─ typing_objects.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ typing_inspection-0.4.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ tzdata
   │     │  ├─ zoneinfo
   │     │  │  ├─ Africa
   │     │  │  │  ├─ Abidjan
   │     │  │  │  ├─ Accra
   │     │  │  │  ├─ Addis_Ababa
   │     │  │  │  ├─ Algiers
   │     │  │  │  ├─ Asmara
   │     │  │  │  ├─ Asmera
   │     │  │  │  ├─ Bamako
   │     │  │  │  ├─ Bangui
   │     │  │  │  ├─ Banjul
   │     │  │  │  ├─ Bissau
   │     │  │  │  ├─ Blantyre
   │     │  │  │  ├─ Brazzaville
   │     │  │  │  ├─ Bujumbura
   │     │  │  │  ├─ Cairo
   │     │  │  │  ├─ Casablanca
   │     │  │  │  ├─ Ceuta
   │     │  │  │  ├─ Conakry
   │     │  │  │  ├─ Dakar
   │     │  │  │  ├─ Dar_es_Salaam
   │     │  │  │  ├─ Djibouti
   │     │  │  │  ├─ Douala
   │     │  │  │  ├─ El_Aaiun
   │     │  │  │  ├─ Freetown
   │     │  │  │  ├─ Gaborone
   │     │  │  │  ├─ Harare
   │     │  │  │  ├─ Johannesburg
   │     │  │  │  ├─ Juba
   │     │  │  │  ├─ Kampala
   │     │  │  │  ├─ Khartoum
   │     │  │  │  ├─ Kigali
   │     │  │  │  ├─ Kinshasa
   │     │  │  │  ├─ Lagos
   │     │  │  │  ├─ Libreville
   │     │  │  │  ├─ Lome
   │     │  │  │  ├─ Luanda
   │     │  │  │  ├─ Lubumbashi
   │     │  │  │  ├─ Lusaka
   │     │  │  │  ├─ Malabo
   │     │  │  │  ├─ Maputo
   │     │  │  │  ├─ Maseru
   │     │  │  │  ├─ Mbabane
   │     │  │  │  ├─ Mogadishu
   │     │  │  │  ├─ Monrovia
   │     │  │  │  ├─ Nairobi
   │     │  │  │  ├─ Ndjamena
   │     │  │  │  ├─ Niamey
   │     │  │  │  ├─ Nouakchott
   │     │  │  │  ├─ Ouagadougou
   │     │  │  │  ├─ Porto-Novo
   │     │  │  │  ├─ Sao_Tome
   │     │  │  │  ├─ Timbuktu
   │     │  │  │  ├─ Tripoli
   │     │  │  │  ├─ Tunis
   │     │  │  │  ├─ Windhoek
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ America
   │     │  │  │  ├─ Adak
   │     │  │  │  ├─ Anchorage
   │     │  │  │  ├─ Anguilla
   │     │  │  │  ├─ Antigua
   │     │  │  │  ├─ Araguaina
   │     │  │  │  ├─ Argentina
   │     │  │  │  │  ├─ Buenos_Aires
   │     │  │  │  │  ├─ Catamarca
   │     │  │  │  │  ├─ ComodRivadavia
   │     │  │  │  │  ├─ Cordoba
   │     │  │  │  │  ├─ Jujuy
   │     │  │  │  │  ├─ La_Rioja
   │     │  │  │  │  ├─ Mendoza
   │     │  │  │  │  ├─ Rio_Gallegos
   │     │  │  │  │  ├─ Salta
   │     │  │  │  │  ├─ San_Juan
   │     │  │  │  │  ├─ San_Luis
   │     │  │  │  │  ├─ Tucuman
   │     │  │  │  │  ├─ Ushuaia
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ Aruba
   │     │  │  │  ├─ Asuncion
   │     │  │  │  ├─ Atikokan
   │     │  │  │  ├─ Atka
   │     │  │  │  ├─ Bahia
   │     │  │  │  ├─ Bahia_Banderas
   │     │  │  │  ├─ Barbados
   │     │  │  │  ├─ Belem
   │     │  │  │  ├─ Belize
   │     │  │  │  ├─ Blanc-Sablon
   │     │  │  │  ├─ Boa_Vista
   │     │  │  │  ├─ Bogota
   │     │  │  │  ├─ Boise
   │     │  │  │  ├─ Buenos_Aires
   │     │  │  │  ├─ Cambridge_Bay
   │     │  │  │  ├─ Campo_Grande
   │     │  │  │  ├─ Cancun
   │     │  │  │  ├─ Caracas
   │     │  │  │  ├─ Catamarca
   │     │  │  │  ├─ Cayenne
   │     │  │  │  ├─ Cayman
   │     │  │  │  ├─ Chicago
   │     │  │  │  ├─ Chihuahua
   │     │  │  │  ├─ Ciudad_Juarez
   │     │  │  │  ├─ Coral_Harbour
   │     │  │  │  ├─ Cordoba
   │     │  │  │  ├─ Costa_Rica
   │     │  │  │  ├─ Coyhaique
   │     │  │  │  ├─ Creston
   │     │  │  │  ├─ Cuiaba
   │     │  │  │  ├─ Curacao
   │     │  │  │  ├─ Danmarkshavn
   │     │  │  │  ├─ Dawson
   │     │  │  │  ├─ Dawson_Creek
   │     │  │  │  ├─ Denver
   │     │  │  │  ├─ Detroit
   │     │  │  │  ├─ Dominica
   │     │  │  │  ├─ Edmonton
   │     │  │  │  ├─ Eirunepe
   │     │  │  │  ├─ El_Salvador
   │     │  │  │  ├─ Ensenada
   │     │  │  │  ├─ Fortaleza
   │     │  │  │  ├─ Fort_Nelson
   │     │  │  │  ├─ Fort_Wayne
   │     │  │  │  ├─ Glace_Bay
   │     │  │  │  ├─ Godthab
   │     │  │  │  ├─ Goose_Bay
   │     │  │  │  ├─ Grand_Turk
   │     │  │  │  ├─ Grenada
   │     │  │  │  ├─ Guadeloupe
   │     │  │  │  ├─ Guatemala
   │     │  │  │  ├─ Guayaquil
   │     │  │  │  ├─ Guyana
   │     │  │  │  ├─ Halifax
   │     │  │  │  ├─ Havana
   │     │  │  │  ├─ Hermosillo
   │     │  │  │  ├─ Indiana
   │     │  │  │  │  ├─ Indianapolis
   │     │  │  │  │  ├─ Knox
   │     │  │  │  │  ├─ Marengo
   │     │  │  │  │  ├─ Petersburg
   │     │  │  │  │  ├─ Tell_City
   │     │  │  │  │  ├─ Vevay
   │     │  │  │  │  ├─ Vincennes
   │     │  │  │  │  ├─ Winamac
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ Indianapolis
   │     │  │  │  ├─ Inuvik
   │     │  │  │  ├─ Iqaluit
   │     │  │  │  ├─ Jamaica
   │     │  │  │  ├─ Jujuy
   │     │  │  │  ├─ Juneau
   │     │  │  │  ├─ Kentucky
   │     │  │  │  │  ├─ Louisville
   │     │  │  │  │  ├─ Monticello
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ Knox_IN
   │     │  │  │  ├─ Kralendijk
   │     │  │  │  ├─ La_Paz
   │     │  │  │  ├─ Lima
   │     │  │  │  ├─ Los_Angeles
   │     │  │  │  ├─ Louisville
   │     │  │  │  ├─ Lower_Princes
   │     │  │  │  ├─ Maceio
   │     │  │  │  ├─ Managua
   │     │  │  │  ├─ Manaus
   │     │  │  │  ├─ Marigot
   │     │  │  │  ├─ Martinique
   │     │  │  │  ├─ Matamoros
   │     │  │  │  ├─ Mazatlan
   │     │  │  │  ├─ Mendoza
   │     │  │  │  ├─ Menominee
   │     │  │  │  ├─ Merida
   │     │  │  │  ├─ Metlakatla
   │     │  │  │  ├─ Mexico_City
   │     │  │  │  ├─ Miquelon
   │     │  │  │  ├─ Moncton
   │     │  │  │  ├─ Monterrey
   │     │  │  │  ├─ Montevideo
   │     │  │  │  ├─ Montreal
   │     │  │  │  ├─ Montserrat
   │     │  │  │  ├─ Nassau
   │     │  │  │  ├─ New_York
   │     │  │  │  ├─ Nipigon
   │     │  │  │  ├─ Nome
   │     │  │  │  ├─ Noronha
   │     │  │  │  ├─ North_Dakota
   │     │  │  │  │  ├─ Beulah
   │     │  │  │  │  ├─ Center
   │     │  │  │  │  ├─ New_Salem
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ Nuuk
   │     │  │  │  ├─ Ojinaga
   │     │  │  │  ├─ Panama
   │     │  │  │  ├─ Pangnirtung
   │     │  │  │  ├─ Paramaribo
   │     │  │  │  ├─ Phoenix
   │     │  │  │  ├─ Port-au-Prince
   │     │  │  │  ├─ Porto_Acre
   │     │  │  │  ├─ Porto_Velho
   │     │  │  │  ├─ Port_of_Spain
   │     │  │  │  ├─ Puerto_Rico
   │     │  │  │  ├─ Punta_Arenas
   │     │  │  │  ├─ Rainy_River
   │     │  │  │  ├─ Rankin_Inlet
   │     │  │  │  ├─ Recife
   │     │  │  │  ├─ Regina
   │     │  │  │  ├─ Resolute
   │     │  │  │  ├─ Rio_Branco
   │     │  │  │  ├─ Rosario
   │     │  │  │  ├─ Santarem
   │     │  │  │  ├─ Santa_Isabel
   │     │  │  │  ├─ Santiago
   │     │  │  │  ├─ Santo_Domingo
   │     │  │  │  ├─ Sao_Paulo
   │     │  │  │  ├─ Scoresbysund
   │     │  │  │  ├─ Shiprock
   │     │  │  │  ├─ Sitka
   │     │  │  │  ├─ St_Barthelemy
   │     │  │  │  ├─ St_Johns
   │     │  │  │  ├─ St_Kitts
   │     │  │  │  ├─ St_Lucia
   │     │  │  │  ├─ St_Thomas
   │     │  │  │  ├─ St_Vincent
   │     │  │  │  ├─ Swift_Current
   │     │  │  │  ├─ Tegucigalpa
   │     │  │  │  ├─ Thule
   │     │  │  │  ├─ Thunder_Bay
   │     │  │  │  ├─ Tijuana
   │     │  │  │  ├─ Toronto
   │     │  │  │  ├─ Tortola
   │     │  │  │  ├─ Vancouver
   │     │  │  │  ├─ Virgin
   │     │  │  │  ├─ Whitehorse
   │     │  │  │  ├─ Winnipeg
   │     │  │  │  ├─ Yakutat
   │     │  │  │  ├─ Yellowknife
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Antarctica
   │     │  │  │  ├─ Casey
   │     │  │  │  ├─ Davis
   │     │  │  │  ├─ DumontDUrville
   │     │  │  │  ├─ Macquarie
   │     │  │  │  ├─ Mawson
   │     │  │  │  ├─ McMurdo
   │     │  │  │  ├─ Palmer
   │     │  │  │  ├─ Rothera
   │     │  │  │  ├─ South_Pole
   │     │  │  │  ├─ Syowa
   │     │  │  │  ├─ Troll
   │     │  │  │  ├─ Vostok
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Arctic
   │     │  │  │  ├─ Longyearbyen
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Asia
   │     │  │  │  ├─ Aden
   │     │  │  │  ├─ Almaty
   │     │  │  │  ├─ Amman
   │     │  │  │  ├─ Anadyr
   │     │  │  │  ├─ Aqtau
   │     │  │  │  ├─ Aqtobe
   │     │  │  │  ├─ Ashgabat
   │     │  │  │  ├─ Ashkhabad
   │     │  │  │  ├─ Atyrau
   │     │  │  │  ├─ Baghdad
   │     │  │  │  ├─ Bahrain
   │     │  │  │  ├─ Baku
   │     │  │  │  ├─ Bangkok
   │     │  │  │  ├─ Barnaul
   │     │  │  │  ├─ Beirut
   │     │  │  │  ├─ Bishkek
   │     │  │  │  ├─ Brunei
   │     │  │  │  ├─ Calcutta
   │     │  │  │  ├─ Chita
   │     │  │  │  ├─ Choibalsan
   │     │  │  │  ├─ Chongqing
   │     │  │  │  ├─ Chungking
   │     │  │  │  ├─ Colombo
   │     │  │  │  ├─ Dacca
   │     │  │  │  ├─ Damascus
   │     │  │  │  ├─ Dhaka
   │     │  │  │  ├─ Dili
   │     │  │  │  ├─ Dubai
   │     │  │  │  ├─ Dushanbe
   │     │  │  │  ├─ Famagusta
   │     │  │  │  ├─ Gaza
   │     │  │  │  ├─ Harbin
   │     │  │  │  ├─ Hebron
   │     │  │  │  ├─ Hong_Kong
   │     │  │  │  ├─ Hovd
   │     │  │  │  ├─ Ho_Chi_Minh
   │     │  │  │  ├─ Irkutsk
   │     │  │  │  ├─ Istanbul
   │     │  │  │  ├─ Jakarta
   │     │  │  │  ├─ Jayapura
   │     │  │  │  ├─ Jerusalem
   │     │  │  │  ├─ Kabul
   │     │  │  │  ├─ Kamchatka
   │     │  │  │  ├─ Karachi
   │     │  │  │  ├─ Kashgar
   │     │  │  │  ├─ Kathmandu
   │     │  │  │  ├─ Katmandu
   │     │  │  │  ├─ Khandyga
   │     │  │  │  ├─ Kolkata
   │     │  │  │  ├─ Krasnoyarsk
   │     │  │  │  ├─ Kuala_Lumpur
   │     │  │  │  ├─ Kuching
   │     │  │  │  ├─ Kuwait
   │     │  │  │  ├─ Macao
   │     │  │  │  ├─ Macau
   │     │  │  │  ├─ Magadan
   │     │  │  │  ├─ Makassar
   │     │  │  │  ├─ Manila
   │     │  │  │  ├─ Muscat
   │     │  │  │  ├─ Nicosia
   │     │  │  │  ├─ Novokuznetsk
   │     │  │  │  ├─ Novosibirsk
   │     │  │  │  ├─ Omsk
   │     │  │  │  ├─ Oral
   │     │  │  │  ├─ Phnom_Penh
   │     │  │  │  ├─ Pontianak
   │     │  │  │  ├─ Pyongyang
   │     │  │  │  ├─ Qatar
   │     │  │  │  ├─ Qostanay
   │     │  │  │  ├─ Qyzylorda
   │     │  │  │  ├─ Rangoon
   │     │  │  │  ├─ Riyadh
   │     │  │  │  ├─ Saigon
   │     │  │  │  ├─ Sakhalin
   │     │  │  │  ├─ Samarkand
   │     │  │  │  ├─ Seoul
   │     │  │  │  ├─ Shanghai
   │     │  │  │  ├─ Singapore
   │     │  │  │  ├─ Srednekolymsk
   │     │  │  │  ├─ Taipei
   │     │  │  │  ├─ Tashkent
   │     │  │  │  ├─ Tbilisi
   │     │  │  │  ├─ Tehran
   │     │  │  │  ├─ Tel_Aviv
   │     │  │  │  ├─ Thimbu
   │     │  │  │  ├─ Thimphu
   │     │  │  │  ├─ Tokyo
   │     │  │  │  ├─ Tomsk
   │     │  │  │  ├─ Ujung_Pandang
   │     │  │  │  ├─ Ulaanbaatar
   │     │  │  │  ├─ Ulan_Bator
   │     │  │  │  ├─ Urumqi
   │     │  │  │  ├─ Ust-Nera
   │     │  │  │  ├─ Vientiane
   │     │  │  │  ├─ Vladivostok
   │     │  │  │  ├─ Yakutsk
   │     │  │  │  ├─ Yangon
   │     │  │  │  ├─ Yekaterinburg
   │     │  │  │  ├─ Yerevan
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Atlantic
   │     │  │  │  ├─ Azores
   │     │  │  │  ├─ Bermuda
   │     │  │  │  ├─ Canary
   │     │  │  │  ├─ Cape_Verde
   │     │  │  │  ├─ Faeroe
   │     │  │  │  ├─ Faroe
   │     │  │  │  ├─ Jan_Mayen
   │     │  │  │  ├─ Madeira
   │     │  │  │  ├─ Reykjavik
   │     │  │  │  ├─ South_Georgia
   │     │  │  │  ├─ Stanley
   │     │  │  │  ├─ St_Helena
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Australia
   │     │  │  │  ├─ ACT
   │     │  │  │  ├─ Adelaide
   │     │  │  │  ├─ Brisbane
   │     │  │  │  ├─ Broken_Hill
   │     │  │  │  ├─ Canberra
   │     │  │  │  ├─ Currie
   │     │  │  │  ├─ Darwin
   │     │  │  │  ├─ Eucla
   │     │  │  │  ├─ Hobart
   │     │  │  │  ├─ LHI
   │     │  │  │  ├─ Lindeman
   │     │  │  │  ├─ Lord_Howe
   │     │  │  │  ├─ Melbourne
   │     │  │  │  ├─ North
   │     │  │  │  ├─ NSW
   │     │  │  │  ├─ Perth
   │     │  │  │  ├─ Queensland
   │     │  │  │  ├─ South
   │     │  │  │  ├─ Sydney
   │     │  │  │  ├─ Tasmania
   │     │  │  │  ├─ Victoria
   │     │  │  │  ├─ West
   │     │  │  │  ├─ Yancowinna
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Brazil
   │     │  │  │  ├─ Acre
   │     │  │  │  ├─ DeNoronha
   │     │  │  │  ├─ East
   │     │  │  │  ├─ West
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Canada
   │     │  │  │  ├─ Atlantic
   │     │  │  │  ├─ Central
   │     │  │  │  ├─ Eastern
   │     │  │  │  ├─ Mountain
   │     │  │  │  ├─ Newfoundland
   │     │  │  │  ├─ Pacific
   │     │  │  │  ├─ Saskatchewan
   │     │  │  │  ├─ Yukon
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ CET
   │     │  │  ├─ Chile
   │     │  │  │  ├─ Continental
   │     │  │  │  ├─ EasterIsland
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ CST6CDT
   │     │  │  ├─ Cuba
   │     │  │  ├─ EET
   │     │  │  ├─ Egypt
   │     │  │  ├─ Eire
   │     │  │  ├─ EST
   │     │  │  ├─ EST5EDT
   │     │  │  ├─ Etc
   │     │  │  │  ├─ GMT
   │     │  │  │  ├─ GMT+0
   │     │  │  │  ├─ GMT+1
   │     │  │  │  ├─ GMT+10
   │     │  │  │  ├─ GMT+11
   │     │  │  │  ├─ GMT+12
   │     │  │  │  ├─ GMT+2
   │     │  │  │  ├─ GMT+3
   │     │  │  │  ├─ GMT+4
   │     │  │  │  ├─ GMT+5
   │     │  │  │  ├─ GMT+6
   │     │  │  │  ├─ GMT+7
   │     │  │  │  ├─ GMT+8
   │     │  │  │  ├─ GMT+9
   │     │  │  │  ├─ GMT-0
   │     │  │  │  ├─ GMT-1
   │     │  │  │  ├─ GMT-10
   │     │  │  │  ├─ GMT-11
   │     │  │  │  ├─ GMT-12
   │     │  │  │  ├─ GMT-13
   │     │  │  │  ├─ GMT-14
   │     │  │  │  ├─ GMT-2
   │     │  │  │  ├─ GMT-3
   │     │  │  │  ├─ GMT-4
   │     │  │  │  ├─ GMT-5
   │     │  │  │  ├─ GMT-6
   │     │  │  │  ├─ GMT-7
   │     │  │  │  ├─ GMT-8
   │     │  │  │  ├─ GMT-9
   │     │  │  │  ├─ GMT0
   │     │  │  │  ├─ Greenwich
   │     │  │  │  ├─ UCT
   │     │  │  │  ├─ Universal
   │     │  │  │  ├─ UTC
   │     │  │  │  ├─ Zulu
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Europe
   │     │  │  │  ├─ Amsterdam
   │     │  │  │  ├─ Andorra
   │     │  │  │  ├─ Astrakhan
   │     │  │  │  ├─ Athens
   │     │  │  │  ├─ Belfast
   │     │  │  │  ├─ Belgrade
   │     │  │  │  ├─ Berlin
   │     │  │  │  ├─ Bratislava
   │     │  │  │  ├─ Brussels
   │     │  │  │  ├─ Bucharest
   │     │  │  │  ├─ Budapest
   │     │  │  │  ├─ Busingen
   │     │  │  │  ├─ Chisinau
   │     │  │  │  ├─ Copenhagen
   │     │  │  │  ├─ Dublin
   │     │  │  │  ├─ Gibraltar
   │     │  │  │  ├─ Guernsey
   │     │  │  │  ├─ Helsinki
   │     │  │  │  ├─ Isle_of_Man
   │     │  │  │  ├─ Istanbul
   │     │  │  │  ├─ Jersey
   │     │  │  │  ├─ Kaliningrad
   │     │  │  │  ├─ Kiev
   │     │  │  │  ├─ Kirov
   │     │  │  │  ├─ Kyiv
   │     │  │  │  ├─ Lisbon
   │     │  │  │  ├─ Ljubljana
   │     │  │  │  ├─ London
   │     │  │  │  ├─ Luxembourg
   │     │  │  │  ├─ Madrid
   │     │  │  │  ├─ Malta
   │     │  │  │  ├─ Mariehamn
   │     │  │  │  ├─ Minsk
   │     │  │  │  ├─ Monaco
   │     │  │  │  ├─ Moscow
   │     │  │  │  ├─ Nicosia
   │     │  │  │  ├─ Oslo
   │     │  │  │  ├─ Paris
   │     │  │  │  ├─ Podgorica
   │     │  │  │  ├─ Prague
   │     │  │  │  ├─ Riga
   │     │  │  │  ├─ Rome
   │     │  │  │  ├─ Samara
   │     │  │  │  ├─ San_Marino
   │     │  │  │  ├─ Sarajevo
   │     │  │  │  ├─ Saratov
   │     │  │  │  ├─ Simferopol
   │     │  │  │  ├─ Skopje
   │     │  │  │  ├─ Sofia
   │     │  │  │  ├─ Stockholm
   │     │  │  │  ├─ Tallinn
   │     │  │  │  ├─ Tirane
   │     │  │  │  ├─ Tiraspol
   │     │  │  │  ├─ Ulyanovsk
   │     │  │  │  ├─ Uzhgorod
   │     │  │  │  ├─ Vaduz
   │     │  │  │  ├─ Vatican
   │     │  │  │  ├─ Vienna
   │     │  │  │  ├─ Vilnius
   │     │  │  │  ├─ Volgograd
   │     │  │  │  ├─ Warsaw
   │     │  │  │  ├─ Zagreb
   │     │  │  │  ├─ Zaporozhye
   │     │  │  │  ├─ Zurich
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Factory
   │     │  │  ├─ GB
   │     │  │  ├─ GB-Eire
   │     │  │  ├─ GMT
   │     │  │  ├─ GMT+0
   │     │  │  ├─ GMT-0
   │     │  │  ├─ GMT0
   │     │  │  ├─ Greenwich
   │     │  │  ├─ Hongkong
   │     │  │  ├─ HST
   │     │  │  ├─ Iceland
   │     │  │  ├─ Indian
   │     │  │  │  ├─ Antananarivo
   │     │  │  │  ├─ Chagos
   │     │  │  │  ├─ Christmas
   │     │  │  │  ├─ Cocos
   │     │  │  │  ├─ Comoro
   │     │  │  │  ├─ Kerguelen
   │     │  │  │  ├─ Mahe
   │     │  │  │  ├─ Maldives
   │     │  │  │  ├─ Mauritius
   │     │  │  │  ├─ Mayotte
   │     │  │  │  ├─ Reunion
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Iran
   │     │  │  ├─ iso3166.tab
   │     │  │  ├─ Israel
   │     │  │  ├─ Jamaica
   │     │  │  ├─ Japan
   │     │  │  ├─ Kwajalein
   │     │  │  ├─ leapseconds
   │     │  │  ├─ Libya
   │     │  │  ├─ MET
   │     │  │  ├─ Mexico
   │     │  │  │  ├─ BajaNorte
   │     │  │  │  ├─ BajaSur
   │     │  │  │  ├─ General
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ MST
   │     │  │  ├─ MST7MDT
   │     │  │  ├─ Navajo
   │     │  │  ├─ NZ
   │     │  │  ├─ NZ-CHAT
   │     │  │  ├─ Pacific
   │     │  │  │  ├─ Apia
   │     │  │  │  ├─ Auckland
   │     │  │  │  ├─ Bougainville
   │     │  │  │  ├─ Chatham
   │     │  │  │  ├─ Chuuk
   │     │  │  │  ├─ Easter
   │     │  │  │  ├─ Efate
   │     │  │  │  ├─ Enderbury
   │     │  │  │  ├─ Fakaofo
   │     │  │  │  ├─ Fiji
   │     │  │  │  ├─ Funafuti
   │     │  │  │  ├─ Galapagos
   │     │  │  │  ├─ Gambier
   │     │  │  │  ├─ Guadalcanal
   │     │  │  │  ├─ Guam
   │     │  │  │  ├─ Honolulu
   │     │  │  │  ├─ Johnston
   │     │  │  │  ├─ Kanton
   │     │  │  │  ├─ Kiritimati
   │     │  │  │  ├─ Kosrae
   │     │  │  │  ├─ Kwajalein
   │     │  │  │  ├─ Majuro
   │     │  │  │  ├─ Marquesas
   │     │  │  │  ├─ Midway
   │     │  │  │  ├─ Nauru
   │     │  │  │  ├─ Niue
   │     │  │  │  ├─ Norfolk
   │     │  │  │  ├─ Noumea
   │     │  │  │  ├─ Pago_Pago
   │     │  │  │  ├─ Palau
   │     │  │  │  ├─ Pitcairn
   │     │  │  │  ├─ Pohnpei
   │     │  │  │  ├─ Ponape
   │     │  │  │  ├─ Port_Moresby
   │     │  │  │  ├─ Rarotonga
   │     │  │  │  ├─ Saipan
   │     │  │  │  ├─ Samoa
   │     │  │  │  ├─ Tahiti
   │     │  │  │  ├─ Tarawa
   │     │  │  │  ├─ Tongatapu
   │     │  │  │  ├─ Truk
   │     │  │  │  ├─ Wake
   │     │  │  │  ├─ Wallis
   │     │  │  │  ├─ Yap
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Poland
   │     │  │  ├─ Portugal
   │     │  │  ├─ PRC
   │     │  │  ├─ PST8PDT
   │     │  │  ├─ ROC
   │     │  │  ├─ ROK
   │     │  │  ├─ Singapore
   │     │  │  ├─ Turkey
   │     │  │  ├─ tzdata.zi
   │     │  │  ├─ UCT
   │     │  │  ├─ Universal
   │     │  │  ├─ US
   │     │  │  │  ├─ Alaska
   │     │  │  │  ├─ Aleutian
   │     │  │  │  ├─ Arizona
   │     │  │  │  ├─ Central
   │     │  │  │  ├─ East-Indiana
   │     │  │  │  ├─ Eastern
   │     │  │  │  ├─ Hawaii
   │     │  │  │  ├─ Indiana-Starke
   │     │  │  │  ├─ Michigan
   │     │  │  │  ├─ Mountain
   │     │  │  │  ├─ Pacific
   │     │  │  │  ├─ Samoa
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ UTC
   │     │  │  ├─ W-SU
   │     │  │  ├─ WET
   │     │  │  ├─ zone.tab
   │     │  │  ├─ zone1970.tab
   │     │  │  ├─ zonenow.tab
   │     │  │  ├─ Zulu
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ zones
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ tzdata-2025.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  └─ licenses
   │     │  │     └─ LICENSE_APACHE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ urllib3
   │     │  ├─ connection.py
   │     │  ├─ connectionpool.py
   │     │  ├─ contrib
   │     │  │  ├─ emscripten
   │     │  │  │  ├─ connection.py
   │     │  │  │  ├─ emscripten_fetch_worker.js
   │     │  │  │  ├─ fetch.py
   │     │  │  │  ├─ request.py
   │     │  │  │  ├─ response.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ connection.cpython-313.pyc
   │     │  │  │     ├─ fetch.cpython-313.pyc
   │     │  │  │     ├─ request.cpython-313.pyc
   │     │  │  │     ├─ response.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pyopenssl.py
   │     │  │  ├─ socks.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ pyopenssl.cpython-313.pyc
   │     │  │     ├─ socks.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ exceptions.py
   │     │  ├─ fields.py
   │     │  ├─ filepost.py
   │     │  ├─ http2
   │     │  │  ├─ connection.py
   │     │  │  ├─ probe.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ probe.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ poolmanager.py
   │     │  ├─ py.typed
   │     │  ├─ response.py
   │     │  ├─ util
   │     │  │  ├─ connection.py
   │     │  │  ├─ proxy.py
   │     │  │  ├─ request.py
   │     │  │  ├─ response.py
   │     │  │  ├─ retry.py
   │     │  │  ├─ ssltransport.py
   │     │  │  ├─ ssl_.py
   │     │  │  ├─ ssl_match_hostname.py
   │     │  │  ├─ timeout.py
   │     │  │  ├─ url.py
   │     │  │  ├─ util.py
   │     │  │  ├─ wait.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ proxy.cpython-313.pyc
   │     │  │     ├─ request.cpython-313.pyc
   │     │  │     ├─ response.cpython-313.pyc
   │     │  │     ├─ retry.cpython-313.pyc
   │     │  │     ├─ ssltransport.cpython-313.pyc
   │     │  │     ├─ ssl_.cpython-313.pyc
   │     │  │     ├─ ssl_match_hostname.cpython-313.pyc
   │     │  │     ├─ timeout.cpython-313.pyc
   │     │  │     ├─ url.cpython-313.pyc
   │     │  │     ├─ util.cpython-313.pyc
   │     │  │     ├─ wait.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _base_connection.py
   │     │  ├─ _collections.py
   │     │  ├─ _request_methods.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ connection.cpython-313.pyc
   │     │     ├─ connectionpool.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ fields.cpython-313.pyc
   │     │     ├─ filepost.cpython-313.pyc
   │     │     ├─ poolmanager.cpython-313.pyc
   │     │     ├─ response.cpython-313.pyc
   │     │     ├─ _base_connection.cpython-313.pyc
   │     │     ├─ _collections.cpython-313.pyc
   │     │     ├─ _request_methods.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ urllib3-2.3.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ uvicorn
   │     │  ├─ config.py
   │     │  ├─ importer.py
   │     │  ├─ lifespan
   │     │  │  ├─ off.py
   │     │  │  ├─ on.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ off.cpython-313.pyc
   │     │  │     ├─ on.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ logging.py
   │     │  ├─ loops
   │     │  │  ├─ asyncio.py
   │     │  │  ├─ auto.py
   │     │  │  ├─ uvloop.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asyncio.cpython-313.pyc
   │     │  │     ├─ auto.cpython-313.pyc
   │     │  │     ├─ uvloop.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ main.py
   │     │  ├─ middleware
   │     │  │  ├─ asgi2.py
   │     │  │  ├─ message_logger.py
   │     │  │  ├─ proxy_headers.py
   │     │  │  ├─ wsgi.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asgi2.cpython-313.pyc
   │     │  │     ├─ message_logger.cpython-313.pyc
   │     │  │     ├─ proxy_headers.cpython-313.pyc
   │     │  │     ├─ wsgi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ protocols
   │     │  │  ├─ http
   │     │  │  │  ├─ auto.py
   │     │  │  │  ├─ flow_control.py
   │     │  │  │  ├─ h11_impl.py
   │     │  │  │  ├─ httptools_impl.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ auto.cpython-313.pyc
   │     │  │  │     ├─ flow_control.cpython-313.pyc
   │     │  │  │     ├─ h11_impl.cpython-313.pyc
   │     │  │  │     ├─ httptools_impl.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ utils.py
   │     │  │  ├─ websockets
   │     │  │  │  ├─ auto.py
   │     │  │  │  ├─ websockets_impl.py
   │     │  │  │  ├─ wsproto_impl.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ auto.cpython-313.pyc
   │     │  │  │     ├─ websockets_impl.cpython-313.pyc
   │     │  │  │     ├─ wsproto_impl.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ server.py
   │     │  ├─ supervisors
   │     │  │  ├─ basereload.py
   │     │  │  ├─ multiprocess.py
   │     │  │  ├─ statreload.py
   │     │  │  ├─ watchfilesreload.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ basereload.cpython-313.pyc
   │     │  │     ├─ multiprocess.cpython-313.pyc
   │     │  │     ├─ statreload.cpython-313.pyc
   │     │  │     ├─ watchfilesreload.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ workers.py
   │     │  ├─ _subprocess.py
   │     │  ├─ _types.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ importer.cpython-313.pyc
   │     │     ├─ logging.cpython-313.pyc
   │     │     ├─ main.cpython-313.pyc
   │     │     ├─ server.cpython-313.pyc
   │     │     ├─ workers.cpython-313.pyc
   │     │     ├─ _subprocess.cpython-313.pyc
   │     │     ├─ _types.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ uvicorn-0.34.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ xarray
   │     │  ├─ backends
   │     │  │  ├─ api.py
   │     │  │  ├─ common.py
   │     │  │  ├─ file_manager.py
   │     │  │  ├─ h5netcdf_.py
   │     │  │  ├─ locks.py
   │     │  │  ├─ lru_cache.py
   │     │  │  ├─ memory.py
   │     │  │  ├─ netcdf3.py
   │     │  │  ├─ netCDF4_.py
   │     │  │  ├─ plugins.py
   │     │  │  ├─ pydap_.py
   │     │  │  ├─ scipy_.py
   │     │  │  ├─ store.py
   │     │  │  ├─ zarr.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ common.cpython-313.pyc
   │     │  │     ├─ file_manager.cpython-313.pyc
   │     │  │     ├─ h5netcdf_.cpython-313.pyc
   │     │  │     ├─ locks.cpython-313.pyc
   │     │  │     ├─ lru_cache.cpython-313.pyc
   │     │  │     ├─ memory.cpython-313.pyc
   │     │  │     ├─ netcdf3.cpython-313.pyc
   │     │  │     ├─ netCDF4_.cpython-313.pyc
   │     │  │     ├─ plugins.cpython-313.pyc
   │     │  │     ├─ pydap_.cpython-313.pyc
   │     │  │     ├─ scipy_.cpython-313.pyc
   │     │  │     ├─ store.cpython-313.pyc
   │     │  │     ├─ zarr.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ coders.py
   │     │  ├─ coding
   │     │  │  ├─ calendar_ops.py
   │     │  │  ├─ cftimeindex.py
   │     │  │  ├─ cftime_offsets.py
   │     │  │  ├─ common.py
   │     │  │  ├─ frequencies.py
   │     │  │  ├─ strings.py
   │     │  │  ├─ times.py
   │     │  │  ├─ variables.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ calendar_ops.cpython-313.pyc
   │     │  │     ├─ cftimeindex.cpython-313.pyc
   │     │  │     ├─ cftime_offsets.cpython-313.pyc
   │     │  │     ├─ common.cpython-313.pyc
   │     │  │     ├─ frequencies.cpython-313.pyc
   │     │  │     ├─ strings.cpython-313.pyc
   │     │  │     ├─ times.cpython-313.pyc
   │     │  │     ├─ variables.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ compat
   │     │  │  ├─ array_api_compat.py
   │     │  │  ├─ dask_array_compat.py
   │     │  │  ├─ dask_array_ops.py
   │     │  │  ├─ npcompat.py
   │     │  │  ├─ pdcompat.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ array_api_compat.cpython-313.pyc
   │     │  │     ├─ dask_array_compat.cpython-313.pyc
   │     │  │     ├─ dask_array_ops.cpython-313.pyc
   │     │  │     ├─ npcompat.cpython-313.pyc
   │     │  │     ├─ pdcompat.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ computation
   │     │  │  ├─ apply_ufunc.py
   │     │  │  ├─ arithmetic.py
   │     │  │  ├─ computation.py
   │     │  │  ├─ nanops.py
   │     │  │  ├─ ops.py
   │     │  │  ├─ rolling.py
   │     │  │  ├─ rolling_exp.py
   │     │  │  ├─ weighted.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ apply_ufunc.cpython-313.pyc
   │     │  │     ├─ arithmetic.cpython-313.pyc
   │     │  │     ├─ computation.cpython-313.pyc
   │     │  │     ├─ nanops.cpython-313.pyc
   │     │  │     ├─ ops.cpython-313.pyc
   │     │  │     ├─ rolling.cpython-313.pyc
   │     │  │     ├─ rolling_exp.cpython-313.pyc
   │     │  │     ├─ weighted.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ conventions.py
   │     │  ├─ convert.py
   │     │  ├─ core
   │     │  │  ├─ accessor_dt.py
   │     │  │  ├─ accessor_str.py
   │     │  │  ├─ chunk.py
   │     │  │  ├─ common.py
   │     │  │  ├─ coordinates.py
   │     │  │  ├─ coordinate_transform.py
   │     │  │  ├─ dataarray.py
   │     │  │  ├─ dataset.py
   │     │  │  ├─ dataset_utils.py
   │     │  │  ├─ dataset_variables.py
   │     │  │  ├─ datatree.py
   │     │  │  ├─ datatree_io.py
   │     │  │  ├─ datatree_mapping.py
   │     │  │  ├─ datatree_render.py
   │     │  │  ├─ dtypes.py
   │     │  │  ├─ duck_array_ops.py
   │     │  │  ├─ extensions.py
   │     │  │  ├─ extension_array.py
   │     │  │  ├─ formatting.py
   │     │  │  ├─ formatting_html.py
   │     │  │  ├─ groupby.py
   │     │  │  ├─ indexes.py
   │     │  │  ├─ indexing.py
   │     │  │  ├─ missing.py
   │     │  │  ├─ nputils.py
   │     │  │  ├─ options.py
   │     │  │  ├─ parallel.py
   │     │  │  ├─ resample.py
   │     │  │  ├─ resample_cftime.py
   │     │  │  ├─ treenode.py
   │     │  │  ├─ types.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ variable.py
   │     │  │  ├─ _aggregations.py
   │     │  │  ├─ _typed_ops.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ accessor_dt.cpython-313.pyc
   │     │  │     ├─ accessor_str.cpython-313.pyc
   │     │  │     ├─ chunk.cpython-313.pyc
   │     │  │     ├─ common.cpython-313.pyc
   │     │  │     ├─ coordinates.cpython-313.pyc
   │     │  │     ├─ coordinate_transform.cpython-313.pyc
   │     │  │     ├─ dataarray.cpython-313.pyc
   │     │  │     ├─ dataset.cpython-313.pyc
   │     │  │     ├─ dataset_utils.cpython-313.pyc
   │     │  │     ├─ dataset_variables.cpython-313.pyc
   │     │  │     ├─ datatree.cpython-313.pyc
   │     │  │     ├─ datatree_io.cpython-313.pyc
   │     │  │     ├─ datatree_mapping.cpython-313.pyc
   │     │  │     ├─ datatree_render.cpython-313.pyc
   │     │  │     ├─ dtypes.cpython-313.pyc
   │     │  │     ├─ duck_array_ops.cpython-313.pyc
   │     │  │     ├─ extensions.cpython-313.pyc
   │     │  │     ├─ extension_array.cpython-313.pyc
   │     │  │     ├─ formatting.cpython-313.pyc
   │     │  │     ├─ formatting_html.cpython-313.pyc
   │     │  │     ├─ groupby.cpython-313.pyc
   │     │  │     ├─ indexes.cpython-313.pyc
   │     │  │     ├─ indexing.cpython-313.pyc
   │     │  │     ├─ missing.cpython-313.pyc
   │     │  │     ├─ nputils.cpython-313.pyc
   │     │  │     ├─ options.cpython-313.pyc
   │     │  │     ├─ parallel.cpython-313.pyc
   │     │  │     ├─ resample.cpython-313.pyc
   │     │  │     ├─ resample_cftime.cpython-313.pyc
   │     │  │     ├─ treenode.cpython-313.pyc
   │     │  │     ├─ types.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ variable.cpython-313.pyc
   │     │  │     ├─ _aggregations.cpython-313.pyc
   │     │  │     ├─ _typed_ops.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ groupers.py
   │     │  ├─ indexes
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ namedarray
   │     │  │  ├─ core.py
   │     │  │  ├─ daskmanager.py
   │     │  │  ├─ dtypes.py
   │     │  │  ├─ parallelcompat.py
   │     │  │  ├─ pycompat.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ _aggregations.py
   │     │  │  ├─ _array_api.py
   │     │  │  ├─ _typing.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ daskmanager.cpython-313.pyc
   │     │  │     ├─ dtypes.cpython-313.pyc
   │     │  │     ├─ parallelcompat.cpython-313.pyc
   │     │  │     ├─ pycompat.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ _aggregations.cpython-313.pyc
   │     │  │     ├─ _array_api.cpython-313.pyc
   │     │  │     ├─ _typing.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ plot
   │     │  │  ├─ accessor.py
   │     │  │  ├─ dataarray_plot.py
   │     │  │  ├─ dataset_plot.py
   │     │  │  ├─ facetgrid.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ accessor.cpython-313.pyc
   │     │  │     ├─ dataarray_plot.cpython-313.pyc
   │     │  │     ├─ dataset_plot.cpython-313.pyc
   │     │  │     ├─ facetgrid.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ static
   │     │  │  ├─ css
   │     │  │  │  ├─ style.css
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ html
   │     │  │  │  ├─ icons-svg-inline.html
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ structure
   │     │  │  ├─ alignment.py
   │     │  │  ├─ combine.py
   │     │  │  ├─ concat.py
   │     │  │  ├─ merge.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ alignment.cpython-313.pyc
   │     │  │     ├─ combine.cpython-313.pyc
   │     │  │     ├─ concat.cpython-313.pyc
   │     │  │     ├─ merge.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ testing
   │     │  │  ├─ assertions.py
   │     │  │  ├─ strategies.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ assertions.cpython-313.pyc
   │     │  │     ├─ strategies.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tests
   │     │  │  ├─ arrays.py
   │     │  │  ├─ conftest.py
   │     │  │  ├─ data
   │     │  │  │  ├─ bears.nc
   │     │  │  │  ├─ example.grib
   │     │  │  │  ├─ example.ict
   │     │  │  │  ├─ example.uamiv
   │     │  │  │  ├─ example_1.nc
   │     │  │  │  └─ example_1.nc.gz
   │     │  │  ├─ namespace.py
   │     │  │  ├─ test_accessor_dt.py
   │     │  │  ├─ test_accessor_str.py
   │     │  │  ├─ test_array_api.py
   │     │  │  ├─ test_assertions.py
   │     │  │  ├─ test_backends.py
   │     │  │  ├─ test_backends_api.py
   │     │  │  ├─ test_backends_common.py
   │     │  │  ├─ test_backends_datatree.py
   │     │  │  ├─ test_backends_file_manager.py
   │     │  │  ├─ test_backends_locks.py
   │     │  │  ├─ test_backends_lru_cache.py
   │     │  │  ├─ test_calendar_ops.py
   │     │  │  ├─ test_cftimeindex.py
   │     │  │  ├─ test_cftimeindex_resample.py
   │     │  │  ├─ test_cftime_offsets.py
   │     │  │  ├─ test_coarsen.py
   │     │  │  ├─ test_coding.py
   │     │  │  ├─ test_coding_strings.py
   │     │  │  ├─ test_coding_times.py
   │     │  │  ├─ test_combine.py
   │     │  │  ├─ test_computation.py
   │     │  │  ├─ test_concat.py
   │     │  │  ├─ test_conventions.py
   │     │  │  ├─ test_coordinates.py
   │     │  │  ├─ test_coordinate_transform.py
   │     │  │  ├─ test_cupy.py
   │     │  │  ├─ test_dask.py
   │     │  │  ├─ test_dataarray.py
   │     │  │  ├─ test_dataarray_typing.yml
   │     │  │  ├─ test_dataset.py
   │     │  │  ├─ test_dataset_typing.yml
   │     │  │  ├─ test_datatree.py
   │     │  │  ├─ test_datatree_mapping.py
   │     │  │  ├─ test_datatree_typing.yml
   │     │  │  ├─ test_deprecation_helpers.py
   │     │  │  ├─ test_distributed.py
   │     │  │  ├─ test_dtypes.py
   │     │  │  ├─ test_duck_array_ops.py
   │     │  │  ├─ test_duck_array_wrapping.py
   │     │  │  ├─ test_error_messages.py
   │     │  │  ├─ test_extensions.py
   │     │  │  ├─ test_formatting.py
   │     │  │  ├─ test_formatting_html.py
   │     │  │  ├─ test_groupby.py
   │     │  │  ├─ test_hashable.py
   │     │  │  ├─ test_indexes.py
   │     │  │  ├─ test_indexing.py
   │     │  │  ├─ test_interp.py
   │     │  │  ├─ test_merge.py
   │     │  │  ├─ test_missing.py
   │     │  │  ├─ test_namedarray.py
   │     │  │  ├─ test_nputils.py
   │     │  │  ├─ test_options.py
   │     │  │  ├─ test_parallelcompat.py
   │     │  │  ├─ test_plot.py
   │     │  │  ├─ test_plugins.py
   │     │  │  ├─ test_print_versions.py
   │     │  │  ├─ test_rolling.py
   │     │  │  ├─ test_sparse.py
   │     │  │  ├─ test_strategies.py
   │     │  │  ├─ test_treenode.py
   │     │  │  ├─ test_tutorial.py
   │     │  │  ├─ test_typed_ops.py
   │     │  │  ├─ test_ufuncs.py
   │     │  │  ├─ test_units.py
   │     │  │  ├─ test_utils.py
   │     │  │  ├─ test_variable.py
   │     │  │  ├─ test_weighted.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ arrays.cpython-313.pyc
   │     │  │     ├─ conftest.cpython-313.pyc
   │     │  │     ├─ namespace.cpython-313.pyc
   │     │  │     ├─ test_accessor_dt.cpython-313.pyc
   │     │  │     ├─ test_accessor_str.cpython-313.pyc
   │     │  │     ├─ test_array_api.cpython-313.pyc
   │     │  │     ├─ test_assertions.cpython-313.pyc
   │     │  │     ├─ test_backends.cpython-313.pyc
   │     │  │     ├─ test_backends_api.cpython-313.pyc
   │     │  │     ├─ test_backends_common.cpython-313.pyc
   │     │  │     ├─ test_backends_datatree.cpython-313.pyc
   │     │  │     ├─ test_backends_file_manager.cpython-313.pyc
   │     │  │     ├─ test_backends_locks.cpython-313.pyc
   │     │  │     ├─ test_backends_lru_cache.cpython-313.pyc
   │     │  │     ├─ test_calendar_ops.cpython-313.pyc
   │     │  │     ├─ test_cftimeindex.cpython-313.pyc
   │     │  │     ├─ test_cftimeindex_resample.cpython-313.pyc
   │     │  │     ├─ test_cftime_offsets.cpython-313.pyc
   │     │  │     ├─ test_coarsen.cpython-313.pyc
   │     │  │     ├─ test_coding.cpython-313.pyc
   │     │  │     ├─ test_coding_strings.cpython-313.pyc
   │     │  │     ├─ test_coding_times.cpython-313.pyc
   │     │  │     ├─ test_combine.cpython-313.pyc
   │     │  │     ├─ test_computation.cpython-313.pyc
   │     │  │     ├─ test_concat.cpython-313.pyc
   │     │  │     ├─ test_conventions.cpython-313.pyc
   │     │  │     ├─ test_coordinates.cpython-313.pyc
   │     │  │     ├─ test_coordinate_transform.cpython-313.pyc
   │     │  │     ├─ test_cupy.cpython-313.pyc
   │     │  │     ├─ test_dask.cpython-313.pyc
   │     │  │     ├─ test_dataarray.cpython-313.pyc
   │     │  │     ├─ test_dataset.cpython-313.pyc
   │     │  │     ├─ test_datatree.cpython-313.pyc
   │     │  │     ├─ test_datatree_mapping.cpython-313.pyc
   │     │  │     ├─ test_deprecation_helpers.cpython-313.pyc
   │     │  │     ├─ test_distributed.cpython-313.pyc
   │     │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │     ├─ test_duck_array_ops.cpython-313.pyc
   │     │  │     ├─ test_duck_array_wrapping.cpython-313.pyc
   │     │  │     ├─ test_error_messages.cpython-313.pyc
   │     │  │     ├─ test_extensions.cpython-313.pyc
   │     │  │     ├─ test_formatting.cpython-313.pyc
   │     │  │     ├─ test_formatting_html.cpython-313.pyc
   │     │  │     ├─ test_groupby.cpython-313.pyc
   │     │  │     ├─ test_hashable.cpython-313.pyc
   │     │  │     ├─ test_indexes.cpython-313.pyc
   │     │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │     ├─ test_interp.cpython-313.pyc
   │     │  │     ├─ test_merge.cpython-313.pyc
   │     │  │     ├─ test_missing.cpython-313.pyc
   │     │  │     ├─ test_namedarray.cpython-313.pyc
   │     │  │     ├─ test_nputils.cpython-313.pyc
   │     │  │     ├─ test_options.cpython-313.pyc
   │     │  │     ├─ test_parallelcompat.cpython-313.pyc
   │     │  │     ├─ test_plot.cpython-313.pyc
   │     │  │     ├─ test_plugins.cpython-313.pyc
   │     │  │     ├─ test_print_versions.cpython-313.pyc
   │     │  │     ├─ test_rolling.cpython-313.pyc
   │     │  │     ├─ test_sparse.cpython-313.pyc
   │     │  │     ├─ test_strategies.cpython-313.pyc
   │     │  │     ├─ test_treenode.cpython-313.pyc
   │     │  │     ├─ test_tutorial.cpython-313.pyc
   │     │  │     ├─ test_typed_ops.cpython-313.pyc
   │     │  │     ├─ test_ufuncs.cpython-313.pyc
   │     │  │     ├─ test_units.cpython-313.pyc
   │     │  │     ├─ test_utils.cpython-313.pyc
   │     │  │     ├─ test_variable.cpython-313.pyc
   │     │  │     ├─ test_weighted.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tutorial.py
   │     │  ├─ ufuncs.py
   │     │  ├─ util
   │     │  │  ├─ deprecation_helpers.py
   │     │  │  ├─ generate_aggregations.py
   │     │  │  ├─ generate_ops.py
   │     │  │  ├─ print_versions.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ deprecation_helpers.cpython-313.pyc
   │     │  │     ├─ generate_aggregations.cpython-313.pyc
   │     │  │     ├─ generate_ops.cpython-313.pyc
   │     │  │     ├─ print_versions.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ coders.cpython-313.pyc
   │     │     ├─ conventions.cpython-313.pyc
   │     │     ├─ convert.cpython-313.pyc
   │     │     ├─ groupers.cpython-313.pyc
   │     │     ├─ tutorial.cpython-313.pyc
   │     │     ├─ ufuncs.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ xarray-2025.3.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ xgboost
   │     │  ├─ callback.py
   │     │  ├─ collective.py
   │     │  ├─ compat.py
   │     │  ├─ config.py
   │     │  ├─ core.py
   │     │  ├─ dask
   │     │  │  ├─ data.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ data.py
   │     │  ├─ federated.py
   │     │  ├─ lib
   │     │  │  └─ xgboost.dll
   │     │  ├─ libpath.py
   │     │  ├─ plotting.py
   │     │  ├─ py.typed
   │     │  ├─ sklearn.py
   │     │  ├─ spark
   │     │  │  ├─ core.py
   │     │  │  ├─ data.py
   │     │  │  ├─ estimator.py
   │     │  │  ├─ params.py
   │     │  │  ├─ summary.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ estimator.cpython-313.pyc
   │     │  │     ├─ params.cpython-313.pyc
   │     │  │     ├─ summary.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ testing
   │     │  │  ├─ continuation.py
   │     │  │  ├─ dask.py
   │     │  │  ├─ data.py
   │     │  │  ├─ data_iter.py
   │     │  │  ├─ federated.py
   │     │  │  ├─ metrics.py
   │     │  │  ├─ params.py
   │     │  │  ├─ quantile_dmatrix.py
   │     │  │  ├─ ranking.py
   │     │  │  ├─ shared.py
   │     │  │  ├─ updater.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ continuation.cpython-313.pyc
   │     │  │     ├─ dask.cpython-313.pyc
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ data_iter.cpython-313.pyc
   │     │  │     ├─ federated.cpython-313.pyc
   │     │  │     ├─ metrics.cpython-313.pyc
   │     │  │     ├─ params.cpython-313.pyc
   │     │  │     ├─ quantile_dmatrix.cpython-313.pyc
   │     │  │     ├─ ranking.cpython-313.pyc
   │     │  │     ├─ shared.cpython-313.pyc
   │     │  │     ├─ updater.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tracker.py
   │     │  ├─ training.py
   │     │  ├─ VERSION
   │     │  ├─ _data_utils.py
   │     │  ├─ _typing.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ callback.cpython-313.pyc
   │     │     ├─ collective.cpython-313.pyc
   │     │     ├─ compat.cpython-313.pyc
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ data.cpython-313.pyc
   │     │     ├─ federated.cpython-313.pyc
   │     │     ├─ libpath.cpython-313.pyc
   │     │     ├─ plotting.cpython-313.pyc
   │     │     ├─ sklearn.cpython-313.pyc
   │     │     ├─ tracker.cpython-313.pyc
   │     │     ├─ training.cpython-313.pyc
   │     │     ├─ _data_utils.cpython-313.pyc
   │     │     ├─ _typing.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ xgboost-3.0.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ yaml
   │     │  ├─ composer.py
   │     │  ├─ constructor.py
   │     │  ├─ cyaml.py
   │     │  ├─ dumper.py
   │     │  ├─ emitter.py
   │     │  ├─ error.py
   │     │  ├─ events.py
   │     │  ├─ loader.py
   │     │  ├─ nodes.py
   │     │  ├─ parser.py
   │     │  ├─ reader.py
   │     │  ├─ representer.py
   │     │  ├─ resolver.py
   │     │  ├─ scanner.py
   │     │  ├─ serializer.py
   │     │  ├─ tokens.py
   │     │  ├─ _yaml.cp313-win_amd64.pyd
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ composer.cpython-313.pyc
   │     │     ├─ constructor.cpython-313.pyc
   │     │     ├─ cyaml.cpython-313.pyc
   │     │     ├─ dumper.cpython-313.pyc
   │     │     ├─ emitter.cpython-313.pyc
   │     │     ├─ error.cpython-313.pyc
   │     │     ├─ events.cpython-313.pyc
   │     │     ├─ loader.cpython-313.pyc
   │     │     ├─ nodes.cpython-313.pyc
   │     │     ├─ parser.cpython-313.pyc
   │     │     ├─ reader.cpython-313.pyc
   │     │     ├─ representer.cpython-313.pyc
   │     │     ├─ resolver.cpython-313.pyc
   │     │     ├─ scanner.cpython-313.pyc
   │     │     ├─ serializer.cpython-313.pyc
   │     │     ├─ tokens.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ zict
   │     │  ├─ async_buffer.py
   │     │  ├─ buffer.py
   │     │  ├─ cache.py
   │     │  ├─ common.py
   │     │  ├─ file.py
   │     │  ├─ func.py
   │     │  ├─ lmdb.py
   │     │  ├─ lru.py
   │     │  ├─ py.typed
   │     │  ├─ sieve.py
   │     │  ├─ tests
   │     │  │  ├─ conftest.py
   │     │  │  ├─ test_async_buffer.py
   │     │  │  ├─ test_buffer.py
   │     │  │  ├─ test_cache.py
   │     │  │  ├─ test_common.py
   │     │  │  ├─ test_file.py
   │     │  │  ├─ test_func.py
   │     │  │  ├─ test_lmdb.py
   │     │  │  ├─ test_lru.py
   │     │  │  ├─ test_sieve.py
   │     │  │  ├─ test_utils.py
   │     │  │  ├─ test_zip.py
   │     │  │  ├─ utils_test.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ conftest.cpython-313.pyc
   │     │  │     ├─ test_async_buffer.cpython-313.pyc
   │     │  │     ├─ test_buffer.cpython-313.pyc
   │     │  │     ├─ test_cache.cpython-313.pyc
   │     │  │     ├─ test_common.cpython-313.pyc
   │     │  │     ├─ test_file.cpython-313.pyc
   │     │  │     ├─ test_func.cpython-313.pyc
   │     │  │     ├─ test_lmdb.cpython-313.pyc
   │     │  │     ├─ test_lru.cpython-313.pyc
   │     │  │     ├─ test_sieve.cpython-313.pyc
   │     │  │     ├─ test_utils.cpython-313.pyc
   │     │  │     ├─ test_zip.cpython-313.pyc
   │     │  │     ├─ utils_test.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ utils.py
   │     │  ├─ zip.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ async_buffer.cpython-313.pyc
   │     │     ├─ buffer.cpython-313.pyc
   │     │     ├─ cache.cpython-313.pyc
   │     │     ├─ common.cpython-313.pyc
   │     │     ├─ file.cpython-313.pyc
   │     │     ├─ func.cpython-313.pyc
   │     │     ├─ lmdb.cpython-313.pyc
   │     │     ├─ lru.cpython-313.pyc
   │     │     ├─ sieve.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ zip.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ zict-3.0.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ _yaml
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     └─ __init__.cpython-313.pyc
   │     └─ __pycache__
   │        ├─ pylab.cpython-313.pyc
   │        ├─ six.cpython-313.pyc
   │        ├─ threadpoolctl.cpython-313.pyc
   │        └─ typing_extensions.cpython-313.pyc
   ├─ pyvenv.cfg
   ├─ Scripts
   │  ├─ activate
   │  ├─ activate.bat
   │  ├─ activate.fish
   │  ├─ Activate.ps1
   │  ├─ dask-scheduler.exe
   │  ├─ dask-ssh.exe
   │  ├─ dask-worker.exe
   │  ├─ dask.exe
   │  ├─ deactivate.bat
   │  ├─ f2py.exe
   │  ├─ fastapi.exe
   │  ├─ fonttools.exe
   │  ├─ normalizer.exe
   │  ├─ numpy-config.exe
   │  ├─ pip.exe
   │  ├─ pip3.13.exe
   │  ├─ pip3.exe
   │  ├─ pyftmerge.exe
   │  ├─ pyftsubset.exe
   │  ├─ python.exe
   │  ├─ pythonw.exe
   │  ├─ ttx.exe
   │  └─ uvicorn.exe
   └─ share
      └─ man
         └─ man1
            └─ ttx.1

```