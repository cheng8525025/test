<template>
	<div class="page-component">
		<section class="content element-doc content">
			<h2 id="button-an-niu"><a href="https://element.eleme.cn/#/zh-CN/component/button#button-an-niu" aria-hidden="true"
				 class="header-anchor">¶</a> Button 按钮</h2>
			<p>常用的操作按钮。</p>
			<h3 id="ji-chu-yong-fa"><a href="https://element.eleme.cn/#/zh-CN/component/button#ji-chu-yong-fa" aria-hidden="true"
				 class="header-anchor">¶</a> 基础用法</h3>
			<p>基础的按钮用法。</p>
			<div class="demo-block demo-zh-CN demo-button">
				<div class="source">
					<div>
						<div class="el-row"><button type="button" class="el-button el-button--default">
								<!---->
								<!----><span>默认按钮</span></button> <button type="button" class="el-button el-button--primary">
								<!---->
								<!----><span>主要按钮</span></button> <button type="button" class="el-button el-button--success">
								<!---->
								<!----><span>成功按钮</span></button> <button type="button" class="el-button el-button--info">
								<!---->
								<!----><span>信息按钮</span></button> <button type="button" class="el-button el-button--warning">
								<!---->
								<!----><span>警告按钮</span></button> <button type="button" class="el-button el-button--danger">
								<!---->
								<!----><span>危险按钮</span></button></div>
						<div class="el-row"><button type="button" class="el-button el-button--default is-plain">
								<!---->
								<!----><span>朴素按钮</span></button> <button type="button" class="el-button el-button--primary is-plain">
								<!---->
								<!----><span>主要按钮</span></button> <button type="button" class="el-button el-button--success is-plain">
								<!---->
								<!----><span>成功按钮</span></button> <button type="button" class="el-button el-button--info is-plain">
								<!---->
								<!----><span>信息按钮</span></button> <button type="button" class="el-button el-button--warning is-plain">
								<!---->
								<!----><span>警告按钮</span></button> <button type="button" class="el-button el-button--danger is-plain">
								<!---->
								<!----><span>危险按钮</span></button></div>
						<div class="el-row"><button type="button" class="el-button el-button--default is-round">
								<!---->
								<!----><span>圆角按钮</span></button> <button type="button" class="el-button el-button--primary is-round">
								<!---->
								<!----><span>主要按钮</span></button> <button type="button" class="el-button el-button--success is-round">
								<!---->
								<!----><span>成功按钮</span></button> <button type="button" class="el-button el-button--info is-round">
								<!---->
								<!----><span>信息按钮</span></button> <button type="button" class="el-button el-button--warning is-round">
								<!---->
								<!----><span>警告按钮</span></button> <button type="button" class="el-button el-button--danger is-round">
								<!---->
								<!----><span>危险按钮</span></button></div>
						<div class="el-row"><button type="button" class="el-button el-button--default is-circle">
								<!----><i class="el-icon-search"></i>
								<!----></button> <button type="button" class="el-button el-button--primary is-circle">
								<!----><i class="el-icon-edit"></i>
								<!----></button> <button type="button" class="el-button el-button--success is-circle">
								<!----><i class="el-icon-check"></i>
								<!----></button> <button type="button" class="el-button el-button--info is-circle">
								<!----><i class="el-icon-message"></i>
								<!----></button> <button type="button" class="el-button el-button--warning is-circle">
								<!----><i class="el-icon-star-off"></i>
								<!----></button> <button type="button" class="el-button el-button--danger is-circle">
								<!----><i class="el-icon-delete"></i>
								<!----></button></div>
					</div>
				</div>
				<div class="meta">
					<div class="description">
						<div>
							<p>使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</p>
						</div>
					</div>
					<div class="highlight">
						<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">plain</span>&gt;</span>朴素按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">plain</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">plain</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">plain</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">plain</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">plain</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">round</span>&gt;</span>圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">round</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">round</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">round</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">round</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">round</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-search"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-edit"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-check"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-message"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-star-off"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-delete"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	</code></pre>
					</div>
				</div>
				<div class="demo-block-control"><i class="el-icon-caret-bottom"></i><span style="display: none;">显示代码</span><button
					 type="button" class="el-button control-button el-tooltip el-button--text el-button--small" aria-describedby="el-tooltip-2338"
					 tabindex="0" style="display: none;">
						<!---->
						<!----><span>
							在线运行
						</span></button></div>
			</div>
			<h3 id="jin-yong-zhuang-tai"><a href="https://element.eleme.cn/#/zh-CN/component/button#jin-yong-zhuang-tai"
				 aria-hidden="true" class="header-anchor">¶</a> 禁用状态</h3>
			<p>按钮不可用状态。</p>
			<div class="demo-block demo-zh-CN demo-button">
				<div class="source">
					<div>
						<div class="el-row"><button disabled="disabled" type="button" class="el-button el-button--default is-disabled">
								<!---->
								<!----><span>默认按钮</span></button> <button disabled="disabled" type="button" class="el-button el-button--primary is-disabled">
								<!---->
								<!----><span>主要按钮</span></button> <button disabled="disabled" type="button" class="el-button el-button--success is-disabled">
								<!---->
								<!----><span>成功按钮</span></button> <button disabled="disabled" type="button" class="el-button el-button--info is-disabled">
								<!---->
								<!----><span>信息按钮</span></button> <button disabled="disabled" type="button" class="el-button el-button--warning is-disabled">
								<!---->
								<!----><span>警告按钮</span></button> <button disabled="disabled" type="button" class="el-button el-button--danger is-disabled">
								<!---->
								<!----><span>危险按钮</span></button></div>
						<div class="el-row"><button disabled="disabled" type="button" class="el-button el-button--default is-disabled is-plain">
								<!---->
								<!----><span>朴素按钮</span></button> <button disabled="disabled" type="button" class="el-button el-button--primary is-disabled is-plain">
								<!---->
								<!----><span>主要按钮</span></button> <button disabled="disabled" type="button" class="el-button el-button--success is-disabled is-plain">
								<!---->
								<!----><span>成功按钮</span></button> <button disabled="disabled" type="button" class="el-button el-button--info is-disabled is-plain">
								<!---->
								<!----><span>信息按钮</span></button> <button disabled="disabled" type="button" class="el-button el-button--warning is-disabled is-plain">
								<!---->
								<!----><span>警告按钮</span></button> <button disabled="disabled" type="button" class="el-button el-button--danger is-disabled is-plain">
								<!---->
								<!----><span>危险按钮</span></button></div>
					</div>
				</div>
				<div class="meta">
					<div class="description">
						<div>
							<p>你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。</p>
						</div>
					</div>
					<div class="highlight">
						<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">disabled</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">disabled</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">disabled</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">disabled</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">disabled</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">disabled</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>朴素按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	</code></pre>
					</div>
				</div>
				<div class="demo-block-control"><i class="el-icon-caret-bottom"></i><span style="display: none;">显示代码</span><button
					 type="button" class="el-button control-button el-tooltip el-button--text el-button--small" aria-describedby="el-tooltip-9729"
					 tabindex="0" style="display: none;">
						<!---->
						<!----><span>
							在线运行
						</span></button></div>
			</div>
			<h3 id="wen-zi-an-niu"><a href="https://element.eleme.cn/#/zh-CN/component/button#wen-zi-an-niu" aria-hidden="true"
				 class="header-anchor">¶</a> 文字按钮</h3>
			<p>没有边框和背景色的按钮。</p>
			<div class="demo-block demo-zh-CN demo-button">
				<div class="source">
					<div><button type="button" class="el-button el-button--text">
							<!---->
							<!----><span>文字按钮</span></button> <button disabled="disabled" type="button" class="el-button el-button--text is-disabled">
							<!---->
							<!----><span>文字按钮</span></button></div>
				</div>
				<div class="meta">
					<!---->
					<div class="highlight" style="width: 100%;">
						<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">disabled</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	</code></pre>
					</div>
				</div>
				<div class="demo-block-control"><i class="el-icon-caret-bottom"></i><span style="display: none;">显示代码</span><button
					 type="button" class="el-button control-button el-tooltip el-button--text el-button--small" aria-describedby="el-tooltip-6566"
					 tabindex="0" style="display: none;">
						<!---->
						<!----><span>
							在线运行
						</span></button></div>
			</div>
			<h3 id="tu-biao-an-niu"><a href="https://element.eleme.cn/#/zh-CN/component/button#tu-biao-an-niu" aria-hidden="true"
				 class="header-anchor">¶</a> 图标按钮</h3>
			<p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
			<div class="demo-block demo-zh-CN demo-button">
				<div class="source">
					<div><button type="button" class="el-button el-button--primary">
							<!----><i class="el-icon-edit"></i>
							<!----></button> <button type="button" class="el-button el-button--primary">
							<!----><i class="el-icon-share"></i>
							<!----></button> <button type="button" class="el-button el-button--primary">
							<!----><i class="el-icon-delete"></i>
							<!----></button> <button type="button" class="el-button el-button--primary">
							<!----><i class="el-icon-search"></i><span>搜索</span></button> <button type="button" class="el-button el-button--primary">
							<!---->
							<!----><span>上传<i class="el-icon-upload el-icon--right"></i></span></button></div>
				</div>
				<div class="meta">
					<div class="description">
						<div>
							<p>设置<code>icon</code>属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用<code>i</code>标签即可，可以使用自定义图标。</p>
						</div>
					</div>
					<div class="highlight">
						<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-edit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-share"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-delete"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-search"</span>&gt;</span>搜索<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>上传<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-upload el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	</code></pre>
					</div>
				</div>
				<div class="demo-block-control"><i class="el-icon-caret-bottom"></i><span style="display: none;">显示代码</span><button
					 type="button" class="el-button control-button el-tooltip el-button--text el-button--small" aria-describedby="el-tooltip-1397"
					 tabindex="0" style="display: none;">
						<!---->
						<!----><span>
							在线运行
						</span></button></div>
			</div>
			<h3 id="an-niu-zu"><a href="https://element.eleme.cn/#/zh-CN/component/button#an-niu-zu" aria-hidden="true" class="header-anchor">¶</a>
				按钮组</h3>
			<p>以按钮组的方式出现，常用于多项类似操作。</p>
			<div class="demo-block demo-zh-CN demo-button">
				<div class="source">
					<div>
						<div class="el-button-group"><button type="button" class="el-button el-button--primary">
								<!----><i class="el-icon-arrow-left"></i><span>上一页</span></button> <button type="button" class="el-button el-button--primary">
								<!---->
								<!----><span>下一页<i class="el-icon-arrow-right el-icon--right"></i></span></button></div>
						<div class="el-button-group"><button type="button" class="el-button el-button--primary">
								<!----><i class="el-icon-edit"></i>
								<!----></button> <button type="button" class="el-button el-button--primary">
								<!----><i class="el-icon-share"></i>
								<!----></button> <button type="button" class="el-button el-button--primary">
								<!----><i class="el-icon-delete"></i>
								<!----></button></div>
					</div>
				</div>
				<div class="meta">
					<div class="description">
						<div>
							<p>使用<code>&lt;el-button-group&gt;</code>标签来嵌套你的按钮。</p>
						</div>
					</div>
					<div class="highlight">
						<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-button-group</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-arrow-left"</span>&gt;</span>上一页<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>下一页<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-arrow-right el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-button-group</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button-group</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-edit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-share"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-delete"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-button-group</span>&gt;</span>
	</code></pre>
					</div>
				</div>
				<div class="demo-block-control"><i class="el-icon-caret-bottom"></i><span style="display: none;">显示代码</span><button
					 type="button" class="el-button control-button el-tooltip el-button--text el-button--small" aria-describedby="el-tooltip-2964"
					 tabindex="0" style="display: none;">
						<!---->
						<!----><span>
							在线运行
						</span></button></div>
			</div>
			<h3 id="jia-zai-zhong"><a href="https://element.eleme.cn/#/zh-CN/component/button#jia-zai-zhong" aria-hidden="true"
				 class="header-anchor">¶</a> 加载中</h3>
			<p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
			<div class="demo-block demo-zh-CN demo-button">
				<div class="source">
					<div><button disabled="disabled" type="button" class="el-button el-button--primary is-loading"><i class="el-icon-loading"></i>
							<!----><span>加载中</span></button></div>
				</div>
				<div class="meta">
					<div class="description">
						<div>
							<p>要设置为 loading 状态，只要设置<code>loading</code>属性为<code>true</code>即可。</p>
						</div>
					</div>
					<div class="highlight">
						<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">"true"</span>&gt;</span>加载中<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	</code></pre>
					</div>
				</div>
				<div class="demo-block-control"><i class="el-icon-caret-bottom"></i><span style="display: none;">显示代码</span><button
					 type="button" class="el-button control-button el-tooltip el-button--text el-button--small" aria-describedby="el-tooltip-4847"
					 tabindex="0" style="display: none;">
						<!---->
						<!----><span>
							在线运行
						</span></button></div>
			</div>
			<h3 id="bu-tong-chi-cun"><a href="https://element.eleme.cn/#/zh-CN/component/button#bu-tong-chi-cun" aria-hidden="true"
				 class="header-anchor">¶</a> 不同尺寸</h3>
			<p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
			<div class="demo-block demo-zh-CN demo-button">
				<div class="source">
					<div>
						<div class="el-row"><button type="button" class="el-button el-button--default">
								<!---->
								<!----><span>默认按钮</span></button> <button type="button" class="el-button el-button--default el-button--medium">
								<!---->
								<!----><span>中等按钮</span></button> <button type="button" class="el-button el-button--default el-button--small">
								<!---->
								<!----><span>小型按钮</span></button> <button type="button" class="el-button el-button--default el-button--mini">
								<!---->
								<!----><span>超小按钮</span></button></div>
						<div class="el-row"><button type="button" class="el-button el-button--default is-round">
								<!---->
								<!----><span>默认按钮</span></button> <button type="button" class="el-button el-button--default el-button--medium is-round">
								<!---->
								<!----><span>中等按钮</span></button> <button type="button" class="el-button el-button--default el-button--small is-round">
								<!---->
								<!----><span>小型按钮</span></button> <button type="button" class="el-button el-button--default el-button--mini is-round">
								<!---->
								<!----><span>超小按钮</span></button></div>
					</div>
				</div>
				<div class="meta">
					<div class="description">
						<div>
							<p>额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p>
						</div>
					</div>
					<div class="highlight">
						<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span>中等按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>小型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span>&gt;</span>超小按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">round</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span> <span class="hljs-attr">round</span>&gt;</span>中等按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">round</span>&gt;</span>小型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">round</span>&gt;</span>超小按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	</code></pre>
					</div>
				</div>
				<div class="demo-block-control"><i class="el-icon-caret-bottom"></i><span style="display: none;">显示代码</span><button
					 type="button" class="el-button control-button el-tooltip el-button--text el-button--small" aria-describedby="el-tooltip-1250"
					 tabindex="0" style="display: none;">
						<!---->
						<!----><span>
							在线运行
						</span></button></div>
			</div>
			<h3 id="attributes"><a href="https://element.eleme.cn/#/zh-CN/component/button#attributes" aria-hidden="true" class="header-anchor">¶</a>
				Attributes</h3>
			<table>
				<thead>
					<tr>
						<th>参数</th>
						<th>说明</th>
						<th>类型</th>
						<th>可选值</th>
						<th>默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>size</td>
						<td>尺寸</td>
						<td>string</td>
						<td>medium / small / mini</td>
						<td>—</td>
					</tr>
					<tr>
						<td>type</td>
						<td>类型</td>
						<td>string</td>
						<td>primary / success / warning / danger / info / text</td>
						<td>—</td>
					</tr>
					<tr>
						<td>plain</td>
						<td>是否朴素按钮</td>
						<td>boolean</td>
						<td>—</td>
						<td>false</td>
					</tr>
					<tr>
						<td>round</td>
						<td>是否圆角按钮</td>
						<td>boolean</td>
						<td>—</td>
						<td>false</td>
					</tr>
					<tr>
						<td>circle</td>
						<td>是否圆形按钮</td>
						<td>boolean</td>
						<td>—</td>
						<td>false</td>
					</tr>
					<tr>
						<td>loading</td>
						<td>是否加载中状态</td>
						<td>boolean</td>
						<td>—</td>
						<td>false</td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否禁用状态</td>
						<td>boolean</td>
						<td>—</td>
						<td>false</td>
					</tr>
					<tr>
						<td>icon</td>
						<td>图标类名</td>
						<td>string</td>
						<td>—</td>
						<td>—</td>
					</tr>
					<tr>
						<td>autofocus</td>
						<td>是否默认聚焦</td>
						<td>boolean</td>
						<td>—</td>
						<td>false</td>
					</tr>
					<tr>
						<td>native-type</td>
						<td>原生 type 属性</td>
						<td>string</td>
						<td>button / submit / reset</td>
						<td>button</td>
					</tr>
				</tbody>
			</table>
		</section>
	</div>
</template>

<script>
	import util from './util.js'
	export default {
		mixins:[util]
	}
</script>

<style lang='less' scoped>
	@import url("./ele.less");
</style>
