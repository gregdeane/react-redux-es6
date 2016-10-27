import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import ButtonInput from '../common/ButtonInput';

const CourseForm = ({ course, authors, onSave, onChange, loading, errors }) => {
  return(
    <div>
      <h1>Manage Course</h1>
      <form>
        <TextInput name="title"
                   label="Title"
                   value={course.title}
                   onChange={onChange}
                   errors={errors.title} />

        <SelectInput name="authorId"
                     label="Author"
                     value={course.authorId}
                     defaultOption="Select Author"
                     options={authors}
                     onChange={onChange}
                     error={errors.authorId} />

        <TextInput name="category"
                   label="Category"
                   value={course.category}
                   onChange={onChange}
                   errors={errors.category} />

        <TextInput name="length"
                   label="Length"
                   value={course.length}
                   onChange={onChange}
                   errors={errors.length} />

        <ButtonInput type="submit"
                     disabled={loading}
                     label={(loading && 'Saving...') || 'Save'}
                     onClick={onSave} />
      </form>
    </div>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
