## Input



* Input

```vue
<input
       :tabindex="tabindex"
       v-if="type !== 'textarea'"
       class="el-input__inner"
       v-bind="$attrs"
       :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
       :disabled="inputDisabled"
       :readonly="readonly"
       :autocomplete="autoComplete || autocomplete"
       ref="input"
       @compositionstart="handleCompositionStart"
       @compositionupdate="handleCompositionUpdate"
       @compositionend="handleCompositionEnd"
       @input="handleInput"
       @focus="handleFocus"
       @blur="handleBlur"
       @change="handleChange"
       :aria-label="label"
      >
```

* textarea

```vue
<textarea
      v-else
      :tabindex="tabindex"
      class="el-textarea__inner"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      ref="textarea"
      v-bind="$attrs"
      :disabled="inputDisabled"
      :readonly="readonly"
      :autocomplete="autoComplete || autocomplete"
      :style="textareaStyle"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :aria-label="label"
    >
    </textarea>
```

